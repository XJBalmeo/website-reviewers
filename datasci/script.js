document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu');
    const mobilePillBar = document.getElementById('mobile-pill-bar');
    const contentContainer = document.getElementById('content-container');
    const lessonTitle = document.getElementById('lesson-title');
    const lessonChapterBadge = document.getElementById('lesson-chapter-badge');
    const themeToggle = document.getElementById('theme-toggle');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebarClose = document.getElementById('sidebar-close');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const homeBtn = document.getElementById('home-btn');
    const quickQuizBtn = document.getElementById('quick-quiz-btn');
    const quickGlossaryBtn = document.getElementById('quick-glossary-btn');
    const navSearch = document.getElementById('nav-search');
    const mainScroll = document.getElementById('main-scroll');

    let activeLessonId = null;

    // Quiz State
    let quizState = {
        questions: [],
        currentIndex: 0,
        answers: {}, // index -> selectedOptionIndex
        isShuffled: false,
        completed: false,
        reviewFilter: 'all'
    };

    function initQuizState(shuffle = false) {
        const copy = quizData.map(q => ({ ...q }));
        if (shuffle) {
            for (let i = copy.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = copy[i];
                copy[i] = copy[j];
                copy[j] = temp;
            }
        }
        quizState = {
            questions: copy,
            currentIndex: 0,
            answers: {},
            isShuffled: shuffle,
            completed: false,
            reviewFilter: 'all'
        };
    }

    initQuizState(false);

    // Safe localStorage wrapper
    function getStoredTheme() {
        try {
            return localStorage.getItem('theme') || 'dark';
        } catch (e) {
            return 'dark';
        }
    }

    function setStoredTheme(theme) {
        try {
            localStorage.setItem('theme', theme);
        } catch (e) {
            // Ignore storage errors in sandboxed iframes
        }
    }

    // Initialize Theme
    const currentTheme = getStoredTheme();
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        setStoredTheme(newTheme);
    });

    // Mobile Sidebar Drawer Controls
    function openSidebar() {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('active');
        document.body.classList.add('drawer-open');
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
        document.body.classList.remove('drawer-open');
    }

    menuToggle.addEventListener('click', openSidebar);
    sidebarClose.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    homeBtn.addEventListener('click', () => {
        closeSidebar();
        renderWelcomeScreen();
    });

    quickQuizBtn.addEventListener('click', () => {
        closeSidebar();
        openQuizTab();
    });

    quickGlossaryBtn.addEventListener('click', () => {
        closeSidebar();
        loadLesson('cheat-sheet');
    });

    // Render Sidebar & Mobile Pill Navigation
    function renderNavigation(filterText = '') {
        navMenu.innerHTML = '';
        mobilePillBar.innerHTML = '';

        // Add Home & Quiz pills first in mobile pill bar
        const homePill = document.createElement('button');
        homePill.type = 'button';
        homePill.className = 'mobile-nav-pill' + (activeLessonId === null ? ' active' : '');
        homePill.textContent = '🏠 Overview';
        homePill.dataset.id = '__home__';
        homePill.addEventListener('click', () => renderWelcomeScreen());
        mobilePillBar.appendChild(homePill);

        const quizPill = document.createElement('button');
        quizPill.type = 'button';
        quizPill.className = 'mobile-nav-pill mobile-nav-pill-quiz' + (activeLessonId === 'practice-quiz' ? ' active' : '');
        quizPill.textContent = '🎯 50-Item Quiz';
        quizPill.dataset.id = 'practice-quiz';
        quizPill.addEventListener('click', () => openQuizTab());
        mobilePillBar.appendChild(quizPill);

        const query = filterText.trim().toLowerCase();
        const grouped = {};

        lessonsData.forEach(lesson => {
            const matchesTitle = lesson.title.toLowerCase().includes(query) || lesson.chapter.toLowerCase().includes(query);
            const matchesSection = lesson.sections.some(s =>
                s.heading.toLowerCase().includes(query) || s.content.toLowerCase().includes(query)
            );
            if (!query || matchesTitle || matchesSection) {
                if (!grouped[lesson.chapter]) {
                    grouped[lesson.chapter] = [];
                }
                grouped[lesson.chapter].push(lesson);
            }
        });

        Object.keys(grouped).forEach(chapterName => {
            const chapterDiv = document.createElement('div');
            chapterDiv.className = 'nav-chapter';

            const chapterTitle = document.createElement('h3');
            chapterTitle.className = 'nav-chapter-title';
            chapterTitle.textContent = chapterName;
            chapterDiv.appendChild(chapterTitle);

            const ul = document.createElement('ul');
            ul.className = 'nav-chapter-list';

            grouped[chapterName].forEach(lesson => {
                const li = document.createElement('li');
                li.className = 'nav-item';

                const a = document.createElement('a');
                a.href = `#${lesson.id}`;
                a.className = 'nav-link' + (lesson.id === activeLessonId ? ' active' : '');
                a.textContent = lesson.title;
                a.dataset.id = lesson.id;

                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    closeSidebar();
                    loadLesson(lesson.id);
                });

                li.appendChild(a);
                ul.appendChild(li);
            });

            chapterDiv.appendChild(ul);
            navMenu.appendChild(chapterDiv);
        });

        // Add Practice Exam Section in Sidebar
        if (!query || 'practice quiz exam 50 questions test'.includes(query)) {
            const quizChapterDiv = document.createElement('div');
            quizChapterDiv.className = 'nav-chapter';

            const quizChapterTitle = document.createElement('h3');
            quizChapterTitle.className = 'nav-chapter-title';
            quizChapterTitle.textContent = 'Practice Exam';
            quizChapterDiv.appendChild(quizChapterTitle);

            const quizUl = document.createElement('ul');
            quizUl.className = 'nav-chapter-list';

            const quizLi = document.createElement('li');
            quizLi.className = 'nav-item';

            const quizA = document.createElement('a');
            quizA.href = '#practice-quiz';
            quizA.className = 'nav-link nav-link-quiz' + (activeLessonId === 'practice-quiz' ? ' active' : '');
            quizA.textContent = '🎯 50-Item Multiple Choice Quiz';
            quizA.dataset.id = 'practice-quiz';
            quizA.addEventListener('click', (e) => {
                e.preventDefault();
                closeSidebar();
                openQuizTab();
            });

            quizLi.appendChild(quizA);
            quizUl.appendChild(quizLi);
            quizChapterDiv.appendChild(quizUl);
            navMenu.appendChild(quizChapterDiv);
        }

        // Populate Mobile Horizontal Quick-Switch Pills for lessons
        lessonsData.forEach(lesson => {
            const pill = document.createElement('button');
            pill.type = 'button';
            pill.className = 'mobile-nav-pill' + (lesson.id === activeLessonId ? ' active' : '');
            pill.textContent = lesson.title;
            pill.dataset.id = lesson.id;
            pill.addEventListener('click', () => {
                loadLesson(lesson.id);
            });
            mobilePillBar.appendChild(pill);
        });
    }

    navSearch.addEventListener('input', (e) => {
        renderNavigation(e.target.value);
    });

    // Update Active Link Styling
    function syncActiveNavigation(lessonId) {
        activeLessonId = lessonId;
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.dataset.id === lessonId);
        });
        document.querySelectorAll('.mobile-nav-pill').forEach(pill => {
            const isActive = (lessonId === null && pill.dataset.id === '__home__') || (pill.dataset.id === lessonId);
            pill.classList.toggle('active', isActive);
            if (isActive) {
                pill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        });
        quickQuizBtn.classList.toggle('active-top-pill', lessonId === 'practice-quiz');
        quickGlossaryBtn.classList.toggle('active-top-pill', lessonId === 'cheat-sheet');
    }

    // Render Welcome Screen with Interactive Module Cards + Quiz Banner
    function renderWelcomeScreen() {
        syncActiveNavigation(null);
        lessonChapterBadge.textContent = 'Course Overview';
        lessonTitle.textContent = 'DataSci Midterm Reviewer';

        const totalLessons = lessonsData.length;
        const totalSections = lessonsData.reduce((acc, item) => acc + item.sections.length, 0);

        let cardsHtml = '';
        lessonsData.forEach((lesson, idx) => {
            cardsHtml += `
                <button type="button" class="module-launch-card" data-lesson-id="${lesson.id}">
                    <span class="module-card-chapter">${lesson.chapter}</span>
                    <h4>${ idx + 1 }. ${lesson.title}</h4>
                    <p>${lesson.sections.map(s => s.heading).join(' • ')}</p>
                    <span class="module-card-cta">Open Module →</span>
                </button>
            `;
        });

        contentContainer.innerHTML = `
            <div class="welcome-screen animate-fade-in">
                <span class="welcome-badge">100% Exam-Aligned Study Guide</span>
                <h2>Midterm Examination Reviewer</h2>
                <p>Complete interactive guide covering <strong>Lesson 1: Big Data &amp; Data Science</strong>, <strong>Lesson 2: The Data Science Life Cycle</strong>, and <strong>Lesson 3: R Programming, dplyr, Descriptive Stats &amp; Regression</strong>.</p>
                
                <div class="welcome-cta-row">
                    <button type="button" id="welcome-start-quiz-btn" class="welcome-quiz-cta">
                        🎯 Take the 50-Item Practice Quiz →
                    </button>
                </div>

                <div class="hero-stats">
                    <div class="stat-card">
                        <h3>3</h3>
                        <p>Core Chapters</p>
                    </div>
                    <div class="stat-card">
                        <h3>${totalLessons}</h3>
                        <p>Study Modules</p>
                    </div>
                    <div class="stat-card">
                        <h3>50</h3>
                        <p>Quiz Questions</p>
                    </div>
                    <div class="stat-card">
                        <h3>78</h3>
                        <p>Glossary Terms</p>
                    </div>
                </div>

                <div class="welcome-modules-section">
                    <h3>Jump Straight to a Study Module</h3>
                    <div class="module-launch-grid">
                        ${cardsHtml}
                    </div>
                </div>
            </div>
        `;

        const startQuizBtn = document.getElementById('welcome-start-quiz-btn');
        if (startQuizBtn) {
            startQuizBtn.addEventListener('click', () => openQuizTab());
        }

        contentContainer.querySelectorAll('.module-launch-card').forEach(btn => {
            btn.addEventListener('click', () => {
                loadLesson(btn.dataset.lessonId);
            });
        });

        mainScroll.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Interactive 50-Item Quiz Tab
    function openQuizTab() {
        syncActiveNavigation('practice-quiz');
        lessonChapterBadge.textContent = 'Practice Exam • 50 Items';
        lessonTitle.textContent = 'Practice Quiz (50)';
        renderQuizView();
        mainScroll.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function calculateQuizStats() {
        const total = quizState.questions.length;
        const answeredCount = Object.keys(quizState.answers).length;
        let correctCount = 0;
        const chapterStats = {
            'Chapter 1': { correct: 0, total: 0 },
            'Chapter 2': { correct: 0, total: 0 },
            'Chapter 3': { correct: 0, total: 0 }
        };

        quizState.questions.forEach((q, idx) => {
            if (chapterStats[q.chapter]) {
                chapterStats[q.chapter].total += 1;
            }
            if (quizState.answers[idx] !== undefined && quizState.answers[idx] === q.correct) {
                correctCount += 1;
                if (chapterStats[q.chapter]) {
                    chapterStats[q.chapter].correct += 1;
                }
            }
        });

        return { total, answeredCount, correctCount, chapterStats };
    }

    function renderQuizView() {
        const stats = calculateQuizStats();

        if (quizState.completed) {
            renderQuizResults(stats);
            return;
        }

        const qIndex = quizState.currentIndex;
        const currentQ = quizState.questions[qIndex];
        const selectedOption = quizState.answers[qIndex];
        const isAnswered = selectedOption !== undefined;
        const progressPercent = Math.round(((qIndex + 1) / stats.total) * 100);
        const letters = ['A', 'B', 'C', 'D'];

        let chapterTagClass = 'tag-ch1';
        if (currentQ.chapter === 'Chapter 2') chapterTagClass = 'tag-ch2';
        if (currentQ.chapter === 'Chapter 3') chapterTagClass = 'tag-ch3';

        let optionsHtml = '';
        currentQ.options.forEach((optText, optIdx) => {
            let stateClass = '';
            let badgeText = letters[optIdx];

            if (isAnswered) {
                if (optIdx === currentQ.correct) {
                    stateClass = ' quiz-option-correct';
                    badgeText = '✓';
                } else if (optIdx === selectedOption && selectedOption !== currentQ.correct) {
                    stateClass = ' quiz-option-wrong';
                    badgeText = '✕';
                } else {
                    stateClass = ' quiz-option-dimmed';
                }
            }

            optionsHtml += `
                <button type="button" class="quiz-option-btn${stateClass}" data-opt-index="${optIdx}" ${isAnswered ? 'disabled' : ''}>
                    <span class="quiz-option-letter">${badgeText}</span>
                    <span class="quiz-option-text">${optText}</span>
                </button>
            `;
        });

        let feedbackHtml = '';
        if (isAnswered) {
            const isCorrect = selectedOption === currentQ.correct;
            const correctLetter = letters[currentQ.correct];
            feedbackHtml = `
                <div class="quiz-feedback-box ${isCorrect ? 'feedback-correct' : 'feedback-wrong'} animate-fade-in">
                    <div class="quiz-feedback-header">
                        <span class="quiz-feedback-icon">${isCorrect ? '✅' : '❌'}</span>
                        <div>
                            <strong>${isCorrect ? 'Correct!' : `Incorrect — The correct answer is ${correctLetter}.`}</strong>
                            <span>${isCorrect ? 'Great job! Here is why:' : `You selected ${letters[selectedOption]}. Here is the explanation:`}</span>
                        </div>
                    </div>
                    <p class="quiz-feedback-explanation">${currentQ.explanation}</p>
                </div>
            `;
        }

        const isLastQuestion = qIndex === stats.total - 1;

        contentContainer.innerHTML = `
            <div class="quiz-wrapper animate-fade-in">
                <!-- Top Quiz Toolbar -->
                <div class="quiz-toolbar">
                    <div class="quiz-toolbar-left">
                        <span class="tag ${chapterTagClass}">${currentQ.chapter}</span>
                        <span class="quiz-order-badge">${quizState.isShuffled ? '🔀 Shuffled Order' : '📋 Standard Order'}</span>
                        <span class="quiz-score-pill">Score: <strong>${stats.correctCount}</strong> / ${stats.answeredCount}</span>
                    </div>
                    <div class="quiz-toolbar-actions">
                        <button type="button" id="quiz-shuffle-btn" class="quiz-action-btn" title="Shuffle all 50 questions and restart">
                            🔀 Shuffle Questions
                        </button>
                        <button type="button" id="quiz-reset-btn" class="quiz-action-btn quiz-action-secondary" title="Reset quiz in original 1-50 order">
                            🔄 Reset
                        </button>
                        ${stats.answeredCount > 0 ? `<button type="button" id="quiz-finish-early-btn" class="quiz-action-btn quiz-action-finish">🏁 Finish (${stats.answeredCount}/50)</button>` : ''}
                    </div>
                </div>

                <!-- Progress Bar -->
                <div class="quiz-progress-card">
                    <div class="quiz-progress-meta">
                        <span>Question <strong>${qIndex + 1}</strong> of <strong>${stats.total}</strong></span>
                        <span>${stats.answeredCount} of ${stats.total} Answered (${progressPercent}%)</span>
                    </div>
                    <div class="quiz-progress-track">
                        <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
                    </div>
                </div>

                <!-- Main Question Card -->
                <section class="section-card quiz-question-card animate-fade-in">
                    <div class="quiz-question-header">
                        <span class="quiz-q-number">Question #${qIndex + 1}</span>
                        <h2 class="quiz-question-title">${currentQ.question}</h2>
                    </div>

                    <div class="quiz-options-list">
                        ${optionsHtml}
                    </div>

                    ${feedbackHtml}

                    <div class="quiz-card-footer">
                        <button type="button" id="quiz-prev-btn" class="quiz-nav-btn quiz-nav-prev" ${qIndex === 0 ? 'disabled' : ''}>
                            ← Previous
                        </button>
                        <div class="quiz-footer-right">
                            ${!isLastQuestion ? `
                                <button type="button" id="quiz-next-btn" class="quiz-nav-btn quiz-nav-next ${isAnswered ? 'quiz-nav-highlight' : ''}">
                                    ${isAnswered ? 'Next Question →' : 'Skip / Next →'}
                                </button>
                            ` : `
                                <button type="button" id="quiz-finish-btn" class="quiz-nav-btn quiz-nav-finish">
                                    🏁 View Final Score →
                                </button>
                            `}
                        </div>
                    </div>
                </section>
            </div>
        `;

        // Wire Option Clicks
        contentContainer.querySelectorAll('.quiz-option-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (quizState.answers[qIndex] !== undefined) return;
                const chosenIdx = parseInt(btn.getAttribute('data-opt-index'), 10);
                quizState.answers[qIndex] = chosenIdx;
                renderQuizView();
                const fb = contentContainer.querySelector('.quiz-card-footer');
                if (fb) {
                    setTimeout(() => fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
                }
            });
        });

        // Wire Shuffle & Reset
        const shuffleBtn = document.getElementById('quiz-shuffle-btn');
        if (shuffleBtn) {
            shuffleBtn.addEventListener('click', () => {
                initQuizState(true);
                renderQuizView();
                mainScroll.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        const resetBtn = document.getElementById('quiz-reset-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                initQuizState(false);
                renderQuizView();
                mainScroll.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        const finishEarlyBtn = document.getElementById('quiz-finish-early-btn');
        if (finishEarlyBtn) {
            finishEarlyBtn.addEventListener('click', () => {
                quizState.completed = true;
                renderQuizView();
                mainScroll.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Wire Prev / Next / Finish
        const prevBtn = document.getElementById('quiz-prev-btn');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (quizState.currentIndex > 0) {
                    quizState.currentIndex -= 1;
                    renderQuizView();
                    mainScroll.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        }

        const nextBtn = document.getElementById('quiz-next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (quizState.currentIndex < stats.total - 1) {
                    quizState.currentIndex += 1;
                    renderQuizView();
                    mainScroll.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        }

        const finishBtn = document.getElementById('quiz-finish-btn');
        if (finishBtn) {
            finishBtn.addEventListener('click', () => {
                quizState.completed = true;
                renderQuizView();
                mainScroll.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    function renderQuizResults(stats) {
        const percentage = Math.round((stats.correctCount / stats.total) * 100);
        const letters = ['A', 'B', 'C', 'D'];

        let tierTitle = '📚 Keep Reviewing!';
        let tierSubtitle = 'Review the explanations below and retake the quiz to master every concept.';
        if (percentage >= 90) {
            tierTitle = '🏆 Outstanding! 100% Exam Ready!';
            tierSubtitle = 'You have mastered Big Data, the Data Science Life Cycle, and R Programming.';
        } else if (percentage >= 75) {
            tierTitle = '🌟 Great Job! Strong Foundation!';
            tierSubtitle = 'You know the core concepts well. Check your missed questions below to lock in a top grade.';
        } else if (percentage >= 60) {
            tierTitle = '👍 Good Effort! Almost There!';
            tierSubtitle = 'You passed the halfway mark! Review the explanations below and try a shuffled retake.';
        }

        let reviewItemsHtml = '';
        quizState.questions.forEach((q, idx) => {
            const userChoice = quizState.answers[idx];
            const isCorrect = userChoice === q.correct;
            const isUnanswered = userChoice === undefined;

            if (quizState.reviewFilter === 'wrong' && isCorrect) return;
            if (quizState.reviewFilter === 'correct' && !isCorrect) return;

            const statusBadge = isCorrect
                ? '<span class="review-status-badge status-correct">✅ Correct</span>'
                : (isUnanswered
                    ? '<span class="review-status-badge status-skipped">⚪ Unanswered</span>'
                    : '<span class="review-status-badge status-wrong">❌ Incorrect</span>');

            reviewItemsHtml += `
                <div class="quiz-review-card ${isCorrect ? 'review-card-correct' : 'review-card-wrong'}">
                    <div class="quiz-review-top">
                        <span class="quiz-review-qnum">Q${idx + 1} • ${q.chapter}</span>
                        ${statusBadge}
                    </div>
                    <h4>${q.question}</h4>
                    <div class="quiz-review-answers">
                        ${!isCorrect ? `
                            <p class="review-user-ans"><strong>Your Answer:</strong> ${isUnanswered ? '<em>Not answered</em>' : `${letters[userChoice]}. ${q.options[userChoice]}`}</p>
                        ` : ''}
                        <p class="review-correct-ans"><strong>Correct Answer:</strong> ${letters[q.correct]}. ${q.options[q.correct]}</p>
                    </div>
                    <p class="review-explanation"><strong>Explanation:</strong> ${q.explanation}</p>
                </div>
            `;
        });

        if (!reviewItemsHtml) {
            reviewItemsHtml = `<div class="section-card" style="padding: 24px; text-align: center; opacity: 1;"><p>No questions match this filter.</p></div>`;
        }

        contentContainer.innerHTML = `
            <div class="quiz-results-wrapper animate-fade-in">
                <section class="section-card quiz-score-hero" style="opacity: 1;">
                    <span class="welcome-badge">Practice Exam Complete</span>
                    <div class="score-circle-badge">
                        <span class="score-big-num">${stats.correctCount}<span>/${stats.total}</span></span>
                        <span class="score-pct-label">${percentage}% Score</span>
                    </div>
                    <h2>${tierTitle}</h2>
                    <p class="score-subtitle">${tierSubtitle}</p>

                    <div class="quiz-chapter-breakdown">
                        <div class="breakdown-box">
                            <span class="tag tag-ch1">Chapter 1</span>
                            <h4>${stats.chapterStats['Chapter 1'].correct} / ${stats.chapterStats['Chapter 1'].total}</h4>
                            <p>Big Data &amp; Data Science</p>
                        </div>
                        <div class="breakdown-box">
                            <span class="tag tag-ch2">Chapter 2</span>
                            <h4>${stats.chapterStats['Chapter 2'].correct} / ${stats.chapterStats['Chapter 2'].total}</h4>
                            <p>Data Science Life Cycle</p>
                        </div>
                        <div class="breakdown-box">
                            <span class="tag tag-ch3">Chapter 3</span>
                            <h4>${stats.chapterStats['Chapter 3'].correct} / ${stats.chapterStats['Chapter 3'].total}</h4>
                            <p>R Programming &amp; Stats</p>
                        </div>
                    </div>

                    <div class="quiz-results-actions">
                        <button type="button" id="retake-shuffle-btn" class="welcome-quiz-cta">
                            🔀 Shuffle &amp; Retake Quiz
                        </button>
                        <button type="button" id="retake-standard-btn" class="quiz-action-btn quiz-action-secondary">
                            🔄 Retake in Original Order
                        </button>
                        <button type="button" id="back-to-questions-btn" class="quiz-action-btn">
                            ← Back to Question View
                        </button>
                    </div>
                </section>

                <div class="quiz-review-section">
                    <div class="quiz-review-header">
                        <h3>Answer Key &amp; Explanations</h3>
                        <div class="glossary-filter-pills">
                            <button type="button" class="glossary-filter-btn review-filter-btn ${quizState.reviewFilter === 'all' ? 'active' : ''}" data-filter="all">All (${stats.total})</button>
                            <button type="button" class="glossary-filter-btn review-filter-btn ${quizState.reviewFilter === 'wrong' ? 'active' : ''}" data-filter="wrong">Missed / Skipped (${stats.total - stats.correctCount})</button>
                            <button type="button" class="glossary-filter-btn review-filter-btn ${quizState.reviewFilter === 'correct' ? 'active' : ''}" data-filter="correct">Correct (${stats.correctCount})</button>
                        </div>
                    </div>
                    <div class="quiz-review-list">
                        ${reviewItemsHtml}
                    </div>
                </div>
            </div>
        `;

        document.getElementById('retake-shuffle-btn').addEventListener('click', () => {
            initQuizState(true);
            renderQuizView();
            mainScroll.scrollTo({ top: 0, behavior: 'smooth' });
        });

        document.getElementById('retake-standard-btn').addEventListener('click', () => {
            initQuizState(false);
            renderQuizView();
            mainScroll.scrollTo({ top: 0, behavior: 'smooth' });
        });

        document.getElementById('back-to-questions-btn').addEventListener('click', () => {
            quizState.completed = false;
            renderQuizView();
            mainScroll.scrollTo({ top: 0, behavior: 'smooth' });
        });

        contentContainer.querySelectorAll('.review-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                quizState.reviewFilter = btn.getAttribute('data-filter') || 'all';
                renderQuizView();
            });
        });
    }

    // Wire Glossary Search and Filter Pills
    function initGlossaryControls() {
        const searchInput = document.getElementById('glossary-search');
        const filterBtns = document.querySelectorAll('.glossary-filter-btn');
        const rows = document.querySelectorAll('#glossary-table tbody tr');
        if (!searchInput || !rows.length) return;

        let selectedChapter = 'all';

        function filterTable() {
            const query = searchInput.value.trim().toLowerCase();
            rows.forEach(row => {
                const rowChapter = row.getAttribute('data-chapter') || '';
                const text = row.textContent.toLowerCase();
                const matchesChapter = selectedChapter === 'all' || rowChapter === selectedChapter;
                const matchesQuery = !query || text.includes(query);
                row.style.display = (matchesChapter && matchesQuery) ? '' : 'none';
            });
        }

        searchInput.addEventListener('input', filterTable);

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedChapter = btn.getAttribute('data-chapter') || 'all';
                filterTable();
            });
        });
    }

    // Load Lesson Content
    function loadLesson(lessonId) {
        if (lessonId === 'practice-quiz') {
            openQuizTab();
            return;
        }

        const lessonIndex = lessonsData.findIndex(l => l.id === lessonId);
        if (lessonIndex === -1) return;
        const lesson = lessonsData[lessonIndex];

        syncActiveNavigation(lessonId);
        lessonChapterBadge.textContent = lesson.chapter;
        lessonTitle.textContent = lesson.title;
        contentContainer.innerHTML = '';

        lesson.sections.forEach((section, index) => {
            const sectionEl = document.createElement('section');
            sectionEl.className = 'section-card animate-fade-in';
            sectionEl.style.animationDelay = `${index * 0.08}s`;

            sectionEl.innerHTML = `
                <div class="section-card-header">
                    <span class="section-index-badge">Section ${index + 1} of ${lesson.sections.length}</span>
                    <h2>${section.heading}</h2>
                </div>
                ${section.content}
            `;

            contentContainer.appendChild(sectionEl);
        });

        // Add Previous / Next Lesson Navigation Footer
        const prevLesson = lessonIndex > 0 ? lessonsData[lessonIndex - 1] : null;
        const nextLesson = lessonIndex < lessonsData.length - 1 ? lessonsData[lessonIndex + 1] : null;

        const pagerEl = document.createElement('div');
        pagerEl.className = 'lesson-pager animate-fade-in';
        pagerEl.innerHTML = `
            <button type="button" class="pager-btn pager-prev" ${!prevLesson ? 'disabled' : ''} data-target="${prevLesson ? prevLesson.id : ''}">
                <span class="pager-label">← Previous Module</span>
                <strong>${prevLesson ? prevLesson.title : 'Start of Course'}</strong>
            </button>
            <button type="button" class="pager-btn pager-next" data-target="${nextLesson ? nextLesson.id : 'practice-quiz'}">
                <span class="pager-label">${nextLesson ? 'Next Module →' : 'Final Challenge →'}</span>
                <strong>${nextLesson ? nextLesson.title : '🎯 Take 50-Item Practice Quiz'}</strong>
            </button>
        `;

        pagerEl.querySelectorAll('.pager-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-target');
                if (targetId) loadLesson(targetId);
            });
        });

        contentContainer.appendChild(pagerEl);

        if (lessonId === 'cheat-sheet') {
            initGlossaryControls();
        }

        mainScroll.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Initialize App
    renderNavigation();
    renderWelcomeScreen();
});
