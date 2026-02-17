// ===== Portfolio Chatbot - JavaScript =====

// Portfolio Data
const portfolioData = {
    name: "Muhammad Danish",
    field: "Mathematics Student | Data Analysis | Web Development | AI Projects",
    email: "muhaammaddanish2327@gmail.com",
    phone: "+92 326 7370173",
    location: "Khanewal, Pakistan",
    portfolio: "https://muhammaddanish-sage.vercel.app/",
    github: "https://github.com/danishcorder",
    cv: "Muhammadanish.CV",
    
    skills: [
        {
            name: "Python",
            description: "Proficient in Python for data analysis, automation, and web development. Experienced with Pandas, NumPy, and Matplotlib."
        },
        {
            name: "Data Analysis",
            description: "Skilled in analyzing datasets, creating visualizations, and generating actionable insights using Python and Excel."
        },
        {
            name: "Data Visualization",
            description: "Capable of presenting data through charts, dashboards, and interactive visualizations."
        },
        {
            name: "Web Development",
            description: "Building responsive websites using HTML, CSS, and JavaScript with focus on user experience."
        },
        {
            name: "MySQL",
            description: "Experienced in database management, queries, and DBMS operations."
        },
        {
            name: "AI Fundamentals",
            description: "Understanding of AI concepts, machine learning basics, and chatbot development."
        },
        {
            name: "Git & GitHub",
            description: "Version control and collaborative development workflows."
        },
        {
            name: "MS Office",
            description: "Proficient in Excel, Word, PowerPoint for data handling and presentations."
        }
    ],
    
    projects: [
        {
            name: "Portfolio Website",
            description: "Personal portfolio showcasing skills, projects, and achievements. Designed and deployed using HTML, CSS, JavaScript, and Vercel.",
            technologies: "HTML, CSS, JavaScript, Vercel",
            live: "https://muhammaddanish-sage.vercel.app/",
            github: "https://github.com/danishcorder"
        },
        {
            name: "Web Development Projects",
            description: "Developed responsive and accessible websites emphasizing user experience and performance.",
            technologies: "HTML, CSS, JavaScript",
            live: "https://muhammaddanish-sage.vercel.app/",
            github: "https://github.com/danishcorder"
        },
        {
            name: "Data Analysis Projects",
            description: "Performed exploratory data analysis and visualization using structured datasets.",
            technologies: "Python, MS Excel, MySQL",
            live: "https://muhammaddanish-sage.vercel.app/",
            github: "https://github.com/danishcorder"
        }
    ],
    
    services: [
        {
            name: "Data Analysis & Visualization",
            description: "Provides actionable insights by analyzing datasets, creating visualizations, and generating comprehensive reports using Python, Excel, and MySQL."
        },
        {
            name: "Web Development",
            description: "Develops responsive and user-friendly websites using HTML, CSS, and JavaScript with modern design principles."
        },
        {
            name: "Python Scripting & Automation",
            description: "Creates efficient Python scripts to automate tasks, process data, and improve workflow efficiency."
        },
        {
            name: "Chatbot Development",
            description: "Builds AI-powered conversational agents and chatbots for automation and customer service applications."
        }
    ],
    
    education: [
        {
            degree: "BS Mathematics",
            institution: "Bahauddin Zakariya University, Multan",
            year: "2023 – Present"
        },
        {
            degree: "Intermediate (ICS)",
            institution: "Punjab Group of Colleges, Kabirwala",
            year: "2021 – 2023",
            marks: "82%"
        },
        {
            degree: "Matriculation (Science)",
            institution: "Khanewal",
            year: "2019 – 2021",
            marks: "98%"
        }
    ],
    
    experience: [
        {
            title: "Mathematics Teacher",
            company: "Private Academy",
            year: "2022 – 2023",
            responsibilities: [
                "Taught mathematics using digital tools and interactive methods",
                "Designed analytical exercises for students",
                "Maintained high student engagement",
                "Used technology for visualization and assessment"
            ],
        }
    ],
    
    certifications: [
        {
            name: "Freelancing Course",
            issuer: "DigiSkills Pakistan",
            year: "2024"
        },
        {
            name: "MS Excel Certification",
            issuer: "DigiSkills Pakistan",
            year: "2023 – 2024"
        },
        {
            name: "Python Programming",
            issuer: "DigiSkills Pakistan",
            year: "2024 – 2025"
        }
    ],
    
    languages: [
        { language: "English", level: "Fluent" },
        { language: "Urdu", level: "Fluent" },
        { language: "Chinese", level: "Basic" }
    ],
    softSkills: [
        "Problem Solving",
        "Critical Thinking",
        "Creativity",
        "Teaching",
        "Communication"
    ],
    
    goals: "Seeking internships in AI, Data Science, and Web Development"
};

// Contact footer for all responses
const contactFooter = `
    <div style="margin-top: 16px; padding-top: 12px; border-top: 1px solid #E2E8F0;">
        <p style="font-size: 11px; color: #64748B; margin-bottom: 6px;">📬 Get in touch:</p>
        <p style="font-size: 12px;">
            <a href="mailto:muhaammaddanish2327@gmail.com" style="color: #3B82F6; text-decoration: none; margin-right: 12px;">✉️ muhaammaddanish2327@gmail.com</a>
            <a href="https://muhammaddanish-sage.vercel.app/" target="_blank" style="color: #3B82F6; text-decoration: none;">🌐 muhammaddanish-sage.vercel.app</a>
        </p>
    </div>
`;

// CV Download Button
const cvButtons = `
    <div style="margin-top: 16px; padding-top: 12px; border-top: 1px solid #E2E8F0; display: flex; gap: 10px; flex-wrap: wrap;">
        <a href="Muhammaddanish.CV.pdf" download="Muhammad_Danish_CV.pdf" style="padding: 8px 16px; background: #3B82F6; color: white; text-decoration: none; border-radius: 8px; font-size: 12px; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
            📥 Download CV
        </a>
        <a href="Muhammaddanish.CV.pdf" target="_blank" style="padding: 8px 16px; background: #10B981; color: white; text-decoration: none; border-radius: 8px; font-size: 12px; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
            👁️ View CV
        </a>
    </div>
`;

// Chat Responses
const responses = {
    // Skills
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
        <p class="summary-text">Muhammad Danish has applied these skills in various projects, demonstrating strong analytical and programming abilities.</p>
        ${cvButtons}
    `,
    
    // Projects
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
        ${cvButtons}
    `,
    
    // Education
    education: () => `
        <div class="section-header">
            <span class="section-icon">🎓</span>
            <h2>Education</h2>
        </div>
        ${portfolioData.education.map(edu => `
            <div class="skill-card" style="border-left: 3px solid #3b82f6;">
                <h3>${edu.degree}</h3>
                <p>${edu.institution}</p>
                <p style="color: #64748B; font-size: 12px;">${edu.year}${edu.marks ? ' • ' + edu.marks : ''}</p>
            </div>
        `).join('')}
        ${cvButtons}
    `,
    
    // Experience
    experience: () => `
        <div class="section-header">
            <span class="section-icon">💼</span>
            <h2>Work Experience</h2>
        </div>
        ${portfolioData.experience.map(exp => `
            <div class="skill-card" style="border-left: 3px solid #10B981;">
                <h3>${exp.title}</h3>
                <p>${exp.company} • ${exp.year}</p>
                <ul style="margin-top: 8px; padding-left: 16px; color: #64748B; font-size: 12px;">
                    ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
            </div>
        `).join('')}
        ${cvButtons}
    `,
    
    // Certifications
    certifications: () => `
        <div class="section-header">
            <span class="section-icon">🏆</span>
            <h2>Certifications</h2>
        </div>
        ${portfolioData.certifications.map(cert => `
            <div class="skill-card" style="border-left: 3px solid #F59E0B;">
                <h3>${cert.name}</h3>
                <p>${cert.issuer} • ${cert.year}</p>
            </div>
        `).join('')}
        ${cvButtons}
    `,
    
    // Languages
    languages: () => `
        <div class="section-header">
            <span class="section-icon">🌍</span>
            <h2>Languages</h2>
        </div>
        ${portfolioData.languages.map(lang => `
            <div class="skill-card">
                <h3>${lang.language}</h3>
                <p>${lang.level}</p>
            </div>
        `).join('')}
        ${cvButtons}
    `,
    
    // Soft Skills
    softSkills: () => `
        <div class="section-header">
            <span class="section-icon">💪</span>
            <h2>Soft Skills</h2>
        </div>
        <ul class="hire-list">
            ${portfolioData.softSkills.map(skill => `<li>✨ ${skill}</li>`).join('')}
        </ul>
        ${cvButtons}
    `,
    
    // About / Summary
    about: () => `
        <div class="section-header">
            <span class="section-icon">👤</span>
            <h2>About Muhammad Danish</h2>
        </div>
        <p>Muhammad Danish is a motivated <strong>Mathematics undergraduate</strong> specializing in <strong>data analysis</strong> and <strong>web development</strong>.</p>
        <p style="margin-top: 12px;">He is skilled in Python, data visualization, and front-end technologies, with a strong conceptual foundation in applied mathematics and statistics. He is dedicated to building efficient solutions and applying technology to real-world problems.</p>
        <p style="margin-top: 12px;"><strong>Location:</strong> Khanewal, Pakistan<br>
        <strong>Phone:</strong> +92 326 7370173</p>
        ${cvButtons}
    `,
    
    // Contact
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
                    <a href="mailto:muhaammaddanish2327@gmail.com">muhaammaddanish2327@gmail.com</a>
                </div>
            </div>
            <div class="contact-item">
                <span class="contact-icon">📱</span>
                <div>
                    <strong>Phone</strong>
                    <a href="tel:+923267370173">+92 326 7370173</a>
                </div>
            </div>
            <div class="contact-item">
                <span class="contact-icon">📍</span>
                <div>
                    <strong>Location</strong>
                    <span>Khanewal, Pakistan</span>
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
        ${cvButtons}
    `,
    
    // Services
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
        ${cvButtons}
    `,
    
    // Hire
    hire: () => `
        <div class="section-header">
            <span class="section-icon">💡</span>
            <h2>Why Hire Muhammad Danish?</h2>
        </div>
        <ul class="hire-list">
            <li>📊 Strong analytical skills with Mathematics background</li>
            <li>🐍 Proficient in Python for data analysis and automation</li>
            <li>🌐 Web development skills (HTML, CSS, JavaScript)</li>
            <li>🤖 AI fundamentals and chatbot development</li>
            <li>📈 Data visualization and reporting abilities</li>
            <li>💼 Teaching experience with strong communication skills</li>
            <li>🎓 Certified professional (DigiSkills Pakistan)</li>
        </ul>
        <div class="cta-box">
            <p>📩 Ready to hire? <strong>Contact him at muhaammaddanish2327@gmail.com</strong></p>
        </div>
        ${cvButtons}
    `,
    
    // CV
    cv: () => `
        <div class="section-header">
            <span class="section-icon">📄</span>
            <h2>CV / Resume</h2>
        </div>
        <p>You can download or view Muhammad Danish's CV below:</p>
        ${cvButtons}
        <div style="margin-top: 16px;">
            <h3 style="font-size: 14px; margin-bottom: 12px;">Quick Overview:</h3>
            <ul class="hire-list">
                <li>📧 muhaammaddanish2327@gmail.com</li>
                <li>📱 +92 326 7370173</li>
                <li>📍 Khanewal, Pakistan</li>
                <li>🎓 BS Mathematics (Bahauddin Zakariya University)</li>
                <li>💼 Mathematics Teacher (Private Academy 2022-2023)</li>
                <li>🏆 Certified by DigiSkills Pakistan</li>
            </ul>
        </div>
        ${cvButtons}
    `,
    
    // Greeting
    greeting: () => `
        <div class="section-header">
            <span class="section-icon">👋</span>
            <h2>Welcome!</h2>
        </div>
        <p>Hello! Welcome to Muhammad Danish's AI Portfolio Assistant. 🤖</p>
        <p style="margin-top: 12px;">I can help you learn about his <strong>skills</strong>, <strong>projects</strong>, <strong>education</strong>, <strong>experience</strong>, <strong>certifications</strong>, and more.</p>
        <p style="margin-top: 12px;">Feel free to ask anything or use the quick buttons below!</p>
        ${cvButtons}
    `,
    
    // Thanks
    thanks: () => `
        <div class="section-header">
            <span class="section-icon">😊</span>
            <h2>You're Welcome!</h2>
        </div>
        <p>Thank you so much for your interest in Muhammad Danish's profile! 🙏</p>
        <p style="margin-top: 12px;">I'm happy I could help. Feel free to download his CV or contact him for opportunities!</p>
        <p class="summary-text">Is there anything else you'd like to know?</p>
        ${cvButtons}
    `,
    
    // Goodbye
    goodbye: () => `
        <div class="section-header">
            <span class="section-icon">👋</span>
            <h2>Goodbye!</h2>
        </div>
        <p>Thank you for visiting! 😊 Have a wonderful day!</p>
        <p style="margin-top: 12px;">Best regards! 📬 muhaammaddanish2327@gmail.com</p>
        ${cvButtons}
    `,
    
    // Help
    help: () => `
        <div class="section-header">
            <span class="section-icon">💡</span>
            <h2>How Can I Help You?</h2>
        </div>
        <p>I'm Muhammad Danish's AI portfolio assistant! Here's what I can help you with:</p>
        <ul class="hire-list">
            <li>💼 <strong>Skills</strong> - Technical expertise</li>
            <li>🚀 <strong>Projects</strong> - Portfolio work</li>
            <li>🎓 <strong>Education</strong> - Academic background</li>
            <li>💼 <strong>Experience</strong> - Work history</li>
            <li>🏆 <strong>Certifications</strong> - Professional certifications</li>
            <li>🛠️ <strong>Services</strong> - What he offers</li>
            <li>💡 <strong>Hire Me</strong> - Why hire him</li>
            <li>📄 <strong>CV/Resume</strong> - Download or view his CV</li>
            <li>📬 <strong>Contact</strong> - Get in touch</li>
        </ul>
        ${cvButtons}
    `,
    
    // Who are you
    whoAreYou: () => `
        <div class="section-header">
            <span class="section-icon">🤖</span>
            <h2>About This Chatbot</h2>
        </div>
        <p>I'm an AI-powered virtual assistant representing <strong>Muhammad Danish</strong>!</p>
        <p style="margin-top: 12px;">I can provide comprehensive information about his skills, projects, education, experience, certifications, and help you get in touch with him.</p>
        ${cvButtons}
    `,
    
    // Career / Goals
    career: () => `
        <div class="section-header">
            <span class="section-icon">🎯</span>
            <h2>Career Goals</h2>
        </div>
        <p>Muhammad Danish is currently seeking <strong>internships</strong> in the following fields:</p>
        <ul class="hire-list">
            <li>🤖 Artificial Intelligence (AI)</li>
            <li>📊 Data Science</li>
            <li>🌐 Web Development</li>
        </ul>
        <p style="margin-top: 12px;">He aims to apply his skills in Python, data analysis, and web development to real-world projects while continuing to grow professionally.</p>
        <div class="cta-box">
            <p>📩 Interested? <strong>Contact him at muhaammaddanish2327@gmail.com</strong></p>
        </div>
        ${cvButtons}
    `,
    
    // Freelancing
    freelancing: () => `
        <div class="section-header">
            <span class="section-icon">💼</span>
            <h2>Freelancing</h2>
        </div>
        <p>Muhammad Danish has completed a <strong>Freelancing Course</strong> from DigiSkills Pakistan (2024).</p>
        <p style="margin-top: 12px;">He is open to freelance projects in:</p>
        <ul class="hire-list">
            <li>📊 Data Analysis & Visualization</li>
            <li>🌐 Web Development</li>
            <li>🐍 Python Scripting & Automation</li>
            <li>🤖 Chatbot Development</li>
        </ul>
        <p class="summary-text">Feel free to contact him for freelance opportunities!</p>
        ${cvButtons}
    `,
    
    // Strengths
    strengths: () => `
        <div class="section-header">
            <span class="section-icon">💪</span>
            <h2>Key Strengths</h2>
        </div>
        <ul class="hire-list">
            <li>📊 Strong analytical and problem-solving skills</li>
            <li>🐍 Proficient in Python programming</li>
            <li>📈 Data analysis and visualization expertise</li>
            <li>🌐 Web development capabilities</li>
            <li>🤖 AI fundamentals and chatbot development</li>
            <li>💼 Teaching experience with excellent communication</li>
            <li>🎓 Certified by DigiSkills Pakistan</li>
            <li>📚 Strong foundation in Mathematics and Statistics</li>
        </ul>
        ${cvButtons}
    `,
    
    // Availability
    availability: () => `
        <div class="section-header">
            <span class="section-icon">✅</span>
            <h2>Availability</h2>
        </div>
        <p>Muhammad Danish is currently available for:</p>
        <ul class="hire-list">
            <li>📚 <strong>Internships</strong> in AI, Data Science, or Web Development</li>
            <li>💻 <strong>Freelance projects</strong> in data analysis and web development</li>
            <li>🤝 <strong>Collaboration</strong> on tech projects</li>
        </ul>
        <p style="margin-top: 12px;">He is a quick learner and eager to contribute to meaningful projects.</p>
        <div class="cta-box">
            <p>📩 Reach out: <strong>muhaammaddanish2327@gmail.com</strong></p>
        </div>
        ${cvButtons}
    `,
    
    // Default - for unrecognized questions
    default: (input) => `
        <div class="section-header">
            <span class="section-icon">💬</span>
            <h2>Let Me Help You With That</h2>
        </div>
        <p>I understand you're asking about "<strong>${input}</strong>".</p>
        <p style="margin-top: 12px;">Here are topics I can help you with:</p>
        <ul class="hire-list">
            <li>💼 Skills and expertise</li>
            <li>🚀 Projects and work</li>
            <li>🎓 Education background</li>
            <li>💼 Work experience</li>
            <li>🏆 Certifications</li>
            <li>🛠️ Services offered</li>
            <li>💡 Why hire him</li>
            <li>📄 Download/View CV</li>
            <li>📬 Contact information</li>
        </ul>
        <p class="summary-text">Please feel free to ask about any of these topics!</p>
        ${cvButtons}
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
    
    // CV / Resume related
    if (lowerInput.includes('cv') || lowerInput.includes('resume') || lowerInput.includes('download cv') || lowerInput.includes('view cv') || lowerInput.includes('download resume')) {
        return responses.cv();
    }
    
    // Skills
    if (lowerInput.includes('skill')) {
        return responses.skills();
    }
    
    // Projects
    if (lowerInput.includes('project')) {
        return responses.projects();
    }
    
    // Education
    if (lowerInput.includes('education') || lowerInput.includes('study') || lowerInput.includes('university') || lowerInput.includes('degree') || lowerInput.includes('college') || lowerInput.includes('matric') || lowerInput.includes('intermediate')) {
        return responses.education();
    }
    
    // Experience
    if (lowerInput.includes('experience') || lowerInput.includes('job') || lowerInput.includes('work') || lowerInput.includes('teacher') || lowerInput.includes('teaching')) {
        return responses.experience();
    }
    
    // Certifications
    if (lowerInput.includes('certification') || lowerInput.includes('certificate') || lowerInput.includes('digiskill')) {
        return responses.certifications();
    }
    
    // Languages
    if (lowerInput.includes('language') || lowerInput.includes('speak')) {
        return responses.languages();
    }
    
    // Soft Skills
    if (lowerInput.includes('soft skill') || lowerInput.includes('soft skills')) {
        return responses.softSkills();
    }
    
    // Name
    if (lowerInput.includes('your name') || lowerInput.includes('who are you') || lowerInput.includes('what are you') || lowerInput.includes("what's your name")) {
        return responses.whoAreYou();
    }
    
    // Career / Goals / Internships
    if (lowerInput.includes('career') || lowerInput.includes('goal') || lowerInput.includes('internship') || lowerInput.includes('intern') || lowerInput.includes('looking for')) {
        return responses.career();
    }
    
    // Freelancing
    if (lowerInput.includes('freelance') || lowerInput.includes('freelancing')) {
        return responses.freelancing();
    }
    
    // Strengths
    if (lowerInput.includes('strength') || lowerInput.includes('strengths') || lowerInput.includes('best')) {
        return responses.strengths();
    }
    
    // Availability
    if (lowerInput.includes('available') || lowerInput.includes('availability') || lowerInput.includes('can you work')) {
        return responses.availability();
    }
    
    // Services
    if (lowerInput.includes('service') || lowerInput.includes('offer')) {
        return responses.services();
    }
    
    // Hire
    if (lowerInput.includes('hire') || lowerInput.includes('employ') || lowerInput.includes('why')) {
        return responses.hire();
    }
    
    // Contact
    if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('email') || lowerInput.includes('phone') || lowerInput.includes('linkedin')) {
        return responses.contact();
    }
    
    // About
    if (lowerInput.includes('about') || lowerInput.includes('who') || lowerInput.includes('background') || lowerInput.includes('introduce')) {
        return responses.about();
    }
    
    // Phone / Number
    if (lowerInput.includes('phone') || lowerInput.includes('number') || lowerInput.includes('call')) {
        return responses.contact();
    }
    
    // Location
    if (lowerInput.includes('location') || lowerInput.includes('city') || lowerInput.includes('Pakistan') || lowerInput.includes('khanewal')) {
        return responses.contact();
    }
    
    // Greetings
    if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey') || lowerInput.includes('greetings')) {
        return responses.greeting();
    }
    
    // Thanks
    if (lowerInput.includes('thank') || lowerInput.includes('thanks')) {
        return responses.thanks();
    }
    
    // Goodbye
    if (lowerInput.includes('bye') || lowerInput.includes('goodbye') || lowerInput.includes('see you')) {
        return responses.goodbye();
    }
    
    // Help
    if (lowerInput.includes('help') || lowerInput.includes('what can you do') || lowerInput.includes('capabilities')) {
        return responses.help();
    }
    
    // Default response
    return responses.default(input);
}

// Handle form submission
function handleSubmit(e) {
    e.preventDefault();
    
    const message = userInput.value.trim();
    if (!message) return;
    
    const userMessage = createMessageElement(`<p>${message}</p>`, true);
    chatMessages.appendChild(userMessage);
    
    userInput.value = '';
    scrollToBottom();
    
    const typingIndicator = createTypingIndicator();
    chatMessages.appendChild(typingIndicator);
    scrollToBottom();
    
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
                <p>Hi! I'm Muhammad Danish's AI Portfolio Assistant. I can help you learn about his <strong>skills</strong>, <strong>projects</strong>, <strong>education</strong>, <strong>experience</strong>, and more.</p>
                <p>Feel free to ask me anything or use the quick buttons below!</p>
                ${cvButtons}
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

// === Advanced Chatbot Functionalities ===

// 1. Context Memory (simple session memory)
let chatHistory = [];
function saveToHistory(user, message) {
    chatHistory.push({ user, message, time: new Date() });
    if (chatHistory.length > 50) chatHistory.shift(); // keep last 50
}

// Enhance handleSubmit to save history
const originalHandleSubmit = handleSubmit;
handleSubmit = function(event) {
    const userMsg = userInput.value.trim();
    if (userMsg) saveToHistory('user', userMsg);
    originalHandleSubmit.call(this, event);
    // Save bot reply after DOM update
    setTimeout(() => {
        const botMsg = document.querySelector('.message.bot-message:last-child .message-content');
        if (botMsg) saveToHistory('bot', botMsg.innerText);
    }, 100);
};

// 2. Smart Suggestions (auto-complete common questions)
const smartSuggestions = [
    "Show me your latest project",
    "What certifications do you have?",
    "Tell me about your experience",
    "How can I contact you?",
    "What are your technical skills?",
    "Show me your CV"
];
const suggestionBox = document.createElement('div');
suggestionBox.className = 'suggestion-box';
suggestionBox.style = 'position:absolute;z-index:10;background:#fff;border:1px solid #e2e8f0;border-radius:8px;box-shadow:0 2px 8px #0001;max-width:320px;display:none;';
userInput.parentNode.appendChild(suggestionBox);
userInput.addEventListener('input', function() {
    const val = this.value.toLowerCase();
    if (!val) return suggestionBox.style.display = 'none';
    const matches = smartSuggestions.filter(s => s.toLowerCase().includes(val));
    if (matches.length) {
        suggestionBox.innerHTML = matches.map(s => `<div style='padding:8px;cursor:pointer;'>${s}</div>`).join('');
        suggestionBox.style.display = 'block';
        suggestionBox.style.left = userInput.offsetLeft + 'px';
        suggestionBox.style.top = (userInput.offsetTop + userInput.offsetHeight + 4) + 'px';
    } else {
        suggestionBox.style.display = 'none';
    }
});
suggestionBox.addEventListener('click', function(e) {
    if (e.target && e.target.textContent) {
        userInput.value = e.target.textContent;
        suggestionBox.style.display = 'none';
        userInput.focus();
    }
});
document.addEventListener('click', function(e) {
    if (!suggestionBox.contains(e.target) && e.target !== userInput) suggestionBox.style.display = 'none';
});

// 3. Feedback Collection (after each answer)
function addFeedbackAndSuggestions() {
    const lastBotMsg = document.querySelector('.message.bot-message:last-child .message-content');
    if (!lastBotMsg) return;
    // Feedback box
    if (!lastBotMsg.querySelector('.feedback-box')) {
        const box = document.createElement('div');
        box.className = 'feedback-box';
        box.style = 'margin-top:10px;display:flex;gap:8px;';
        box.innerHTML = `<span>Was this helpful?</span>
            <button style='background:#10b981;color:#fff;border:none;padding:4px 10px;border-radius:5px;cursor:pointer;'>👍</button>
            <button style='background:#ef4444;color:#fff;border:none;padding:4px 10px;border-radius:5px;cursor:pointer;'>👎</button>`;
        lastBotMsg.appendChild(box);
        box.querySelectorAll('button').forEach(btn => {
            btn.onclick = () => {
                box.innerHTML = '<span style="color:#64748B;">Thank you for your feedback!</span>';
            };
        });
    }
    // Dynamic follow-up suggestions (like ChatGPT)
    if (!lastBotMsg.querySelector('.followup-box')) {
        const userQ = chatHistory.length ? chatHistory[chatHistory.length-1].message.toLowerCase() : '';
        let followups = [];
        if (userQ.includes('project')) followups = ["Show me another project", "What technologies did you use?", "Can I see your code?"];
        else if (userQ.includes('skills')) followups = ["Show me your certifications", "How did you learn these skills?", "What is your strongest skill?"];
        else if (userQ.includes('education')) followups = ["Show me your experience", "What was your favorite subject?", "Where did you study?"];
        else if (userQ.includes('experience')) followups = ["Show me your education", "What did you learn from your job?", "Do you have teaching experience?"];
        else if (userQ.includes('certification')) followups = ["Show me your skills", "How did you earn these certifications?", "Are you certified in AI?"];
        else if (userQ.includes('cv') || userQ.includes('resume')) followups = ["Show me your skills", "Show me your experience", "Show me your projects"];
        else if (userQ.includes('contact')) followups = ["Show me your CV", "Show me your projects", "What are your soft skills?"];
        else followups = ["Show me your skills", "Show me your projects", "Show me your certifications"];
        const box = document.createElement('div');
        box.className = 'followup-box';
        box.style = 'margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;';
        box.innerHTML = `<span style='color:#64748B;font-size:13px;'>Explore more:</span>` +
            followups.map(f => `<button style='background:#e0e7ef;color:#222;border:none;padding:4px 10px;border-radius:5px;cursor:pointer;font-size:13px;'>${f}</button>`).join('');
        lastBotMsg.appendChild(box);
        box.querySelectorAll('button').forEach(btn => {
            btn.onclick = () => {
                userInput.value = btn.textContent;
                handleSubmit(new Event('submit'));
            };
        });
    }
}
const originalScrollToBottom = scrollToBottom;
scrollToBottom = function() {
    originalScrollToBottom();
    setTimeout(addFeedbackAndSuggestions, 200);
};

// 4. Dark Mode Toggle
const darkToggle = document.createElement('button');
darkToggle.textContent = '🌙 Dark Mode';
darkToggle.style = 'position:fixed;bottom:24px;right:24px;z-index:1000;padding:10px 18px;background:#222;color:#fff;border:none;border-radius:8px;font-size:15px;box-shadow:0 2px 8px #0002;cursor:pointer;';
document.body.appendChild(darkToggle);
let dark = false;
darkToggle.onclick = () => {
    dark = !dark;
    document.body.style.background = dark ? '#18181b' : '#f8fafc';
    document.body.style.color = dark ? '#f1f5f9' : '#18181b';
    darkToggle.textContent = dark ? '☀️ Light Mode' : '🌙 Dark Mode';
    document.querySelectorAll('.message, .section-header, .skill-card').forEach(el => {
        el.style.background = dark ? '#27272a' : '';
        el.style.color = dark ? '#f1f5f9' : '';
    });
};
