document.addEventListener("DOMContentLoaded", function () {

    //================================================
    // STATE & DATA
    //================================================

    const phrases = ["Developer", "Artist", "Programmer"];
    
    const projectsDatabase = [
        {
            type: "game",
            title: "Galactic Paradox",
            date: "July 2024",
            description: "A 2D game made in Godot that is set to the rhythm of music, in an 8-bit style. Made for a course project.",
            cover: "./Images/GameImages/GalacticParadoxIcon.jpg",
            links: [
                { text: "Itch", url: "https://mtdeveloper.itch.io/galactic-paradox" },
            ]
        },
    ];

    //================================================
    // CORE FUNCTIONS
    //================================================

    // --- Section Navigation ---
    function handleNavigation(navItems, sections) {
        let isTransitioning = false;
        
        navItems.forEach(item => {
            item.addEventListener("click", function (event) {
                event.preventDefault();
                if (isTransitioning) return;
                isTransitioning = true;
                
                const targetId = this.getAttribute("data-target");
                const targetSection = document.getElementById(targetId);
                const activeSection = document.querySelector("section.active");
                
                if (activeSection !== targetSection) {
                    activeSection.style.opacity = "0";
                    setTimeout(() => {
                        activeSection.classList.remove("active");
                        
                        targetSection.classList.add("active");
                        setTimeout(() => {
                            targetSection.style.opacity = "1";
                            isTransitioning = false;
                        }, 10); // Short delay for the fade-in transition to trigger
                    }, 500); // Matches CSS transition time
                } else {
                    isTransitioning = false;
                }
            });
        });
    }

    // --- Dynamic Text Typing Effect ---
    async function typePhrase(phrase, textElement, delay = 150) {
        for (let i = 0; i < phrase.length; i++) {
            textElement.textContent += phrase[i];
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    async function erasePhrase(textElement, delay = 100) {
        while (textElement.textContent.length > 0) {
            textElement.textContent = textElement.textContent.slice(0, -1);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    async function runTypingLoop(phrases, textElement) {
        while (true) { 
            for (let phrase of phrases) {
                await typePhrase(phrase, textElement);
                await new Promise(resolve => setTimeout(resolve, 2000)); // Pause after typing
                await erasePhrase(textElement);
            }
        }
    }

    // --- Project Gallery Rendering ---
    function renderProjects(filter = 'all') {
        const gallery = document.querySelector('.gallery');
        gallery.innerHTML = ''; // Clear the current gallery

        const filteredProjects = filter === 'all'
            ? projectsDatabase
            : projectsDatabase.filter(project => project.type === filter);

        filteredProjects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = `project-card ${project.type} fade-in`;
            projectCard.style.animationDelay = `${index * 0.1}s`; // Staggered fade-in effect

            let cardContent = `
                <div class="cover">
                    <img src="${project.cover}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-date">${project.date}</p>
                    <p class="project-description">${project.description || '&nbsp;'}</p>
            `; // Use non-breaking space if description is empty

            if (project.type === 'music') {
                cardContent += `
                    <audio class="audio-player" controls>
                        <source src="${project.audioSrc}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                `;
            } else if (project.type === 'game' && project.links) {
                cardContent += `<div class="project-links">`;
                project.links.forEach(link => {
                    cardContent += `<a href="${link.url}" class="project-btn" target="_blank">${link.text}</a>`;
                });
                cardContent += `</div>`;
            }

            cardContent += `</div>`;
            projectCard.innerHTML = cardContent;
            gallery.appendChild(projectCard);

            setTimeout(() => projectCard.classList.add("visible"), 50);
        });
    }

    function setupFilterButtons() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                renderProjects(this.dataset.filter);
            });
        });
    }

    //================================================
    // INITIALIZATION & EVENT LISTENERS
    //================================================
    
    // Initialize navigation
    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll("section");
    handleNavigation(navItems, sections);

    // Start the typing effect
    const dynamicTextElement = document.getElementById('dynamic-text');
    if (dynamicTextElement) {
        runTypingLoop(phrases, dynamicTextElement);
    }
    
    // Initial render of projects and setup filter buttons
    if (document.querySelector('.gallery')) {
        renderProjects();
        setupFilterButtons();
    }

});
