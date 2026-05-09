/* DANISH.AI - MOBILE-FIRST PORTFOLIO ASSISTANT */

const data = {
    skills: [{n:"Python",d:"Data analysis, automation, web development."},{n:"Data Analysis",d:"Analyzing datasets and generating insights."},{n:"Web Development",d:"HTML, CSS, JavaScript, responsive sites."},{n:"MySQL",d:"Database management and queries."},{n:"AI",d:"AI concepts and chatbot development."}],
    projects: [{n:"Portfolio Website",d:"Personal portfolio on Vercel.",l:"https://muhammaddanish-sage.vercel.app/",g:"https://github.com/danishcorder"},{n:"DB Management",d:"Web-based CRUD operations.",l:"https://danishcorder.github.io/DatabaseManagment/index.html",g:"https://github.com/danishcorder/DatabaseManagment"},{n:"Top 2025 Site",d:"Modern front-end techniques.",l:"https://danishcorder.github.io/Top-2025-level-site/",g:"https://github.com/danishcorder/Top-2025-level-site/"},{n:"Data Dashboard",d:"Visualizing datasets.",l:"https://danishcorder.github.io/DatadashBoard2/",g:"https://github.com/danishcorder/DatadashBoard2/"}],
    edu: [{d:"BS Mathematics",i:"BZU, Multan",y:"2023 – Present"},{d:"ICS",i:"PGC, Kabirwala",y:"2021 – 2023 · 82%"},{d:"Matriculation",i:"Khanewal",y:"2019 – 2021 · 98%"}],
    certs: [{n:"Freelancing",i:"DigiSkills",y:"2024"},{n:"MS Excel",i:"DigiSkills",y:"2023-2024"},{n:"Python",i:"DigiSkills",y:"2024-2025"}]
};

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const D = {
    loading: $('#loadingScreen'), bg: $('#bgCanvas'), theme: $('#themeToggle'),
    typing: $('#typingEffect'), chat: $('#chatMessages'), input: $('#userInput'),
    send: $('#sendBtn'), clear: $('#clearChatBtn'), voice: $('#voiceInputBtn'),
    vv: $('#voiceVisualizer'), thinking: $('#thinkingOverlay'), chips: $$('.chip'),
    mathInput: $('#mathInput'), solve: $('#solveBtn'), clearMath: $('#clearMathBtn'),
    mathOut: $('#mathOutput'), graph: $('#graphCanvas'), steps: $('#mathSteps'),
    tabs: $$('.m-tab'), mChips: $$('.m-chip'), stats: $$('.stat-number'),
    navTabs: $$('.nav-tab'), bnItems: $$('.bottom-nav-item'), triggers: $$('.tab-trigger')
};

let history = [], mathResult = null, listening = false, recognition = null;

function switchTab(id) {
    D.navTabs.forEach(t=>t.classList.toggle('active',t.dataset.tab===id));
    D.bnItems.forEach(t=>t.classList.toggle('active',t.dataset.tab===id));
    $$('.tab-panel').forEach(p=>p.classList.toggle('active',p.id==='tab-'+id));
}

function initTabs() {
    D.navTabs.forEach(t=>t.addEventListener('click',()=>switchTab(t.dataset.tab)));
    D.bnItems.forEach(t=>t.addEventListener('click',()=>switchTab(t.dataset.tab)));
    D.triggers.forEach(t=>t.addEventListener('click',()=>{if(t.dataset.tab)switchTab(t.dataset.tab)}));
}

const MathE = {
    quad(a,b,c){let d=b*b-4*a*c;if(d<0){let r=(-b/(2*a)).toFixed(4),im=(Math.sqrt(Math.abs(d))/(2*a)).toFixed(4);return{roots:[`${r}+${im}i`,`${r}-${im}i`],disc:d.toFixed(4),steps:[`Eq: ${a}x²+${b}x+${c}=0`,`Δ=${d.toFixed(4)}`,`Complex: x₁=${r}+${im}i, x₂=${r}-${im}i`]}}let sd=Math.sqrt(d);return{roots:[((-b+sd)/(2*a)).toFixed(4),((-b-sd)/(2*a)).toFixed(4)],disc:d.toFixed(4),steps:[`Eq: ${a}x²+${b}x+${c}=0`,`Δ=${d.toFixed(4)}`,`√Δ=${sd.toFixed(4)}`,`x₁=${((-b+sd)/(2*a)).toFixed(4)}`,`x₂=${((-b-sd)/(2*a)).toFixed(4)}`]}},
    deriv(e){let x=e.toLowerCase().replace(/\s/g,'');if(x.includes('sin('))return{r:'cos(x)',s:['d/dx sin(x)=cos(x)']};if(x.includes('cos('))return{r:'-sin(x)',s:['d/dx cos(x)=-sin(x)']};if(x.includes('tan('))return{r:'sec²(x)',s:['d/dx tan(x)=sec²(x)']};let m=x.match(/x\^(\d+)/);if(m){let n=parseInt(m[1]);return{r:`${n}x^${n-1}`,s:[`d/dx x^${n}=${n}x^${n-1}`]}}if(x==='x')return{r:'1',s:['d/dx x=1']};if(/^\d+$/.test(x))return{r:'0',s:[`d/dx ${x}=0`]};return{r:'Can\'t compute',s:['Complex']}},
    integ(e){let x=e.toLowerCase().replace(/\s/g,'');if(x.includes('sin('))return{r:'-cos(x)+C',s:['∫ sin(x)dx=-cos(x)+C']};if(x.includes('cos('))return{r:'sin(x)+C',s:['∫ cos(x)dx=sin(x)+C']};let m=x.match(/x\^(\d+)/);if(m){let n=parseInt(m[1]);return{r:`x^${n+1}/${n+1}+C`,s:[`∫ x^${n}dx=x^${n+1}/${n+1}+C`]}}if(x==='x')return{r:'x²/2+C',s:['∫ x dx=x²/2+C']};if(x==='1'||x==='dx')return{r:'x+C',s:['∫ 1 dx=x+C']};return{r:'Can\'t compute',s:['Complex']}},
    fact(e){let x=e.replace(/\s/g,''),m=x.match(/x\^2\s*([+-]?\s*\d+)?x\s*([+-]?\s*\d+)?/);if(m){let b=m[1]?parseInt(m[1].replace(/\s/g,'')):0,c=m[2]?parseInt(m[2].replace(/\s/g,'')):0;for(let i=-Math.abs(c);i<=Math.abs(c);i++){if(i===0)continue;let j=c/i;if(i+j===b&&Number.isInteger(j))return{r:`(x${i>=0?'+':'-'}${Math.abs(i)})(x${j>=0?'+':'-'}${Math.abs(j)})`,s:[`${i}×${j}=${c}, ${i}+${j}=${b}`,`Roots: x=${-i}, x=${-j}`]}}return{r:'Can\'t factor',s:['No integer factors']}}return{r:'Use: factor x²+bx+c',s:[]}},
    plot(f,xMin,xMax){let pts=[];let step=(xMax-xMin)/200;for(let x=xMin;x<=xMax;x+=step){try{let y=this.ev(f,x);pts.push({x:x,y:isFinite(y)&&y>-100&&y<100?y:null})}catch{pts.push({x:x,y:null})}}return pts},
    ev(e,x){let f=e.toLowerCase().replace(/sin\(/g,'Math.sin(').replace(/cos\(/g,'Math.cos(').replace(/tan\(/g,'Math.tan(').replace(/sqrt\(/g,'Math.sqrt(').replace(/\^/g,'**').replace(/π|pi/g,Math.PI.toString());f=f.replace(/x/g,`(${x})`);return Function(`"use strict";return(${f})`)()},
    solve(t) {
        const s = t.trim(), l = s.toLowerCase();
        if (l.startsWith('plot ')) {
            let f = s.replace(/^plot\s+/i, '').replace(/^y\s*=\s*/i, '');
            return { type: 'plot', func: f, pts: this.plot(f, -10, 10) }
        }
        if (l.includes('[[')) {
            let p = s.split('*');
            if (p.length === 2) {
                let m1 = p[0].match(/\[\[(.*?)\],\[(.*?)\]\]/), m2 = p[1].match(/\[\[(.*?)\],\[(.*?)\]\]/);
                if (m1 && m2) {
                    let a = m1[1].split(',').map(Number), b = m1[2].split(',').map(Number), c = m2[1].split(',').map(Number), d = m2[2].split(',').map(Number);
                    if (![a, b, c, d].some(r => r.some(isNaN))) return { type: 'matrix', r: [[a[0] * c[0] + a[1] * c[1], a[0] * d[0] + a[1] * d[1]], [b[0] * c[0] + b[1] * c[1], b[0] * d[0] + b[1] * d[1]]] }
                }
                return { type: 'error', m: 'Use [[1,2],[3,4]]*[[5,6],[7,8]]' }
            }
        }
        if (l.startsWith('factor ')) return { type: 'factor', ...this.fact(s.replace(/^factor\s+/i, '')) };
        if (l.startsWith('derivative of ') || l.startsWith('derivative ')) return { type: 'deriv', ...this.deriv(s.replace(/^(derivative of|derivative)\s+/i, '')) };
        if (l.startsWith('integral of ') || l.startsWith('integral ') || l.startsWith('integrate ')) return { type: 'integ', ...this.integ(s.replace(/^(integral of|integral|integrate)\s+/i, '')) };
        if (l.includes('x^2') || l.includes('x²')) {
            let q = l.replace(/x²/g, 'x^2').replace(/\s/g, ''), m = q.match(/(-?\d*\.?\d*)x\^2([+-]?\d*\.?\d*)x([+-]?\d*\.?\d*)/);
            if (m) {
                let a = m[1] === '' || m[1] === '+' ? 1 : m[1] === '-' ? -1 : parseFloat(m[1]), bS = m[2], b = bS === '' || bS === '+' ? 1 : bS === '-' ? -1 : parseFloat(bS) || 0, c = parseFloat(m[3]) || 0;
                return { type: 'quad', ...this.quad(a, b, c) }
            }
        }
        try {
            let r = this.ev(s, 0);
            if (isFinite(r)) return { type: 'eval', r: r.toFixed(4) }
        } catch {}
        return { type: 'error', m: 'Try: x^2-4x+3=0, derivative sin(x), integral x^2 dx, plot sin(x), factor x^2+5x+6' }
    }
};

function fmt(t,c){return`<strong>${t}</strong><div style="margin-top:4px">${c}</div>`}

function botResp(i){
    const l=i.toLowerCase().trim();
    if(l.includes('solve')||l.includes('equation')||l.includes('derivative')||l.includes('integral')||l.includes('factor')||l.includes('matrix')||l.includes('plot')||l.includes('x^2')||l.includes('x²')){
        let r=MathE.solve(l.replace(/^(solve|calculate|compute)\s+/i,'')||i);
        if(r.type==='error')return fmt('Math Error',r.m);
        if(r.type==='quad')return fmt('Quadratic',`x₁=${r.roots[0]}, x₂=${r.roots[1]}`);
        if(r.type==='deriv'||r.type==='integ')return fmt(r.type==='deriv'?'Derivative':'Integral',r.r);
        if(r.type==='factor')return fmt('Factor',r.r);
        if(r.type==='eval')return fmt('Result',r.r);
        if(r.type==='plot')return fmt('Plot',`y=${r.func} (see Math tab)`);
        if(r.type==='matrix')return fmt('Matrix',`[[${r.r[0]}],[${r.r[1]}]]`);
    }
    if(l.includes('skill'))return fmt('Skills',data.skills.map(s=>`• ${s.n}: ${s.d}`).join('<br>'));
    if(l.includes('project'))return fmt('Projects',data.projects.map(p=>`• ${p.n}: ${p.d}`).join('<br>'));
    if(l.includes('education')||l.includes('study')||l.includes('university')||l.includes('degree'))return fmt('Education',data.edu.map(e=>`• ${e.d} — ${e.i} (${e.y})`).join('<br>'));
    if(l.includes('certification')||l.includes('certificate'))return fmt('Certifications',data.certs.map(c=>`• ${c.n} — ${c.i} (${c.y})`).join('<br>'));
    if(l.includes('contact')||l.includes('email')||l.includes('phone'))return fmt('Contact','muhaammaddanish2327@gmail.com | +92 326 7370173');
    if(l.includes('hire')||l.includes('why'))return fmt('Why Hire','Analytical skills, Python, certified by DigiSkills, open to internships.');
    if(l.includes('about')||l.includes('who is'))return fmt('About','Math student at BZU. AI, data analysis, web development.');
    if(l.includes('cv')||l.includes('resume'))return fmt('CV','Download from Contact tab.');
    if(l.includes('hi')||l.includes('hello')||l.includes('hey'))return fmt('Hello','Ask about skills, projects, education, or math!');
    if(l.includes('thank'))return fmt('Welcome','Happy to help!');
    if(l.includes('bye')||l.includes('goodbye'))return fmt('Goodbye','Thanks for visiting!');
    return fmt('Not sure','Try: skills, projects, education, or a math problem.');
}

function ts(){return new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}
function sc(){D.chat.scrollTop=D.chat.scrollHeight}

function createMsg(c,u=false){
    const d=document.createElement('div');d.className=`msg ${u?'msg-self':'msg-bot'}`;
    const a=document.createElement('div');a.className='msg-avatar';a.textContent=u?'👤':'AI';
    const b=document.createElement('div');b.className='msg-bubble glass';b.innerHTML=c;
    const t=document.createElement('span');t.className='msg-time';t.textContent=u?'You':ts();
    d.appendChild(a);d.appendChild(b);d.appendChild(t);return d;
}

function send(m){
    if(!m.trim())return;
    D.chat.appendChild(createMsg(`<p>${m}</p>`,true));
    save('user',m);D.thinking.classList.add('active');sc();
    setTimeout(()=>{
        const r=botResp(m);D.thinking.classList.remove('active');
        D.chat.appendChild(createMsg(`<p>${r}</p>`,false));save('bot',r);sc();
    },400+Math.random()*500);
}

function save(r,m){history.push({role:r,msg:m,time:Date.now()});if(history.length>100)history.shift()}

function clearChat(){
    D.chat.innerHTML=`<div class="msg msg-bot"><div class="msg-avatar">AI</div><div class="msg-bubble glass"><p>Hi! Ask about <strong>skills</strong>, <strong>projects</strong>, <strong>education</strong>, or try <strong>math</strong>.</p></div><span class="msg-time">Just now</span></div>`;
    history=[];sc();
}

// Voice
function initVoice(){
    const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR)return false;
    recognition=new SR();recognition.continuous=false;recognition.interimResults=false;recognition.lang='en-US';
    recognition.onstart=()=>{listening=true;D.vv.classList.add('active')};
    recognition.onresult=e=>{D.input.value=e.results[0][0].transcript;setTimeout(()=>send(e.results[0][0].transcript),300)};
    recognition.onend=()=>{listening=false;D.vv.classList.remove('active')};return true;
}

// Math UI
function handleMath(){
    const i=D.mathInput.value.trim();if(!i)return;
    mathResult=MathE.solve(i);
    D.tabs.forEach(t=>t.classList.remove('active'));$('.m-tab[data-tab="result"]')?.classList.add('active');
    D.graph.style.display='none';D.steps.style.display='none';D.steps.innerHTML='';D.mathOut.style.display='flex';
    if(mathResult.type==='error'){D.mathOut.innerHTML=`<div class="math-error">${mathResult.m}</div>`;return}
    if(mathResult.type==='quad'){
        D.mathOut.innerHTML=`<div class="math-result"><div class="result-value">Solution</div><div style="font-family:var(--mono);padding:8px;background:rgba(0,240,255,0.05);border-radius:6px;">x₁=${mathResult.roots[0]}<br>x₂=${mathResult.roots[1]}<br>Δ=${mathResult.disc}</div></div>`;
        D.steps.innerHTML=`<div style="padding:6px">${mathResult.steps.map(s=>`<div>• ${s}</div>`).join('')}</div>`;
    }else if(mathResult.type==='deriv'||mathResult.type==='integ'){
        D.mathOut.innerHTML=`<div class="math-result"><div class="result-label">${mathResult.type==='deriv'?'Derivative':'Integral'}</div><div style="font-size:18px;padding:8px;background:rgba(0,240,255,0.05);border-radius:6px;">${mathResult.r}</div></div>`;
        D.steps.innerHTML=`<div style="padding:6px">${mathResult.s.map(s=>`<div>• ${s}</div>`).join('')}</div>`;
    }else if(mathResult.type==='factor'){
        D.mathOut.innerHTML=`<div class="math-result"><div class="result-label">Factor</div><div style="font-size:18px;padding:8px;background:rgba(0,240,255,0.05);border-radius:6px;">${mathResult.r}</div></div>`;
        D.steps.innerHTML=`<div style="padding:6px">${mathResult.s.map(s=>`<div>• ${s}</div>`).join('')}</div>`;
    }else if(mathResult.type==='matrix'){
        const r=mathResult.r;D.mathOut.innerHTML=`<div class="math-result"><div class="result-label">Result</div><div style="font-family:var(--mono);padding:8px;background:rgba(0,240,255,0.05);border-radius:6px;">[[${r[0][0]},${r[0][1]}],[${r[1][0]},${r[1][1]}]]</div></div>`;
    }else if(mathResult.type==='plot'){
        D.mathOut.innerHTML=`<div class="math-result"><div class="result-label">y=${mathResult.func}</div></div>`;
        renderG(mathResult.func);D.graph.style.display='block';
    }else if(mathResult.type==='eval'){D.mathOut.innerHTML=`<div class="math-result"><div class="result-value">${mathResult.r}</div></div>`}
}

function renderG(f){
    const c=D.graph,ctx=c.getContext('2d');
    const w=c.parentElement.clientWidth-32,h=180;
    c.width=w*2;c.height=h*2;c.style.width=w+'px';c.style.height=h+'px';ctx.scale(2,2);
    const xM=-10,xX=10,yM=-5,yX=5,xS=w/(xX-xM),yS=h/(yX-yM),ox=-xM*xS,oy=yX*yS;
    ctx.fillStyle='rgba(0,0,0,0.3)';ctx.fillRect(0,0,w,h);
    ctx.strokeStyle='rgba(0,240,255,0.06)';ctx.lineWidth=1;
    for(let x=Math.ceil(xM);x<=Math.floor(xX);x++){let px=ox+x*xS;ctx.beginPath();ctx.moveTo(px,0);ctx.lineTo(px,h);ctx.stroke()}
    for(let y=Math.ceil(yM);y<=Math.floor(yX);y++){let py=oy-y*yS;ctx.beginPath();ctx.moveTo(0,py);ctx.lineTo(w,py);ctx.stroke()}
    ctx.strokeStyle='rgba(0,240,255,0.4)';ctx.lineWidth=2;
    ctx.beginPath();ctx.moveTo(0,oy);ctx.lineTo(w,oy);ctx.stroke();
    ctx.beginPath();ctx.moveTo(ox,0);ctx.lineTo(ox,h);ctx.stroke();
    const pts=MathE.plot(f,xM,xX);if(!pts.length)return;
    ctx.strokeStyle='#00f0ff';ctx.lineWidth=2.5;ctx.shadowColor='rgba(0,240,255,0.5)';ctx.shadowBlur=6;
    ctx.beginPath();let started=false;
    for(const p of pts){if(p.y===null){started=false;continue}let px=ox+p.x*xS,py=oy-p.y*yS;if(!started){ctx.moveTo(px,py);started=true}else ctx.lineTo(px,py)}
    ctx.stroke();ctx.shadowBlur=0;
}

function switchMathTab(tab){
    D.tabs.forEach(t=>t.classList.remove('active'));const a=$(`.m-tab[data-tab="${tab}"]`);if(a)a.classList.add('active');
    D.mathOut.style.display=tab==='result'?'flex':'none';D.graph.style.display=tab==='graph'?'block':'none';D.steps.style.display=tab==='steps'?'block':'none';
    if(tab==='graph'&&mathResult&&mathResult.type==='plot')renderG(mathResult.func);
}

function clearMath(){D.mathInput.value='';mathResult=null;D.mathOut.innerHTML=`<div class="math-placeholder"><div class="ph-icon">🧮</div><p>Enter a problem and tap <strong>Solve</strong></p></div>`;D.graph.style.display='none';D.steps.style.display='none';D.mathOut.style.display='flex'}

// 3D
function init3D(){
    try{
        const c=D.bg,scene=new THREE.Scene(),cam=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
        const renderer=new THREE.WebGLRenderer({canvas:c,alpha:true,antialias:true});
        renderer.setSize(window.innerWidth,window.innerHeight);renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
        const count=600,geo=new THREE.BufferGeometry(),pos=new Float32Array(count*3),col=new Float32Array(count*3);
        for(let i=0;i<count;i++){pos[i*3]=(Math.random()-.5)*35;pos[i*3+1]=(Math.random()-.5)*35;pos[i*3+2]=(Math.random()-.5)*6;const c=new THREE.Color();c.setHSL(.55+Math.random()*.15,.6,.45);col[i*3]=c.r;col[i*3+1]=c.g;col[i*3+2]=c.b}
        geo.setAttribute('position',new THREE.BufferAttribute(pos,3));geo.setAttribute('color',new THREE.BufferAttribute(col,3));
        const mat=new THREE.PointsMaterial({size:.04,vertexColors:true,transparent:true,opacity:.35,blending:THREE.AdditiveBlending,sizeAttenuation:true});
        const particles=new THREE.Points(geo,mat);scene.add(particles);cam.position.z=8;
        let mx=0,my=0;
        document.addEventListener('mousemove',e=>{mx=(e.clientX/window.innerWidth)*2-1;my=-(e.clientY/window.innerHeight)*2+1});
        function anim(){requestAnimationFrame(anim);particles.rotation.x+=.0002+my*.0002;particles.rotation.y+=.0004+mx*.0002;renderer.render(scene,cam)}
        anim();
        window.addEventListener('resize',()=>{cam.aspect=window.innerWidth/window.innerHeight;cam.updateProjectionMatrix();renderer.setSize(window.innerWidth,window.innerHeight)})
    }catch(e){}
}

function animCounters(){D.stats.forEach(c=>{const t=parseInt(c.dataset.target),s=Date.now();function u(){const p=Math.min((Date.now()-s)/1000,1);c.textContent=Math.floor(p*t);if(p<1)requestAnimationFrame(u);else c.textContent=t+'+'}u()})}

function initTyping(){
    const p=['Python, Data Analysis, AI','Math Student at BZU','Web Dev & AI Enthusiast','Open for Internships'];let idx=0,ci=0,del=false;
    function t(){const cur=p[idx];if(!del){D.typing.textContent=cur.substring(0,ci+1);ci++;if(ci===cur.length){del=true;setTimeout(t,1800);return}setTimeout(t,55)}else{D.typing.textContent=cur.substring(0,ci-1);ci--;if(ci===0){del=false;idx=(idx+1)%p.length;setTimeout(t,350);return}setTimeout(t,22)}}
    t();
}

function initEvents(){
    D.send.addEventListener('click',()=>{send(D.input.value);D.input.value=''});
    D.input.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();send(D.input.value);D.input.value=''}});
    D.clear.addEventListener('click',clearChat);
    D.voice.addEventListener('click',()=>{if(!recognition&&!initVoice())return;if(listening)recognition.stop();else recognition.start()});
    D.chips.forEach(c=>c.addEventListener('click',()=>{if(c.dataset.question)send(c.dataset.question)}));
    D.solve.addEventListener('click',handleMath);
    D.clearMath.addEventListener('click',clearMath);
    D.mathInput.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.ctrlKey){e.preventDefault();handleMath()}});
    D.mChips.forEach(c=>c.addEventListener('click',()=>{D.mathInput.value=c.dataset.math;handleMath()}));
    D.tabs.forEach(t=>t.addEventListener('click',()=>switchMathTab(t.dataset.tab)));
    let dark=true;
    D.theme.addEventListener('click',()=>{dark=!dark;if(dark){document.documentElement.removeAttribute('data-theme');D.theme.textContent='🌙'}else{document.documentElement.setAttribute('data-theme','light');D.theme.textContent='☀️'}});
    document.addEventListener('mousemove',e=>{const g=$('#cursorGlow');if(g){g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'}});
}

function init(){
    init3D();initTabs();initEvents();initVoice();
    setTimeout(()=>{D.loading.classList.add('hidden');animCounters();initTyping()},2600);
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();