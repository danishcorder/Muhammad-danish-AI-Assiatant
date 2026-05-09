/* ============================================================= */
/* MUHAMMAD DANISH AI - PORTFOLIO ASSISTANT                      */
/* ============================================================= */

const portfolioData = {
    name: "Muhammad Danish",
    email: "muhaammaddanish2327@gmail.com",
    phone: "+92 326 7370173",
    location: "Khanewal, Pakistan",
    portfolio: "https://muhammaddanish-sage.vercel.app/",
    github: "https://github.com/danishcorder",
    cv: "Muhammaddanish.CV.pdf",
    skills: [
        { name: "Python", description: "Proficient in Python for data analysis, automation, and web development." },
        { name: "Data Analysis", description: "Skilled in analyzing datasets and generating actionable insights." },
        { name: "Web Development", description: "Building responsive websites with HTML, CSS, JavaScript." },
        { name: "MySQL", description: "Experienced in database management and queries." },
        { name: "AI Fundamentals", description: "Understanding of AI concepts and chatbot development." }
    ],
    projects: [
        { name: "Portfolio Website", description: "Personal portfolio on Vercel.", live: "https://muhammaddanish-sage.vercel.app/", github: "https://github.com/danishcorder" },
        { name: "DB Management", description: "Web-based CRUD operations.", live: "https://danishcorder.github.io/DatabaseManagment/index.html", github: "https://github.com/danishcorder/DatabaseManagment" },
        { name: "Top 2025 Site", description: "Modern front-end techniques.", live: "https://danishcorder.github.io/Top-2025-level-site/", github: "https://github.com/danishcorder/Top-2025-level-site/" },
        { name: "Data Dashboard", description: "Visualizing and analyzing datasets.", live: "https://danishcorder.github.io/DatadashBoard2/", github: "https://github.com/danishcorder/DatadashBoard2/" }
    ],
    education: [
        { degree: "BS Mathematics", institution: "BZU, Multan", year: "2023 – Present" },
        { degree: "Intermediate (ICS)", institution: "PGC, Kabirwala", year: "2021 – 2023", marks: "82%" },
        { degree: "Matriculation", institution: "Khanewal", year: "2019 – 2021", marks: "98%" }
    ],
    certifications: [
        { name: "Freelancing Course", issuer: "DigiSkills", year: "2024" },
        { name: "MS Excel", issuer: "DigiSkills", year: "2023-2024" },
        { name: "Python Programming", issuer: "DigiSkills", year: "2024-2025" }
    ]
};

const DOM = {
    loadingScreen: document.getElementById('loadingScreen'),
    cursorGlow: document.getElementById('cursorGlow'),
    bgCanvas: document.getElementById('bgCanvas'),
    themeToggle: document.getElementById('themeToggle'),
    typingEffect: document.getElementById('typingEffect'),
    chatMessages: document.getElementById('chatMessages'),
    userInput: document.getElementById('userInput'),
    sendBtn: document.getElementById('sendBtn'),
    clearChatBtn: document.getElementById('clearChatBtn'),
    voiceInputBtn: document.getElementById('voiceInputBtn'),
    voiceVisualizer: document.getElementById('voiceVisualizer'),
    thinkingOverlay: document.getElementById('thinkingOverlay'),
    quickChips: document.querySelectorAll('.quick-chip'),
    mathInput: document.getElementById('mathInput'),
    solveBtn: document.getElementById('solveBtn'),
    clearMathBtn: document.getElementById('clearMathBtn'),
    mathOutput: document.getElementById('mathOutput'),
    graphCanvas: document.getElementById('graphCanvas'),
    mathSteps: document.getElementById('mathSteps'),
    outputTabs: document.querySelectorAll('.output-tab'),
    exampleChips: document.querySelectorAll('.example-chip'),
    latencyDisplay: document.getElementById('latencyDisplay'),
    statNumbers: document.querySelectorAll('.stat-number'),
};

let chatHistory = [];
let sessionStartTime = Date.now();
let latestMathResult = null;

function switchTab(tabId) {
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tabId));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === `tab-${tabId}`));
}

function initTabSwitching() {
    document.querySelectorAll('.nav-tab').forEach(tab => tab.addEventListener('click', () => switchTab(tab.dataset.tab)));
    document.querySelectorAll('.tab-trigger').forEach(t => t.addEventListener('click', () => { if (t.dataset.tab) switchTab(t.dataset.tab); }));
}

const MathEngine = {
    solveQuadratic(a, b, c) {
        const d = b * b - 4 * a * c;
        if (d < 0) {
            const real = (-b / (2 * a)).toFixed(4);
            const imag = (Math.sqrt(Math.abs(d)) / (2 * a)).toFixed(4);
            return { roots: [`${real} + ${imag}i`, `${real} - ${imag}i`], discriminant: d.toFixed(4), steps: [`Equation: ${a}x² + ${b}x + ${c} = 0`, `Δ = ${d.toFixed(4)}`, `Δ < 0 → Complex roots`, `x₁ = ${real} + ${imag}i`, `x₂ = ${real} - ${imag}i`] };
        }
        const sd = Math.sqrt(d);
        return { roots: [((-b + sd) / (2 * a)).toFixed(4), ((-b - sd) / (2 * a)).toFixed(4)], discriminant: d.toFixed(4), steps: [`Equation: ${a}x² + ${b}x + ${c} = 0`, `Δ = ${d.toFixed(4)}`, `√Δ = ${sd.toFixed(4)}`, `x₁ = ${((-b + sd) / (2 * a)).toFixed(4)}`, `x₂ = ${((-b - sd) / (2 * a)).toFixed(4)}`] };
    },
    derivative(e) {
        const expr = e.toLowerCase().replace(/\s+/g, '');
        if (expr.includes('sin(')) return { result: 'cos(x)', steps: ['d/dx sin(x) = cos(x)'] };
        if (expr.includes('cos(')) return { result: '-sin(x)', steps: ['d/dx cos(x) = -sin(x)'] };
        if (expr.includes('tan(')) return { result: 'sec²(x)', steps: ['d/dx tan(x) = sec²(x)'] };
        const m = expr.match(/x\^(\d+)/);
        if (m) { const n = parseInt(m[1]); return { result: `${n}x^${n-1}`, steps: [`d/dx x^${n} = ${n}x^${n-1}`] }; }
        if (expr === 'x') return { result: '1', steps: ['d/dx x = 1'] };
        if (/^\d+$/.test(expr)) return { result: '0', steps: [`d/dx ${expr} = 0`] };
        return { result: 'Unable to compute', steps: ['Complex expression'] };
    },
    integral(e) {
        const expr = e.toLowerCase().replace(/\s+/g, '');
        if (expr.includes('sin(')) return { result: '-cos(x) + C', steps: ['∫ sin(x) dx = -cos(x) + C'] };
        if (expr.includes('cos(')) return { result: 'sin(x) + C', steps: ['∫ cos(x) dx = sin(x) + C'] };
        const m = expr.match(/x\^(\d+)/);
        if (m) { const n = parseInt(m[1]); return { result: `x^${n+1}/${n+1} + C`, steps: [`∫ x^${n} dx = x^${n+1}/${n+1} + C`] }; }
        if (expr === 'x') return { result: 'x²/2 + C', steps: ['∫ x dx = x²/2 + C'] };
        if (expr === '1' || expr === 'dx') return { result: 'x + C', steps: ['∫ 1 dx = x + C'] };
        return { result: 'Unable to compute', steps: ['Complex expression'] };
    },
    factor(expr) {
        const e = expr.replace(/\s+/g, '');
        const m = e.match(/x\^2\s*([+-]?\s*\d+)?x\s*([+-]?\s*\d+)?/);
        if (m) {
            const b = m[1] ? parseInt(m[1].replace(/\s+/g, '')) : 0;
            const c = m[2] ? parseInt(m[2].replace(/\s+/g, '')) : 0;
            for (let i = -Math.abs(c); i <= Math.abs(c); i++) {
                if (i === 0) continue;
                const j = c / i;
                if (i + j === b && Number.isInteger(j)) return { result: `(x ${i >= 0 ? '+' : '-'} ${Math.abs(i)})(x ${j >= 0 ? '+' : '-'} ${Math.abs(j)})`, steps: [`Factors of ${c} summing to ${b}: ${i} × ${j} = ${c}`, `Roots: x = ${-i}, x = ${-j}`] };
            }
            return { result: 'Cannot factor with integers', steps: ['No integer factors found'] };
        }
        return { result: 'Format: factor x^2 + bx + c', steps: [] };
    },
    plotFunction(f, xMin, xMax) {
        const points = [];
        const step = (xMax - xMin) / 200;
        for (let x = xMin; x <= xMax; x += step) {
            try { const y = this.evalExpr(f, x); points.push({ x: x, y: isFinite(y) && y > -100 && y < 100 ? y : null }); }
            catch { points.push({ x: x, y: null }); }
        }
        return points;
    },
    evalExpr(expr, x) {
        let f = expr.toLowerCase().replace(/sin\(/g,'Math.sin(').replace(/cos\(/g,'Math.cos(').replace(/tan\(/g,'Math.tan(').replace(/sqrt\(/g,'Math.sqrt(').replace(/\^/g,'**').replace(/π|pi/g,Math.PI.toString());
        f = f.replace(/x/g, `(${x})`);
        return Function(`"use strict"; return (${f})`)();
    },
    solve(input) {
        const text = input.trim();
        const lower = text.toLowerCase();
        if (lower.startsWith('plot ')) { const func = text.replace(/^plot\s+/i, '').replace(/^y\s*=\s*/i, ''); return { type: 'plot', func, points: this.plotFunction(func, -10, 10) }; }
        if (lower.includes('[[')) {
            const parts = text.split('*');
            if (parts.length === 2) {
                const m1 = parts[0].match(/\[\[(.*?)\],\[(.*?)\]\]/), m2 = parts[1].match(/\[\[(.*?)\],\[(.*?)\]\]/);
                if (m1 && m2) {
                    const a = m1[1].split(',').map(Number), b = m1[2].split(',').map(Number), c = m2[1].split(',').map(Number), d = m2[2].split(',').map(Number);
                    if (![a,b,c,d].some(r => r.some(isNaN))) return { type: 'matrix', result: [[a[0]*c[0]+a[1]*c[1], a[0]*d[0]+a[1]*d[1]],[b[0]*c[0]+b[1]*c[1], b[0]*d[0]+b[1]*d[1]]], steps: ['Multiplication complete'] };
                }
            }
            return { type: 'error', message: 'Use: [[1,2],[3,4]] * [[5,6],[7,8]]' };
        }
        if (lower.startsWith('factor ')) return { type: 'factor', ...this.factor(text.replace(/^factor\s+/i,'')) };
        if (lower.startsWith('derivative of ') || lower.startsWith('derivative ')) return { type: 'derivative', ...this.derivative(text.replace(/^(derivative of|derivative)\s+/i,'')) };
        if (lower.startsWith('integral of ') || lower.startsWith('integral ') || lower.startsWith('integrate ')) return { type: 'integral', ...this.integral(text.replace(/^(integral of|integral|integrate)\s+/i,'')) };
        if (lower.includes('x^2') || lower.includes('x²')) {
            const eq = lower.replace(/x²/g,'x^2').replace(/\s+/g,'');
            const quadMatch = eq.match(/(-?\d*\.?\d*)x\^2([+-]?\d*\.?\d*)x([+-]?\d*\.?\d*)/);
            if (quadMatch) { const a = quadMatch[1]===''||quadMatch[1]==='+'?1:quadMatch[1]==='-'?-1:parseFloat(quadMatch[1]); const bStr=quadMatch[2]; const b=bStr===''||bStr==='+'?1:bStr==='-'?-1:parseFloat(bStr)||0; const c=parseFloat(quadMatch[3])||0; return { type: 'quadratic', ...this.solveQuadratic(a,b,c) }; }
        }
        try { const r = this.evalExpr(text, 0); if (isFinite(r)) return { type: 'eval', result: r.toFixed(4) }; } catch {}
        return { type: 'error', message: 'Try: x^2 - 4x + 3 = 0, derivative of sin(x), integral of x^2 dx, plot sin(x), factor x^2 + 5x + 6' };
    }
};

function formatResponse(title, content) {
    return `<div><strong>${title}</strong></div><div style="margin-top:4px">${content}</div>`;
}

function getBotResponse(input) {
    const lower = input.toLowerCase().trim();
    if (lower.includes('solve') || lower.includes('equation') || lower.includes('derivative') || lower.includes('integral') || lower.includes('factor') || lower.includes('matrix') || lower.includes('plot') || lower.includes('x^2') || lower.includes('x²')) {
        const r = MathEngine.solve(lower.replace(/^(solve|calculate|compute)\s+/i,'') || input);
        if (r.type === 'error') return formatResponse('Math Error', r.message);
        if (r.type === 'quadratic') return formatResponse('Quadratic', `x₁ = ${r.roots[0]}, x₂ = ${r.roots[1]}`);
        if (r.type === 'derivative' || r.type === 'integral') return formatResponse(r.type, r.result);
        if (r.type === 'factor') return formatResponse('Factor', r.result);
        if (r.type === 'eval') return formatResponse('Result', r.result);
        if (r.type === 'plot') return formatResponse('Plot', `y = ${r.func} (see Math tab)`);
        if (r.type === 'matrix') return formatResponse('Matrix', `[[${r.result[0]}], [${r.result[1]}]]`);
    }
    if (lower.includes('cv') || lower.includes('resume')) return formatResponse('CV', 'Download or view from the Contact tab.');
    if (lower.includes('skill')) return formatResponse('Skills', portfolioData.skills.map(s => `• ${s.name}: ${s.description}`).join('<br>'));
    if (lower.includes('project')) return formatResponse('Projects', portfolioData.projects.map(p => `• ${p.name}: ${p.description}`).join('<br>'));
    if (lower.includes('education') || lower.includes('study') || lower.includes('university') || lower.includes('degree')) return formatResponse('Education', portfolioData.education.map(e => `• ${e.degree} — ${e.institution} (${e.year})`).join('<br>'));
    if (lower.includes('certification') || lower.includes('certificate')) return formatResponse('Certifications', portfolioData.certifications.map(c => `• ${c.name} — ${c.issuer} (${c.year})`).join('<br>'));
    if (lower.includes('contact') || lower.includes('email') || lower.includes('phone')) return formatResponse('Contact', 'muhaammaddanish2327@gmail.com | +92 326 7370173');
    if (lower.includes('hire') || lower.includes('why')) return formatResponse('Why Hire', 'Strong analytical skills, Python & data analysis, certified by DigiSkills, available for internships.');
    if (lower.includes('about') || lower.includes('who is')) return formatResponse('About', 'Mathematics student at BZU, specializing in AI, data analysis, and web development.');
    if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) return formatResponse('Hello', 'Ask me about skills, projects, education, or try a math problem!');
    if (lower.includes('thank')) return formatResponse('Welcome', 'Happy to help!');
    if (lower.includes('bye') || lower.includes('goodbye')) return formatResponse('Goodbye', 'Thanks for visiting!');
    return formatResponse('Not sure', 'Try asking about skills, projects, education, or math problems.');
}

function getTimestamp() { return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); }
function scrollChatToBottom() { DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight; }

function createMessage(content, isUser = false) {
    const div = document.createElement('div');
    div.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = isUser ? '👤' : 'AI';
    const wrapper = document.createElement('div');
    wrapper.className = 'message-content-wrapper';
    const cd = document.createElement('div');
    cd.className = 'message-content glass-message';
    cd.innerHTML = content;
    const t = document.createElement('span');
    t.className = 'msg-time';
    t.textContent = isUser ? 'You' : getTimestamp();
    wrapper.appendChild(cd); wrapper.appendChild(t);
    div.appendChild(avatar); div.appendChild(wrapper);
    return div;
}

function handleUserMessage(msg) {
    if (!msg.trim()) return;
    DOM.chatMessages.appendChild(createMessage(`<p>${msg}</p>`, true));
    saveToHistory('user', msg);
    DOM.thinkingOverlay.classList.add('active');
    scrollChatToBottom();
    setTimeout(() => {
        const response = getBotResponse(msg);
        DOM.thinkingOverlay.classList.remove('active');
        DOM.chatMessages.appendChild(createMessage(`<p>${response}</p>`, false));
        saveToHistory('bot', response);
        if (DOM.latencyDisplay) DOM.latencyDisplay.textContent = `${Math.floor(600 + Math.random() * 600)}ms`;
        scrollChatToBottom();
    }, 500 + Math.random() * 600);
}

function saveToHistory(r, m) { chatHistory.push({ role: r, message: m, time: Date.now() }); if (chatHistory.length > 100) chatHistory.shift(); }

function clearChat() {
    DOM.chatMessages.innerHTML = `<div class="message bot-message"><div class="message-avatar">AI</div><div class="message-content-wrapper"><div class="message-content glass-message"><p>Hi! I can tell you about Muhammad Danish's <strong>skills</strong>, <strong>projects</strong>, <strong>education</strong>, or help with <strong>math</strong>.</p><div class="msg-features"><span class="feature-chip">Skills</span><span class="feature-chip">Projects</span><span class="feature-chip">Education</span><span class="feature-chip">Math</span></div></div><span class="msg-time">Just now</span></div></div>`;
    chatHistory = [];
    scrollChatToBottom();
}

// ===== VOICE ===== //
let isListening = false, recognition = null;
function initSpeechRecognition() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return false;
    recognition = new SR();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    recognition.onstart = () => { isListening = true; DOM.voiceVisualizer.classList.add('active'); };
    recognition.onresult = (e) => { DOM.userInput.value = e.results[0][0].transcript; setTimeout(() => handleUserMessage(e.results[0][0].transcript), 300); };
    recognition.onend = () => { isListening = false; DOM.voiceVisualizer.classList.remove('active'); };
    return true;
}

// ===== MATH UI ===== //
function handleMathSolve() {
    const input = DOM.mathInput.value.trim();
    if (!input) return;
    latestMathResult = MathEngine.solve(input);
    DOM.outputTabs.forEach(t => t.classList.remove('active'));
    document.querySelector('.output-tab[data-tab="result"]').classList.add('active');
    DOM.graphCanvas.style.display = 'none';
    DOM.mathSteps.style.display = 'none';
    DOM.mathSteps.innerHTML = '';
    DOM.mathOutput.style.display = 'flex';
    if (latestMathResult.type === 'error') { DOM.mathOutput.innerHTML = `<div class="math-error">${latestMathResult.message}</div>`; return; }
    if (latestMathResult.type === 'quadratic') {
        DOM.mathOutput.innerHTML = `<div class="math-result"><div class="result-value">Solution</div><div style="font-family:var(--font-mono);padding:10px;background:rgba(0,240,255,0.05);border-radius:6px;">x₁ = ${latestMathResult.roots[0]}<br>x₂ = ${latestMathResult.roots[1]}<br>Δ = ${latestMathResult.discriminant}</div></div>`;
        DOM.mathSteps.innerHTML = `<div style="padding:8px;">${latestMathResult.steps.map(s => `<div>• ${s}</div>`).join('')}</div>`;
    } else if (latestMathResult.type === 'derivative' || latestMathResult.type === 'integral') {
        DOM.mathOutput.innerHTML = `<div class="math-result"><div class="result-label">${latestMathResult.type}</div><div style="font-size:20px;padding:10px;background:rgba(0,240,255,0.05);border-radius:6px;">${latestMathResult.result}</div></div>`;
        DOM.mathSteps.innerHTML = `<div style="padding:8px;">${latestMathResult.steps.map(s => `<div>• ${s}</div>`).join('')}</div>`;
    } else if (latestMathResult.type === 'factor') {
        DOM.mathOutput.innerHTML = `<div class="math-result"><div class="result-label">Factor</div><div style="font-size:20px;padding:10px;background:rgba(0,240,255,0.05);border-radius:6px;">${latestMathResult.result}</div></div>`;
        DOM.mathSteps.innerHTML = `<div style="padding:8px;">${latestMathResult.steps.map(s => `<div>• ${s}</div>`).join('')}</div>`;
    } else if (latestMathResult.type === 'matrix') {
        const r = latestMathResult.result;
        DOM.mathOutput.innerHTML = `<div class="math-result"><div class="result-label">Result</div><div style="font-family:var(--font-mono);padding:10px;background:rgba(0,240,255,0.05);border-radius:6px;">[[${r[0][0]}, ${r[0][1]}], [${r[1][0]}, ${r[1][1]}]]</div></div>`;
    } else if (latestMathResult.type === 'plot') {
        DOM.mathOutput.innerHTML = `<div class="math-result"><div class="result-label">y = ${latestMathResult.func}</div></div>`;
        renderGraph(latestMathResult.func);
        DOM.graphCanvas.style.display = 'block';
    } else if (latestMathResult.type === 'eval') {
        DOM.mathOutput.innerHTML = `<div class="math-result"><div class="result-value">${latestMathResult.result}</div></div>`;
    }
}

function renderGraph(funcStr) {
    const canvas = DOM.graphCanvas;
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;
    const width = parent.clientWidth - 48;
    const height = 200;
    canvas.width = width * 2;
    canvas.height = height * 2;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(2, 2);
    const xMin = -10, xMax = 10, yMin = -5, yMax = 5;
    const xS = width / (xMax - xMin), yS = height / (yMax - yMin);
    const ox = -xMin * xS, oy = yMax * yS;
    ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = 'rgba(0,240,255,0.08)'; ctx.lineWidth = 1;
    for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x++) { const px = ox + x * xS; ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, height); ctx.stroke(); }
    for (let y = Math.ceil(yMin); y <= Math.floor(yMax); y++) { const py = oy - y * yS; ctx.beginPath(); ctx.moveTo(0, py); ctx.lineTo(width, py); ctx.stroke(); }
    ctx.strokeStyle = 'rgba(0,240,255,0.4)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(width, oy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(ox, 0); ctx.lineTo(ox, height); ctx.stroke();
    const points = MathEngine.plotFunction(funcStr, xMin, xMax);
    if (!points.length) return;
    ctx.strokeStyle = '#00f0ff'; ctx.lineWidth = 2.5;
    ctx.shadowColor = 'rgba(0,240,255,0.5)'; ctx.shadowBlur = 6;
    ctx.beginPath(); let started = false;
    for (const p of points) { if (p.y === null) { started = false; continue; } const px = ox + p.x * xS, py = oy - p.y * yS; if (!started) { ctx.moveTo(px, py); started = true; } else ctx.lineTo(px, py); }
    ctx.stroke(); ctx.shadowBlur = 0;
}

function switchMathTab(tab) {
    DOM.outputTabs.forEach(t => t.classList.remove('active'));
    const a = document.querySelector(`.output-tab[data-tab="${tab}"]`);
    if (a) a.classList.add('active');
    DOM.mathOutput.style.display = tab === 'result' ? 'flex' : 'none';
    DOM.graphCanvas.style.display = tab === 'graph' ? 'block' : 'none';
    DOM.mathSteps.style.display = tab === 'steps' ? 'block' : 'none';
    if (tab === 'graph' && latestMathResult && latestMathResult.type === 'plot') renderGraph(latestMathResult.func);
}

function clearMath() {
    DOM.mathInput.value = ''; latestMathResult = null;
    DOM.mathOutput.innerHTML = `<div class="math-placeholder"><div class="placeholder-icon">✏️</div><p>Enter a problem and click <strong>Solve</strong></p></div>`;
    DOM.graphCanvas.style.display = 'none'; DOM.mathSteps.style.display = 'none'; DOM.mathOutput.style.display = 'flex';
}

// ===== THREE.JS 3D ===== //
function init3DBackground() {
    try {
        const canvas = DOM.bgCanvas;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        const count = 800;
        const geo = new THREE.BufferGeometry();
        const pos = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i*3] = (Math.random() - 0.5) * 40;
            pos[i*3+1] = (Math.random() - 0.5) * 40;
            pos[i*3+2] = (Math.random() - 0.5) * 8;
            const c = new THREE.Color(); c.setHSL(0.55 + Math.random() * 0.15, 0.7, 0.5);
            col[i*3] = c.r; col[i*3+1] = c.g; col[i*3+2] = c.b;
        }
        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
        const mat = new THREE.PointsMaterial({ size: 0.05, vertexColors: true, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending, sizeAttenuation: true });
        const particles = new THREE.Points(geo, mat);
        scene.add(particles);
        camera.position.z = 10;
        let mx = 0, my = 0;
        document.addEventListener('mousemove', (e) => { mx = (e.clientX / window.innerWidth) * 2 - 1; my = -(e.clientY / window.innerHeight) * 2 + 1; });
        function animate() {
            requestAnimationFrame(animate);
            particles.rotation.x += 0.0002 + my * 0.0002;
            particles.rotation.y += 0.0004 + mx * 0.0002;
            renderer.render(scene, camera);
        }
        animate();
        window.addEventListener('resize', () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); });
    } catch (e) { console.log('3D fallback'); }
}

function animateCounters() {
    DOM.statNumbers.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const start = Date.now();
        function update() {
            const p = Math.min((Date.now() - start) / 1200, 1);
            const e = 1 - Math.pow(1 - p, 3);
            counter.textContent = Math.floor(e * target);
            if (p < 1) requestAnimationFrame(update); else counter.textContent = target + '+';
        }
        update();
    });
}

function initTypingEffect() {
    const phrases = ['Python, Data Analysis, AI', 'Mathematics Student at BZU', 'Web Developer & AI Enthusiast', 'Available for Internships'];
    let idx = 0, ci = 0, del = false;
    function type() {
        const cur = phrases[idx];
        if (!del) {
            DOM.typingEffect.textContent = cur.substring(0, ci + 1); ci++;
            if (ci === cur.length) { del = true; setTimeout(type, 2000); return; }
            setTimeout(type, 60);
        } else {
            DOM.typingEffect.textContent = cur.substring(0, ci - 1); ci--;
            if (ci === 0) { del = false; idx = (idx + 1) % phrases.length; setTimeout(type, 400); return; }
            setTimeout(type, 25);
        }
    }
    type();
}

function initEvents() {
    DOM.sendBtn.addEventListener('click', () => { handleUserMessage(DOM.userInput.value); DOM.userInput.value = ''; });
    DOM.userInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); handleUserMessage(DOM.userInput.value); DOM.userInput.value = ''; } });
    DOM.clearChatBtn.addEventListener('click', clearChat);
    DOM.voiceInputBtn.addEventListener('click', () => { if (!recognition && !initSpeechRecognition()) return; if (isListening) recognition.stop(); else recognition.start(); });
    DOM.quickChips.forEach(c => c.addEventListener('click', () => { if (c.dataset.question) handleUserMessage(c.dataset.question); }));
    DOM.solveBtn.addEventListener('click', handleMathSolve);
    DOM.clearMathBtn.addEventListener('click', clearMath);
    DOM.mathInput.addEventListener('keydown', (e) => { if (e.key === 'Enter' && e.ctrlKey) { e.preventDefault(); handleMathSolve(); } });
    DOM.exampleChips.forEach(c => c.addEventListener('click', () => { DOM.mathInput.value = c.dataset.math; handleMathSolve(); }));
    DOM.outputTabs.forEach(t => t.addEventListener('click', () => switchMathTab(t.dataset.tab)));
    let dark = true;
    DOM.themeToggle.addEventListener('click', () => { dark = !dark; if (dark) { document.documentElement.removeAttribute('data-theme'); DOM.themeToggle.textContent = '🌙'; } else { document.documentElement.setAttribute('data-theme', 'light'); DOM.themeToggle.textContent = '☀️'; } });
    document.addEventListener('mousemove', (e) => { DOM.cursorGlow.style.left = e.clientX + 'px'; DOM.cursorGlow.style.top = e.clientY + 'px'; });
}

function init() {
    console.log('Starting...');
    init3DBackground();
    initTabSwitching();
    initEvents();
    initSpeechRecognition();
    setTimeout(() => {
        DOM.loadingScreen.classList.add('hidden');
        animateCounters();
        initTypingEffect();
    }, 2800);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();