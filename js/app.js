        // Theme Management Logic
        function toggleTheme() {
            const currentTheme = document.documentElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        }

        function applyTheme(theme) {
            document.documentElement.setAttribute('data-bs-theme', theme);
            localStorage.setItem('portalTheme', theme);
            
            const icon = document.getElementById('theme-icon');
            const text = document.getElementById('theme-text');
            if (icon && text) {
                if (theme === 'dark') {
                    icon.className = 'bi bi-sun-fill me-1';
                    text.innerText = 'Light';
                } else {
                    icon.className = 'bi bi-moon-stars-fill me-1';
                    text.innerText = 'Dark';
                }
            }
            // Re-render chart to adopt new theme colors
            if (appMode === 'progress') {
                renderProgressDashboard();
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('portalTheme') || 'light';
            applyTheme(savedTheme);
        });

        // ==========================================
        // 2. NORMALIZATION LAYER
        // ==========================================
        const DUMMY_POOL = ["pets", "snow", "mammal", "Asia", "food", "plants", "vegetables", "bridge", "pack", "speak", "scientist", "lyrics", "mouse", "hardware", "keyboard", "printer"];

        function getDistractors(correct, count = 2) {
            let pool = DUMMY_POOL.filter(d => d.toLowerCase() !== correct.toLowerCase());
            return shuffleArray(pool).slice(0, count);
        }

        function parseMissingLettersWord(pattern, answer) {
            const cleanAns = (answer || '').trim();
            let cleanPattern = (pattern || '').replace(/^Complete the word:\s*/i, "").trim();
            
            const rawTokens = cleanPattern.split(/\s+/).filter(t => t.length > 0);
            let patternTokens = [];
            rawTokens.forEach(tok => {
                for (let ch of tok) {
                    patternTokens.push(ch);
                }
            });

            const ansChars = cleanAns.split('');
            let boxes = [];

            if (patternTokens.length === ansChars.length) {
                for (let i = 0; i < ansChars.length; i++) {
                    const isSep = (ansChars[i] === '-' || ansChars[i] === ' ');
                    const isBlank = (patternTokens[i] === '_');
                    boxes.push({
                        index: i,
                        isSeparator: isSep,
                        separatorChar: isSep ? ansChars[i] : '',
                        isBlank: isBlank,
                        expectedChar: ansChars[i].toUpperCase(),
                        displayChar: isBlank ? '' : (isSep ? ansChars[i] : ansChars[i].toUpperCase())
                    });
                }
            } else {
                let pIdx = 0;
                for (let i = 0; i < ansChars.length; i++) {
                    const isSep = (ansChars[i] === '-' || ansChars[i] === ' ');
                    if (isSep) {
                        if (pIdx < patternTokens.length && patternTokens[pIdx] === ansChars[i]) {
                            pIdx++;
                        }
                        boxes.push({
                            index: i,
                            isSeparator: true,
                            separatorChar: ansChars[i],
                            isBlank: false,
                            expectedChar: ansChars[i],
                            displayChar: ansChars[i]
                        });
                    } else {
                        let pChar = pIdx < patternTokens.length ? patternTokens[pIdx] : '_';
                        pIdx++;
                        let isBlank = (pChar === '_');
                        boxes.push({
                            index: i,
                            isSeparator: false,
                            separatorChar: '',
                            isBlank: isBlank,
                            expectedChar: ansChars[i].toUpperCase(),
                            displayChar: isBlank ? '' : ansChars[i].toUpperCase()
                        });
                    }
                }
            }
            return boxes;
        }

const OFFLINE_ONLY_CATEGORIES = ['writing_prompt', 'drawing', 'drawings'];

        function normalizeBank(rawBank) {
            const normalized = {};
            for (let category in rawBank) {
                normalized[category] = rawBank[category].map((q, i) => {
                    let base = { 
                        id: `${category}_${i}`, 
                        category: category, 
                        question: q.q, 
                        options: [], 
                        answer: "", 
                        answerText: q.a,
                        instruction: q.instruction || "",
                        clue: q.clue || "",
                        format: q.format || "",
                        chapterId: q.chapterId || "",
                        chapterNumber: q.chapterNumber || 0,
                        chapterTitle: q.chapterTitle || ""
                    };

                    if (category === 'match_following' || q.format === 'match_following') {
                        base.type = "matching_pair_candidate";
                        base.leftWord = q.q; base.rightWord = q.a;
                    }
                    else if (category === 'fill_blanks' || category.startsWith('fill_') || q.format === 'fill_blank') {
                        base.type = "fill_blank_click";
                        let opts;
                        if (q.options && q.options.length > 0) {
                            opts = q.options;
                        } else {
                            opts = [q.a, ...getDistractors(q.a, 3)];
                        }
                        base.options = shuffleArray(opts).map((text, i) => ({ id: `opt_${i}`, text: text }));
                        base.segments = q.q.split('___');
                        if(base.segments.length === 1) base.segments.push(''); 
                    }
                    else if (category === 'missing_letters' || q.format === 'missing_letters') {
                        base.type = "missing_letter_input";
                        base.wordBoxes = parseMissingLettersWord(q.q, q.a);
                    }
                    else if (OFFLINE_ONLY_CATEGORIES.includes(category) || q.format === 'offline_only') {
                        base.type = "offline_subjective";
                        base.answer = q.a || "";
                    }
                    else if (category === 'short_answer') {
                        if (q.options && q.options.length > 0) {
                            base.type = "mcq";
                            base.options = shuffleArray(q.options).map((txt, i) => ({ id: String.fromCharCode(65 + i), text: txt }));
                            const trimmedAns = (q.a !== undefined && q.a !== null) ? String(q.a).trim().toLowerCase() : '';
                            let correctOpt = trimmedAns ? base.options.find(o => o.text.trim().toLowerCase() === trimmedAns) : null;
                            if (correctOpt) {
                                base.answer = correctOpt.id;
                            } else {
                                base.answer = "";
                                base.invalid = true;
                                base.validationError = `Invalid Short Answer MCQ: Question "${q.q}" has answer "${q.a}" which does not match any provided option [${q.options.join(', ')}].`;
                                console.error(`[Validation Error] ${base.validationError}`);
                            }
                        } else {
                            base.type = "offline_subjective";
                            base.answer = q.a || "";
                        }
                    }
                    else {
                        base.type = "mcq";
                        if (q.options) {
                            base.options = shuffleArray(q.options).map((txt, i) => ({ id: String.fromCharCode(65 + i), text: txt }));
                            const trimmedAns = (q.a !== undefined && q.a !== null) ? String(q.a).trim().toLowerCase() : '';
                            let correctOpt = trimmedAns ? base.options.find(o => o.text.trim().toLowerCase() === trimmedAns) : null;
                            if (correctOpt) {
                                base.answer = correctOpt.id;
                            } else {
                                base.answer = "";
                                base.invalid = true;
                                base.validationError = `Invalid MCQ: Question "${q.q}" in section "${category}" has answer "${q.a}" which does not match any provided option [${q.options.join(', ')}].`;
                                console.error(`[Validation Error] ${base.validationError}`);
                            }
                        }
                    }
                    return base;
                });
            }
            return normalized;
        }

        // ==========================================
        // 3. APP STATE & UTILITIES
        // ==========================================
        let appMode = 'hub';
        let currentSubjectKey = null;
        let currentSubject = null;
        let currentChapterFilter = 'all';
        let activeNormalizedBank = {};
        
        let offlineState = { sets: [], totalMarks: 0, isPreviewMode: false, chapterFilter: 'all' };
        let onlineState = { testId: "", questions: [], currentIndex: 0, score: 0, wrongScore: 0, totalPoints: 0, studentName: "Student", answers: [] };
        let progressChartInstance = null;

        function applySubjectView(chapterFilter) {
            if (!currentSubjectKey || !SUBJECT_REGISTRY[currentSubjectKey]) return;
            currentChapterFilter = chapterFilter || 'all';
            currentSubject = buildSubjectView(SUBJECT_REGISTRY[currentSubjectKey], currentChapterFilter);
            activeNormalizedBank = normalizeBank(currentSubject.bank);
        }

        function syncChapterFilterUI() {
            const sidebarSel = document.getElementById('chapterFilter');
            const modalSel = document.getElementById('chapterFilterModal');
            if (sidebarSel) sidebarSel.value = currentChapterFilter;
            if (modalSel) modalSel.value = currentChapterFilter;
        }

        function renderChapterSelectors() {
            if (!currentSubject) return;
            const rawSubject = SUBJECT_REGISTRY[currentSubjectKey];
            const chapters = getChapterList(rawSubject);
            const showChapters = chapters.length > 1;

            const sidebarWrap = document.getElementById('chapter-filter-sidebar-wrap');
            const modalWrap = document.getElementById('chapter-filter-modal-wrap');
            const quizWrap = document.getElementById('chapter-quiz-buttons-wrap');
            const sidebarSel = document.getElementById('chapterFilter');
            const modalSel = document.getElementById('chapterFilterModal');
            const quizBtns = document.getElementById('chapter-quiz-buttons');

            if (sidebarWrap) sidebarWrap.classList.toggle('d-none', !showChapters);
            if (modalWrap) modalWrap.classList.toggle('d-none', !showChapters);
            if (quizWrap) quizWrap.classList.toggle('d-none', !showChapters);

            const optionsHtml = `<option value="all">All Chapters</option>` + chapters.map((ch) => {
                const label = ch.number > 0 ? `Chapter ${ch.number}: ${ch.title}` : ch.title;
                return `<option value="${ch.id}">${label}</option>`;
            }).join('');

            if (sidebarSel) sidebarSel.innerHTML = optionsHtml;
            if (modalSel) modalSel.innerHTML = optionsHtml;

            if (quizBtns && showChapters) {
                quizBtns.innerHTML = chapters.map((ch) => {
                    const shortLabel = ch.number > 0 ? `Ch. ${ch.number}` : ch.title;
                    return `<button type="button" class="btn btn-sm fw-bold rounded-pill border-2 shadow-sm" style="border-color:${currentSubject.theme};color:${currentSubject.theme};" onclick="launchChapterQuiz('${ch.id}', 10)">${shortLabel}</button>`;
                }).join('');
            }

            syncChapterFilterUI();
        }

        function updateGameCardTitle(qObj) {
            const titleEl = document.getElementById('game-title');
            const subtitleEl = document.getElementById('game-chapter-subtitle');
            if (!titleEl || !currentSubject) return;
            
            titleEl.innerHTML = currentSubject.title;

            let chapterLabel = '';
            if (qObj && qObj.chapterTitle) {
                chapterLabel = (qObj.chapterNumber > 0) ? `Chapter ${qObj.chapterNumber}: ${qObj.chapterTitle}` : qObj.chapterTitle;
            } else if (currentChapterFilter !== 'all' && currentSubjectKey && SUBJECT_REGISTRY[currentSubjectKey]) {
                chapterLabel = getChapterLabel(SUBJECT_REGISTRY[currentSubjectKey], currentChapterFilter);
            }

            if (subtitleEl) {
                if (chapterLabel) {
                    subtitleEl.innerHTML = `<div class="text-body-secondary small fw-medium mt-0.5">${chapterLabel}</div>`;
                    subtitleEl.style.display = 'block';
                } else {
                    subtitleEl.style.display = 'none';
                }
            }
        }

        function setChapterFilter(chapterId) {
            applySubjectView(chapterId || 'all');
            syncChapterFilterUI();
            renderTopicButtons();
            updateGameCardTitle();
            if (appMode === 'config' || appMode === 'offline') initConfigUI();
            if (appMode === 'study') renderStudyNotes();
        }

        function renderTopicButtons() {
            if (!currentSubject) return;
            const dynamicBtns = document.getElementById('dynamic-topic-buttons');
            if (!dynamicBtns) return;
            dynamicBtns.innerHTML = '';
            currentSubject.sections.forEach(sec => {
                if (OFFLINE_ONLY_CATEGORIES.includes(sec.id)) return;
                const pool = (activeNormalizedBank[sec.id] || []).filter(q => q.type !== 'offline_subjective');
                if (pool.length === 0) return;
                const iconData = CATEGORY_ICONS[sec.id] || { icon: '🔘', title: sec.title || 'MCQ', desc: 'Practice' };
                dynamicBtns.innerHTML += `
                    <div class="col-6 col-sm-4">
                        <div class="topic-btn" onclick="launchSpecificQuiz(['${sec.id}'])" title="${iconData.title}: ${iconData.desc}">
                            <span class="topic-btn-icon">${iconData.icon}</span>
                            <div class="topic-btn-text w-100">
                                <div class="topic-btn-title">${iconData.title}</div>
                                <div class="topic-btn-desc">${iconData.desc}</div>
                            </div>
                        </div>
                    </div>`;
            });
        }

        function launchChapterQuiz(chapterId, size) {
            if (!validateStudentName()) return;
            setChapterFilter(chapterId);
            const modalObj = bootstrap.Modal.getInstance(document.getElementById('liveTestModal'));
            if (modalObj) modalObj.hide();
            launchLiveTest(size || 10);
        }

        function getNormalizedBankForFilter(chapterFilter) {
            if (!currentSubjectKey) return {};
            const rawBank = normalizeBankForChapter(SUBJECT_REGISTRY[currentSubjectKey], chapterFilter || 'all');
            return normalizeBank(rawBank);
        }

        function shuffleArray(array) { let arr = [...array]; for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }
        function getRandomItems(array, n) { if (!array || !Array.isArray(array)) return []; return shuffleArray(array).slice(0, Math.min(n, array.length)); }
        function showToast(msg, isError = false) {
            const toastEl = document.getElementById('alertToast'); const toastMsg = document.getElementById('toastMessage');
            toastEl.classList.remove('bg-danger', 'bg-success'); toastEl.classList.add(isError ? 'bg-danger' : 'bg-success');
            toastMsg.innerHTML = isError ? `<i class="bi bi-exclamation-triangle-fill me-2"></i> ${msg}` : msg;
            new bootstrap.Toast(toastEl, { delay: 3000 }).show();
        }

        function animateValue(obj, start, end, duration, suffix = '') {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3);
                obj.innerHTML = Math.floor(ease * (end - start) + start) + suffix;
                if (progress < 1) window.requestAnimationFrame(step);
            };
            window.requestAnimationFrame(step);
        }

        // ==========================================
        // 4. BROWSER-NATIVE FULLSCREEN SERVICES
        // ==========================================
        function enterFullScreen() {
            const docEl = document.documentElement;
            try {
                let p;
                if (docEl.requestFullscreen) p = docEl.requestFullscreen();
                else if (docEl.webkitRequestFullscreen) p = docEl.webkitRequestFullscreen();
                else if (docEl.msRequestFullscreen) p = docEl.msRequestFullscreen();
                if (p && typeof p.catch === 'function') p.catch(err => console.warn("Fullscreen request declined: ", err));
            } catch (err) {}
        }
        
        function exitFullScreen() {
            if (!document.fullscreenElement && !document.webkitFullscreenElement) return;
            try {
                let p;
                if (document.exitFullscreen) p = document.exitFullscreen();
                else if (document.webkitExitFullscreen) p = document.webkitExitFullscreen();
                else if (document.msExitFullscreen) p = document.msExitFullscreen();
                if (p && typeof p.catch === 'function') p.catch(err => console.warn("Exit fullscreen declined: ", err));
            } catch (err) {}
        }

        function toggleNativeFullScreen() {
            if (!document.fullscreenElement && !document.webkitFullscreenElement) {
                enterFullScreen(); updateFsButton(true);
            } else {
                exitFullScreen(); updateFsButton(false);
            }
        }

        function updateFsButton(isFS) {
            const btn = document.getElementById('fs-toggle-btn');
            if (btn) {
                btn.innerHTML = isFS ? `<i class="bi bi-fullscreen-exit me-1"></i> <span class="d-none d-sm-inline">Exit Full</span>` : `<i class="bi bi-arrows-fullscreen me-1"></i> <span class="d-none d-sm-inline">Fullscreen</span>`;
            }
        }

        document.addEventListener('fullscreenchange', () => updateFsButton(!!document.fullscreenElement));
        document.addEventListener('webkitfullscreenchange', () => updateFsButton(!!document.webkitFullscreenElement));

        // ==========================================
        // 5. UI HANDLERS (HUB & ROUTING)
        // ==========================================
        function initHub() {
            const grid = document.getElementById('subject-grid');
            grid.innerHTML = '';
            for (let key in SUBJECT_DATA) {
                const sub = SUBJECT_DATA[key];
                const chapterCount = (sub.chapters || []).length;
                const chapterText = chapterCount > 0 ? `${chapterCount} Chapters` : 'All Topics';
                grid.innerHTML += `
                    <div class="subject-card" onclick="selectSubject('${key}')" style="--card-accent: ${sub.theme}; --card-gradient: ${sub.gradient || sub.theme};">
                        <div class="subject-card-glow"></div>
                        <div class="subject-icon-wrap">
                            <span class="subject-icon">${sub.icon}</span>
                        </div>
                        <h3 class="subject-card-title fw-bold mb-1" style="color: ${sub.theme};">${sub.title}</h3>
                        <div class="subject-card-meta d-flex align-items-center justify-content-center gap-1">
                            <span class="badge rounded-pill bg-body-secondary text-secondary small fw-semibold">Class 2</span>
                            <span class="text-muted small mx-1">•</span>
                            <span class="text-muted small fw-medium">${chapterText}</span>
                        </div>
                        <div class="subject-card-hover-arrow">
                            <i class="bi bi-arrow-right-circle-fill"></i>
                        </div>
                    </div>
                `;
            }
        }

        function selectSubject(subjectKey) {
            enterFullScreen();

            currentSubjectKey = subjectKey;
            currentChapterFilter = 'all';
            applySubjectView('all');
            
            document.documentElement.style.setProperty('--theme-color', currentSubject.theme);
            document.documentElement.style.setProperty('--theme-gradient', currentSubject.gradient);
            
            document.getElementById('sh-icon').innerText = currentSubject.icon;
            document.getElementById('sh-title').innerText = currentSubject.title;
            document.getElementById('sh-learn-title').innerText = `Learn ${currentSubject.title}`;
            document.getElementById('game-icon').innerText = currentSubject.icon;
            updateGameCardTitle();
            document.getElementById('header-subtitle').innerText = currentSubject.title;
            
            renderChapterSelectors();
            renderTopicButtons();
            initConfigUI();
            setMobileTab('home');
        }

        function setMobileTab(tab) {
            const hub = document.getElementById('hub-container');
            const home = document.getElementById('home-container');
            const preview = document.getElementById('preview-container');
            const online = document.getElementById('online-container');
            const progress = document.getElementById('progress-container');
            const study = document.getElementById('study-container');
            const sidebar = document.getElementById('sidebar');
            const mobileNav = document.getElementById('mobile-nav');

            if (tab === 'hub') exitFullScreen();

            hub.style.display = 'none'; home.style.display = 'none'; preview.style.display = 'none'; 
            online.style.display = 'none'; progress.style.display = 'none'; sidebar.style.display = 'none';
            study.style.display = 'none';

            const studyDrawerEl = document.getElementById('studyNavDrawer');
            if (studyDrawerEl && typeof bootstrap !== 'undefined') {
                const bsDrawer = bootstrap.Offcanvas.getInstance(studyDrawerEl);
                if (bsDrawer) bsDrawer.hide();
            }
            
            document.documentElement.classList.remove('distraction-free', 'focus-mode'); 
            document.body.classList.remove('distraction-free', 'focus-mode');
            
            ['hub', 'home', 'config', 'preview', 'online', 'progress', 'study'].forEach(t => {
                const btn = document.getElementById(`mt-${t}`);
                if(btn) {
                    if (t === tab || (tab === 'preview' && t === 'config')) {
                        btn.classList.add('active', 'text-white'); btn.style.backgroundColor = currentSubject ? currentSubject.theme : '#10b981';
                    } else { btn.classList.remove('active', 'text-white'); btn.style.backgroundColor = ''; }
                }
            });

            if (tab === 'hub') {
                hub.style.display = 'flex'; appMode = 'hub'; mobileNav.style.display = 'none';
                document.getElementById('header-subtitle').innerText = "Select a subject to begin";
                document.documentElement.style.setProperty('--theme-gradient', 'linear-gradient(135deg, #10b981, #3b82f6)');
            }
            else if (tab === 'home') {
                home.style.display = 'flex'; appMode = 'home'; mobileNav.style.display = 'flex';
            } 
            else if (tab === 'config' || tab === 'preview') {
                if (window.innerWidth < 992) { if(tab === 'config') sidebar.style.display = 'flex'; if(tab === 'preview') preview.style.display = 'block'; } 
                else { sidebar.style.display = 'flex'; preview.style.display = 'block'; }
                appMode = 'offline'; mobileNav.style.display = 'flex';
            } 
            else if (tab === 'online' || tab === 'study') {
                if(tab === 'online') {
                    online.style.display = 'block';
                    document.documentElement.classList.add('distraction-free'); document.body.classList.add('distraction-free');
                }
                if(tab === 'study') {
                    study.style.display = 'block';
                    document.documentElement.classList.add('focus-mode'); document.body.classList.add('focus-mode');
                }
                appMode = tab; mobileNav.style.display = 'none';
            }
            else if (tab === 'progress') {
                progress.style.display = 'block'; renderProgressDashboard(); appMode = 'progress';
                mobileNav.style.display = currentSubject ? 'flex' : 'none';
            }
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // ==========================================
        // 5.5 STUDY MODE ENGINE
        // ==========================================
        let selectedStudyChapters = new Set();

        function initStudyChapterFilter() {
            const rawSubject = (currentSubjectKey && SUBJECT_REGISTRY[currentSubjectKey]) ? SUBJECT_REGISTRY[currentSubjectKey] : null;
            const chapters = rawSubject ? getChapterList(rawSubject) : [];
            const filterWrap = document.getElementById('study-chapter-filter-wrap');

            if (!chapters || chapters.length <= 1) {
                if (filterWrap) filterWrap.classList.add('d-none');
                selectedStudyChapters = new Set((chapters || []).map(ch => ch.id));
                return;
            }

            if (filterWrap) filterWrap.classList.remove('d-none');
            // By default, select all chapters
            selectedStudyChapters = new Set(chapters.map(ch => ch.id));
            renderStudyChapterDropdown();
        }

        function renderStudyChapterDropdown() {
            const rawSubject = (currentSubjectKey && SUBJECT_REGISTRY[currentSubjectKey]) ? SUBJECT_REGISTRY[currentSubjectKey] : null;
            const chapters = rawSubject ? getChapterList(rawSubject) : [];
            const optionsList = document.getElementById('study-chapter-options-list');
            const labelEl = document.getElementById('studyChapterDropdownLabel');
            const badgeEl = document.getElementById('studyChapterBadge');
            const iconEl = document.getElementById('studyChapterFilterIcon');

            if (!optionsList || !chapters.length) return;

            const allSelected = selectedStudyChapters.size === chapters.length;
            const noneSelected = selectedStudyChapters.size === 0;

            if (allSelected) {
                if (labelEl) labelEl.textContent = 'All Chapters';
                if (badgeEl) { badgeEl.textContent = 'All'; badgeEl.className = 'badge rounded-pill bg-primary ms-1'; }
            } else if (noneSelected) {
                if (labelEl) labelEl.textContent = 'No Chapters';
                if (badgeEl) { badgeEl.textContent = '0'; badgeEl.className = 'badge rounded-pill bg-danger ms-1'; }
            } else {
                if (labelEl) labelEl.textContent = `${selectedStudyChapters.size} Chapter${selectedStudyChapters.size > 1 ? 's' : ''}`;
                if (badgeEl) { badgeEl.textContent = `${selectedStudyChapters.size}/${chapters.length}`; badgeEl.className = 'badge rounded-pill bg-info text-dark ms-1'; }
            }

            if (iconEl && currentSubject) {
                iconEl.style.color = currentSubject.theme;
            }

            optionsList.innerHTML = chapters.map(ch => {
                const isChecked = selectedStudyChapters.has(ch.id);
                const chLabel = ch.number > 0 ? `Chapter ${ch.number}: ${ch.title}` : ch.title;
                return `
                    <label class="form-check d-flex align-items-center gap-2 p-2 rounded-3 study-chapter-check-item ${isChecked ? 'bg-light-subtle' : ''}" style="cursor: pointer; margin-bottom: 0;">
                        <input class="form-check-input ms-0 mt-0 flex-shrink-0" type="checkbox" value="${ch.id}" ${isChecked ? 'checked' : ''} onchange="toggleStudyChapter('${ch.id}', this.checked)">
                        <span class="form-check-label text-body small fw-semibold text-truncate" title="${chLabel}">${chLabel}</span>
                    </label>
                `;
            }).join('');
        }

        function toggleStudyChapter(chapterId, isChecked) {
            if (isChecked) {
                selectedStudyChapters.add(chapterId);
            } else {
                selectedStudyChapters.delete(chapterId);
            }
            renderStudyChapterDropdown();
            renderStudyNotes();
        }

        function selectAllStudyChapters(selectAll) {
            const rawSubject = (currentSubjectKey && SUBJECT_REGISTRY[currentSubjectKey]) ? SUBJECT_REGISTRY[currentSubjectKey] : null;
            const chapters = rawSubject ? getChapterList(rawSubject) : [];
            if (selectAll) {
                selectedStudyChapters = new Set(chapters.map(ch => ch.id));
            } else {
                selectedStudyChapters.clear();
            }
            renderStudyChapterDropdown();
            renderStudyNotes();
        }

        let selectedStudySection = 'all';

        function setStudyQuestionType(secId) {
            selectedStudySection = secId;
            renderStudyNotes();
            const drawerEl = document.getElementById('studyNavDrawer');
            if (drawerEl && typeof bootstrap !== 'undefined') {
                const bsOffcanvas = bootstrap.Offcanvas.getInstance(drawerEl);
                if (bsOffcanvas) bsOffcanvas.hide();
            }
            const contentEl = document.getElementById('study-notes-content');
            if (contentEl) {
                contentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        function openStudyMode() {
            setMobileTab('study');
            document.getElementById('study-title').innerHTML = `${currentSubject.icon} Learn ${currentSubject.title}`;
            selectedStudySection = 'all';
            initStudyChapterFilter();
            renderStudyNotes();
            enterFullScreen();
        }

        function buildStudyItemsHtml(sec, items, theme) {
            let html = '';

            if (sec.id === 'match_following') {
                html += `<div class="note-item study-match-item" style="border-left-color: ${theme};">
                    <div class="table-responsive">
                        <table class="table table-borderless mb-0 align-middle text-body study-match-table" style="font-family: 'Comic Sans MS', 'Nunito', sans-serif;">
                            <tbody>`;
                items.forEach((item, idx) => {
                    let leftText = item.leftWord || item.question;
                    let rightText = item.rightWord || item.answerText || item.a;
                    html += `
                        <tr>
                            <td class="text-muted opacity-50 py-1 py-md-2" style="width: 28px; vertical-align: top;">${idx + 1}.</td>
                            <td class="fw-bold py-1 py-md-2" style="width: 48%; vertical-align: top; border-bottom: 1px dashed var(--border-color);">${leftText}</td>
                            <td class="text-success fw-bold ps-2 ps-md-3 py-1 py-md-2 border-start border-success border-2 border-md-3" style="font-family: 'Segoe UI', sans-serif; border-bottom: 1px dashed var(--border-color);">
                                <i class="bi bi-check2-circle me-1"></i>${rightText}
                            </td>
                        </tr>`;
                });
                html += `</tbody></table></div></div>`;
            } else {
                let lastInstruction = '';
                items.forEach((item, idx) => {
                    let qText = item.question;
                    let aText = item.answerText;
                    let clueBadge = item.clue ? ` <span class="badge bg-secondary-subtle text-body-secondary border px-2 py-0.5 ms-1 align-middle" style="font-size: 0.75rem;">${item.clue}</span>` : '';
                    let instHeader = '';
                    if (item.instruction && item.instruction !== lastInstruction) {
                        lastInstruction = item.instruction;
                        instHeader = `<div class="study-instruction-banner fw-bold text-muted small text-uppercase mb-2 mt-3 pt-1 border-top"><i class="bi bi-tag-fill me-1" style="color: ${theme};"></i>${item.instruction}</div>`;
                    }

                    if (item.type === 'matching_pair_candidate') {
                        qText = item.leftWord;
                        aText = item.rightWord;
                    } else if (item.type === 'fill_blank_click') {
                        let filledQ = item.question.replace(/___/g, `<span class="text-success fw-bold text-decoration-underline mx-1">${aText}</span>`);
                        html += `
                        ${instHeader}
                        <div class="note-item" style="border-left-color: ${theme};">
                            <div class="fw-bold study-q-text text-body" style="font-family: 'Comic Sans MS', 'Nunito', sans-serif;">
                                <span class="text-muted opacity-50 me-1.5">${idx + 1}.</span> ${filledQ}${clueBadge}
                            </div>
                        </div>`;
                        return;
                    }

                    if (sec.id === 'drawing') {
                        html += `
                        ${instHeader}
                        <div class="note-item" style="border-left-color: ${theme};">
                            <div class="fw-bold study-q-text text-body mb-1 mb-md-2" style="font-family: 'Comic Sans MS', 'Nunito', sans-serif;">
                                <span class="text-muted opacity-50 me-1.5">${idx + 1}.</span> ${qText}${clueBadge}
                            </div>
                            <div class="study-a-text text-muted fst-italic mt-1 mt-md-2"><i class="bi bi-pencil-square me-1 me-md-2"></i>Practice drawing this in your notebook.</div>
                        </div>`;
                        return;
                    }

                    html += `
                    ${instHeader}
                    <div class="note-item" style="border-left-color: ${theme};">
                        <div class="fw-bold study-q-text text-body mb-1 mb-md-2" style="font-family: 'Comic Sans MS', 'Nunito', sans-serif;">
                            <span class="text-muted opacity-50 me-1.5">${idx + 1}.</span> ${qText}${clueBadge}
                        </div>
                        <div class="study-a-text text-success fw-bold ps-2 ps-md-3 border-start border-success border-2 border-md-3 ms-0 ms-md-1" style="font-family: 'Segoe UI', sans-serif;">
                            <i class="bi bi-check2-circle me-1 me-md-2"></i>${aText}
                        </div>
                    </div>`;
                });
            }
            return html;
        }

        function renderStudyNotes() {
            const contentContainer = document.getElementById('study-notes-content');
            const navVertical = document.getElementById('study-nav-vertical');
            const navDrawer = document.getElementById('study-nav-drawer');
            const drawerTitle = document.getElementById('studyNavDrawerLabel');
            const drawerIcon = document.getElementById('studyDrawerIcon');
            const drawerFab = document.getElementById('studyDrawerFab');
            const typeBtnLabel = document.getElementById('studyTypeBtnLabel');
            const studyTypeMobBadge = document.getElementById('studyTypeMobBadge');
            const studyTypesBadge = document.getElementById('studyTypesBadge');
            const studyTypesIcon = document.getElementById('studyTypesIcon');
            const studyTypeMobIcon = document.getElementById('studyTypeMobIcon');

            if (drawerTitle) drawerTitle.textContent = 'Question Types';
            if (drawerIcon) drawerIcon.textContent = '🌪️';
            if (drawerFab && currentSubject) drawerFab.style.backgroundColor = currentSubject.theme;
            if (studyTypesIcon && currentSubject) studyTypesIcon.style.color = currentSubject.theme;
            if (studyTypeMobIcon && currentSubject) studyTypeMobIcon.style.color = currentSubject.theme;

            const rawSubject = (currentSubjectKey && SUBJECT_REGISTRY[currentSubjectKey]) ? SUBJECT_REGISTRY[currentSubjectKey] : null;
            const allChapters = rawSubject ? getChapterList(rawSubject) : [];
            const useChapterLayout = allChapters.length > 1;

            // Filter chapters based on selectedStudyChapters
            const chapters = useChapterLayout 
                ? allChapters.filter(ch => selectedStudyChapters.has(ch.id))
                : (allChapters.length > 0 ? allChapters : [{ id: 'all', title: currentSubject ? currentSubject.title : 'General', number: 1, bank: activeNormalizedBank }]);

            // If chapters are empty (user deselected all in multi-chapter)
            if (useChapterLayout && chapters.length === 0) {
                contentContainer.innerHTML = `
                    <div class="text-center py-5">
                        <div class="display-3 mb-3">📖</div>
                        <h3 class="fw-bold text-body mb-2">No Chapters Selected</h3>
                        <p class="text-muted mb-4 fs-5">Please select at least one chapter from the "Filter Chapters" dropdown above to view questions.</p>
                        <button class="btn btn-primary rounded-pill px-4 py-2 fw-bold shadow-sm" onclick="selectAllStudyChapters(true)" style="background-color: ${currentSubject.theme}; border-color: ${currentSubject.theme};">
                            <i class="bi bi-check-all me-2"></i>Select All Chapters
                        </button>
                    </div>
                `;
                const emptyNav = `<div class="p-3 text-muted text-center small">No chapters selected</div>`;
                if (navVertical) navVertical.innerHTML = emptyNav;
                if (navDrawer) navDrawer.innerHTML = emptyNav;
                return;
            }

            // 1. Calculate question counts per question type across the selected chapters
            const sectionsWithCounts = [];
            let totalQuestionsCount = 0;

            if (currentSubject && currentSubject.sections) {
                currentSubject.sections.forEach(sec => {
                    let secCount = 0;
                    chapters.forEach(ch => {
                        const chBank = useChapterLayout ? normalizeBank(ch.bank || {}) : activeNormalizedBank;
                        const items = chBank[sec.id] || [];
                        secCount += items.length;
                    });
                    if (secCount > 0) {
                        const iconData = CATEGORY_ICONS[sec.id] || { icon: '📝', title: sec.title };
                        sectionsWithCounts.push({
                            id: sec.id,
                            title: sec.title,
                            icon: iconData.icon,
                            count: secCount
                        });
                        totalQuestionsCount += secCount;
                    }
                });
            }

            // 2. Render Left Navigation Panel (Question Types ONLY)
            let activeTypeName = 'All Types';
            if (selectedStudySection !== 'all') {
                const found = sectionsWithCounts.find(s => s.id === selectedStudySection);
                if (found) {
                    activeTypeName = found.title;
                } else {
                    // Fall back to all if selected section has 0 items in current chapter selection
                    selectedStudySection = 'all';
                    activeTypeName = 'All Types';
                }
            }

            if (typeBtnLabel) typeBtnLabel.textContent = activeTypeName;
            const currentBadgeText = selectedStudySection === 'all' ? 'All' : `${sectionsWithCounts.find(s => s.id === selectedStudySection)?.count || 0}`;
            if (studyTypeMobBadge) studyTypeMobBadge.textContent = currentBadgeText;
            if (studyTypesBadge) studyTypesBadge.textContent = currentBadgeText;

            const buildNavTypeItem = (id, icon, title, count) => {
                const isActive = selectedStudySection === id;
                const activeClass = isActive ? 'active' : '';
                const activeStyle = isActive 
                    ? `background-color: ${currentSubject.theme} !important; border-color: ${currentSubject.theme} !important; color: #ffffff !important;` 
                    : `color: var(--text-main);`;
                const badgeClass = isActive 
                    ? `bg-white text-dark fw-bold` 
                    : `bg-body-secondary text-body-secondary`;

                return `
                    <button type="button" 
                            class="list-group-item list-group-item-action d-flex align-items-center justify-content-between border-start-0 border-end-0 border-top-0 border-bottom study-type-nav-item ${activeClass}" 
                            style="${activeStyle} transition: all 0.2s; padding: 0.85rem 1.15rem; cursor: pointer; text-align: left;"
                            onclick="setStudyQuestionType('${id}')">
                        <div class="d-flex align-items-center gap-2 min-w-0">
                            <span class="fs-5 flex-shrink-0">${icon}</span>
                            <span class="fw-bold text-truncate" style="font-size: 0.95rem;">${title}</span>
                        </div>
                        <span class="badge rounded-pill ${badgeClass} ms-2 flex-shrink-0" style="font-size: 0.8rem;">${count}</span>
                    </button>
                `;
            };

            let navHtml = '';
            navHtml += buildNavTypeItem('all', '✨', 'All Question Types', totalQuestionsCount);
            sectionsWithCounts.forEach(sec => {
                navHtml += buildNavTypeItem(sec.id, sec.icon, sec.title, sec.count);
            });

            if (navVertical) navVertical.innerHTML = navHtml;
            if (navDrawer) navDrawer.innerHTML = navHtml;

            // 3. Determine which question types to render in Content Area
            const sectionsToRender = selectedStudySection === 'all' 
                ? (currentSubject ? currentSubject.sections.filter(sec => sectionsWithCounts.some(s => s.id === sec.id)) : [])
                : (currentSubject ? currentSubject.sections.filter(sec => sec.id === selectedStudySection) : []);

            if (sectionsToRender.length === 0 || totalQuestionsCount === 0) {
                contentContainer.innerHTML = `
                    <div class="text-center py-5">
                        <div class="display-3 mb-3">🔍</div>
                        <h3 class="fw-bold text-body mb-2">No Questions Found</h3>
                        <p class="text-muted mb-4 fs-5">There are no questions for this question type in the selected chapters.</p>
                        <button class="btn btn-primary rounded-pill px-4 py-2 fw-bold shadow-sm" onclick="setStudyQuestionType('all')" style="background-color: ${currentSubject.theme}; border-color: ${currentSubject.theme};">
                            <i class="bi bi-funnel me-2"></i>Show All Question Types
                        </button>
                    </div>
                `;
                return;
            }

            // 4. Build Content HTML: Question Type -> Chapters Sequentially -> Questions
            let contentHtml = '';

            sectionsToRender.forEach((sec, sIdx) => {
                const secMeta = sectionsWithCounts.find(s => s.id === sec.id) || { count: 0, icon: '📝' };
                
                let secChaptersHtml = '';
                let totalItemsInSec = 0;
                let chaptersWithItemsCount = 0;

                chapters.forEach(ch => {
                    const chBank = useChapterLayout ? normalizeBank(ch.bank || {}) : activeNormalizedBank;
                    const items = chBank[sec.id] || [];
                    if (items.length === 0) return;

                    totalItemsInSec += items.length;
                    chaptersWithItemsCount++;
                    const chNumberBadge = (ch.number > 0) ? `Chapter ${ch.number}` : 'Chapter';

                    secChaptersHtml += `
                        <div class="study-chapter-group mb-4">
                            <!-- Chapter name banner before start of questions -->
                            <div class="study-chapter-banner d-flex align-items-center justify-content-between p-2.5 px-3 rounded-3 mb-2.5" 
                                 style="background: var(--bs-tertiary-bg, rgba(0,0,0,0.03)); border-left: 4.5px solid ${currentSubject.theme};">
                                <div class="d-flex align-items-center gap-2 flex-wrap min-w-0">
                                    <span class="badge rounded-pill text-white fw-bold px-2.5 py-1" style="background-color: ${currentSubject.theme}; font-size: 0.85rem;">
                                        <i class="bi bi-book-half me-1"></i>${chNumberBadge}
                                    </span>
                                    <span class="fw-bold fs-6 text-body text-truncate" title="${ch.title}">${ch.title}</span>
                                </div>
                                <span class="badge bg-secondary-subtle text-body-secondary rounded-pill small flex-shrink-0 ms-2">
                                    ${items.length} ${items.length === 1 ? 'question' : 'questions'}
                                </span>
                            </div>

                            <!-- Questions for this chapter -->
                            <div class="study-items-grid">
                                ${buildStudyItemsHtml(sec, items, currentSubject.theme)}
                            </div>
                        </div>
                    `;
                });

                if (totalItemsInSec > 0) {
                    contentHtml += `
                        <div class="mb-5 study-section animate-fade" id="study-sec-${sec.id}">
                            <div class="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom study-section-header">
                                <div class="d-flex align-items-center gap-2.5 min-w-0">
                                    <span class="fs-3 flex-shrink-0">${secMeta.icon}</span>
                                    <div class="min-w-0">
                                        <h3 class="fw-bold mb-0 text-body text-truncate" style="color: ${currentSubject.theme};">
                                            ${sec.title}
                                        </h3>
                                        <small class="text-muted">${totalItemsInSec} questions across ${chaptersWithItemsCount} ${chaptersWithItemsCount === 1 ? 'chapter' : 'chapters'}</small>
                                    </div>
                                </div>
                                ${selectedStudySection !== 'all' ? `
                                    <button class="btn btn-sm btn-outline-secondary rounded-pill px-3 fw-bold flex-shrink-0" onclick="setStudyQuestionType('all')">
                                        <i class="bi bi-arrow-left me-1"></i>All Types
                                    </button>
                                ` : ''}
                            </div>

                            ${secChaptersHtml}
                        </div>
                    `;
                }
            });

            contentContainer.innerHTML = contentHtml;
        }

        // ==========================================
        // 6. OFFLINE GENERATOR LOGIC
        // ==========================================
        function initConfigUI() {
            if(!currentSubject) return;
            const container = document.getElementById('config-sections'); container.innerHTML = ''; 
            currentSubject.sections.forEach(sec => {
                const items = activeNormalizedBank[sec.id] || [];
                if (sec.max <= 0 || !items.length) return;
                const hasInteractive = items.some(q => q.type !== 'offline_subjective');
                const isOfflineOnly = OFFLINE_ONLY_CATEGORIES.includes(sec.id) || !hasInteractive;
                const typeBadge = isOfflineOnly 
                    ? `<span class="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle rounded-pill" style="font-size: 0.72rem;"><i class="bi bi-pencil-fill me-1"></i>Offline / Written</span>`
                    : (sec.id === 'short_answer'
                        ? `<span class="badge bg-success-subtle text-success-emphasis border border-success-subtle rounded-pill" style="font-size: 0.72rem;"><i class="bi bi-check2-circle me-1"></i>Objective & Written</span>`
                        : `<span class="badge bg-primary-subtle text-primary-emphasis border border-primary-subtle rounded-pill" style="font-size: 0.72rem;">Objective</span>`);
                container.innerHTML += `
                    <div class="card p-3 mb-2 config-card shadow-sm bg-body border-color" id="card-${sec.id}">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <div class="d-flex align-items-start gap-2 flex-grow-1 pe-2">
                                <div class="form-check form-switch mb-0 mt-1"><input class="form-check-input m-0" type="checkbox" id="cb-${sec.id}" checked onchange="toggleSection('${sec.id}')"></div>
                                <div>
                                    <label class="form-check-label fw-bold text-body fs-6 mb-1 d-block" for="cb-${sec.id}">${sec.title}</label>
                                    <div>${typeBadge}</div>
                                </div>
                            </div>
                            <span class="badge bg-secondary rounded-pill flex-shrink-0 mt-1">Max: ${sec.max}</span>
                        </div>
                        <div class="controls-wrapper mt-2" id="controls-${sec.id}">
                            <div class="d-flex align-items-center gap-3">
                                <input type="range" class="form-range flex-grow-1" id="slider-${sec.id}" min="1" max="${sec.max}" value="${sec.default}" oninput="syncInputs('${sec.id}', 'slider')">
                                <div class="input-group input-group-sm" style="width: 80px;"><input type="number" class="form-control text-center fw-bold fs-6 bg-body text-body" id="num-${sec.id}" min="1" max="${sec.max}" value="${sec.default}" oninput="syncInputs('${sec.id}', 'num')"></div>
                            </div>
                        </div>
                    </div>`;
            });
            updateLiveSummary();
        }

        function toggleSection(id) {
            const isChecked = document.getElementById(`cb-${id}`).checked; const card = document.getElementById(`card-${id}`); const controls = document.getElementById(`controls-${id}`);
            if (isChecked) { card.classList.remove('disabled-card'); controls.style.opacity = '1'; controls.style.pointerEvents = 'auto'; } 
            else { card.classList.add('disabled-card'); controls.style.opacity = '0.4'; controls.style.pointerEvents = 'none'; }
            document.getElementById('presetSize').value = 'custom'; updateLiveSummary();
        }

        function syncInputs(id, source) {
            const slider = document.getElementById(`slider-${id}`); const num = document.getElementById(`num-${id}`); const max = parseInt(num.max); let val = parseInt(source === 'slider' ? slider.value : num.value);
            if (isNaN(val) || val < 1) val = 1; if (val > max) { val = max; showToast(`Maximum allowed is ${max}`, true); }
            slider.value = val; num.value = val;
            const cb = document.getElementById(`cb-${id}`); if(!cb.checked) { cb.checked = true; toggleSection(id); }
            document.getElementById('presetSize').value = 'custom'; updateLiveSummary();
        }

        function updateLiveSummary() {
            if(!currentSubject) return; let tMarks = 0, tQs = 0, tSecs = 0;
            currentSubject.sections.forEach(sec => {
                const cb = document.getElementById(`cb-${sec.id}`);
                if (!cb) return;
                if (cb.checked) {
                    tSecs++; let count = parseInt(document.getElementById(`num-${sec.id}`).value) || 0;
                    tQs += count; tMarks += (count * sec.marksPerQ);
                }
            });
            document.getElementById('sum-marks').innerText = tMarks; document.getElementById('sum-qs').innerText = tQs; document.getElementById('sum-secs').innerText = tSecs;
        }

        function applyPreset(target) {
            if (target === 'custom' || !currentSubject) return; target = parseInt(target); 
            currentSubject.sections.forEach(sec => {
                const cb = document.getElementById(`cb-${sec.id}`);
                if (!cb) return;
                cb.checked = true; toggleSection(sec.id);
            });

            if(target === 50) {
                currentSubject.sections.forEach(sec => {
                    const num = document.getElementById(`num-${sec.id}`);
                    if (!num) return;
                    num.value = Math.min(7, sec.max);
                    document.getElementById(`slider-${sec.id}`).value = Math.min(7, sec.max);
                });
            } else {
                let ratio = target / 50.0;
                currentSubject.sections.forEach(sec => {
                    const num = document.getElementById(`num-${sec.id}`);
                    if (!num) return;
                    let newVal = Math.max(1, Math.round(7 * ratio));
                    num.value = Math.min(newVal, sec.max);
                    document.getElementById(`slider-${sec.id}`).value = Math.min(newVal, sec.max);
                });
            }
            updateLiveSummary(); showToast(`Preset applied: ~${target} Marks`);
        }

        function resetConfig() {
            setChapterFilter('all');
            initConfigUI(); document.getElementById('numSets').value = "1"; document.getElementById('toggleAnswerKey').checked = true;
            document.getElementById('presetSize').value = "50"; applyPreset(50); showToast("Settings reset to default");
        }

        function togglePreviewMode() {
            offlineState.isPreviewMode = !offlineState.isPreviewMode;
            const wrapper = document.getElementById('paper-wrapper'); const btn = document.getElementById('btn-preview');
            if (offlineState.isPreviewMode) {
                wrapper.style.transform = 'scale(0.85)'; wrapper.style.transformOrigin = 'top center';
                btn.classList.replace('btn-outline-secondary', 'btn-secondary'); btn.innerHTML = `<i class="bi bi-eye-slash"></i> Exit Preview`;
            } else {
                wrapper.style.transform = 'none'; btn.classList.replace('btn-secondary', 'btn-outline-secondary'); btn.innerHTML = `<i class="bi bi-eye"></i> Preview`;
            }
        }

        function handleGenerateAction() { generateTestProcess(); setMobileTab(window.innerWidth < 992 ? 'preview' : 'config'); }

        function generateTestProcess() {
            if(!currentSubject) return;
            const numSets = parseInt(document.getElementById('numSets').value) || 1;
            const activeSections = []; let currentTotalMarks = 0;
            
            currentSubject.sections.forEach(sec => {
                const cb = document.getElementById(`cb-${sec.id}`);
                if (!cb || !cb.checked) return;
                const count = parseInt(document.getElementById(`num-${sec.id}`).value);
                activeSections.push({ ...sec, count }); currentTotalMarks += (count * sec.marksPerQ);
            });

            if (activeSections.length === 0) { showToast("Please enable at least one section to generate paper.", true); return; }

            offlineState.totalMarks = currentTotalMarks;
            offlineState.chapterFilter = currentChapterFilter;
            offlineState.sets = [];
            const setNames = ["A", "B"];

            for (let i = 0; i < numSets; i++) {
                let setData = { setName: setNames[i], sections: [] };
                activeSections.forEach(secDef => {
                    let items = getRandomItems(activeNormalizedBank[secDef.id] || [], secDef.count);
                    setData.sections.push({ id: secDef.id, title: secDef.title, marksPerQ: secDef.marksPerQ, items: items });
                });
                offlineState.sets.push(setData);
            }
            renderAllPapers();
            const status = document.getElementById('generation-status'); if(status) { status.classList.remove('d-none'); setTimeout(() => status.classList.add('d-none'), 2000); }
            showToast("Test Papers Generated Successfully!");
        }

        function regenerateSection(setIndex, sectionIndex) {
            const set = offlineState.sets[setIndex]; const sec = set.sections[sectionIndex];
            const bankForRegen = getNormalizedBankForFilter(offlineState.chapterFilter || 'all');
            sec.items = getRandomItems(bankForRegen[sec.id] || [], sec.items.length);
            renderAllPapers(); showToast(`Section regenerated!`);
        }

        function renderAllPapers() {
            const wrapper = document.getElementById('paper-wrapper'); wrapper.innerHTML = ''; 
            const wantsAnswerKey = document.getElementById('toggleAnswerKey').checked;

            offlineState.sets.forEach((set, sIdx) => {
                let pageHtml = buildPaperHeader(set.setName, offlineState.sets.length > 1);
                set.sections.forEach((sec, secIndex) => { pageHtml += buildSectionHtml(sec, sIdx, secIndex); });
                pageHtml += buildPaperFooter();
                wrapper.insertAdjacentHTML('beforeend', `<div class="a4-page shadow-sm">${pageHtml}</div>`);
            });

            if (wantsAnswerKey) {
                offlineState.sets.forEach((set) => { wrapper.insertAdjacentHTML('beforeend', `<div class="a4-page shadow-sm answer-key-page">${buildAnswerKeyHtml(set)}</div>`); });
            }
            
            document.querySelectorAll('.btn-theme-bg').forEach(b => b.style.backgroundColor = currentSubject.theme);
        }

        function buildSectionHtml(sec, setIndex, secIndex) {
            let markVal = (sec.items.length * sec.marksPerQ);
            let regenBtn = `<button class="regen-btn no-print no-export" style="background-color:${currentSubject.theme};" onclick="regenerateSection(${setIndex}, ${secIndex})"><i class="bi bi-arrow-clockwise"></i></button>`;

            // Check if items have specific instructions
            const uniqueInstructions = [...new Set(sec.items.map(item => item.instruction).filter(Boolean))];
            let titleText = sec.title;
            let hasMultipleInstructions = uniqueInstructions.length > 1;

            if (uniqueInstructions.length === 1 && (sec.id === 'fill_blanks' || sec.id === 'sentence_rewrite' || sec.id === 'short_answer' || sec.id === 'writing_prompt')) {
                titleText = uniqueInstructions[0];
            }

            let titleStr = `<b>${ROMAN[secIndex + 1]}. ${titleText}:</b> <span style="float: right;">[${sec.items.length} x ${sec.marksPerQ} = ${markVal}]</span>`;
            let content = '';

            function renderItemRow(qObj, i) {
                let rowContent = '';
                let clueText = qObj.clue ? ` ${qObj.clue}` : '';

                if (['one_word', 'name_following'].includes(sec.id)) {
                    rowContent = `<div class="q-row px-1 py-1" style="margin-bottom: 12px; margin-top: 10px;"><span>${i + 1}. ${qObj.question}${clueText}</span> ________________________</div>`;
                }
                else if (['opposite_word', 'word_meaning', 'spelling_check'].includes(sec.id)) {
                    rowContent = `<div class="q-row px-1 py-1" style="margin-bottom: 10px;"><span>${i + 1}. ${qObj.question}</span>: ________________________</div>`;
                }
                else if (['match_following'].includes(sec.id)) {
                    // Handled at section level
                }
                else if (['sentence_rewrite'].includes(sec.id) || qObj.format === 'rewrite') {
                    rowContent = `<div class="q-row px-1 py-1" style="margin-bottom: 12px; margin-top: 6px;">
                        <span>${i + 1}. ${qObj.question}${clueText}</span>
                        <div style="border-bottom: 1px dotted #888; margin-top: 6px; margin-bottom: 4px; padding-bottom: 2px; font-family: monospace; color: #555;">Ans: ________________________________________________________________</div>
                    </div>`;
                }
                else if (['fill_blanks'].includes(sec.id) || qObj.format === 'fill_blank') {
                    let displayQ = qObj.question.replace(/___/g, "_____________");
                    if (qObj.clue && !displayQ.includes(qObj.clue)) {
                        displayQ += clueText;
                    }
                    rowContent = `<div class="q-row px-1 py-1" style="margin-bottom: 8px;"><span>${i + 1}. ${displayQ}</span></div>`;
                }
                else if (['missing_letters'].includes(sec.id)) {
                    let displayWord = qObj.question.replace(/Complete the word:/ig, "").replace(/_/g, "__").trim();
                    rowContent = `<div class="q-row px-1 py-1" style="margin-bottom: 8px;"><span>${i + 1}. ${displayWord}</span></div>`;
                }
                else if (['true_false'].includes(sec.id)) {
                    rowContent = `<div class="q-row px-1 py-1" style="margin-bottom: 8px;"><span>${i + 1}. ${qObj.question}</span> ____________</div>`;
                }
                else if (['rearrange'].includes(sec.id)) {
                    let displayWord = qObj.question.replace(/^(Unscramble|Rearrange the letters:?)\s*/ig, "").replace(":", "").trim();
                    rowContent = `<div class="q-row px-1 py-1" style="margin-bottom: 12px; margin-top: 10px;"><span>${i + 1}. ${displayWord}</span> ________________________</div>`;
                }
                else if (['writing_prompt'].includes(sec.id) || qObj.category === 'writing_prompt') {
                    rowContent = `<div class="q-row px-1 py-1" style="margin-bottom: 24px; margin-top: 10px; page-break-inside: avoid;">
                        <div style="font-size: 15px; font-weight: bold; margin-bottom: 8px;">${i + 1}. ${qObj.question}</div>
                        <div style="border: 1px dashed #777; border-radius: 6px; padding: 12px; background: repeating-linear-gradient(transparent, transparent 27px, #bbb 28px); min-height: 180px;"></div>
                    </div>`;
                }
                else if (['short_answer'].includes(sec.id) || qObj.category === 'short_answer') {
                    rowContent = `<div class="q-row px-1 py-1" style="margin-bottom: 16px; margin-top: 8px; page-break-inside: avoid;">
                        <div style="font-weight: 600; font-size: 14.5px;">${i + 1}. ${qObj.question}${clueText}</div>
                        <div style="margin-top: 8px; border-bottom: 1px dotted #888; height: 22px;"></div>
                        <div style="margin-top: 6px; border-bottom: 1px dotted #888; height: 22px;"></div>
                    </div>`;
                }
                else if (['drawing', 'drawings'].includes(sec.id) || qObj.category === 'drawing') {
                    rowContent = `<div class="q-row px-1 py-1" style="margin-bottom: 20px; margin-top: 8px; page-break-inside: avoid;">
                        <div style="font-weight: 600; font-size: 14.5px;">${i + 1}. ${qObj.question}</div>
                        <div style="margin-top: 8px; border: 1.5px dashed #888; border-radius: 6px; height: 180px; display: flex; align-items: center; justify-content: center; color: #888; font-style: italic;">(Draw and colour in this box)</div>
                    </div>`;
                }
                else if (['mcq_standard'].includes(sec.id)) {
                    let optsHtml = '';
                    if (qObj.options && qObj.options.length > 0) {
                        let displayOptions = qObj.options;
                        if (displayOptions.length > 4) {
                            const correctOpt = displayOptions.find(o => o.id === qObj.answer) || displayOptions[0];
                            const wrongOpts = displayOptions.filter(o => o.id !== qObj.answer).slice(0, 3);
                            displayOptions = shuffleArray([correctOpt, ...wrongOpts]);
                        }
                        
                        let totalTextLength = displayOptions.reduce((sum, o) => sum + (o.text ? o.text.length : String(o).length), 0);
                        let use1x4Layout = totalTextLength <= 60;
                        
                        optsHtml = '<div style="margin-left: 15px; margin-top: 5px; line-height: 1.6;">';
                        displayOptions.forEach((opt, idx) => {
                            let optText = opt.text || opt;
                            optsHtml += `<span>(${String.fromCharCode(97 + idx)}) ${optText}</span>`;
                            if (idx < displayOptions.length - 1) {
                                if (!use1x4Layout && idx === 1) optsHtml += '<br>';
                                else optsHtml += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                            }
                        });
                        optsHtml += '</div>';
                    }
                    rowContent = `<div class="q-row px-1 py-1" style="margin-bottom: 15px;"><span>${i + 1}. ${qObj.question}${clueText}</span>${optsHtml}</div>`;
                }
                else {
                    rowContent = `<div class="q-row px-1 py-1" style="margin-bottom: 8px;"><span>${i + 1}. ${qObj.question}${clueText}</span> ____________</div>`;
                }
                return rowContent;
            }

            if (['match_following'].includes(sec.id)) {
                 let rightSide = sec.items.map(item => item.rightWord || item.a);
                 rightSide = shuffleArray(rightSide);
                 content += `<table style="width: 100%; border-collapse: collapse; border: none; margin-top: 10px; margin-bottom: 15px;">`;
                 sec.items.forEach((qObj, i) => {
                     let leftTxt = qObj.leftWord || qObj.question;
                     content += `<tr>
                         <td style="width: 50%; padding: 6px 0; border: none;">${i + 1}. ${leftTxt}</td>
                         <td style="width: 50%; padding: 6px 0; border: none;">(${String.fromCharCode(97 + i)}) ${rightSide[i]}</td>
                     </tr>`;
                 });
                 content += `</table>`;
            }
            else if (hasMultipleInstructions) {
                let itemCounter = 0;
                let subGroupIdx = 0;
                let grouped = {};
                sec.items.forEach(item => {
                    let inst = item.instruction || 'Other Questions';
                    if (!grouped[inst]) grouped[inst] = [];
                    grouped[inst].push(item);
                });
                for (let inst in grouped) {
                    let groupItems = grouped[inst];
                    let subLetter = String.fromCharCode(65 + subGroupIdx);
                    content += `<div style="font-weight: bold; margin-top: 12px; margin-bottom: 6px; font-size: 15px;">(${subLetter}) ${inst}:</div>`;
                    groupItems.forEach(item => {
                        content += renderItemRow(item, itemCounter++);
                    });
                    subGroupIdx++;
                }
            } else {
                sec.items.forEach((qObj, i) => {
                    content += renderItemRow(qObj, i);
                });
            }
            return `<div class="section-block">${regenBtn}<div style="margin-bottom: 10px; font-size: 16px;">${titleStr}</div><div style="margin-bottom: 20px;">${content}</div></div>`;
        }

        function buildPaperHeader(setName, showSetLabel) {
            const chapterLine = currentChapterFilter !== 'all'
                ? `<div style="font-size: 14px; margin-top: 4px; font-weight: bold;">${getChapterLabel(SUBJECT_REGISTRY[currentSubjectKey], currentChapterFilter)}</div>`
                : '';
            return `
            <div class="paper-header" style="text-align: center; margin-bottom: 15px;">
                <div style="font-size: 18px; font-weight: bold;">HOLY CROSS SCHOOL, AGARTALA</div>
                <div style="font-size: 16px; margin-top: 5px; font-weight: bold;">HALF YEARLY EXAMINATION - 2026</div>
                <div style="font-size: 16px; margin-top: 5px; font-weight: bold;">Class - II</div>
                ${chapterLine}
            </div>
            <table style="width: 100%; font-weight: bold; margin-bottom: 5px; border-bottom: 2px solid #000; padding-bottom: 5px; border-collapse: collapse;">
                <tr>
                    <td style="text-align: left; width: 33%; border: none;">Time: 2 Hrs.</td>
                    <td style="text-align: center; width: 34%; border: none;">${currentSubject.title}</td>
                    <td style="text-align: right; width: 33%; border: none;">Total Marks : ${offlineState.totalMarks}</td>
                </tr>
            </table>
            <div style="text-align: center; font-weight: bold; margin-bottom: 15px;">
                ${showSetLabel ? `SET - ${setName}` : '&nbsp;'}
            </div>
            `; 
        }
        
        function buildPaperFooter() { return `<div class="paper-footer" style="margin-top: 40px; border-top: 1px dashed var(--border-color); padding-top: 10px; text-align: center; font-style: italic;">============= END =============</div>`; }
        function buildAnswerKeyHtml(set) {
            let html = `<div style="text-align: center; margin-bottom: 2rem;"><h3 style="font-weight: bold; text-decoration: underline;">ANSWER KEY - ${offlineState.sets.length > 1 ? `SET ${set.setName}` : `PAPER`}</h3><p class="text-muted">${currentSubject.title} - Class 2</p></div>`;
            set.sections.forEach((sec, secIdx) => {
                const uniqueInstructions = [...new Set(sec.items.map(item => item.instruction).filter(Boolean))];
                let titleText = (uniqueInstructions.length === 1 && (sec.id === 'fill_blanks' || sec.id === 'sentence_rewrite' || sec.id === 'short_answer' || sec.id === 'writing_prompt')) ? uniqueInstructions[0] : sec.title;
                html += `<div style="margin-bottom: 15px;"><b>${ROMAN[secIdx + 1]}. ${titleText}</b><br>`;
                let ansList = [];
                sec.items.forEach((qObj, i) => { 
                    let ans = qObj.answerText || qObj.a || (qObj.leftWord ? `${qObj.leftWord} - ${qObj.rightWord}` : ''); 
                    if (sec.id === 'writing_prompt' || qObj.category === 'writing_prompt') {
                        ansList.push(`<div style="margin-top: 6px; margin-bottom: 10px;"><b>${i + 1}) ${qObj.question}:</b><br><div style="color: #333; font-style: italic; margin-top: 4px; padding-left: 12px; border-left: 3px solid #ccc; line-height: 1.5;">${ans}</div></div>`);
                    } else if (sec.id === 'short_answer' || qObj.category === 'short_answer') {
                        ansList.push(`<b>${i + 1}) ${qObj.question}:</b> <span class="fw-semibold text-dark">${ans}</span>`);
                    } else {
                        ansList.push(`${i + 1}) ${ans}`);
                    }
                });
                if(['match_following', 'rearrange', 'missing_letters'].includes(sec.id)) {
                   html += `<table style="width: 100%; border: none; margin-top: 5px; border-collapse: collapse;"><tr>`;
                   ansList.forEach((a, i) => { html += `<td style="border: none; padding: 2px;">${a}</td>`; if ((i + 1) % 2 === 0 && i !== ansList.length - 1) html += `</tr><tr>`; });
                   if (ansList.length % 2 !== 0) html += `<td style="border: none;"></td>`; html += `</tr></table>`;
                } else { ansList.forEach(a => html += `<div style="margin-bottom: 4px;">${a}</div>`); }
                html += `</div>`;
            });
            return html;
        }

        // ==========================================
        // 7. LIVE TEST ENGINE (Kids Mode)
        // ==========================================
        function validateStudentName() {
            const nameInput = document.getElementById('studentNameInput');
            if (!nameInput.value.trim()) {
                nameInput.classList.add('border-danger'); nameInput.classList.remove('border-success'); showToast("Please enter your name to start!", true);
                setTimeout(() => { nameInput.classList.remove('border-danger'); }, 3000); return false;
            }
            onlineState.studentName = nameInput.value.trim(); return true;
        }

        function openLiveTestModal() { 
            renderChapterSelectors();
            renderTopicButtons();
            
            const modalEl = document.getElementById('liveTestModal');
            if (modalEl && currentSubject) {
                modalEl.querySelectorAll('.mix-mode-card').forEach(b => {
                    b.style.setProperty('--card-theme', currentSubject.theme);
                });
            }
            
            const history = JSON.parse(localStorage.getItem('portalQuizHistory') || '[]');
            const uniqueNames = [...new Set(history.map(h => h.name))];
            const dataList = document.getElementById('studentNamesList');
            if (dataList) {
                dataList.innerHTML = uniqueNames.map(name => `<option value="${name}"></option>`).join('');
            }
            
            new bootstrap.Modal(document.getElementById('liveTestModal')).show(); 
        }

        function launchSpecificQuiz(categoryIds) {
            if (!validateStudentName()) return;
            const modalObj = bootstrap.Modal.getInstance(document.getElementById('liveTestModal')); if (modalObj) modalObj.hide();
            
            let qsRaw = [];
            categoryIds.forEach(catId => { 
                // Exclude subjective offline-only categories from online objective quiz
                if (!OFFLINE_ONLY_CATEGORIES.includes(catId) && activeNormalizedBank[catId]) {
                    const interactivePool = activeNormalizedBank[catId].filter(q => q.type !== 'offline_subjective');
                    qsRaw.push(...interactivePool); 
                }
            });
            qsRaw = shuffleArray(qsRaw);

            const limitVal = document.getElementById('topicQLimit').value;
            if (limitVal !== 'all') { const limit = parseInt(limitVal); qsRaw = qsRaw.slice(0, limit); }
            
            enterFullScreen();
            processAndLaunchLiveTest(qsRaw);
        }

        function launchLiveTest(size) {
            if (!validateStudentName()) return;
            const modalObj = bootstrap.Modal.getInstance(document.getElementById('liveTestModal')); if (modalObj) modalObj.hide();

            let target = parseInt(size);
            let screenCounts = {};
            let maxScreens = {};
            
            currentSubject.sections.forEach(sec => {
                screenCounts[sec.id] = 0;
                let bLength = (activeNormalizedBank[sec.id] || []).filter(q => q.type !== 'offline_subjective').length;
                maxScreens[sec.id] = sec.id === 'match_following' ? Math.floor(bLength / 4) : bLength;
            });

            // Exclude offline-only categories and empty categories from the available pool for mixed live tests
            let availableCats = Object.keys(screenCounts).filter(c => !OFFLINE_ONLY_CATEGORIES.includes(c) && maxScreens[c] > 0);
            
            for (let i = 0; i < target; i++) {
                let validCats = availableCats.filter(c => screenCounts[c] < maxScreens[c]);
                if (validCats.length === 0) break;
                validCats = shuffleArray(validCats).sort((a, b) => screenCounts[a] - screenCounts[b]);
                screenCounts[validCats[0]]++;
            }

            let qsRaw = [];
            for (let cat in screenCounts) {
                let count = screenCounts[cat];
                if (count > 0) {
                    let itemsToPull = cat === 'match_following' ? count * 4 : count;
                    qsRaw.push(...getRandomItems(activeNormalizedBank[cat], itemsToPull));
                }
            }
            qsRaw = shuffleArray(qsRaw);

            enterFullScreen();
            processAndLaunchLiveTest(qsRaw);
        }

        function processAndLaunchLiveTest(rawQuestions) {
            let interactiveQuestions = rawQuestions.filter(q => 
                !OFFLINE_ONLY_CATEGORIES.includes(q.category) && 
                q.type !== 'offline_subjective' && 
                ['mcq', 'fill_blank_click', 'matching_pair_candidate', 'missing_letter_input'].includes(q.type)
            );
            let candidates = interactiveQuestions.filter(q => q.type === 'matching_pair_candidate');
            let otherQuestions = interactiveQuestions.filter(q => q.type !== 'matching_pair_candidate');

            let groupedMatching = [];
            if (candidates.length > 0) {
                let pairs = candidates.map((c, idx) => ({ id: `pair_${Date.now()}_${idx}`, left: c.leftWord, right: c.rightWord }));
                for (let i = 0; i < pairs.length; i += 4) {
                    let chunk = pairs.slice(i, i + 4);
                    groupedMatching.push({
                        type: "matching_pairs", question: "Match the correct pairs!", category: "match_following",
                        pairs: chunk, leftSide: shuffleArray(chunk.map(p => ({ id: p.id, text: p.left, side: 'left' }))), rightSide: shuffleArray(chunk.map(p => ({ id: p.id, text: p.right, side: 'right' }))),
                        matchesMade: 0, totalMatches: chunk.length
                    });
                }
            }

            onlineState.questions = shuffleArray([...otherQuestions, ...groupedMatching]);

            if (onlineState.questions.length === 0) { showToast("No questions found for this topic.", true); setMobileTab('home'); return; }
            
            onlineState.testId = currentSubject.id.toUpperCase() + '_' + Date.now().toString(36).toUpperCase() + '_' + Math.random().toString(36).substr(2, 5);
            onlineState.totalPoints = onlineState.questions.length; onlineState.currentIndex = 0; onlineState.score = 0; onlineState.wrongScore = 0; onlineState.answers = []; onlineState.nextTimeout = null;
            window.removeEventListener('keydown', handleOnlineKeydown);
            window.addEventListener('keydown', handleOnlineKeydown);
            
            document.getElementById('ot-right').innerText = '0'; document.getElementById('ot-wrong').innerText = '0';
            
            document.getElementById('game-card').style.borderTopColor = currentSubject.theme;
            document.getElementById('ot-progress-bar').style.backgroundColor = currentSubject.theme;
            updateGameCardTitle();
            
            document.getElementById('ot-interface').classList.remove('d-none');
            setMobileTab('online'); renderOnlineQuestion();
        }

        function getCategoryTitle(categoryId) {
            const section = currentSubject.sections.find(sec => sec.id === categoryId);
            return section ? section.title : "Question";
        }

        function renderOnlineQuestion() {
            if (onlineState.nextTimeout) {
                clearTimeout(onlineState.nextTimeout);
                onlineState.nextTimeout = null;
            }
            window.removeEventListener('resize', redrawMatchLines);
            document.getElementById('ot-learning-overlay').classList.add('d-none');
            
            const qObj = onlineState.questions[onlineState.currentIndex]; 
            const qIndex = onlineState.currentIndex; 
            const totalScreens = onlineState.questions.length;
            
            document.getElementById('ot-progress-text').innerText = `Q ${qIndex + 1} / ${totalScreens}`;
            document.getElementById('ot-progress-bar').style.width = `${((qIndex + 1) / totalScreens) * 100}%`;

            // Update chapter subtitle in the header
            updateGameCardTitle(qObj);

            const isSpellingCheck = (qObj.category === 'spelling_check');
            const sectionTitle = isSpellingCheck 
                ? 'Choose the correct spelling' 
                : (qObj.instruction || getCategoryTitle(qObj.category));
            const sectionTitleHtml = sectionTitle ? `
                <div class="question-instruction-text animate-fade w-100 text-center mb-4">
                    <p class="text-body-secondary fw-semibold mb-0" style="font-size: clamp(1.05rem, 2.2vw, 1.25rem); line-height: 1.4; font-family: 'Comic Sans MS', 'Nunito', sans-serif;">
                        ${sectionTitle}
                    </p>
                </div>
            ` : '';

            if (qObj.type === 'fill_blank_click') {
                document.getElementById('ot-interface').classList.add('full-width-grid'); document.getElementById('ot-left-panel').style.display = 'none';
                let clueBadge = qObj.clue ? ` <span class="badge bg-secondary-subtle text-body-secondary border px-2 py-1 fs-6 ms-2 align-middle">${qObj.clue}</span>` : '';
                let sentenceHtml = `<div class="kid-question-text w-100 animate-fade text-center mb-4" style="margin-top: 1rem; font-size: clamp(1.4rem, 3.5vw, 2rem) !important;">${qObj.segments[0]}<span id="blank-zone" class="blank-dropzone empty" onclick="handleBlankZoneClick()"></span>${qObj.segments.length > 1 ? qObj.segments[1] : ''}${clueBadge}</div>`;
                let pillsHtml = `<div class="d-flex flex-wrap justify-content-center gap-2 gap-sm-3 animate-fade" style="max-width: 600px; margin: 0 auto;">${qObj.options.map(opt => `<button id="${opt.id}" class="soft-pill-btn" onclick="handleOptionPillClick('${opt.id}', '${opt.text}')">${opt.text}</button>`).join('')}</div>`;
                document.getElementById('ot-options-box').innerHTML = `${sectionTitleHtml}${sentenceHtml}${pillsHtml}<button id="btn-go-check" class="btn-go-check animate-fade w-100 mt-5 mx-auto d-block" style="max-width: 300px; background-color:${currentSubject.theme};" onclick="submitFillBlank()" disabled>GO!</button>`;
            } 
            else if (qObj.type === 'matching_pairs') {
                document.getElementById('ot-interface').classList.add('full-width-grid'); document.getElementById('ot-left-panel').style.display = 'none';
                let leftHtml = qObj.leftSide.map(item => `<div class="match-card left-card animate-fade" id="match-left-${item.id}" onclick="handleMatchCardClick('left', '${item.id}')">${item.text}</div>`).join('');
                let rightHtml = qObj.rightSide.map(item => `<div class="match-card right-card animate-fade" id="match-right-${item.id}" onclick="handleMatchCardClick('right', '${item.id}')">${item.text}</div>`).join('');
                document.getElementById('ot-options-box').innerHTML = `${sectionTitleHtml}<div class="kid-question-text w-100 animate-fade text-center" style="margin-bottom: 1rem !important;">${qObj.question}</div><div class="match-game-wrapper animate-fade" id="match-game-container"><svg id="match-lines-svg" style="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index: 10;"></svg><div class="match-col match-col-left" id="match-col-left">${leftHtml}</div><div class="match-col match-col-right" id="match-col-right">${rightHtml}</div></div>`;
                onlineState.matchSelection = { left: null, right: null }; onlineState.matchLines = []; window.addEventListener('resize', redrawMatchLines);
            }
            else if (qObj.type === 'missing_letter_input') {
                renderMissingLetterQuestion(qObj, sectionTitleHtml);
            }
            else {
                document.getElementById('ot-interface').classList.add('full-width-grid'); document.getElementById('ot-left-panel').style.display = 'none';
                if (qObj.invalid || !qObj.answer) {
                    let displayQText = qObj.question.replace(/'([^']+)'/g, "<span class='highlight-word'>'$1'</span>");
                    document.getElementById('ot-options-box').innerHTML = `
                        ${sectionTitleHtml}
                        <h4 class="kid-question-text w-100 animate-fade text-center">${displayQText}</h4>
                        <div class="alert alert-warning text-center my-3 fw-bold">
                            <i class="bi bi-exclamation-triangle-fill me-2"></i>This question has an invalid configuration and cannot be graded.
                        </div>
                        <div class="text-center">
                            <button class="btn btn-secondary rounded-pill px-4 py-2 fw-bold" onclick="skipInvalidQuestion()">Skip Question</button>
                        </div>
                    `;
                    document.getElementById('ot-feedback').innerHTML = '';
                    return;
                }
                let isTrueFalse = (qObj.category === 'true_false');
                
                // Adaptive layout determination:
                // - Mobile phones (< 540px): 4x1
                // - Tablets (540px - 991px): 2x2 for short text (<= 14 chars & <= 2 words, e.g. 'blink', 'gaze', 'glance', 'wink'), 4x1 for longer options
                // - Desktops (>= 992px): 2x2 for options up to 22 chars, 4x1 if longer or if text wraps
                const winWidth = window.innerWidth;
                let hasLongOption;
                if (winWidth < 540) {
                    hasLongOption = true;
                } else if (winWidth < 992) {
                    hasLongOption = qObj.options && qObj.options.some(opt => {
                        const txt = (opt.text || '').trim();
                        return txt.length > 14 || txt.split(/\s+/).length > 2;
                    });
                } else {
                    hasLongOption = qObj.options && qObj.options.some(opt => {
                        const txt = (opt.text || '').trim();
                        return txt.length > 22 || txt.split(/\s+/).length > 3;
                    });
                }

                let gridClass = isTrueFalse ? 'mcq-grid-1x2' : (hasLongOption ? 'mcq-grid-4x1' : 'mcq-grid-2x2');
                let optionsHtml = `<div class="${gridClass} w-100" id="ot-mcq-grid">`;
                qObj.options.forEach((opt, idx) => {
                    optionsHtml += `<button class="mcq-btn animate-fade" data-opt-id="${opt.id}" style="color: ${currentSubject.theme};" onclick="submitOnlineAnswer(this, '${opt.id}')">
                        <div class="mcq-btn-content">
                            <span class="mcq-badge">${String.fromCharCode(65 + idx)}</span>
                            <span class="mcq-option-text">${opt.text}</span>
                        </div>
                        <span class="mcq-feedback-pill d-none"></span>
                    </button>`;
                });
                optionsHtml += '</div>';

                // Next Button & Inline Feedback right below the options
                optionsHtml += `
                    <div id="ot-inline-feedback" class="w-100 text-center d-none"></div>
                    <div id="ot-next-box" class="w-100 text-center mt-3 d-none animate-fade">
                        <button id="btn-next-question" class="btn-next-action shadow-lg" onclick="goToNextQuestion()">
                            <span>Next Question</span>
                            <i class="bi bi-arrow-right-circle-fill ms-2"></i>
                        </button>
                    </div>
                `;
                let displayQText = isSpellingCheck ? '' : qObj.question.replace(/'([^']+)'/g, "<span class='highlight-word'>'$1'</span>");
                if (!isSpellingCheck && qObj.clue && !displayQText.includes(qObj.clue)) {
                    displayQText += ` <span class="badge bg-secondary-subtle text-body-secondary border px-2 py-1 fs-6 ms-2 align-middle">${qObj.clue}</span>`;
                }
                let questionHeadingHtml = displayQText ? `<h4 class="kid-question-text w-100 animate-fade text-center mb-4">${displayQText}</h4>` : '';
                document.getElementById('ot-options-box').innerHTML = `${sectionTitleHtml}${questionHeadingHtml}${optionsHtml}`; 

                // Dynamic wrapping transformation: applied on both tablet and desktop screens!
                // If in 2x2 layout but any option wraps onto multiple lines, transform to 4x1
                const checkAndTransformWrap = () => {
                    const gridEl = document.getElementById('ot-mcq-grid');
                    if (gridEl && gridEl.classList.contains('mcq-grid-2x2')) {
                        const spans = gridEl.querySelectorAll('.mcq-option-text');
                        let wraps = false;
                        spans.forEach(span => {
                            if (span.getClientRects().length > 1) {
                                wraps = true;
                            }
                        });
                        if (wraps) {
                            gridEl.classList.remove('mcq-grid-2x2');
                            gridEl.classList.add('mcq-grid-4x1');
                        }
                    }
                };
                requestAnimationFrame(checkAndTransformWrap);
                window.addEventListener('resize', checkAndTransformWrap, { passive: true });
            }
            document.getElementById('ot-feedback').innerHTML = '';
        }

        function skipInvalidQuestion() {
            onlineState.currentIndex++;
            if (onlineState.currentIndex >= onlineState.questions.length) showFunResultModal();
            else renderOnlineQuestion();
        }

        function renderMissingLetterQuestion(qObj, sectionTitleHtml) {
            document.getElementById('ot-interface').classList.add('full-width-grid');
            document.getElementById('ot-left-panel').style.display = 'none';

            if (!qObj.wordBoxes || qObj.wordBoxes.length === 0) {
                qObj.wordBoxes = parseMissingLettersWord(qObj.question, qObj.answerText);
            }

            const boxes = qObj.wordBoxes;
            let boxesHtml = '';

            boxes.forEach((box, i) => {
                if (box.isSeparator) {
                    boxesHtml += `<span class="missing-letter-sep">${box.separatorChar}</span>`;
                } else if (!box.isBlank) {
                    boxesHtml += `<div class="missing-letter-box locked-box d-flex align-items-center justify-content-center">${box.displayChar}</div>`;
                } else {
                    boxesHtml += `<input type="text" class="missing-letter-box input-box text-center" id="ml-input-${i}" data-idx="${i}" data-expected="${box.expectedChar}" maxlength="1" autocomplete="off" autocorrect="off" autocapitalize="characters" spellcheck="false" inputmode="text" placeholder="" />`;
                }
            });

            const cleanPrompt = qObj.question.replace(/^Complete the word:\s*/i, '').trim();

            document.getElementById('ot-options-box').innerHTML = `
                ${sectionTitleHtml}
                <div class="kid-question-text w-100 animate-fade text-center mb-2" style="font-size: clamp(1.2rem, 3.2vw, 1.75rem) !important; margin-bottom: 1.5rem !important;">
                    Complete the word: <span class="highlight-word ms-2">${cleanPrompt}</span>
                </div>
                <div class="missing-letters-container d-flex flex-wrap justify-content-center align-items-center gap-2 gap-sm-3 animate-fade" id="missing-letters-wrapper">
                    ${boxesHtml}
                </div>
                <button id="btn-check-missing" class="btn-go-check animate-fade w-100 mt-4 mx-auto d-block" style="max-width: 280px; background-color:${currentSubject.theme};" onclick="submitMissingLetterAnswer()" disabled>
                    CHECK! 🚀
                </button>
            `;

            // Attach listeners to input boxes
            const inputs = Array.from(document.querySelectorAll('.missing-letter-box.input-box'));
            inputs.forEach((input, curIdx) => {
                input.addEventListener('focus', function() {
                    this.select();
                });
                input.addEventListener('click', function() {
                    this.select();
                });
                input.addEventListener('input', function(e) {
                    let val = this.value;
                    if (val.length > 0) {
                        const char = val.slice(-1).toUpperCase();
                        if (/[A-Z0-9]/.test(char)) {
                            this.value = char;
                            if (curIdx < inputs.length - 1) {
                                inputs[curIdx + 1].focus();
                                inputs[curIdx + 1].select();
                            }
                        } else {
                            this.value = '';
                        }
                    }
                    updateMissingCheckBtnState();
                });
                input.addEventListener('keydown', function(e) {
                    if (e.key === 'ArrowLeft') {
                        e.preventDefault();
                        if (curIdx > 0) {
                            inputs[curIdx - 1].focus();
                            inputs[curIdx - 1].select();
                        }
                        return;
                    }
                    if (e.key === 'ArrowRight') {
                        e.preventDefault();
                        if (curIdx < inputs.length - 1) {
                            inputs[curIdx + 1].focus();
                            inputs[curIdx + 1].select();
                        }
                        return;
                    }
                    if (e.key === 'Backspace') {
                        if (this.value === '') {
                            e.preventDefault();
                            if (curIdx > 0) {
                                inputs[curIdx - 1].value = '';
                                inputs[curIdx - 1].focus();
                                inputs[curIdx - 1].select();
                                updateMissingCheckBtnState();
                            }
                        } else {
                            this.value = '';
                            e.preventDefault();
                            updateMissingCheckBtnState();
                        }
                        return;
                    }
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        const checkBtn = document.getElementById('btn-check-missing');
                        if (checkBtn && !checkBtn.disabled) {
                            submitMissingLetterAnswer();
                        }
                        return;
                    }
                });
            });

            // Auto-focus first input box
            setTimeout(() => {
                if (inputs.length > 0) {
                    inputs[0].focus();
                    inputs[0].select();
                }
            }, 300);
        }

        function updateMissingCheckBtnState() {
            const inputs = Array.from(document.querySelectorAll('.missing-letter-box.input-box'));
            const allFilled = inputs.length > 0 && inputs.every(inp => inp.value.trim().length > 0);
            const checkBtn = document.getElementById('btn-check-missing');
            if (checkBtn) {
                checkBtn.disabled = !allFilled;
            }
        }

        function submitMissingLetterAnswer() {
            const q = onlineState.questions[onlineState.currentIndex];
            if (!q) return;
            const inputs = Array.from(document.querySelectorAll('.missing-letter-box.input-box'));
            if (!inputs.length) return;

            const allBoxes = q.wordBoxes || parseMissingLettersWord(q.question, q.answerText);
            
            let fullWordChars = [];
            let isAllCorrect = true;

            allBoxes.forEach((box, i) => {
                if (box.isSeparator) {
                    fullWordChars.push(box.separatorChar);
                } else if (!box.isBlank) {
                    fullWordChars.push(box.expectedChar);
                } else {
                    const inputEl = document.getElementById(`ml-input-${i}`);
                    const userChar = (inputEl ? inputEl.value : '').trim().toUpperCase();
                    fullWordChars.push(userChar || '_');
                    if (userChar !== box.expectedChar) {
                        isAllCorrect = false;
                        if (inputEl) inputEl.classList.add('wrong-letter');
                    } else {
                        if (inputEl) inputEl.classList.add('correct-letter');
                    }
                }
            });

            const givenWord = fullWordChars.join('');
            const targetWord = (q.answerText || '').trim().toUpperCase();
            const isPerfect = isAllCorrect && (givenWord.replace(/[\s-]/g, '') === targetWord.replace(/[\s-]/g, ''));

            inputs.forEach(inp => { inp.disabled = true; });
            const checkBtn = document.getElementById('btn-check-missing');
            if (checkBtn) checkBtn.disabled = true;

            if (isPerfect) {
                inputs.forEach(inp => {
                    inp.classList.remove('wrong-letter');
                    inp.classList.add('correct-letter');
                });
                onlineState.score++;
                document.getElementById('ot-right').innerText = onlineState.score;
                confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, zIndex: 2000 });
            } else {
                onlineState.wrongScore++;
                document.getElementById('ot-wrong').innerText = onlineState.wrongScore;
            }

            onlineState.answers.push({
                category: q.category,
                question: q.question,
                givenAns: givenWord,
                correctAns: q.answerText,
                isCorrect: isPerfect
            });

            if (isPerfect) {
                setTimeout(() => {
                    onlineState.currentIndex++;
                    if (onlineState.currentIndex >= onlineState.questions.length) showFunResultModal();
                    else renderOnlineQuestion();
                }, 1500);
            } else {
                setTimeout(() => {
                    showLearningOverlay(q.question, givenWord, q.answerText, () => {
                        onlineState.currentIndex++;
                        if (onlineState.currentIndex >= onlineState.questions.length) showFunResultModal();
                        else renderOnlineQuestion();
                    });
                }, 800);
            }
        }

        function handleOptionPillClick(btnId, wordText) {
            const zone = document.getElementById('blank-zone');
            if (zone.classList.contains('filled')) { const oldBtn = document.getElementById(zone.getAttribute('data-btn-id')); if(oldBtn) oldBtn.classList.remove('hidden-pill'); }
            zone.innerText = wordText; zone.classList.replace('empty', 'filled'); zone.setAttribute('data-btn-id', btnId);
            zone.style.borderColor = currentSubject.theme; zone.style.color = currentSubject.theme;
            document.getElementById(btnId).classList.add('hidden-pill'); document.getElementById('btn-go-check').disabled = false;
        }

        function handleBlankZoneClick() {
            const zone = document.getElementById('blank-zone');
            if (zone.classList.contains('filled')) {
                document.getElementById(zone.getAttribute('data-btn-id')).classList.remove('hidden-pill');
                zone.innerText = ''; zone.classList.replace('filled', 'empty'); zone.removeAttribute('data-btn-id');
                zone.style.borderColor = ''; zone.style.color = ''; document.getElementById('btn-go-check').disabled = true;
                zone.classList.remove('wrong-zone', 'correct-zone');
            }
        }

        function showLearningOverlay(questionText, givenAns, correctAns, onContinueAction) {
            const overlay = document.getElementById('ot-learning-overlay');
            if (!overlay) return;

            const gentleTips = ["That's Okay! Let's Learn! 💡", "Ah, So Close! Try This! 🔍", "Mistakes Help Us Grow! 🌱", "Super Tip for Next Time! ⚡"];
            let title = gentleTips[Math.floor(Math.random() * gentleTips.length)];

            overlay.innerHTML = `
                <div class="learning-card">
                    <div class="learning-badge wrong-badge">💡</div>
                    <h2 class="fw-bold mb-2 text-danger" style="font-family: 'Comic Sans MS', sans-serif; font-size: clamp(1.4rem, 3vw, 1.85rem);">${title}</h2>
                    
                    <div class="learning-question-box">
                        <div class="learning-question-title"><i class="bi bi-question-circle-fill me-1"></i> The Question</div>
                        <div class="learning-question-content">${questionText}</div>
                    </div>

                    <div class="comparison-box">
                        <div class="comp-item wrong-item">
                            <span style="font-size: 1.4rem;">❌</span>
                            <div>
                                <div class="small opacity-75" style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase;">Your Choice</div>
                                <div>${givenAns}</div>
                            </div>
                        </div>
                        <div class="comp-item correct-item">
                            <span style="font-size: 1.4rem;">💡</span>
                            <div>
                                <div class="small opacity-75" style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase;">Correct Answer</div>
                                <div>${correctAns}</div>
                            </div>
                        </div>
                    </div>

                    <button class="btn-continue-learn text-white animate-fade" style="background-color: ${currentSubject.theme};" id="btn-continue-learning-card">
                        Got It! Let's Keep Going 🚀
                    </button>
                </div>
            `;

            overlay.classList.remove('d-none');
            document.getElementById('btn-continue-learning-card').onclick = () => {
                overlay.classList.add('d-none'); onContinueAction();
            };
        }

        function submitFillBlank() {
            const q = onlineState.questions[onlineState.currentIndex]; const zone = document.getElementById('blank-zone');
            if (!zone.classList.contains('filled')) return;
            const givenAns = zone.innerText; const isPerfect = (givenAns.toLowerCase() === q.answerText.toLowerCase());

            zone.onclick = null; zone.style.cursor = 'default'; document.querySelectorAll('.soft-pill-btn').forEach(b => { b.onclick = null; b.style.cursor = 'default'; });

            if (isPerfect) {
                zone.classList.add('correct-zone'); onlineState.score++; document.getElementById('ot-right').innerText = onlineState.score;
                confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, zIndex: 2000 });
            } else { zone.classList.add('wrong-zone'); onlineState.wrongScore++; document.getElementById('ot-wrong').innerText = onlineState.wrongScore; }

            onlineState.answers.push({ category: q.category, question: q.question, givenAns: givenAns, correctAns: q.answerText, isCorrect: isPerfect });
            document.getElementById('btn-go-check').disabled = true;

            if (isPerfect) {
                setTimeout(() => {
                    onlineState.currentIndex++; 
                    if (onlineState.currentIndex >= onlineState.questions.length) showFunResultModal(); 
                    else renderOnlineQuestion();
                }, 1500);
            } else {
                setTimeout(() => {
                    showLearningOverlay(q.question, givenAns, q.answerText, () => {
                        onlineState.currentIndex++; 
                        if (onlineState.currentIndex >= onlineState.questions.length) showFunResultModal(); 
                        else renderOnlineQuestion();
                    });
                }, 700);
            }
        }

        function handleMatchCardClick(side, id) {
            const cardEl = document.getElementById(`match-${side}-${id}`); if (cardEl.classList.contains('matched')) return;
            if (onlineState.matchSelection[side]) { const prevEl = document.getElementById(`match-${side}-${onlineState.matchSelection[side]}`); if (prevEl) {prevEl.classList.remove('selected'); prevEl.style.borderColor=''; prevEl.style.color=''; prevEl.style.boxShadow='';} }
            onlineState.matchSelection[side] = id; cardEl.classList.add('selected'); 
            cardEl.style.borderColor = currentSubject.theme; cardEl.style.color = currentSubject.theme; cardEl.style.boxShadow = `0 6px 0 ${currentSubject.theme}`;
            if (onlineState.matchSelection.left && onlineState.matchSelection.right) checkMatch();
        }

        function checkMatch() {
            const leftId = onlineState.matchSelection.left; const rightId = onlineState.matchSelection.right; const qObj = onlineState.questions[onlineState.currentIndex];
            const leftEl = document.getElementById(`match-left-${leftId}`); const rightEl = document.getElementById(`match-right-${rightId}`);
            document.querySelectorAll('.match-card').forEach(c => c.style.pointerEvents = 'none');

            if (leftId === rightId) {
                drawMatchLine(leftEl, rightEl, '#22c55e', `line-${leftId}`); onlineState.matchLines.push({ el1: leftEl, el2: rightEl, color: '#22c55e', id: `line-${leftId}` });
                leftEl.classList.remove('selected'); rightEl.classList.remove('selected'); leftEl.classList.add('matched'); rightEl.classList.add('matched');
                leftEl.style.boxShadow=''; rightEl.style.boxShadow='';
                confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 }, colors: ['#22c55e'] });
                qObj.matchesMade++; onlineState.matchSelection = { left: null, right: null };
                document.querySelectorAll('.match-card:not(.matched)').forEach(c => c.style.pointerEvents = 'auto');

                if (qObj.matchesMade >= qObj.totalMatches) {
                    onlineState.score++; document.getElementById('ot-right').innerText = onlineState.score; confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
                    let mistakes = qObj.tempErrors || 0; 
                    onlineState.answers.push({ category: qObj.category, question: "Matching Pairs: " + qObj.pairs.map(p=>p.left).join(', '), givenAns: mistakes === 0 ? "Perfect Match" : `Completed with ${mistakes} mistake(s)`, correctAns: "Match Perfectly", isCorrect: mistakes === 0 });
                    
                    let matchesSummary = qObj.pairs.map(p => `<div style="font-size: 1.05rem; margin-bottom: 6px;">🔗 <b>${p.left}</b> matches with <b>${p.right}</b></div>`).join('');
                    
                    if (mistakes === 0) {
                        setTimeout(() => {
                            window.removeEventListener('resize', redrawMatchLines);
                            onlineState.currentIndex++; 
                            if (onlineState.currentIndex >= onlineState.questions.length) showFunResultModal(); 
                            else renderOnlineQuestion();
                        }, 1500);
                    } else {
                        setTimeout(() => {
                            window.removeEventListener('resize', redrawMatchLines);
                            showLearningOverlay(qObj.question, `Completed with ${mistakes} mistake(s)`, matchesSummary, () => {
                                onlineState.currentIndex++; 
                                if (onlineState.currentIndex >= onlineState.questions.length) showFunResultModal(); 
                                else renderOnlineQuestion();
                            });
                        }, 1200);
                    }
                }
            } else {
                drawMatchLine(leftEl, rightEl, '#ef4444', 'error-line'); leftEl.classList.add('error'); rightEl.classList.add('error');
                qObj.tempErrors = (qObj.tempErrors || 0) + 1; onlineState.wrongScore++; document.getElementById('ot-wrong').innerText = onlineState.wrongScore;
                setTimeout(() => {
                    leftEl.classList.remove('error', 'selected'); rightEl.classList.remove('error', 'selected'); leftEl.style.borderColor=''; leftEl.style.color=''; leftEl.style.boxShadow=''; rightEl.style.borderColor=''; rightEl.style.color=''; rightEl.style.boxShadow='';
                    const errorLine = document.getElementById('error-line'); if (errorLine) errorLine.remove();
                    onlineState.matchSelection = { left: null, right: null }; document.querySelectorAll('.match-card:not(.matched)').forEach(c => c.style.pointerEvents = 'auto');
                }, 600);
            }
        }

        function drawMatchLine(el1, el2, color, id) {
            const svg = document.getElementById('match-lines-svg'); const container = document.getElementById('match-game-container'); if (!svg || !container || !el1 || !el2) return;
            const containerRect = container.getBoundingClientRect(); const rect1 = el1.getBoundingClientRect(); const rect2 = el2.getBoundingClientRect();
            const x1 = (rect1.right - containerRect.left); const y1 = (rect1.top + rect1.height / 2) - containerRect.top; const x2 = (rect2.left - containerRect.left); const y2 = (rect2.top + rect2.height / 2) - containerRect.top;
            const controlOffset = Math.abs(x2 - x1) / 2; const pathData = `M ${x1} ${y1} C ${x1 + controlOffset} ${y1}, ${x2 - controlOffset} ${y2}, ${x2} ${y2}`;
            let path = document.getElementById(id); if (!path) { path = document.createElementNS("http://www.w3.org/2000/svg", "path"); path.setAttribute("id", id); svg.appendChild(path); }
            path.setAttribute("d", pathData); path.setAttribute("fill", "none"); path.setAttribute("stroke", color); path.setAttribute("stroke-width", "5"); path.setAttribute("stroke-linecap", "round");
            const length = path.getTotalLength(); if (length && id !== 'error-line') { path.style.strokeDasharray = length; path.style.strokeDashoffset = length; path.style.transition = 'stroke-dashoffset 0.3s ease-in-out'; path.getBoundingClientRect(); path.style.strokeDashoffset = '0'; }
        }
        function redrawMatchLines() { if (!onlineState.matchLines) return; onlineState.matchLines.forEach(line => { drawMatchLine(line.el1, line.el2, line.color, line.id); }); }

        function goToNextQuestion() {
            if (onlineState.nextTimeout) {
                clearTimeout(onlineState.nextTimeout);
                onlineState.nextTimeout = null;
            }
            onlineState.currentIndex++;
            if (onlineState.currentIndex >= onlineState.questions.length) {
                showFunResultModal();
            } else {
                renderOnlineQuestion();
            }
        }

        function handleOnlineKeydown(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                const nextBox = document.getElementById('ot-next-box');
                if (nextBox && !nextBox.classList.contains('d-none')) {
                    const nextBtn = document.getElementById('btn-next-question');
                    if (nextBtn) {
                        e.preventDefault();
                        goToNextQuestion();
                    }
                }
            }
        }

        function submitOnlineAnswer(buttonElement, selectedId) {
            const q = onlineState.questions[onlineState.currentIndex];
            if (!q || q.invalid || !q.answer) {
                console.error("Cannot grade invalid MCQ question:", q);
                showToast("Cannot grade invalid question. Skipping...", true);
                skipInvalidQuestion();
                return;
            }
            const isCorrect = (q.answer === selectedId);

            const allBtns = document.querySelectorAll('#ot-mcq-grid .mcq-btn');
            allBtns.forEach(b => {
                b.disabled = true;
                const optId = b.getAttribute('data-opt-id');
                const pill = b.querySelector('.mcq-feedback-pill');

                if (optId === q.answer) {
                    b.classList.add('correct');
                    if (pill) {
                        pill.classList.remove('d-none');
                        pill.className = 'mcq-feedback-pill tag-correct';
                        pill.innerHTML = '<i class="bi bi-check-circle-fill"></i>Correct answer';
                    }
                } else if (optId === selectedId) {
                    b.classList.add('wrong');
                    if (pill) {
                        pill.classList.remove('d-none');
                        pill.className = 'mcq-feedback-pill tag-wrong';
                        pill.innerHTML = '<i class="bi bi-x-circle-fill"></i>Your answer';
                    }
                }
                // Unselected non-correct cards remain in their neutral card style (do not fade or disable text)
            });

            if (isCorrect) { 
                onlineState.score++; 
                document.getElementById('ot-right').innerText = onlineState.score; 
                confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, zIndex: 2000 }); 
            } else { 
                onlineState.wrongScore++; 
                document.getElementById('ot-wrong').innerText = onlineState.wrongScore; 
            }

            const correctOptObj = q.options.find(o => o.id === q.answer);
            const correctOptText = correctOptObj ? correctOptObj.text : (q.answerText || '');
            const givenOptObj = q.options.find(o => o.id === selectedId);
            const givenOptText = givenOptObj ? givenOptObj.text : '';

            onlineState.answers.push({ 
                category: q.category, 
                question: q.question.replace(/<[^>]+>/g, ''), 
                givenAns: givenOptText, 
                correctAns: correctOptText, 
                isCorrect: isCorrect 
            });

            // Optional explanation feedback (only shown if question data explicitly provides an explanation)
            const feedbackEl = document.getElementById('ot-inline-feedback');
            if (feedbackEl) {
                if (q.explanation) {
                    feedbackEl.className = `w-100 text-center ot-feedback-msg ${isCorrect ? 'msg-correct' : 'msg-wrong'}`;
                    feedbackEl.innerHTML = `<i class="bi bi-${isCorrect ? 'check-circle-fill' : 'info-circle-fill'}"></i><span>${q.explanation}</span>`;
                    feedbackEl.classList.remove('d-none');
                } else {
                    feedbackEl.className = 'w-100 text-center d-none';
                    feedbackEl.innerHTML = '';
                }
            }

            // Reveal Next Question button right below the feedback
            const nextBox = document.getElementById('ot-next-box');
            if (nextBox) {
                nextBox.classList.remove('d-none');
            }

            // Zero-friction progression:
            // If correct: auto-advances in 1.4s, or user can click 'Next Question' immediately.
            // If wrong: no modal appears. User reads the clear inline feedback and clicks 'Next Question'.
            if (isCorrect) {
                if (onlineState.nextTimeout) clearTimeout(onlineState.nextTimeout);
                onlineState.nextTimeout = setTimeout(() => {
                    goToNextQuestion();
                }, 1400);
            }
        }

        // ==========================================
        // 8. RESULTS & STATS DASHBOARD
        // ==========================================
        function confirmQuitQuiz() {
            if (confirm("Are you sure you want to quit the quiz? Your current progress will not be saved as a completed attempt.")) {
                quitOnlineQuiz();
            }
        }

        function quitOnlineQuiz() {
            window.removeEventListener('keydown', handleOnlineKeydown);
            if (onlineState.nextTimeout) {
                clearTimeout(onlineState.nextTimeout);
                onlineState.nextTimeout = null;
            }
            const otInterface = document.getElementById('ot-interface');
            if (otInterface) otInterface.classList.remove('d-none');
            setMobileTab('home');
        }

        function showFunResultModal() {
            window.removeEventListener('keydown', handleOnlineKeydown);
            if (onlineState.nextTimeout) {
                clearTimeout(onlineState.nextTimeout);
                onlineState.nextTimeout = null;
            }
            document.getElementById('ot-interface').classList.add('d-none');
            const acc = onlineState.totalPoints > 0 ? Math.round((onlineState.score / onlineState.totalPoints) * 100) : 0;
            
            let msg = acc >= 80 ? 'Champion! 🌟' : acc >= 50 ? 'Great Job! 👍' : 'Good Try! 💪';
            let emoji = acc >= 80 ? '🏆' : acc >= 50 ? '⭐' : '🎈';

            document.getElementById('funResultTitle').innerHTML = `<span style="color: ${currentSubject.theme}">${msg}</span>`;
            document.getElementById('funResultEmoji').innerHTML = emoji;
            document.getElementById('funResultScore').innerText = onlineState.score;
            document.getElementById('funResultTotal').innerText = onlineState.totalPoints;
            document.getElementById('funResultRight').innerText = onlineState.score;
            document.getElementById('funResultWrong').innerText = onlineState.wrongScore;
            
            document.getElementById('result-circle').style.borderColor = currentSubject.theme;
            document.getElementById('funResultScore').style.color = currentSubject.theme;
            document.querySelectorAll('.btn-theme-bg').forEach(b => b.style.backgroundColor = currentSubject.theme);
            
            const history = JSON.parse(localStorage.getItem('portalQuizHistory') || '[]');
            const now = new Date();
            history.push({ 
                testId: onlineState.testId, subjectId: currentSubject.id, subjectTitle: currentSubject.title,
                name: onlineState.studentName, correct: onlineState.score, wrong: onlineState.wrongScore, total: onlineState.totalPoints, percentage: acc, 
                date: now.toLocaleDateString('en-US') + ' ' + now.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}),
                timestamp: now.getTime(),
                answers: onlineState.answers
            });
            localStorage.setItem('portalQuizHistory', JSON.stringify(history));
            
            // Redundant renderProgressDashboard() removed; opening the Progress view always calls renderProgressDashboard().
            new bootstrap.Modal(document.getElementById('funResultModal')).show();
        }

        function closeFunResultAndRetake() { bootstrap.Modal.getInstance(document.getElementById('funResultModal')).hide(); openLiveTestModal(); }
        function closeFunResultAndExit() { bootstrap.Modal.getInstance(document.getElementById('funResultModal')).hide(); setMobileTab('home'); }
        function openResultAnalysisFromModal() { bootstrap.Modal.getInstance(document.getElementById('funResultModal')).hide(); setMobileTab('progress'); viewTestAnalysis(onlineState.testId); }

        function renderProgressDashboard() {
            const history = JSON.parse(localStorage.getItem('portalQuizHistory') || '[]');
            
            const uniqueNames = [...new Set(history.map(h => h.name))];
            const filterSelect = document.getElementById('studentFilter');
            const currentStudentFilter = filterSelect ? filterSelect.value : 'ALL';
            
            if (filterSelect) {
                let optionsHtml = `<option value="ALL">All Students</option>`;
                uniqueNames.forEach(name => { optionsHtml += `<option value="${name}" ${name === currentStudentFilter ? 'selected' : ''}>${name}</option>`; });
                filterSelect.innerHTML = optionsHtml;
            }

            const subjectSelect = document.getElementById('subjectFilter');
            const currentSubjectFilter = subjectSelect ? subjectSelect.value : 'ALL';
            if (subjectSelect) {
                let optionsHtml = `<option value="ALL">All Subjects</option>`;
                for (let key in SUBJECT_DATA) { optionsHtml += `<option value="${key}" ${key === currentSubjectFilter ? 'selected' : ''}>${SUBJECT_DATA[key].title}</option>`; }
                subjectSelect.innerHTML = optionsHtml;
            }

            const timeSelect = document.getElementById('timeFilter');
            const currentTimeFilter = timeSelect ? timeSelect.value : '7';

            const chartCard = document.getElementById('chart-container-card');
            if (chartCard) {
                if (currentStudentFilter === 'ALL' && currentSubjectFilter === 'ALL') {
                    chartCard.style.display = 'none';
                } else {
                    chartCard.style.display = 'block';
                }
            }

            let filteredHistory = history;
            if (currentStudentFilter !== 'ALL') filteredHistory = filteredHistory.filter(h => h.name === currentStudentFilter);
            if (currentSubjectFilter !== 'ALL') filteredHistory = filteredHistory.filter(h => h.subjectId === currentSubjectFilter);
            
            if (currentTimeFilter !== 'ALL') {
                const daysToFilter = parseInt(currentTimeFilter, 10);
                const cutoffDate = new Date();
                cutoffDate.setDate(cutoffDate.getDate() - daysToFilter);
                cutoffDate.setHours(0, 0, 0, 0); 
                
                filteredHistory = filteredHistory.filter(h => {
                    const testDate = new Date(h.timestamp || h.date);
                    if (isNaN(testDate.getTime())) return true; 
                    return testDate >= cutoffDate;
                });
            }

            if (filteredHistory.length === 0) {
                document.getElementById('stat-total-tests').innerText = '0'; 
                document.getElementById('stat-average-score').innerText = '0%'; 
                document.getElementById('stat-best-score').innerText = '0%';
                document.getElementById('progress-history-list').innerHTML = '<div class="text-center w-100 text-muted my-5 fw-bold fs-5"><i class="bi bi-box-seam me-2"></i>No tests found for the selected filters.</div>';
                renderChart([]);
                return;
            }

            let totalPercentage = 0; let bestScore = 0; let historyHtml = '';
            [...filteredHistory].reverse().forEach((attempt, index) => {
                totalPercentage += attempt.percentage; if (attempt.percentage > bestScore) bestScore = attempt.percentage;
                let badgeClass = attempt.percentage >= 80 ? 'bg-success' : attempt.percentage < 50 ? 'bg-danger' : 'bg-primary';
                let subTheme = SUBJECT_DATA[attempt.subjectId] ? SUBJECT_DATA[attempt.subjectId].theme : '#64748b';
                
                let dateDisplay = attempt.date;
                const attemptDate = new Date(attempt.timestamp || attempt.date);
                if (!isNaN(attemptDate.getTime())) {
                    dateDisplay = attemptDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });
                }

                historyHtml += `
                    <div class="history-item animate-fade" style="animation-delay: ${0.6 + (index * 0.05)}s;">
                        <div class="flex-grow-1">
                            <div class="fw-bold text-body fs-5 mb-1"><span style="color:${subTheme}; font-size: 1.2rem;">●</span> ${attempt.name} <span class="badge ms-2" style="background-color: ${subTheme}15; color: ${subTheme}; font-size: 0.75rem;">${attempt.subjectTitle}</span></div>
                            <div class="text-muted small fw-bold mb-2" style="letter-spacing: 0.5px;"><i class="bi bi-clock me-1"></i>${dateDisplay}</div>
                            <button class="btn btn-sm btn-outline-primary fw-bold rounded-pill px-3 mt-1" onclick="viewTestAnalysis('${attempt.testId}')">
                                <i class="bi bi-journal-text me-1"></i> See Details
                            </button>
                        </div>
                        <div class="text-end d-flex flex-column align-items-end justify-content-center">
                            <span class="badge ${badgeClass} rounded-pill fs-5 p-2 px-3 shadow-sm">${attempt.percentage}%</span>
                            <div class="text-muted small fw-bold mt-2">Score: <span class="text-success">${attempt.correct}</span> / ${attempt.total}</div>
                        </div>
                    </div>`;
            });

            animateValue(document.getElementById('stat-total-tests'), 0, filteredHistory.length, 1000);
            animateValue(document.getElementById('stat-average-score'), 0, Math.round(totalPercentage / filteredHistory.length) || 0, 1000, '%');
            animateValue(document.getElementById('stat-best-score'), 0, bestScore, 1000, '%');

            document.getElementById('progress-history-list').innerHTML = historyHtml;

            renderChart(filteredHistory);
        }

        function renderChart(data) {
            const ctx = document.getElementById('progressChart').getContext('2d');
            
            if (progressChartInstance) {
                progressChartInstance.destroy();
            }

            if(data.length === 0) return;

            let processed = data.map(d => {
                let t = parseInt(d.timestamp);
                if (isNaN(t)) t = new Date(d.date).getTime();
                if (isNaN(t)) t = Date.now();
                return { ...d, _t: t };
            });

            // Sort strictly ascending
            processed.sort((a, b) => a._t - b._t);

            // Ensure strictly monotonic (no identical timestamps to prevent spaghetti looping)
            for (let i = 1; i < processed.length; i++) {
                if (processed[i]._t <= processed[i-1]._t) {
                    processed[i]._t = processed[i-1]._t + 1000; 
                }
            }

            const labels = processed.map(d => {
                const dateObj = new Date(d._t);
                return dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }); // e.g. "7 May"
            });

            // Handle horizontal scrolling dynamically
            const scrollWrapper = document.getElementById('chart-scroll-wrapper');
            if (processed.length > 15) {
                scrollWrapper.style.width = Math.max(100, processed.length * 5) + '%';
            } else {
                scrollWrapper.style.width = '100%';
            }

            progressChartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Score (%)',
                        data: processed.map(d => d.percentage),
                        fill: true,
                        clip: false, // CRITICAL FIX: Prevents clipping of the curve, markers, and hover effects at the Y-axis ceiling
                        backgroundColor: function(context) {
                            const chart = context.chart;
                            const {ctx, chartArea} = chart;
                            if (!chartArea) return null;
                            // Extend gradient slightly above the chart area to account for curve overshoot
                            let gradient = ctx.createLinearGradient(0, chartArea.top - 20, 0, chartArea.bottom);
                            gradient.addColorStop(0, 'rgba(16, 185, 129, 0.4)');
                            gradient.addColorStop(1, 'rgba(16, 185, 129, 0.0)');
                            return gradient;
                        },
                        borderColor: function(context) {
                            const chart = context.chart;
                            const {ctx, chartArea} = chart;
                            if (!chartArea) return '#10b981';
                            let borderGradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                            borderGradient.addColorStop(0, '#10b981');   // High
                            borderGradient.addColorStop(0.5, '#f59e0b'); // Mid
                            borderGradient.addColorStop(1, '#ef4444');   // Low
                            return borderGradient;
                        },
                        borderWidth: 3,
                        pointBackgroundColor: '#ffffff',
                        pointBorderColor: '#10b981',
                        pointBorderWidth: 2,
                        pointRadius: 5, // Slightly larger endpoint markers for better visibility
                        pointHoverRadius: 9,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        // Added significant top and right padding so 100% peaks have generous breathing room
                        padding: { top: 45, right: 35, left: 10, bottom: 10 } 
                    },
                    interaction: {
                        mode: 'index',
                        intersect: false,
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: 'rgba(15, 23, 42, 0.9)',
                            titleFont: { size: 13, family: "'Segoe UI', sans-serif" },
                            bodyFont: { size: 14, weight: 'bold', family: "'Segoe UI', sans-serif" },
                            padding: 12,
                            cornerRadius: 8,
                            displayColors: false,
                            callbacks: {
                                title: function(context) {
                                    const idx = context[0].dataIndex;
                                    const item = processed[idx];
                                    const dateObj = new Date(item._t);
                                    let timeStr = isNaN(dateObj.getTime()) ? "Recent" : dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });
                                    return item.subjectTitle + '\n' + timeStr;
                                },
                                label: function(context) {
                                    return 'Score Achieved: ' + context.raw + '%';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            grid: { color: 'rgba(148, 163, 184, 0.2)', drawBorder: false },
                            ticks: { stepSize: 20, font: { weight: 'bold', color: '#94a3b8', size: 11 } }
                        },
                        x: {
                            grid: { display: false, drawBorder: false },
                            ticks: { 
                                font: { weight: '600', color: '#94a3b8', size: 11 }, 
                                maxRotation: 45,
                                autoSkip: true,
                                maxTicksLimit: 15
                            }
                        }
                    }
                }
            });
        }

        function viewTestAnalysis(testId) {
            const history = JSON.parse(localStorage.getItem('portalQuizHistory') || '[]');
            const test = history.find(h => h.testId === testId);
            if (!test) return;
            
            // Add fallback in case subject data is missing to prevent JS errors
            let sub = SUBJECT_DATA[test.subjectId] || currentSubject || { theme: '#10b981', title: test.subjectTitle || 'Test', sections: [] }; 

            let html = `<div class="mb-4 pb-3 border-bottom d-flex justify-content-between align-items-end">
                            <div><h4 class="fw-bold mb-1" style="color:${sub.theme}">${test.name} - ${test.subjectTitle}</h4><small class="text-muted fw-bold">Score: ${test.correct}/${test.total} (${test.percentage}%)</small></div>
                            <div class="text-muted small fw-bold">${test.date}</div>
                        </div>`;

            let catStats = {};
            if (test.answers && test.answers.length > 0) {
                test.answers.forEach(a => {
                    let cat = a.category || 'general';
                    if (!catStats[cat]) catStats[cat] = { total: 0, correct: 0 };
                    catStats[cat].total++; if (a.isCorrect) catStats[cat].correct++;
                });

                html += `<h5 class="fw-bold text-body mb-3"><i class="bi bi-bar-chart-fill text-info me-2"></i>Topic Strengths</h5><div class="row g-3 mb-5">`;
                for (let cat in catStats) {
                    let catName = sub.sections.find(s => s.id === cat)?.title || cat;
                    let stat = catStats[cat]; let pct = Math.round((stat.correct / stat.total) * 100);
                    let color = pct >= 80 ? 'success' : pct >= 50 ? 'warning' : 'danger';
                    html += `<div class="col-md-6"><div class="p-3 border rounded-4 bg-body shadow-sm d-flex justify-content-between align-items-center"><span class="fw-bold text-body" style="font-size:0.95rem;">${catName}</span><span class="badge bg-${color} rounded-pill fs-6 px-3 py-2 text-white">${stat.correct}/${stat.total} <small class="ms-1 opacity-75">(${pct}%)</small></span></div></div>`;
                }
                html += `</div>`;

                let hasMistakes = test.answers.some(a => !a.isCorrect);
                let checkWrong = hasMistakes ? 'checked' : '';
                let checkCorrect = hasMistakes ? '' : 'checked';

                html += `
                <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
                    <h5 class="fw-bold text-body mb-0"><i class="bi bi-list-check text-primary me-2"></i>Question Breakdown</h5>
                    <div class="d-flex gap-3 bg-body px-3 py-2 rounded-pill shadow-sm border">
                        <div class="form-check form-switch mb-0">
                            <input class="form-check-input" type="checkbox" id="filter-correct" ${checkCorrect} onchange="applyAnalysisFilter()">
                            <label class="form-check-label fw-bold text-success small" for="filter-correct">Correct</label>
                        </div>
                        <div class="form-check form-switch mb-0">
                            <input class="form-check-input" type="checkbox" id="filter-wrong" ${checkWrong} onchange="applyAnalysisFilter()">
                            <label class="form-check-label fw-bold text-danger small" for="filter-wrong">Wrong</label>
                        </div>
                    </div>
                </div>
                <div class="list-group list-group-flush mb-3">`;

                test.answers.forEach((a, idx) => {
                    let icon = a.isCorrect ? '<i class="bi bi-check-circle-fill text-success fs-3"></i>' : '<i class="bi bi-x-circle-fill text-danger fs-3"></i>';
                    let itemClass = a.isCorrect ? 'analysis-item-correct' : 'analysis-item-wrong';
                    let displayStyle = '';
                    
                    if (hasMistakes) {
                        displayStyle = a.isCorrect ? 'style="display: none !important;"' : 'style="display: flex !important;"';
                    } else {
                        displayStyle = a.isCorrect ? 'style="display: flex !important;"' : 'style="display: none !important;"';
                    }

                    html += `
                        <div class="list-group-item d-flex gap-3 align-items-center py-3 bg-body rounded-4 mb-2 border shadow-sm ${itemClass}" ${displayStyle}>
                            <div>${icon}</div>
                            <div class="flex-grow-1">
                                <div class="fw-bold text-body mb-2" style="font-size: 1.1rem;">Q${idx+1}. ${a.question}</div>
                                <div class="d-flex flex-wrap gap-3 p-2 rounded-3" style="background: var(--dashboard-bg);">
                                    <span class="text-muted fw-bold">Given Answer: <b class="${a.isCorrect ? 'text-success' : 'text-danger'}">${a.givenAns}</b></span>
                                    ${!a.isCorrect ? `<span class="text-success fw-bold"><i class="bi bi-arrow-right-short text-muted"></i> Correct: <b>${a.correctAns}</b></span>` : ''}
                                </div>
                            </div>
                        </div>`;
                });
                
                html += `
                    <div id="analysis-empty-state" class="text-center text-muted fw-bold py-4" style="display: none !important;">
                        <i class="bi bi-filter-circle display-4 d-block mb-2 opacity-50"></i>
                        No questions match the selected filters.
                    </div>
                </div>`;
            } else { html += `<div class="alert alert-secondary text-center fw-bold rounded-4 border-2">Detailed tracking wasn't recorded for this older test.</div>`; }

            document.getElementById('testAnalysisContent').innerHTML = html;
            
            // Safely instantiate and show the Bootstrap modal
            const modalEl = document.getElementById('testAnalysisModal');
            let modalInstance = bootstrap.Modal.getInstance(modalEl);
            if (!modalInstance) {
                modalInstance = new bootstrap.Modal(modalEl);
            }
            modalInstance.show();
        }

        function applyAnalysisFilter() {
            const showCorrect = document.getElementById('filter-correct').checked;
            const showWrong = document.getElementById('filter-wrong').checked;
            let visibleCount = 0;

            document.querySelectorAll('.analysis-item-correct').forEach(el => {
                el.style.setProperty('display', showCorrect ? 'flex' : 'none', 'important');
                if (showCorrect) visibleCount++;
            });
            document.querySelectorAll('.analysis-item-wrong').forEach(el => {
                el.style.setProperty('display', showWrong ? 'flex' : 'none', 'important');
                if (showWrong) visibleCount++;
            });

            const emptyState = document.getElementById('analysis-empty-state');
            if (emptyState) {
                emptyState.style.setProperty('display', visibleCount === 0 ? 'block' : 'none', 'important');
            }
        }

        function clearProgressHistory() {
            if(confirm("Are you sure you want to clear all progress history?")) {
                localStorage.removeItem('portalQuizHistory'); renderProgressDashboard(); showToast("Learning history cleared successfully!");
            }
        }

        // ==========================================
        // 9. EXPORT UTILITIES 
        // ==========================================
        function copyTestText() {
            const wrapper = document.getElementById('paper-wrapper'); if (wrapper.children.length === 0 || wrapper.innerHTML.includes('Configure sections')) { showToast("Generate a paper first!", true); return; }
            const clone = wrapper.cloneNode(true); clone.querySelectorAll('.no-export').forEach(e => e.remove());
            const range = document.createRange(); range.selectNodeContents(clone); const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
            try { document.execCommand('copy'); showToast("Successfully copied to clipboard!"); } catch (err) { showToast("Failed to copy. Please select text manually.", true); }
            selection.removeAllRanges();
        }

        function exportToPDF() {
            const wrapper = document.getElementById('paper-wrapper'); if (wrapper.children.length === 0 || wrapper.innerHTML.includes('Configure sections')) { showToast("Generate a paper first!", true); return; }
            const noExportElems = wrapper.querySelectorAll('.no-export'); noExportElems.forEach(e => e.style.display = 'none');
            const origWrapperStyle = wrapper.getAttribute('style') || '';
            wrapper.style.gap = '0'; wrapper.style.padding = '0'; wrapper.style.margin = '0'; wrapper.style.width = '210mm'; wrapper.style.alignItems = 'flex-start';
            const pages = wrapper.querySelectorAll('.a4-page'); const originalStyles = [];
            pages.forEach((page) => { originalStyles.push({ boxShadow: page.style.boxShadow, margin: page.style.margin, pageBreakAfter: page.style.pageBreakAfter, borderRadius: page.style.borderRadius }); page.style.boxShadow = 'none'; page.style.margin = '0'; page.style.borderRadius = '0'; page.style.pageBreakAfter = 'always'; });

            showToast("Generating PDF... Please wait.");
            const dateStr = new Date().toLocaleDateString('en-GB').replace(/\//g, '-');
            let filenameStr = currentSubject ? `${currentSubject.id}_Mock_Test_${dateStr}.pdf` : `Mock_Test_${dateStr}.pdf`;
            
            html2pdf().set({ margin: 0, filename: filenameStr, image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2, scrollY: 0 }, jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }, pagebreak: { mode: 'css', avoid: 'tr' } }).from(wrapper).save().then(() => {
                noExportElems.forEach(e => e.style.display = ''); wrapper.setAttribute('style', origWrapperStyle);
                pages.forEach((page, index) => { page.style.boxShadow = originalStyles[index].boxShadow; page.style.margin = originalStyles[index].margin; page.style.pageBreakAfter = originalStyles[index].pageBreakAfter; page.style.borderRadius = originalStyles[index].borderRadius; });
                showToast("PDF Document downloaded!");
            });
        }

        function exportToWord() {
            const wrapper = document.getElementById('paper-wrapper'); if (wrapper.children.length === 0 || wrapper.innerHTML.includes('Configure sections')) { showToast("Generate a paper first!", true); return; }
            const clone = wrapper.cloneNode(true); clone.querySelectorAll('.no-export').forEach(e => e.remove());
            const pages = clone.querySelectorAll('.a4-page');
            pages.forEach((page, index) => { page.style.boxShadow = 'none'; page.style.margin = '0'; page.style.padding = '0'; page.style.width = '100%'; if (index < pages.length - 1) page.insertAdjacentHTML('beforeend', "<br clear=all style='mso-special-character:line-break;page-break-after:always'>"); });

            const html = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Mock Test</title><style>body { font-family: 'Roboto', sans-serif; font-size: 14px; } table { width: 100%; border-collapse: collapse; } th, td { padding: 4pt; text-align: left; vertical-align: top; } .blank-line { display: inline-block; border-bottom: 1px solid #000; width: 100px; margin: 0 5px; }</" + "style></" + "head><body>" + clone.innerHTML + "</" + "body></" + "html>";
            const blob = new Blob(['\uFEFF', html], { type: 'application/msword' }); const url = URL.createObjectURL(blob);
            const downloadLink = document.createElement("a"); downloadLink.href = url; 
            const dateStr = new Date().toLocaleDateString('en-GB').replace(/\//g, '-');
            downloadLink.download = currentSubject ? `${currentSubject.id}_Mock_Test_${dateStr}.doc` : `Mock_Test_${dateStr}.doc`;
            document.body.appendChild(downloadLink); downloadLink.click(); document.body.removeChild(downloadLink); URL.revokeObjectURL(url);
            showToast("Word Document downloaded!");
        }

        window.onload = () => { initHub(); setMobileTab('hub'); };