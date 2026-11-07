/* ========================================= */
/* ELEMENTS */
/* ========================================= */

const welcomeScreen = document.getElementById("welcomeScreen");
const officeScreen = document.getElementById("officeScreen");
const enterOffice = document.getElementById("enterOffice");
const hotspots = document.querySelectorAll(".hotspot");
const infoOverlay = document.getElementById("infoOverlay");
const closePanel = document.getElementById("closePanel");
const panelIcon = document.getElementById("panelIcon");
const panelCategory = document.getElementById("panelCategory");
const panelTitle = document.getElementById("panelTitle");
const panelSubtitle = document.getElementById("panelSubtitle");
const panelBody = document.getElementById("panelBody");
const clock = document.getElementById("clock");

/* ========================================= */
/* ENTER OFFICE */
/* ========================================= */

if (enterOffice) {
    enterOffice.addEventListener("click", () => {
        if (welcomeScreen) welcomeScreen.style.display = "none";
        if (officeScreen) officeScreen.classList.remove("hidden");
    });
}

/* ========================================= */
/* LIVE CLOCK */
/* ========================================= */

function updateClock() {
    if (!clock) return;
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);

/* ========================================= */
/* OFFICE DATA */
/* ========================================= */

const officeData = {
    growth: {
        icon: "🌱",
        category: "PERSONAL DEVELOPMENT",
        title: "My Growth",
        subtitle: "Growing through every experience.",
        content: `
            <p>This space represents my personal and professional growth throughout my journey.</p>
            <h3>My Focus</h3>
            <ul>
                <li>Building strong technical skills</li>
                <li>Learning new technologies</li>
                <li>Improving problem solving</li>
                <li>Building meaningful projects</li>
                <li>Developing professional experience</li>
            </ul>
            <p>Every workshop, project, competition and challenge contributes to my growth.</p>
        `
    },
    meeting: {
        icon: "🤝",
        category: "COLLABORATION",
        title: "Meeting Room",
        subtitle: "Where ideas become bigger through teamwork.",
        content: `
            <p>This space represents collaboration, communication and teamwork.</p>
            <h3>What I Value</h3>
            <ul>
                <li>Teamwork</li>
                <li>Communication</li>
                <li>Leadership</li>
                <li>Creative problem solving</li>
                <li>Collaboration</li>
            </ul>
            <p>Great ideas become stronger when people work together.</p>
        `
    },
    journey: {
        icon: "📌",
        category: "MY JOURNEY",
        title: "My Journey",
        subtitle: "From learning to building.",
        content: `
            <p>This notice board represents the important moments and milestones in my journey.</p>
            <h3>Journey So Far</h3>
            <ul>
                <li>Started my Computer Science journey</li>
                <li>Participated in workshops</li>
                <li>Joined technical events</li>
                <li>Worked on robotics projects</li>
                <li>Participated in hackathons</li>
                <li>Explored web development</li>
                <li>Took leadership responsibilities</li>
                <li>Started building professional projects</li>
            </ul>
            <p>This journey will continue to grow throughout my academic and professional career.</p>
        `
    },
    learning: {
        icon: "📚",
        category: "KNOWLEDGE",
        title: "My Bookshelf",
        subtitle: "Everything I am learning.",
        content: `
            <p>This bookshelf represents my learning journey and technical skills.</p>
            <h3>Technical Learning</h3>
            <ul>
                <li>C Programming</li>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Arduino</li>
                <li>Power BI</li>
                <li>Statistics and R</li>
                <li>MATLAB</li>
                <li>Artificial Intelligence</li>
            </ul>
            <p>My bookshelf will continue growing as I explore new technologies.</p>
        `
    },
    achievements: {
        icon: "🏆",
        category: "ACHIEVEMENTS",
        title: "Achievements",
        subtitle: "Milestones from my journey.",
        content: `
            <p>This section represents important achievements, experiences and milestones.</p>
            <h3>Experiences</h3>
            <ul>
                <li>Participated in Hackathons</li>
                <li>Participated in Ideathons</li>
                <li>Worked on Robotics Projects</li>
                <li>Participated in Technical Events</li>
                <li>Tech Lead of Inception '26</li>
                <li>Volunteer Experiences</li>
                <li>Workshops and Certifications</li>
            </ul>
            <p>Future awards and achievements will be added here.</p>
        `
    },
    about: {
        icon: "👩‍💻",
        category: "ABOUT ME",
        title: "My Desk",
        subtitle: "Where ideas become projects.",
        content: `
            <p>Welcome to my workspace. This desk represents the place where I learn, build and create.</p>
            <h3>About Me</h3>
            <p>I am a Computer Science student interested in technology, software, robotics, web development and building meaningful digital experiences.</p>
            <h3>My Interests</h3>
            <ul>
                <li>Web Development</li>
                <li>Software Development</li>
                <li>Robotics</li>
                <li>Artificial Intelligence</li>
                <li>Technology and Innovation</li>
                <li>Entrepreneurship</li>
            </ul>
        `
    },
    projects: {
        icon: "💻",
        category: "MY WORK",
        title: "Projects",
        subtitle: "Ideas turned into something real.",
        content: `
            <p>These are some of the projects I have worked on.</p>
            <div class="project-list">
                <div class="project-card"><strong>🤖 Autonomous Robot</strong>Robotics project focused on autonomous movement and control.</div>
                <div class="project-card"><strong>🌐 Bakery Website</strong>A modern website designed for a bakery business.</div>
                <div class="project-card"><strong>💰 Finominal</strong>A project related to financial literacy.</div>
                <div class="project-card"><strong>📝 Registration Form Website</strong>A web-based registration form system.</div>
                <div class="project-card"><strong>💼 Digital Office Portfolio</strong>An interactive portfolio representing my journey.</div>
            </div>
            <h3>Coming Next</h3>
            <p>Detailed project pages, technologies used, GitHub repositories, screenshots and demos will be added here.</p>
        `
    },
    certificates: {
        icon: "📁",
        category: "DOCUMENTS",
        title: "Files & Certificates",
        subtitle: "My professional records.",
        content: `
            <p>This cabinet represents my certificates and professional documents.</p>
            <h3>Categories</h3>
            <ul>
                <li>Technical Certificates</li>
                <li>Workshop Certificates</li>
                <li>Event Participation</li>
                <li>Internship Certificates</li>
                <li>Academic Records</li>
                <li>Professional Documents</li>
            </ul>
            <p>Certificates and downloadable documents can be added here later.</p>
        `
    }
};

/* ========================================= */
/* OPEN PANEL */
/* ========================================= */

hotspots.forEach(hotspot => {
    hotspot.addEventListener("click", () => {
        const section = hotspot.dataset.section;
        openPanel(section);
    });
});

function openPanel(section) {
    const data = officeData[section];
    if (!data) return;

    if (panelIcon) panelIcon.textContent = data.icon;
    if (panelCategory) panelCategory.textContent = data.category;
    if (panelTitle) panelTitle.textContent = data.title;
    if (panelSubtitle) panelSubtitle.textContent = data.subtitle;
    if (panelBody) panelBody.innerHTML = data.content;
    if (infoOverlay) infoOverlay.classList.add("active");
}

/* ========================================= */
/* CLOSE PANEL */
/* ========================================= */

function closeInfoPanel() {
    if (infoOverlay) infoOverlay.classList.remove("active");
}

if (closePanel) {
    closePanel.addEventListener("click", closeInfoPanel);
}

if (infoOverlay) {
    infoOverlay.addEventListener("click", event => {
        if (event.target === infoOverlay) {
            closeInfoPanel();
        }
    });
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeInfoPanel();
    }
});