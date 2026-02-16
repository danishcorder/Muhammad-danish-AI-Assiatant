// ===== Portfolio Chatbot - JavaScript =====

// Portfolio Data
const portfolioData = {
    name: "Muhammad Danish",
    field: "Mathematics Student | Data Analysis | Web Development | AI Projects",
    
    skills: [
        {
            name: "Python",
            description: "Proficient in Python for scripting, automation, and data analysis. Applied in projects like AI Agent CLine, Python Project, and Scientopy."
        },
        {
            name: "Pandas",
            description: "Skilled in using Pandas for data cleaning, manipulation, and analysis. Used in Data Dashboard and Banking Data Analyst projects."
        },
        {
            name: "Excel",
            description: "Experienced in Excel for data visualization, reporting, and statistical calculations. Applied in dashboard and analytics projects."
        },
        {
            name: "Data Analysis & Visualization",
            description: "Capable of analyzing datasets and presenting insights visually through charts, dashboards, and plots. Demonstrated in Data Dashboard and analytical assignments."
        },
        {
            name: "Statistics & Mathematics",
            description: "Strong foundation in mathematics and statistics for solving analytical problems, including vectors, tensors, and Kronecker Delta analysis."
        },
        {
            name: "Web Development (HTML, CSS, JS)",
            description: "Skilled in building responsive and interactive websites, including personal portfolio and World Wonders project."
        },
        {
            name: "Basic Machine Learning & AI Tools",
            description: "Practical understanding of machine learning concepts and AI tools applied in projects like AI Agent CLine."
        },
        {
            name: "AI Automation & Scripting",
            description: "Experienced in building automated AI workflows and scripts to improve productivity and project efficiency."
        }
    ],
    
    projects: [
        {
            name: "Top 2025 Level Site",
            description: "Modern, fully responsive personal portfolio website showcasing skills, projects, and professional profile with sleek UI, smooth animations, and intuitive navigation. Demonstrates front-end development and UI/UX skills.",
            technologies: "HTML, CSS, JavaScript",
            live: "https://danishcorder.github.io/Top-2025-level-site/",
            github: "https://github.com/danishcorder/Top-2025-level-site"
        },
        {
            name: "World Wonders",
            description: "Interactive web project exploring famous world landmarks and natural wonders with engaging visuals and clickable elements. Highlights dynamic content handling and front-end interactivity.",
            technologies: "HTML, CSS, JavaScript",
            live: "https://danishcorder.github.io/World-Wonders/",
            github: "https://github.com/danishcorder/World-Wonders"
        },
        {
            name: "Data Dashboard",
            description: "A visual dashboard for key metrics and analytics using charts and tables to help interpret data quickly. Demonstrates data visualization skills and clear UI presentation.",
            technologies: "HTML, CSS, JavaScript",
            live: "https://danishcorder.github.io/DatadashBoard2/",
            github: "https://github.com/danishcorder/DatadashBoard2"
        },
        {
            name: "AI Agent CLine",
            description: "AI-driven conversational agent capable of interpreting text and automating responses. Shows practical experience with AI tools and intelligent automation.",
            technologies: "Python, AI libraries, Web APIs",
            live: "https://muhammaddanish-sage.vercel.app/ai-agent-cline",
            github: "https://github.com/username/ai-agent-cline"
        },
        {
            name: "Python Project",
            description: "Backend or scripting project solving real-world problems using Python. Highlights problem-solving ability and clean coding practices.",
            technologies: "Python",
            live: "https://muhammaddanish-sage.vercel.app/python-project",
            github: "https://github.com/username/python-project"
        },
        {
            name: "API Key Generator",
            description: "Tool to generate and manage API keys securely for developers. Demonstrates backend logic and security awareness.",
            technologies: "Python",
            live: "https://muhammaddanish-sage.vercel.app/api-key-generator",
            github: "https://github.com/username/api-key-generator"
        },
        {
            name: "Scientopy",
            description: "Python-based scientific computing tool for data analysis and computation. Simplifies common scientific tasks and highlights analytical skills.",
            technologies: "Python",
            live: "https://muhammaddanish-sage.vercel.app/scientopy",
            github: "https://github.com/username/scientopy"
        },
        {
            name: "Quantum Computing",
            description: "Exploratory project focused on quantum computing concepts, including simulations and theoretical implementations. Demonstrates interest in advanced computing domains.",
            technologies: "Python",
            live: "https://muhammaddanish-sage.vercel.app/quantum-computing",
            github: "https://github.com/username/quantum-computing"
        }
    ],
    
    services: [
        {
            name: "Data Analysis & Reporting",
            description: "Provides actionable insights by analyzing datasets, visualizing results, and creating comprehensive reports. Applied in Data Dashboard, Banking Data Analyst, and other analytical projects."
        },
        {
            name: "Python Scripting & Automation",
            description: "Develops efficient Python scripts to automate repetitive tasks, improve workflow, and support project requirements. Demonstrated in AI Agent CLine, Python Project, and API Key Generator."
        },
        {
            name: "Mathematical Modeling & Analytics",
            description: "Creates mathematical and statistical models to solve real-world problems, including vector/tensor assignments, Kronecker Delta projects, and scientific computing with Scientopy."
        },
        {
            name: "AI/ML Proof-of-Concept Projects",
            description: "Designs and implements AI or machine learning prototypes to demonstrate concepts, automate tasks, or test innovative solutions. Applied in AI Agent CLine and other experimental projects."
        }
    ],
    
    goals: "Seeking internships in AI, Data Science, and Analytics",
    
    contact: {
        email: "muhaammadanish2327@gmail.com",
        portfolio: "https://muhammaddanish-sage.vercel.app/",
        github: "github.com/danishcorder"
    }
};

// Contact footer for all responses
const contactFooter = `
    <div style="margin-top: 16px; padding-top: 12px; border-top: 1px solid #E2E8F0;">
        <p style="font-size: 11px; color: #64748B; margin-bottom: 6px;">📬 Get in touch:</p>
        <p style="font-size: 12px;">
            <a href="mailto:muhaammadanish2327@gmail.com" style="color: #3B82F6; text-decoration: none; margin-right: 12px;">✉️ muhaammadanish2327@gmail.com</a>
            <a href="https://muhammaddanish-sage.vercel.app/" target="_blank" style="color: #3B82F6; text-decoration: none;">🌐 muhammaddanish-sage.vercel.app</a>
        </p>
    </div>
`;

// Chat Responses
const responses = {
    // Top Skills - prioritized
    topSkills: () => {
        const topSkillsList = portfolioData.skills.slice(0, 5);
        return `
            <div class="section-header">
                <span class="section-icon">⭐</span>
                <h2>Top Skills</h2>
            </div>
            ${topSkillsList.map((skill, index) => `
                <div class="skill-card" style="border-left: 3px solid ${index === 0 ? '#3b82f6' : index === 1 ? '#8b5cf6' : index === 2 ? '#10b981' : '#64748b'};">
                    <h3>${index + 1}. ${skill.name}</h3>
                    <p>${skill.description}</p>
                </div>
            `).join('')}
            <p class="summary-text">These are Muhammad Danish's core competencies that make him stand out as a candidate.</p>
            ${contactFooter}
        `;
    },
    
    // Number of skills
    nSkills: (num) => {
        const limitedSkills = portfolioData.skills.slice(0, num);
        return `
            <div class="section-header">
                <span class="section-icon">💼</span>
                <h2>Top ${num} Skills</h2>
            </div>
            ${limitedSkills.map(skill => `
                <div class="skill-card">
                    <h3>${skill.name}</h3>
                    <p>${skill.description}</p>
                </div>
            `).join('')}
            ${contactFooter}
        `;
    },
    
    // Skills with data projects at top
    skillsWithDataProjects: () => {
        const dataSkills = portfolioData.skills.filter(s => 
            s.name.includes('Data') || s.name.includes('Python') || s.name.includes('Statistics')
        );
        const otherSkills = portfolioData.skills.filter(s => 
            !s.name.includes('Data') && !s.name.includes('Python') && !s.name.includes('Statistics')
        );
        return `
            <div class="section-header">
                <span class="section-icon">💼</span>
                <h2>Technical Skills</h2>
            </div>
            <p style="color: var(--accent-blue); margin-bottom: 16px;">🔹 Data Analysis Skills:</p>
            ${dataSkills.map(skill => `
                <div class="skill-card" style="border-left: 3px solid #3b82f6;">
                    <h3>${skill.name}</h3>
                    <p>${skill.description}</p>
                </div>
            `).join('')}
            <p style="color: var(--text-muted); margin: 16px 0;">Other Skills:</p>
            ${otherSkills.map(skill => `
                <div class="skill-card">
                    <h3>${skill.name}</h3>
                    <p>${skill.description}</p>
                </div>
            `).join('')}
            ${contactFooter}
        `;
    },
    
    // Data Analysis Skills
    dataAnalysisSkills: () => `
        <div class="section-header">
            <span class="section-icon">📊</span>
            <h2>Data Analysis Skills</h2>
        </div>
        <div class="skill-card" style="border-left: 3px solid #3b82f6;">
            <h3>Python & Pandas</h3>
            <p>Proficient in Python and Pandas for data cleaning, manipulation, and analysis. Applied in Data Dashboard and Banking Data Analyst projects.</p>
        </div>
        <div class="skill-card" style="border-left: 3px solid #3b82f6;">
            <h3>Data Visualization</h3>
            <p>Capable of presenting insights visually through charts, dashboards, and plots. Demonstrated in Data Dashboard.</p>
        </div>
        <div class="skill-card" style="border-left: 3px solid #3b82f6;">
            <h3>Excel</h3>
            <p>Experienced in Excel for data visualization, reporting, and statistical calculations.</p>
        </div>
        <div class="skill-card" style="border-left: 3px solid #3b82f6;">
            <h3>Statistics & Mathematics</h3>
            <p>Strong foundation in statistics for solving analytical problems.</p>
        </div>
        <p class="summary-text">These skills have been applied in Data Dashboard, Banking Data Analyst, and Scientopy projects.</p>
        ${contactFooter}
    `,
    
    // Programming Skills
    programmingSkills: () => `
        <div class="section-header">
            <span class="section-icon">💻</span>
            <h2>Programming Skills</h2>
        </div>
        <div class="skill-card" style="border-left: 3px solid #8b5cf6;">
            <h3>Python</h3>
            <p>Proficient in Python for scripting, automation, and data analysis. Applied in AI Agent CLine, Python Project, and Scientopy.</p>
        </div>
        <div class="skill-card" style="border-left: 3px solid #8b5cf6;">
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript for building responsive and interactive websites.</p>
        </div>
        <p class="summary-text">Muhammad Danish demonstrates strong coding abilities in both backend (Python) and frontend (HTML/CSS/JS) development.</p>
        ${contactFooter}
    `,
    
    // Web Dev Skills
    webDevSkills: () => `
        <div class="section-header">
            <span class="section-icon">🌐</span>
            <h2>Web Development Skills</h2>
        </div>
        <div class="skill-card" style="border-left: 3px solid #10b981;">
            <h3>HTML & CSS</h3>
            <p>Skilled in building responsive layouts with modern CSS, animations, and sleek UI design.</p>
        </div>
        <div class="skill-card" style="border-left: 3px solid #10b981;">
            <h3>JavaScript</h3>
            <p>Experienced in creating interactive elements and dynamic content handling.</p>
        </div>
        <p class="summary-text">Applied in Top 2025 Level Site, World Wonders, and Data Dashboard projects.</p>
        ${contactFooter}
    `,
    
    // Python Skills
    pythonSkills: () => `
        <div class="section-header">
            <span class="section-icon">🐍</span>
            <h2>Python Skills</h2>
        </div>
        <div class="skill-card" style="border-left: 3px solid #f59e0b;">
            <h3>Python Programming</h3>
            <p>Proficient in Python for scripting, automation, and data analysis. Applied in AI Agent CLine, Python Project, and Scientopy.</p>
        </div>
        <div class="skill-card" style="border-left: 3px solid #f59e0b;">
            <h3>Pandas & Data Analysis</h3>
            <p>Skilled in using Pandas for data cleaning, manipulation, and analysis.</p>
        </div>
        <div class="skill-card" style="border-left: 3px solid #f59e0b;">
            <h3>AI Automation</h3>
            <p>Experienced in building automated AI workflows and scripts.</p>
        </div>
        <p class="summary-text">Python is Muhammad Danish's strongest programming language, used across most of his projects.</p>
        ${contactFooter}
    `,
    
    // AI Skills
    aiSkills: () => `
        <div class="section-header">
            <span class="section-icon">🤖</span>
            <h2>AI & Machine Learning Skills</h2>
        </div>
        <div class="skill-card" style="border-left: 3px solid #ef4444;">
            <h3>Basic Machine Learning</h3>
            <p>Practical understanding of ML concepts applied in AI Agent CLine project.</p>
        </div>
        <div class="skill-card" style="border-left: 3px solid #ef4444;">
            <h3>AI Automation & Scripting</h3>
            <p>Experienced in building automated AI workflows to improve productivity.</p>
        </div>
        <div class="skill-card" style="border-left: 3px solid #ef4444;">
            <h3>AI Agent Development</h3>
            <p>Built AI Agent CLine - a conversational agent for text interpretation and automated responses.</p>
        </div>
        <div class="skill-card" style="border-left: 3px solid #ef4444;">
            <h3>Open Source AI Agents</h3>
            <p>Experience working with free and open source AI agents like <strong>Claude (Open Source)</strong>, <strong>Llama</strong>, <strong>Mistral</strong>, <strong>OpenChat</strong>, and similar models similar to ChatGPT for building intelligent conversational agents.</p>
        </div>
        <p class="summary-text">AI skills demonstrated through AI Agent CLine and Quantum Computing projects.</p>
        ${contactFooter}
    `,
    
    // Data Projects
    dataProjects: () => {
        const dataProj = portfolioData.projects.filter(p => 
            p.name.includes('Dashboard') || p.name.includes('Scientopy')
        );
        return `
            <div class="section-header">
                <span class="section-icon">📊</span>
                <h2>Data Analysis Projects</h2>
            </div>
            ${dataProj.map(project => `
                <div class="project-card">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <p class="tech-tag"><strong>Technologies:</strong> ${project.technologies}</p>
                    <div class="link-buttons">
                        <a href="${project.live}" target="_blank" class="btn-link">Live Demo ↗</a>
                        <a href="${project.github}" target="_blank" class="btn-link btn-secondary">GitHub ↗</a>
                    </div>
                </div>
            `).join('')}
            <p class="summary-text">These projects showcase Muhammad Danish's data analysis and visualization capabilities.</p>
            ${contactFooter}
        `;
    },
    
    // AI Projects
    aiProjects: () => {
        const aiProj = portfolioData.projects.filter(p => 
            p.name.includes('AI') || p.name.includes('Quantum')
        );
        return `
            <div class="section-header">
                <span class="section-icon">🤖</span>
                <h2>AI & ML Projects</h2>
            </div>
            ${aiProj.map(project => `
                <div class="project-card">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <p class="tech-tag"><strong>Technologies:</strong> ${project.technologies}</p>
                    <div class="link-buttons">
                        <a href="${project.live}" target="_blank" class="btn-link">Live Demo ↗</a>
                        <a href="${project.github}" target="_blank" class="btn-link btn-secondary">GitHub ↗</a>
                    </div>
                </div>
            `).join('')}
            <p class="summary-text">These projects demonstrate practical AI and machine learning implementation.</p>
            ${contactFooter}
        `;
    },
    
    // Web Projects
    webProjects: () => {
        const webProj = portfolioData.projects.filter(p => 
            p.name.includes('Site') || p.name.includes('World')
        );
        return `
            <div class="section-header">
                <span class="section-icon">🌐</span>
                <h2>Web Development Projects</h2>
            </div>
            ${webProj.map(project => `
                <div class="project-card">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <p class="tech-tag"><strong>Technologies:</strong> ${project.technologies}</p>
                    <div class="link-buttons">
                        <a href="${project.live}" target="_blank" class="btn-link">Live Demo ↗</a>
                        <a href="${project.github}" target="_blank" class="btn-link btn-secondary">GitHub ↗</a>
                    </div>
                </div>
            `).join('')}
            <p class="summary-text">These projects showcase front-end development and UI/UX skills.</p>
            ${contactFooter}
        `;
    },
    
    // Python Projects
    pythonProjects: () => {
        const pyProj = portfolioData.projects.filter(p => 
            p.name.includes('Python') || p.name.includes('API') || p.name.includes('Scientopy') || p.name.includes('Quantum')
        );
        return `
            <div class="section-header">
                <span class="section-icon">🐍</span>
                <h2>Python Projects</h2>
            </div>
            ${pyProj.map(project => `
                <div class="project-card">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <p class="tech-tag"><strong>Technologies:</strong> ${project.technologies}</p>
                    <div class="link-buttons">
                        <a href="${project.live}" target="_blank" class="btn-link">Live Demo ↗</a>
                        <a href="${project.github}" target="_blank" class="btn-link btn-secondary">GitHub ↗</a>
                    </div>
                </div>
            `).join('')}
            <p class="summary-text">Python-based projects demonstrating backend development and scripting skills.</p>
            ${contactFooter}
        `;
    },
    
    // Strengths
    strengths: () => `
        <div class="section-header">
            <span class="section-icon">💪</span>
            <h2>Key Strengths</h2>
        </div>
        <ul class="hire-list">
            <li>📊 Strong analytical and problem-solving skills</li>
            <li>🐍 Proficient in Python for data analysis and automation</li>
            <li>🌐 Web development skills (HTML, CSS, JavaScript)</li>
            <li>🤖 Practical AI/ML knowledge</li>
            <li>📈 Data visualization and reporting abilities</li>
            <li>🎓 Solid mathematics background</li>
            <li>🚀 Strong project portfolio with live demos</li>
        </ul>
        ${contactFooter}
    `,
    
    // Goals
    goals: () => `
        <div class="section-header">
            <span class="section-icon">🎯</span>
            <h2>Career Goals</h2>
        </div>
        <p>Muhammad Danish is actively seeking internships in:</p>
        <ul class="hire-list">
            <li>🤖 Artificial Intelligence (AI)</li>
            <li>📊 Data Science</li>
            <li>📈 Analytics</li>
        </ul>
        <p class="goal-text">His goal is to apply his skills in real-world projects while continuing to learn and grow in the data science and AI field.</p>
        ${contactFooter}
    `,
    
    // Technologies
    technologies: () => `
        <div class="section-header">
            <span class="section-icon">🛠️</span>
            <h2>Tech Stack</h2>
        </div>
        <p style="margin-bottom: 16px;"><strong>Programming Languages:</strong></p>
        <div class="skill-card">
            <h3>Python, HTML, CSS, JavaScript</h3>
        </div>
        <p style="margin: 16px 0;"><strong>Data Tools:</strong></p>
        <div class="skill-card">
            <h3>Pandas, Excel, Matplotlib</h3>
        </div>
        <p style="margin: 16px 0;"><strong>AI/ML:</strong></p>
        <div class="skill-card">
            <h3>AI Libraries, Web APIs</h3>
        </div>
        <p class="summary-text">Muhammad Danish uses these technologies to build data analysis, web development, and AI projects.</p>
        ${contactFooter}
    `,
    
    // Free AI Agents
    freeAI: () => `
        <div class="section-header">
            <span class="section-icon">🧠</span>
            <h2>Free & Open Source AI Agents</h2>
        </div>
        <p style="margin-bottom: 16px;">Muhammad Danish has experience working with various free and open source AI agents similar to ChatGPT:</p>
        <div class="skill-card" style="border-left: 3px solid #10b981;">
            <h3>🤖 Llama (Meta)</h3>
            <p>Open source large language model available for free download and local deployment.</p>
        </div>
        <div class="skill-card" style="border-left: 3px solid #10b981;">
            <h3>🧠 Mistral AI</h3>
            <p>Open source AI models offering free access and excellent performance.</p>
        </div>
        <div class="skill-card" style="border-left: 3px solid #10b981;">
            <h3>💬 Claude (Open Source Alternatives)</h3>
            <p>Free alternatives to Claude for building conversational AI agents.</p>
        </div>
        <div class="skill-card" style="border-left: 3px solid #10b981;">
            <h3>💻 OpenChat</h3>
            <p>Free and open source chat model for building AI assistants.</p>
        </div>
        <div class="skill-card" style="border-left: 3px solid #10b981;">
            <h3>🔓 GPT4All</h3>
            <p>Free-to-use open source AI models that run locally on any computer.</p>
        </div>
        <p class="summary-text">Muhammad Danish can build AI agents using these free open-source alternatives, making AI automation accessible without API costs.</p>
        ${contactFooter}
    `,
    
    // Hobbies
    hobbies: () => `
        <div class="section-header">
            <span class="section-icon">🎯</span>
            <h2>Hobbies & Interests</h2>
        </div>
        <p>Muhammad Danish enjoys the following activities outside of technology:</p>
        <ul class="hire-list">
            <li>🏏 Playing and watching cricket</li>
            <li>🧠 Exploring new AI techniques and technologies</li>
            <li>📚 Continuous learning to expand technical and analytical skills</li>
        </ul>
        <p class="summary-text">Cricket helps him stay active and develops teamwork and strategic thinking skills.</p>
        ${contactFooter}
    `,
    
    // Career Goals
    careerGoals: () => `
        <div class="section-header">
            <span class="section-icon">🚀</span>
            <h2>Career Goals</h2>
        </div>
        <p>Muhammad Danish aims to secure a position in a <strong>top software or data analysis company</strong>, where he can apply his skills in Python, AI, data analytics, and problem-solving to contribute meaningfully.</p>
        <p style="margin-top: 12px;">In the near future, he hopes to gain practical experience in <strong>AI and data analytics roles</strong>, building expertise while contributing to impactful projects.</p>
        <p class="goal-text">📧 Contact: muhaammadanish2327@gmail.com</p>
        ${contactFooter}
    `,
    
    // Personal Aspirations
    personalAspirations: () => `
        <div class="section-header">
            <span class="section-icon">💫</span>
            <h2>Personal Aspirations</h2>
        </div>
        <p>Muhammad Danish's personal goals and motivations include:</p>
        <ul class="hire-list">
            <li>🕋 Sending his parents for Umrah in Saudi Arabia - reflecting his personal values, gratitude, and dedication to family</li>
            <li>📈 Continuously improving professionally in AI and data analytics</li>
            <li>👨‍👩‍👧 Taking care of his family and helping them achieve their spiritual goals</li>
            <li>🎓 Passion for lifelong learning and self-improvement</li>
        </ul>
        <p class="summary-text">His motivation comes from a blend of professional growth and personal responsibilities.</p>
        ${contactFooter}
    `,
    
    // Greeting
    greeting: () => `
        <div class="section-header">
            <span class="section-icon">👋</span>
            <h2>Welcome!</h2>
        </div>
        <p>Hello! Welcome to Muhammad Danish's Portfolio Chatbot. 🤖</p>
        <p style="margin-top: 12px;">I'm here to assist you with comprehensive information about Muhammad Danish's <strong>skills</strong>, <strong>projects</strong>, <strong>services</strong>, <strong>career goals</strong>, <strong>hobbies</strong>, and more.</p>
        <p style="margin-top: 12px;">Feel free to ask me anything or use the quick action buttons below! I can help you understand his expertise, view his projects, or get in touch with him.</p>
        <p class="goal-text">How may I assist you today?</p>
        ${contactFooter}
    `,
    
    // Thanks
    thanks: () => `
        <div class="section-header">
            <span class="section-icon">😊</span>
            <h2>You're Welcome!</h2>
        </div>
        <p>Thank you so much for your interest in Muhammad Danish's profile! 🙏</p>
        <p style="margin-top: 12px;">I'm happy I could help. If you have any more questions about his skills, projects, or would like to get in touch, please don't hesitate to ask.</p>
        <p style="margin-top: 12px;">Muhammad Danish is currently seeking internships in AI, Data Science, and Analytics. Feel free to contact him for opportunities!</p>
        <p class="summary-text">Is there anything else you'd like to know?</p>
        ${contactFooter}
    `,
    
    // Goodbye
    goodbye: () => `
        <div class="section-header">
            <span class="section-icon">👋</span>
            <h2>Goodbye!</h2>
        </div>
        <p>Thank you for visiting Muhammad Danish's Portfolio Chatbot! 😊</p>
        <p style="margin-top: 12px;">It was my pleasure to assist you. If you need any more information about his skills, projects, or services, feel free to return anytime.</p>
        <p style="margin-top: 12px;">Have a wonderful day, and I hope to hear from you soon!</p>
        <p class="goal-text">Best regards! 📬 Contact: muhaammadanish2327@gmail.com</p>
        ${contactFooter}
    `,
    
    // Help / What can you do
    help: () => `
        <div class="section-header">
            <span class="section-icon">💡</span>
            <h2>How Can I Help You?</h2>
        </div>
        <p>I'm Muhammad Danish's AI-powered portfolio assistant! Here's what I can help you with:</p>
        <ul class="hire-list">
            <li>💼 <strong>Skills</strong> - Technical expertise and abilities</li>
            <li>🚀 <strong>Projects</strong> - Portfolio work with live demos</li>
            <li>🛠️ <strong>Services</strong> - What he can offer</li>
            <li>💡 <strong>Hire Me</strong> - Why you should hire him</li>
            <li>🎓 <strong>Education</strong> - Academic background</li>
            <li>🏏 <strong>Hobbies</strong> - Personal interests</li>
            <li>🎯 <strong>Career Goals</strong> - Future aspirations</li>
            <li>📬 <strong>Contact</strong> - Get in touch</li>
        </ul>
        <p class="summary-text">Just ask me anything about Muhammad Danish, and I'll provide detailed answers!</p>
        ${contactFooter}
    `,
    
    // Who are you
    whoAreYou: () => `
        <div class="section-header">
            <span class="section-icon">🤖</span>
            <h2>About This Chatbot</h2>
        </div>
        <p>I'm an AI-powered virtual assistant representing <strong>Muhammad Danish</strong>!</p>
        <p style="margin-top: 12px;">I'm designed to provide you with comprehensive information about his:</p>
        <ul class="hire-list">
            <li>Professional skills and expertise</li>
            <li>Portfolio projects with live demos</li>
            <li>Services offered</li>
            <li>Career background and goals</li>
            <li>Personal interests and aspirations</li>
            <li>Contact information</li>
        </ul>
        <p class="summary-text">Think of me as your personal guide to learning everything about Muhammad Danish!</p>
        ${contactFooter}
    `,
    
    // Helpful Default - for unrecognized questions
    helpfulDefault: (input) => `
        <div class="section-header">
            <span class="section-icon">💬</span>
            <h2>Let Me Help You With That</h2>
        </div>
        <p>I understand you're asking about "<strong>${input}</strong>". While I specialize in Muhammad Danish's portfolio, I'd be happy to help guide you!</p>
        <p style="margin-top: 12px;">Here are some topics I can help you with:</p>
        <ul class="hire-list">
            <li>💼 His technical skills (Python, Data Analysis, Web Dev, AI)</li>
            <li>🚀 His projects with live demos and GitHub links</li>
            <li>🛠️ Services he offers</li>
            <li>💡 Why you should hire him</li>
            <li>🎓 His education in Mathematics</li>
            <li>🏏 His hobbies and interests</li>
            <li>🎯 Career goals and aspirations</li>
            <li>📬 How to contact him</li>
        </ul>
        <p class="summary-text">Please feel free to ask about any of these topics!</p>
        ${contactFooter}
    `,
    
    skills: () => `
        <div class="section-header">
            <span class="section-icon">💼</span>
            <h2>Technical Skills</h2>
        </div>
        ${portfolioData.skills.map(skill => `
            <div class="skill-card">
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
            </div>
        `).join('')}
        <p class="summary-text">Muhammad Danish has applied these skills in multiple projects, demonstrating strong analytical and programming abilities in data analysis, web development, and AI automation.</p>
        ${contactFooter}
    `,
    
    projects: () => `
        <div class="section-header">
            <span class="section-icon">🚀</span>
            <h2>Featured Projects</h2>
        </div>
        ${portfolioData.projects.map(project => `
            <div class="project-card">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <p class="tech-tag"><strong>Technologies:</strong> ${project.technologies}</p>
                <div class="link-buttons">
                    <a href="${project.live}" target="_blank" class="btn-link">Live Demo ↗</a>
                    <a href="${project.github}" target="_blank" class="btn-link btn-secondary">GitHub ↗</a>
                </div>
            </div>
        `).join('')}
        ${contactFooter}
    `,
    
    services: () => `
        <div class="section-header">
            <span class="section-icon">🛠️</span>
            <h2>Services Offered</h2>
        </div>
        ${portfolioData.services.map(service => `
            <div class="service-card">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
            </div>
        `).join('')}
        <p class="summary-text">Muhammad Danish is available for freelance projects and internships in these areas.</p>
        ${contactFooter}
    `,
    
    hire: () => `
        <div class="section-header">
            <span class="section-icon">💡</span>
            <h2>Why Hire Muhammad Danish?</h2>
        </div>
        <ul class="hire-list">
            <li>✨ Combines strong analytical skills with AI knowledge</li>
            <li>💻 Hands-on project experience in Python, web development, data analysis, and AI automation</li>
            <li>🎯 Consistently delivers high-quality results and solves complex problems efficiently</li>
            <li>🎓 Currently seeking internships in AI, Data Science, and Analytics</li>
        </ul>
        <div class="cta-box">
            <p>📩 If you are looking for a dedicated professional who can contribute immediately to your team, <strong>contact him at muhaammadanish2327@gmail.com</strong></p>
        </div>
        ${contactFooter}
    `,
    
    about: () => `
        <div class="section-header">
            <span class="section-icon">👤</span>
            <h2>About Muhammad Danish</h2>
        </div>
        <p>He is a <strong>Mathematics Student</strong> with expertise in <strong>Data Analysis</strong>, <strong>Web Development</strong>, and <strong>AI Projects</strong>.</p>
        <p>His portfolio demonstrates proficiency in Python, data visualization, and AI automation. He has successfully completed multiple projects showcasing his ability to tackle complex analytical problems.</p>
        <p class="goal-text"><strong>🎯 Current Goal:</strong> ${portfolioData.goals}</p>
        ${contactFooter}
    `,
    
    contact: () => `
        <div class="section-header">
            <span class="section-icon">📬</span>
            <h2>Contact Information</h2>
        </div>
        <div class="contact-card">
            <div class="contact-item">
                <span class="contact-icon">📧</span>
                <div>
                    <strong>Email</strong>
                    <a href="mailto:muhaammadanish2327@gmail.com">muhaammadanish2327@gmail.com</a>
                </div>
            </div>
            <div class="contact-item">
                <span class="contact-icon">💻</span>
                <div>
                    <strong>GitHub</strong>
                    <a href="https://github.com/danishcorder" target="_blank">github.com/danishcorder</a>
                </div>
            </div>
            <div class="contact-item">
                <span class="contact-icon">🌐</span>
                <div>
                    <strong>Portfolio</strong>
                    <a href="https://muhammaddanish-sage.vercel.app/" target="_blank">muhammaddanish-sage.vercel.app</a>
                </div>
            </div>
        </div>
        <p class="summary-text">Feel free to reach out for collaboration or internship opportunities!</p>
        ${contactFooter}
    `,
    
    default: () => `
        <div class="section-header">
            <span class="section-icon">💬</span>
            <h2>How Can I Help?</h2>
        </div>
        <p>I currently answer questions related to Muhammad Danish's portfolio, skills, and projects.</p>
        <p style="margin-top: 8px;">Try asking about:</p>
        <ul>
            <li>His skills and expertise</li>
            <li>His projects and work</li>
            <li>Services he offers</li>
            <li>Why you should hire him</li>
            <li>How to contact him</li>
        </ul>
        ${contactFooter}
    `
};

// DOM Elements
const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');
const clearBtn = document.getElementById('clearBtn');
const quickBtns = document.querySelectorAll('.quick-btn');

// Helper Functions
function getTimestamp() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function createMessageElement(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = content;
    
    const timestamp = document.createElement('span');
    timestamp.className = 'timestamp';
    timestamp.textContent = isUser ? 'You' : getTimestamp();
    
    messageDiv.appendChild(contentDiv);
    messageDiv.appendChild(timestamp);
    
    return messageDiv;
}

function createTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message';
    typingDiv.id = 'typingIndicator';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'typing-indicator';
    
    for (let i = 0; i < 3; i++) {
        const span = document.createElement('span');
        contentDiv.appendChild(span);
    }
    
    const timestamp = document.createElement('span');
    timestamp.className = 'timestamp';
    timestamp.textContent = 'Typing...';
    
    typingDiv.appendChild(contentDiv);
    typingDiv.appendChild(timestamp);
    
    return typingDiv;
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.remove();
    }
}

// Get Response based on user input
function getBotResponse(input) {
    const lowerInput = input.toLowerCase();
    
    // ===== SKILLS VARIATIONS =====
    // Top skills / main skills / most important skills
    if (lowerInput.includes('top skill') || lowerInput.includes('main skill') || lowerInput.includes('most important') || lowerInput.includes('key skill') || lowerInput.includes('strongest')) {
        return responses.topSkills();
    }
    
    // Data analysis skills specifically
    if (lowerInput.includes('data analysis') || lowerInput.includes('data analyst')) {
        return responses.dataAnalysisSkills();
    }
    
    // Programming / coding skills
    if (lowerInput.includes('programming') || lowerInput.includes('coding') || lowerInput.includes('code')) {
        return responses.programmingSkills();
    }
    
    // Web development skills
    if (lowerInput.includes('web development') || lowerInput.includes('web dev') || lowerInput.includes('frontend') || lowerInput.includes('front-end')) {
        return responses.webDevSkills();
    }
    
    // Python specific
    if (lowerInput.includes('python')) {
        return responses.pythonSkills();
    }
    
    // AI / Machine Learning skills
    if (lowerInput.includes('ai') || lowerInput.includes('machine learning') || lowerInput.includes('ml') || lowerInput.includes('artificial intelligence')) {
        return responses.aiSkills();
    }
    
    // Number of skills (e.g., "3 skills", "few skills")
    const numberMatch = lowerInput.match(/(\d+)\s*(skill|top)/);
    if (numberMatch || lowerInput.includes('few skill') || lowerInput.includes('some skill')) {
        const num = numberMatch ? parseInt(numberMatch[1]) : 3;
        return responses.nSkills(num);
    }
    
    // General skills search - show data analysis projects at top
    if (lowerInput.includes('skill')) {
        return responses.skillsWithDataProjects();
    }
    
    // ===== PROJECTS VARIATIONS =====
    // Data analysis projects
    if (lowerInput.includes('data analysis project') || lowerInput.includes('data project')) {
        return responses.dataProjects();
    }
    
    // AI projects
    if (lowerInput.includes('ai project') || lowerInput.includes('machine learning project') || lowerInput.includes('ml project')) {
        return responses.aiProjects();
    }
    
    // Web projects
    if (lowerInput.includes('web project') || lowerInput.includes('website')) {
        return responses.webProjects();
    }
    
    // Python projects
    if (lowerInput.includes('python project')) {
        return responses.pythonProjects();
    }
    
    // All projects
    if (lowerInput.includes('project')) {
        return responses.projects();
    }
    
    // ===== SERVICES VARIATIONS =====
    if (lowerInput.includes('service') || lowerInput.includes('offer') || lowerInput.includes('what can you do')) {
        return responses.services();
    }
    
    // ===== HIRE VARIATIONS =====
    if (lowerInput.includes('hire') || lowerInput.includes('employ') || lowerInput.includes('why') || lowerInput.includes('should i hire') || lowerInput.includes('best candidate')) {
        return responses.hire();
    }
    
    // ===== ABOUT VARIATIONS =====
    if (lowerInput.includes('about') || lowerInput.includes('who') || lowerInput.includes('background') || lowerInput.includes('introduce')) {
        return responses.about();
    }
    
    // ===== CONTACT VARIATIONS =====
    if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('email') || lowerInput.includes('linkedin') || lowerInput.includes('github') || lowerInput.includes('portfolio')) {
        return responses.contact();
    }
    
    // ===== EDUCATION VARIATIONS =====
    if (lowerInput.includes('education') || lowerInput.includes('study') || lowerInput.includes('university') || lowerInput.includes('college') || lowerInput.includes('degree') || lowerInput.includes('qualification')) {
        return `
            <div class="section-header">
                <span class="section-icon">🎓</span>
                <h2>Education</h2>
            </div>
            <p>Muhammad Danish is currently studying <strong>Mathematics</strong> at university.</p>
            <p style="margin-top: 12px;">His mathematical background provides him with strong analytical and problem-solving skills, which he applies to data analysis, AI, and programming projects.</p>
            ${contactFooter}
        `;
    }
    
    // ===== EXPERIENCE VARIATIONS =====
    if (lowerInput.includes('experience') || lowerInput.includes('internship') || lowerInput.includes('job') || lowerInput.includes('work') || lowerInput.includes('career')) {
        return `
            <div class="section-header">
                <span class="section-icon">💼</span>
                <h2>Experience & Goals</h2>
            </div>
            <p>Muhammad Danish is actively seeking <strong>internships</strong> in:</p>
            <ul>
                <li>Artificial Intelligence (AI)</li>
                <li>Data Science</li>
                <li>Analytics</li>
            </ul>
            <p style="margin-top: 12px;">He has completed several projects demonstrating practical experience in data analysis, Python programming, and AI automation.</p>
            ${contactFooter}
        `;
    }
    
    // ===== STRENGTHS/ACHIEVEMENTS =====
    if (lowerInput.includes('strength') || lowerInput.includes('achievement') || lowerInput.includes('accomplishment')) {
        return responses.strengths();
    }
    
    // ===== GOALS =====
    if (lowerInput.includes('goal') || lowerInput.includes('objective') || lowerInput.includes('aspiration')) {
        return responses.goals();
    }
    
    // ===== TECHNOLOGIES =====
    if (lowerInput.includes('technology') || lowerInput.includes('tech stack') || lowerInput.includes('tools')) {
        return responses.technologies();
    }
    
    // ===== FREE AI AGENTS / CHATGPT =====
    if (lowerInput.includes('free ai') || lowerInput.includes('open source ai') || lowerInput.includes('chatgpt') || lowerInput.includes('claude') || lowerInput.includes('llama') || lowerInput.includes('mistral') || lowerInput.includes('free chatbot')) {
        return responses.freeAI();
    }
    
    // ===== HOBBIES =====
    if (lowerInput.includes('hobby') || lowerInput.includes('hobbies') || lowerInput.includes('interest') || lowerInput.includes('play') || lowerInput.includes('watch') || lowerInput.includes('outside work') || lowerInput.includes('cricket') || lowerInput.includes('free time') || lowerInput.includes('leisure')) {
        return responses.hobbies();
    }
    
    // ===== CAREER GOALS =====
    if (lowerInput.includes('career') || lowerInput.includes('future') || lowerInput.includes('goal') || lowerInput.includes('aim') || lowerInput.includes('position') || lowerInput.includes('company')) {
        return responses.careerGoals();
    }
    
    // ===== PERSONAL ASPIRATIONS =====
    if (lowerInput.includes('aspiration') || lowerInput.includes('dream') || lowerInput.includes('motivation') || lowerInput.includes('personal goal') || lowerInput.includes('parents') || lowerInput.includes('umrah')) {
        return responses.personalAspirations();
    }
    
    // ===== GREETINGS =====
    if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey') || lowerInput.includes('greetings') || lowerInput.includes('good morning') || lowerInput.includes('good afternoon') || lowerInput.includes('good evening')) {
        return responses.greeting();
    }
    
    // ===== THANKS =====
    if (lowerInput.includes('thank') || lowerInput.includes('thanks') || lowerInput.includes('appreciate')) {
        return responses.thanks();
    }
    
    // ===== GOODBYE =====
    if (lowerInput.includes('bye') || lowerInput.includes('goodbye') || lowerInput.includes('see you') || lowerInput.includes('talk to you later')) {
        return responses.goodbye();
    }
    
    // ===== HELP =====
    if (lowerInput.includes('help') || lowerInput.includes('what can you do') || lowerInput.includes('capabilities')) {
        return responses.help();
    }
    
    // ===== NAME =====
    if (lowerInput.includes('your name') || lowerInput.includes('who are you') || lowerInput.includes('what are you')) {
        return responses.whoAreYou();
    }
    
    // Default response - provide helpful info instead of saying "I don't know"
    return responses.helpfulDefault(input);
}

// Handle form submission
function handleSubmit(e) {
    e.preventDefault();
    
    const message = userInput.value.trim();
    if (!message) return;
    
    // Add user message
    const userMessage = createMessageElement(`<p>${message}</p>`, true);
    chatMessages.appendChild(userMessage);
    
    // Clear input
    userInput.value = '';
    
    // Scroll to bottom
    scrollToBottom();
    
    // Show typing indicator
    const typingIndicator = createTypingIndicator();
    chatMessages.appendChild(typingIndicator);
    scrollToBottom();
    
    // Simulate bot response delay
    setTimeout(() => {
        removeTypingIndicator();
        
        const botResponse = getBotResponse(message);
        const botMessage = createMessageElement(botResponse, false);
        chatMessages.appendChild(botMessage);
        
        scrollToBottom();
    }, 800 + Math.random() * 700);
}

// Handle quick action buttons
function handleQuickAction(e) {
    const question = e.target.dataset.question;
    if (question) {
        userInput.value = question;
        handleSubmit(new Event('submit'));
    }
}

// Handle clear chat
function handleClearChat() {
    chatMessages.innerHTML = `
        <div class="message bot-message">
            <div class="message-content">
                <div class="section-header">
                    <span class="section-icon">👋</span>
                    <h2>Welcome!</h2>
                </div>
                <p>Hi! I'm Muhammad Danish's virtual assistant. I can help you learn about his <strong>skills</strong>, <strong>projects</strong>, <strong>services</strong>, and <strong>experience</strong>.</p>
                <p>Feel free to ask me anything or use the quick buttons below!</p>
                ${contactFooter}
            </div>
            <span class="timestamp">Just now</span>
        </div>
    `;
    scrollToBottom();
}

// Event Listeners
chatForm.addEventListener('submit', handleSubmit);

quickBtns.forEach(btn => {
    btn.addEventListener('click', handleQuickAction);
});

clearBtn.addEventListener('click', handleClearChat);

// Initialize
scrollToBottom();
