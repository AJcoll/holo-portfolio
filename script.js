document.addEventListener('DOMContentLoaded', () => {

    // --- ✨ PARTICLE BACKGROUND INITIALIZATION ---
    tsParticles.load("tsparticles", {
        fpsLimit: 60,
        background: {
            color: "transparent"
        },
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#00e5ff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 2, random: true, anim: { enable: false } },
            line_linked: { enable: true, distance: 150, color: "#00e5ff", opacity: 0.2, width: 1 },
            move: { enable: true, speed: 0.5, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: false }, resize: true },
            modes: { grab: { distance: 140, line_opacity: 0.5 } }
        },
        detectRetina: true
    });

    // --- 🚀 BOOT SEQUENCE LOGIC ---
    const bootText = document.getElementById('boot-text');
    const bootSequence = [
        { text: "INITIALIZING INTERFACE...", delay: 600 },
        { text: "ESTABLISHING SECURE CONNECTION...", delay: 1000 },
        { text: "LOADING USER PROFILE: ALLAN COLLETT...", delay: 1200 },
        { text: "SYSTEMS ONLINE.", delay: 600 }
    ];

    let textIndex = 0;
    function typeBootText() {
        if (textIndex < bootSequence.length) {
            bootText.textContent = bootSequence[textIndex].text;
            anime({
                targets: bootText,
                opacity: [0, 1],
                duration: 500,
                easing: 'easeInOutQuad',
                complete: () => {
                    setTimeout(typeBootText, bootSequence[textIndex].delay);
                    textIndex++;
                }
            });
        } else {
            // End of boot sequence
            const bootContainer = document.getElementById('boot-sequence');
            const hud = document.getElementById('hud-interface');
            anime({
                targets: bootContainer,
                opacity: 0,
                duration: 500,
                easing: 'easeInOutQuad',
                complete: () => {
                    bootContainer.style.display = 'none';
                    hud.classList.add('visible');
                }
            });
        }
    }
    typeBootText(); // Start the sequence

    // --- ⏰ SYSTEM CLOCK & DATE ---
    const clockEl = document.getElementById('clock');
    const dateEl = document.getElementById('date');
    function updateTime() {
        const now = new Date();
        clockEl.textContent = now.toLocaleTimeString();
        dateEl.textContent = now.toLocaleDateString();
    }
    setInterval(updateTime, 1000);
    updateTime();

    // --- 🖱️ HUD MODULE INTERACTION ---
const modules = document.querySelectorAll('.module');
const hudInterface = document.getElementById('hud-interface');

modules.forEach(module => {
    const closeBtn = module.querySelector('.close-btn');
    
    // Logic to open a module
    module.addEventListener('click', () => {
        if (module.classList.contains('focused')) return;

        const currentlyFocused = document.querySelector('.module.focused');
        if (currentlyFocused) {
            currentlyFocused.classList.remove('focused');
            resetProjectsModule(currentlyFocused); // Reset if it was the projects module
        }
        
        module.classList.add('focused');
        hudInterface.classList.add('hud-dimmed');

        const contentId = module.dataset.contentId;
        const contentSource = document.getElementById(contentId);
        const contentTarget = module.querySelector('.module-content');
        if (contentSource) {
            contentTarget.innerHTML = contentSource.innerHTML;
        }

        // Add specific logic for the projects module after it's populated
        if (module.id === 'projects-module') {
            setupProjectsModule(module);
        }
    });

    // Logic to close a module
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        module.classList.remove('focused');
        hudInterface.classList.remove('hud-dimmed');
        resetProjectsModule(module); // Reset projects module on close
    });
});

// Function to set up the project category listeners
function setupProjectsModule(projectsModule) {
    const categoryBtns = projectsModule.querySelectorAll('.category-btn');
    const backBtn = projectsModule.querySelector('.back-btn');
    const categoriesView = projectsModule.querySelector('.project-categories');
    const viewerView = projectsModule.querySelector('.project-viewer');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const category = btn.dataset.category;
            
            categoriesView.style.display = 'none';
            viewerView.style.display = 'flex'; // Use flex to enable back button layout
            
            // Hide all lists, then show the correct one
            projectsModule.querySelectorAll('.project-list').forEach(list => list.style.display = 'none');
            projectsModule.querySelector(`#${category}`).style.display = 'block';
        });
    });

    backBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        viewerView.style.display = 'none';
        categoriesView.style.display = 'flex';
    });
}

// Function to reset the projects module to its initial state
function resetProjectsModule(module) {
    if (module.id === 'projects-module') {
        const categoriesView = module.querySelector('.project-categories');
        const viewerView = module.querySelector('.project-viewer');
        
        if (categoriesView && viewerView) {
            viewerView.style.display = 'none';
            categoriesView.style.display = 'flex';
        }
    }
}
});