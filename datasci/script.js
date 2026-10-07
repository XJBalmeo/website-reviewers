document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu');
    const contentContainer = document.getElementById('content-container');
    const lessonTitle = document.getElementById('lesson-title');
    const themeToggle = document.getElementById('theme-toggle');

    // Initialize Theme
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Render Navigation
    function renderNavigation() {
        navMenu.innerHTML = '';
        
        // Group lessons by chapter
        const grouped = {};
        lessonsData.forEach(lesson => {
            if (!grouped[lesson.chapter]) {
                grouped[lesson.chapter] = [];
            }
            grouped[lesson.chapter].push(lesson);
        });

        Object.keys(grouped).forEach(chapterName => {
            // Create Chapter Header
            const chapterDiv = document.createElement('div');
            chapterDiv.className = 'nav-chapter';
            
            const chapterTitle = document.createElement('h3');
            chapterTitle.className = 'nav-chapter-title';
            chapterTitle.textContent = chapterName;
            chapterDiv.appendChild(chapterTitle);
            
            const ul = document.createElement('ul');
            ul.className = 'nav-chapter-list';

            grouped[chapterName].forEach((lesson) => {
                const li = document.createElement('li');
                li.className = 'nav-item';
                
                const a = document.createElement('a');
                a.className = 'nav-link';
                a.textContent = lesson.title;
                a.dataset.id = lesson.id;
                
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    // Update active state
                    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                    a.classList.add('active');
                    
                    // Load content
                    loadLesson(lesson.id);
                });
                
                li.appendChild(a);
                ul.appendChild(li);
            });

            chapterDiv.appendChild(ul);
            navMenu.appendChild(chapterDiv);
        });
    }

    // Load Lesson Content
    function loadLesson(lessonId) {
        const lesson = lessonsData.find(l => l.id === lessonId);
        if (!lesson) return;

        lessonTitle.textContent = lesson.title;
        contentContainer.innerHTML = '';

        lesson.sections.forEach((section, index) => {
            const sectionEl = document.createElement('div');
            sectionEl.className = 'section-card animate-fade-in';
            // Stagger animations
            sectionEl.style.animationDelay = `${index * 0.1}s`;
            
            sectionEl.innerHTML = `
                <h2>${section.heading}</h2>
                <div class="section-body">
                    ${section.content}
                </div>
            `;
            
            contentContainer.appendChild(sectionEl);
        });
        
        // Scroll to top
        document.querySelector('.main-content').scrollTo(0, 0);
    }

    // Initialize
    renderNavigation();
});
