document.addEventListener("DOMContentLoaded", function () {

    //================================================
    // STATE & DATA
    //================================================

    const phrases = ["Desenvolvedor", "Artista", "Programador"];
    
    // Updated with 'engine' property ('unity' or 'godot')
    const projectsDatabase = [
        {
            type: "game",
            title: "SPLINTERIS",
            engine: "unity",
            date: "Dezembro 2025",
            description: "Jogo 3D de ação onde o jogador deve eliminar todos os inimigos controlando o tempo.",
            cover: "./Images/GameImages/SplinterisIcon.jpg",
            youtubeId: "eHYLQwSar_k",
            links: [
                { text: "Itch.io", url: "https://mtdeveloper.itch.io/splinteris" },
            ]
        },
                {
            type: "game",
            title: "Retro Rebound",
            engine: "unity",
            date: "Julho 2025",
            description: "Arcade clássico 2D reimaginado com mecânicas diferenciadas.",
            cover: "./Images/GameImages/retroreboundIcon.png",
            youtubeId: "dOYl_4jf5Qk",
            links: [
                { text: "Itch.io", url: "https://mtdeveloper.itch.io/retro-rebound" },
            ]
        },
        {
            type: "game",
            title: "Lost Orbs",
            engine: "unity",
            date: "Dezembro 2024",
            description: "Jogo 2D onde o jogador deve coletar orbes perdidas, enquanto há um monstro aos arredores.",
            cover: "./Images/GameImages/LostOrbsIcon.png",
            youtubeId: "HW_5wGViEEM",
            links: []
        },
        {
            type: "game",
            title: "Galactic Paradox",
            engine: "godot",
            date: "Julho 2024",
            description: "Jogo 2D sincronizado com o ritmo da música, onde o jogador deve sobreviver, em estilo 8-bit.",
            cover: "./Images/GameImages/GalacticParadoxIcon.jpg",
            youtubeId: "4aa4u11uUbw",
            links: [
                { text: "Itch.io", url: "https://mtdeveloper.itch.io/galactic-paradox" },
            ]
        },
    ];

    //================================================
    // MODAL FUNCTIONS
    //================================================

    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalVideo = document.getElementById("modal-video");
    const modalDesc = document.getElementById("modal-description");
    const modalLinks = document.getElementById("modal-links");
    const closeModalBtn = document.getElementById("close-modal");

    function openModal(project) {
        modalTitle.textContent = project.title;
        modalDesc.textContent = project.description;
        
        if (project.youtubeId) {
            modalVideo.src = `https://www.youtube.com/embed/${project.youtubeId}?autoplay=1`;
        } else {
            modalVideo.src = "";
        }
        
        modalLinks.innerHTML = "";
        if (project.links) {
            project.links.forEach(link => {
                const a = document.createElement("a");
                a.href = link.url;
                a.target = "_blank";
                a.className = "project-btn";
                a.textContent = link.text;
                modalLinks.appendChild(a);
            });
        }

        modal.classList.add("active");
    }

    function closeModal() {
        modal.classList.remove("active");
        // Reset src to stop video playback immediately
        modalVideo.src = "";
    }

    closeModalBtn.addEventListener("click", closeModal);
    
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });

    //================================================
    // CORE FUNCTIONS
    //================================================

    function getEngineIcon(engine) {
        if (!engine) return '';
        
        const type = engine.toLowerCase();
        
        if (type === 'unity') {
            return `<div class="engine-badge unity" title="Feito com Unity"><i class="fab fa-unity"></i></div>`;
        } 
        
        if (type === 'godot') {
            // Godot SVG (Since FontAwesome Free doesn't include it standard)
            return `
            <div class="engine-badge godot" title="Feito com Godot">
                G
            </div>`;
        }

        // Fallback for generic or other engines
        return `<div class="engine-badge"><i class="fas fa-code"></i></div>`;
    }

    function handleNavigation(navItems) {
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
                        }, 10);
                    }, 500);
                } else {
                    isTransitioning = false;
                }
            });
        });
    }

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
                await new Promise(resolve => setTimeout(resolve, 2000));
                await erasePhrase(textElement);
            }
        }
    }

    function renderProjects(filter = 'all') {
        const gallery = document.querySelector('.gallery');
        gallery.innerHTML = ''; 

        const filteredProjects = filter === 'all'
            ? projectsDatabase
            : projectsDatabase.filter(project => project.type === filter);

        filteredProjects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = `project-card ${project.type} fade-in`;
            projectCard.style.animationDelay = `${index * 0.1}s`;

            // Get the engine icon HTML
            const engineIconHTML = getEngineIcon(project.engine);

            let cardContent = `
                <div class="cover">
                    ${engineIconHTML}
                    <img src="${project.cover}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-date">${project.date}</p>
                    <p class="project-description">${project.description || '&nbsp;'}</p>
                </div>
            `;
            
            projectCard.innerHTML = cardContent;
            projectCard.addEventListener("click", () => openModal(project));
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
    // INITIALIZATION
    //================================================
    
    const navItems = document.querySelectorAll(".nav-item");
    handleNavigation(navItems);

    const dynamicTextElement = document.getElementById('dynamic-text');
    if (dynamicTextElement) {
        runTypingLoop(phrases, dynamicTextElement);
    }
    
    if (document.querySelector('.gallery')) {
        renderProjects();
        setupFilterButtons();
    }
});