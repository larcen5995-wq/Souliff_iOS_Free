/**
 * 🌿 Relaxing Sounds - Main Application Controller
 * 모든 105개 사운드 카드에 은은하고 고급스러운 실사 배경 이미지 (Soft Ambient Photo) 탑재
 * 의료법 준수: 안전한 웰니스 및 사운드 케어 문구 100% 동기화
 */




// 📱 Global Native Lockscreen & Single-Click Action Bridge
window.openMixerTab = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const mixerBtn = document.querySelector('[data-tab-target=mixer]');
  if (mixerBtn) mixerBtn.click();
};

window.toggleNativePlayPause = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  if (e && e.preventDefault) e.preventDefault();
  if (!window.engine) return;

  if (window.engine.ctx && window.engine.ctx.state === 'suspended') {
    window.engine.ctx.resume().catch(()=>{});
  }

  if (window.engine.activeTracks.size === 0) {
    if (typeof PRESET_MIXES !== 'undefined' && PRESET_MIXES.length > 0) {
      if (typeof window.applyPreset === 'function') window.applyPreset(PRESET_MIXES[0]);
    }
  } else {
    window.engine.togglePlayPause();
  }

  if (typeof window.updateUIState === 'function') window.updateUIState();
  if (typeof window.renderHomePresets === 'function') window.renderHomePresets();
  if (typeof window.renderMixerList === 'function') window.renderMixerList();
  if (typeof window.renderBookmarksList === 'function') window.renderBookmarksList();
  if (typeof window.renderBrowseGrid === 'function') {
    const browseSearchInput = document.getElementById('browse-search-input');
    const cat = window.currentCategory || 'all';
    window.renderBrowseGrid(browseSearchInput ? browseSearchInput.value.trim() : '', cat);
  }
};

window.stopNativeAll = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  if (e && e.preventDefault) e.preventDefault();
  if (!window.engine) return;

  window.engine.stopAll();

  if (typeof window.updateUIState === 'function') window.updateUIState();
  if (typeof window.renderHomePresets === 'function') window.renderHomePresets();
  if (typeof window.renderMixerList === 'function') window.renderMixerList();
  if (typeof window.renderBookmarksList === 'function') window.renderBookmarksList();
  if (typeof window.renderBrowseGrid === 'function') {
    const browseSearchInput = document.getElementById('browse-search-input');
    const cat = window.currentCategory || 'all';
    window.renderBrowseGrid(browseSearchInput ? browseSearchInput.value.trim() : '', cat);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. 오디오 엔진 인스턴스화
  const engine = new AudioEngine();
  const tinnitus = engine.tinnitusEngine;
  window.engine = engine;
  window.tinnitusEngine = tinnitus;

  // 즐겨찾기 저장소 관리
  let bookmarks = JSON.parse(localStorage.getItem('living_sound_bookmarks') || '[]');

  function saveBookmarks() {
    localStorage.setItem('living_sound_bookmarks', JSON.stringify(bookmarks));
    renderBookmarksList();
    if (window.adManager) window.adManager.updateTranslations();
    renderBrowseGrid(browseSearchInput ? browseSearchInput.value.trim() : '', currentCategory);
  }

  function toggleBookmark(soundId) {
    if (bookmarks.includes(soundId)) {
      bookmarks = bookmarks.filter(id => id !== soundId);
    } else {
      bookmarks.push(soundId);
    }
    saveBookmarks();
  }

  // 2. DOM 요소 참조
  const tabViews = {
    home: document.getElementById('tab-view-home'),
    mixer: document.getElementById('tab-view-mixer'),
    browse: document.getElementById('tab-view-browse'),
    bookmarks: document.getElementById('tab-view-bookmarks'),
    tinnitus: document.getElementById('tab-view-tinnitus'),
    player: document.getElementById('tab-view-player')
  };

  const navBtns = document.querySelectorAll('.bottom-nav-item');
  const miniPlayer = document.getElementById('mini-audio-player');
  const miniPlayPauseBtn = document.getElementById('mini-play-pause-btn');
  const miniPlayPauseIcon = document.getElementById('mini-play-pause-icon');
  const miniPlayerTitle = document.getElementById('mini-player-title');
  const miniPlayerSub = document.getElementById('mini-player-sub');
  const activeTrackCountBadge = document.getElementById('active-track-count-badge');

  // 언어 선택 드롭다운
  const langSelectBtn = document.getElementById('lang-select-btn');
  const langDropdown = document.getElementById('lang-dropdown');

  // 홈 탭 요소
  const presetsContainer = document.getElementById('home-presets-grid');
  const masterVolumeSlider = document.getElementById('master-volume-slider');

  // 믹서 탭 요소
  const mixerActiveList = document.getElementById('mixer-active-tracks-list');
  const mixerEmptyMsg = document.getElementById('mixer-empty-state');
  const mixerStopAllBtn = document.getElementById('mixer-stop-all-btn');

  // 라이브러리(탐색) 탭 요소
  const browseSearchInput = document.getElementById('browse-search-input');
  const browseCategoryTabs = document.querySelectorAll('.category-filter-btn');
  const browseCardsGrid = document.getElementById('browse-sounds-grid') || document.getElementById('browse-cards-grid');

  // 즐겨찾기(북마크) 탭 요소
  const bookmarksListContainer = document.getElementById('bookmarks-list-container') || document.getElementById('bookmarks-cards-grid');
  const bookmarksEmptyMsg = document.getElementById('bookmarks-empty-state');
  const bookmarksCountBadge = document.getElementById('bookmarks-count-badge');
  const playAllBookmarksBtn = document.getElementById('play-all-bookmarks-btn');
  const clearBookmarksBtn = document.getElementById('clear-bookmarks-btn');

  // 이명 케어 탭 요소
  const pitchSlider = document.getElementById('tinnitus-pitch-slider');
  const pitchDisplay = document.getElementById('tinnitus-pitch-display');
  const testPitchBtn = document.getElementById('tinnitus-test-tone-btn');
  const testPitchIcon = document.getElementById('tinnitus-test-icon');
  const notchToggleCheckbox = document.getElementById('notch-filter-toggle');
  const residualStartBtn = document.getElementById('residual-start-btn');
  const residualTimerDisplay = document.getElementById('residual-timer-display');
  const tinnitusContinuousBtn = document.getElementById('tinnitus-continuous-btn');

  // 타이머 모달 & 컨트롤
  const timerBtn = document.getElementById('top-timer-btn');
  const timerModal = document.getElementById('sleep-timer-modal');
  const closeTimerBtn = document.getElementById('close-timer-modal-btn');
  const timerOptionBtns = document.querySelectorAll('.timer-option-btn');
  const timerStatusLabel = document.getElementById('timer-status-label');

  let currentCategory = 'all';

  // ========================================================
  // 1. 다국어 (i18n) 드롭다운 및 전체 언어 동적 렌더링
  // ========================================================
  function initLanguageDropdown() {
    if (!langDropdown) return;
    langDropdown.innerHTML = '';

    LANGUAGES.forEach(lang => {
      const item = document.createElement('button');
      const isCurrent = lang.code === i18n.currentLang;
      item.className = `w-full px-3.5 py-2 text-left text-xs flex items-center justify-between hover:bg-surface-container transition-colors ${
        isCurrent ? 'font-bold text-primary bg-primary/5' : 'text-on-surface'
      }`;
      item.innerHTML = `
        <div class="flex items-center space-x-2">
          <span>${lang.flag}</span>
          <span>${lang.name}</span>
        </div>
        ${isCurrent ? '<span class="material-symbols-outlined text-xs text-primary">check</span>' : ''}
      `;

      item.addEventListener('click', (e) => {
        e.stopPropagation();
        i18n.setLanguage(lang.code);
        langDropdown.classList.add('hidden');
        initLanguageDropdown();
        reRenderAllComponents();
      });

      langDropdown.appendChild(item);
    });
  }

  if (langSelectBtn && langDropdown) {
    langSelectBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!langSelectBtn.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.add('hidden');
      }
    });
  }

  function updateCategoryTabsText() {
    const totalCount = SOUND_CATALOG.length;

    // 설명 서브타이틀 동적 실시간 카운트 적용
    const browseDescEl = document.querySelector('[data-i18n="browseDesc"]');
    if (browseDescEl) {
      if (i18n.currentLang === 'ko') {
        browseDescEl.textContent = `자연의 소리, 뇌파, 명상음 등 ${totalCount}종의 힐링 사운드를 둘러보세요.`;
      } else if (i18n.currentLang === 'en') {
        browseDescEl.textContent = `Explore ${totalCount} soothing soundscapes for deep sleep and relaxation.`;
      } else {
        const rawDesc = i18n.t('browseDesc');
        browseDescEl.textContent = rawDesc.replace(/\d+/, totalCount);
      }
    }

    // 각 카테고리 칩 버튼 텍스트에 실제 트랙 수 실시간 자동 계산 반영
    browseCategoryTabs.forEach(tab => {
      const cat = tab.getAttribute('data-cat');
      const baseName = i18n.getCategoryBaseName(cat);
      if (cat === 'all') {
        tab.textContent = `${baseName} (${totalCount})`;
      } else {
        const count = SOUND_CATALOG.filter(s => s.category === cat).length;
        tab.textContent = `${baseName} (${count})`;
      }
    });
  }

  function reRenderAllComponents() {
    i18n.applyTranslations();
    updateCategoryTabsText();
    renderHomePresets();
    renderBrowseGrid(browseSearchInput ? browseSearchInput.value.trim() : '', currentCategory);
    renderBookmarksList();
    if (window.adManager) window.adManager.updateTranslations();
    renderMixerList();
    updateUIState();
  }

  // ========================================================
  // 2. 탭 내비게이션 전환
  // ========================================================
  function switchTab(targetTab) {
    Object.keys(tabViews).forEach(key => {
      if (tabViews[key]) {
        if (key === targetTab) {
          tabViews[key].classList.remove('hidden');
          tabViews[key].classList.add('flex');
        } else {
          tabViews[key].classList.add('hidden');
          tabViews[key].classList.remove('flex');
        }
      }
    });

    navBtns.forEach(btn => {
      const isTarget = btn.getAttribute('data-tab-target') === targetTab;
      const icon = btn.querySelector('.material-symbols-outlined');
      if (isTarget) {
        btn.classList.add('text-primary', 'font-bold');
        btn.classList.remove('text-on-surface-variant');
        if (icon) icon.style.fontVariationSettings = "'FILL' 1";
      } else {
        btn.classList.remove('text-primary', 'font-bold');
        btn.classList.add('text-on-surface-variant');
        if (icon) icon.style.fontVariationSettings = "'FILL' 0";
      }
    });

    if (targetTab === 'browse') {
      renderBrowseGrid(browseSearchInput ? browseSearchInput.value.trim() : '', currentCategory);
    } else if (targetTab === 'mixer') {
      renderMixerList();
    } else if (targetTab === 'bookmarks') {
      renderBookmarksList();
    if (window.adManager) window.adManager.updateTranslations();
    } else if (targetTab === 'home') {
      renderHomePresets();
    }
  }

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab-target');
      if (target) switchTab(target);
    });
  });

  // ========================================================
  // 3. 홈 프리셋 렌더링 & 토글 관리 (추천 힐링 믹스 On/Off)
  // ========================================================
    function isPresetActive(preset) {
    if (!preset || !preset.tracks || preset.tracks.length === 0) return false;
    if (engine.activeTracks.size !== preset.tracks.length) return false;
    return preset.tracks.every(t => engine.activeTracks.has(t.id));
  }

  function togglePreset(preset) {
    if (!preset || !preset.tracks) return;

    if (isPresetActive(preset)) {
      if (engine.isPaused) {
        engine.resumeAll();
      } else {
        engine.stopAll();
      }
    } else {
      engine.stopAll();
      preset.tracks.forEach(t => {
        const sound = SOUND_CATALOG.find(s => s.id === t.id);
        if (sound) {
          engine.playTrack(sound, t.volume || 1.0);
        }
      });
    }

    updateUIState();
    renderHomePresets();
    renderMixerList();
    renderBrowseGrid(browseSearchInput ? browseSearchInput.value.trim() : '', currentCategory);
    renderBookmarksList();
    if (window.adManager) window.adManager.updateTranslations();
  }

    function renderHomePresets() {
    const pContainer = document.getElementById('home-presets-grid');
    if (!pContainer) return;
    pContainer.innerHTML = '';

    if (typeof PRESET_MIXES === 'undefined' || !Array.isArray(PRESET_MIXES) || PRESET_MIXES.length === 0) {
      pContainer.innerHTML = '<div class="col-span-full py-8 text-center text-on-surface-variant text-xs">...</div>';
      return;
    }

    const playingText = (typeof i18n !== 'undefined' && i18n.t('activeTracksUnit')) ? i18n.t('activeTracksUnit') : '재생 중';
    const pausedText = (typeof i18n !== 'undefined' && i18n.currentLang === 'en') ? 'Paused' : ((typeof i18n !== 'undefined' && i18n.currentLang === 'ru') ? 'Пауза' : '일시정지');
    const layerText = (typeof i18n !== 'undefined' && i18n.t('soundCountUnit')) ? i18n.t('soundCountUnit') : '개 믹싱';

    PRESET_MIXES.forEach((preset, index) => {
      const locPreset = (typeof i18n !== 'undefined' && i18n.getPresetInfo) ? i18n.getPresetInfo(preset.id, preset) : preset;
      const active = isPresetActive(preset);
      const isPlaying = active && !engine.isPaused;

      const card = document.createElement('div');
      card.className = `border rounded-2xl p-4 shadow-sm flex flex-col justify-between transition-all duration-300 cursor-pointer active:scale-[0.98] group relative overflow-hidden ${
        active 
          ? 'bg-amber-50/90 border-2 border-accent-gold shadow-md ring-2 ring-accent-gold/40' 
          : 'bg-surface-container-lowest border-outline-variant/30 hover:border-primary/40'
      }`;
      card.innerHTML = `
        <div class="flex items-start justify-between mb-2 relative z-10">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
            active ? 'bg-accent-gold text-white shadow-xs' : 'bg-primary/10 text-primary'
          }">
            <span class="material-symbols-outlined text-xl">${preset.icon || 'tune'}</span>
          </div>
          <span class="text-[10px] px-2.5 py-0.5 rounded-full font-bold transition-all ${
            isPlaying 
              ? 'bg-accent-gold text-white shadow-xs animate-pulse' 
              : (active ? 'bg-amber-600 text-white' : 'bg-accent-gold/15 text-accent-gold')
          }">${isPlaying ? playingText : (active ? pausedText : (locPreset.badge || 'Preset'))}</span>
        </div>
        <div class="relative z-10">
          <h4 class="font-headline-lg text-base font-bold transition-colors ${
            active ? 'text-accent-gold' : 'text-primary group-hover:text-primary-container'
          }">${locPreset.title}</h4>
          <p class="text-xs text-on-surface-variant line-clamp-2 mt-1 leading-snug">${locPreset.subtitle}</p>
        </div>
        <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-outline-variant/20 relative z-10">
          <span class="text-[11px] text-on-surface-variant/70 font-mono font-bold">${preset.tracks.length} ${layerText}</span>
          <button class="preset-play-btn w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all ${
            isPlaying 
              ? 'bg-accent-gold text-white ring-4 ring-accent-gold/30 scale-105' 
              : (active ? 'bg-amber-600 text-white' : 'bg-primary text-white hover:bg-primary-container')
          }">
            <span class="material-symbols-outlined text-lg">${isPlaying ? 'pause' : 'play_arrow'}</span>
          </button>
        </div>
      `;

      card.addEventListener('click', (e) => {
        e.stopPropagation();
        togglePreset(preset);
      });

      pContainer.appendChild(card);
    });

    // Update Hero Card button state
    const heroMixBtn = document.getElementById('hero-mix-btn');
    const heroMixIcon = document.getElementById('hero-mix-icon');
    const heroMixLabel = document.getElementById('hero-mix-label');
    if (heroMixBtn && heroMixIcon && heroMixLabel && PRESET_MIXES.length > 0) {
      const firstActive = isPresetActive(PRESET_MIXES[0]);
      const firstPlaying = firstActive && !engine.isPaused;
      if (firstPlaying) {
        heroMixIcon.textContent = 'pause';
        heroMixLabel.textContent = (typeof i18n !== 'undefined' && i18n.t('mixerStopAll')) || '끄기';
        heroMixBtn.classList.add('bg-white/35', 'border-white/50', 'ring-2', 'ring-white/30');
      } else if (firstActive) {
        heroMixIcon.textContent = 'play_arrow';
        heroMixLabel.textContent = (typeof i18n !== 'undefined' && i18n.currentLang === 'en' ? 'Resume' : '이어듣기');
        heroMixBtn.classList.remove('bg-white/35', 'border-white/50', 'ring-2', 'ring-white/30');
      } else {
        heroMixIcon.textContent = 'play_arrow';
        heroMixLabel.textContent = (typeof i18n !== 'undefined' && i18n.t('heroListenBtn')) || '힐링 믹스 듣기';
        heroMixBtn.classList.remove('bg-white/35', 'border-white/50', 'ring-2', 'ring-white/30');
      }
    }
  }

  function applyPreset(preset) {
    window.applyPreset = applyPreset;
    togglePreset(preset);
  }

  // ========================================================
  // 4. 사운드 라이브러리 그리드 (은은한 실사 배경 이미지 탑재)
  // ========================================================
    function renderBrowseGrid(query = '', category = 'all') {
    if (!browseCardsGrid) return;
    browseCardsGrid.innerHTML = '';

    const filtered = SOUND_CATALOG.filter(sound => {
      const locSound = (typeof i18n !== 'undefined' ? i18n.getSoundInfo(sound.id, sound) : sound);
      const matchCat = category === 'all' || sound.category === category;
      const title = locSound.title || '';
      const sub = locSound.subtitle || '';
      const tags = Array.isArray(locSound.tags) ? locSound.tags : [];
      const code = sound.code || '';
      const q = query.toLowerCase();

      const matchQuery = !q || title.toLowerCase().includes(q) || 
                         sub.toLowerCase().includes(q) ||
                         tags.some(tag => String(tag).toLowerCase().includes(q)) ||
                         code.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      browseCardsGrid.innerHTML = `
        <div class="col-span-full py-12 text-center text-on-surface-variant text-xs">
          ${typeof i18n !== 'undefined' && i18n.currentLang === 'en' ? 'No sounds found.' : '검색된 사운드가 없습니다.'}
        </div>
      `;
      return;
    }

    filtered.forEach(sound => {
      const isTrackActive = engine.activeTracks.has(sound.id);
      const isPlaying = isTrackActive && !engine.isPaused;
      const isBookmarked = bookmarks.includes(sound.id);
      const locSound = (typeof i18n !== 'undefined' ? i18n.getSoundInfo(sound.id, sound) : sound);
      const catName = (typeof i18n !== 'undefined' ? i18n.getCategoryName(sound.category) : sound.category);
      const bgImg = sound.bgImage || 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=400&auto=format&fit=crop';

      const card = document.createElement('div');
      card.className = `relative rounded-2xl p-3.5 flex flex-col justify-between transition-all duration-300 cursor-pointer active:scale-[0.98] border shadow-xs overflow-hidden group ${
        isTrackActive 
          ? 'border-2 border-accent-gold ring-2 ring-accent-gold/50 shadow-lg scale-[1.01]' 
          : 'border-outline-variant/30 hover:border-primary/40'
      }`;

      // Dynamic ambient background: glowing golden tint when active
      card.style.background = isTrackActive
        ? `linear-gradient(135deg, rgba(255, 248, 235, 0.95) 0%, rgba(254, 243, 199, 0.90) 100%), url('${bgImg}') center/cover no-repeat`
        : `linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(252, 249, 244, 0.85) 60%, rgba(252, 249, 244, 0.75) 100%), url('${bgImg}') center/cover no-repeat`;

      card.innerHTML = `
        <!-- Top: Track Code Badge + Category + Bookmark Star -->
        <div class="flex items-center justify-between mb-1.5 relative z-10">
          <div class="flex items-center space-x-1.5 min-w-0 pr-1">
            <span class="px-1.5 py-0.5 rounded ${isTrackActive ? 'bg-accent-gold text-white' : 'bg-primary/15 text-primary'} font-mono text-[10px] font-bold border border-primary/25 backdrop-blur-xs shrink-0">${sound.code}</span>
            <span class="text-[10px] ${isTrackActive ? 'text-accent-gold font-extrabold' : 'text-on-surface-variant font-bold'} truncate">${catName}</span>
          </div>
          <button class="bookmark-btn p-1 rounded-full hover:bg-white/80 transition-colors shrink-0 ${isBookmarked ? 'text-accent-gold' : 'text-on-surface-variant/40 hover:text-accent-gold'}" title="즐겨찾기">
            <span class="material-symbols-outlined text-base" style="font-variation-settings: 'FILL' ${isBookmarked ? 1 : 0};">star</span>
          </button>
        </div>

        <!-- Center: Title & Subtitle -->
        <div class="min-w-0 my-1 relative z-10">
          <h4 class="font-headline-lg text-sm font-bold ${isTrackActive ? 'text-accent-gold' : 'text-primary group-hover:text-primary-container'} truncate leading-tight transition-colors">${locSound.title}</h4>
          <p class="text-[10px] text-on-surface-variant font-medium line-clamp-2 mt-1 leading-snug">${locSound.subtitle}</p>
        </div>

        <!-- Bottom: Tags & Play/Add Button -->
        <div class="flex items-center justify-between mt-2.5 pt-2 border-t border-outline-variant/25 relative z-10">
          <div class="flex gap-1 overflow-hidden">
            ${locSound.tags.slice(0, 2).map(tag => `<span class="text-[9px] px-1.5 py-0.5 rounded bg-white/70 backdrop-blur-xs text-on-surface-variant font-medium border border-outline-variant/20">#${tag}</span>`).join('')}
          </div>
          <button class="play-toggle-btn w-8 h-8 rounded-full ${
            isPlaying 
              ? 'bg-accent-gold text-white ring-4 ring-accent-gold/30 shadow-md scale-105' 
              : (isTrackActive ? 'bg-amber-600 text-white shadow-xs' : 'bg-white/90 text-primary hover:bg-primary hover:text-white border border-outline-variant/30')
          } flex items-center justify-center transition-all shrink-0">
            <span class="material-symbols-outlined text-base">${isPlaying ? 'pause' : (isTrackActive ? 'play_arrow' : 'add')}</span>
          </button>
        </div>
      `;

      // Bookmark Toggle
      const bmBtn = card.querySelector('.bookmark-btn');
      if (bmBtn) {
        bmBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleBookmark(sound.id);
        });
      }

      // Card & Button Single-Trigger Toggle Handler
      const triggerToggle = (e) => {
        if (e && e.stopPropagation) e.stopPropagation();
        const executeToggle = () => {
          engine.toggleTrack(sound);
          updateUIState();
          renderBrowseGrid(browseSearchInput ? browseSearchInput.value.trim() : '', currentCategory);
          renderHomePresets();
          renderMixerList();
          renderBookmarksList();
          if (window.adManager) window.adManager.updateTranslations();
        };

        if (window.adManager && !engine.activeTracks.has(sound.id)) {
          window.adManager.checkAdBeforePlay(() => {
            executeToggle();
          });
        } else {
          executeToggle();
        }
      };

      const playBtn = card.querySelector('.play-toggle-btn');
      if (playBtn) playBtn.addEventListener('click', triggerToggle);
      card.addEventListener('click', triggerToggle);

      browseCardsGrid.appendChild(card);
    });
  }

  if (browseSearchInput) {
    browseSearchInput.addEventListener('input', (e) => {
      renderBrowseGrid(e.target.value.trim(), currentCategory);
    });
  }

  browseCategoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      browseCategoryTabs.forEach(t => {
        t.classList.remove('bg-primary', 'text-white', 'font-bold', 'shadow-xs');
        t.classList.add('bg-surface-container', 'text-on-surface-variant');
      });
      tab.classList.add('bg-primary', 'text-white', 'font-bold', 'shadow-xs');
      tab.classList.remove('bg-surface-container', 'text-on-surface-variant');

      currentCategory = tab.getAttribute('data-cat') || 'all';
      renderBrowseGrid(browseSearchInput ? browseSearchInput.value.trim() : '', currentCategory);
    });
  });

  // ========================================================
  // 5. 즐겨찾기 (Bookmarks) 탭 렌더링 & 전체 믹싱 재생
  // ========================================================
  function renderBookmarksList() {
    window.renderBookmarksList = renderBookmarksList;
    if (!bookmarksListContainer) return;
    bookmarksListContainer.innerHTML = '';

    if (bookmarksCountBadge) {
      bookmarksCountBadge.textContent = `${bookmarks.length} ${i18n.t('savedSoundsCount') || '저장됨'}`;
    }

    if (bookmarks.length === 0) {
      if (bookmarksEmptyMsg) bookmarksEmptyMsg.classList.remove('hidden');
      return;
    }

    if (bookmarksEmptyMsg) bookmarksEmptyMsg.classList.add('hidden');

    bookmarks.forEach(soundId => {
      const sound = SOUND_CATALOG.find(s => s.id === soundId);
      if (!sound) return;

      const isTrackActive = engine.activeTracks.has(sound.id);
      const isPlaying = isTrackActive && !engine.isPaused;
      const locSound = i18n.getSoundInfo(sound.id, sound);
      const catName = i18n.getCategoryName(sound.category);
      const bgImg = sound.bgImage || 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=400&auto=format&fit=crop';

      const row = document.createElement('div');
      row.className = `w-full relative rounded-2xl p-3.5 shadow-sm flex items-center justify-between transition-all overflow-hidden border ${
        isPlaying ? 'border-accent-gold ring-1 ring-accent-gold/40' : 'border-outline-variant/30 hover:border-primary/30'
      }`;

      row.style.background = `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(252, 249, 244, 0.90) 100%), url('${bgImg}') center/cover no-repeat`;

      row.innerHTML = `
        <div class="flex items-center space-x-3.5 min-w-0 cursor-pointer flex-1 pr-3 relative z-10">
          <div class="w-11 h-11 rounded-xl ${isPlaying ? 'bg-accent-gold text-white' : 'bg-primary/10 text-primary'} flex items-center justify-center shrink-0 shadow-xs">
            <span class="material-symbols-outlined text-xl">${sound.icon}</span>
          </div>
          <div class="min-w-0 flex-1">
            <div class="flex items-center space-x-2 mb-0.5">
              <span class="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-[10px] font-bold shrink-0">${sound.code}</span>
              <span class="text-[11px] text-on-surface-variant font-semibold truncate">${catName}</span>
            </div>
            <h4 class="font-headline-lg text-sm font-bold text-primary truncate leading-snug">${locSound.title}</h4>
            <p class="text-[11px] text-on-surface-variant truncate">${locSound.subtitle}</p>
          </div>
        </div>

        <div class="flex items-center space-x-2 shrink-0 relative z-10">
          <button class="play-btn w-9 h-9 rounded-full ${isPlaying ? 'bg-accent-gold text-white' : 'bg-primary text-white'} flex items-center justify-center shadow-sm transition-all active:scale-95 hover:opacity-90">
            <span class="material-symbols-outlined text-lg">${isPlaying ? 'pause' : 'play_arrow'}</span>
          </button>
          <button class="remove-bm-btn w-8 h-8 flex items-center justify-center text-on-surface-variant/40 hover:text-red-500 rounded-full hover:bg-white/80 transition-colors" title="즐겨찾기 해제">
            <span class="material-symbols-outlined text-lg">close</span>
          </button>
        </div>
      `;

      row.querySelector('.play-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (window.adManager) { window.adManager.checkAdBeforePlay(() => { engine.toggleTrack(sound); renderBrowseGrid(browseSearchInput ? browseSearchInput.value.trim() : '', currentCategory); updateUIState(); renderMixerList(); renderBookmarksList();
    if (window.adManager) window.adManager.updateTranslations(); }); } else { engine.toggleTrack(sound); }
        renderBookmarksList();
    if (window.adManager) window.adManager.updateTranslations();
        updateUIState();
        renderMixerList();
      });

      row.querySelector('.remove-bm-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleBookmark(sound.id);
      });

      row.addEventListener('click', () => {
        if (window.adManager) { window.adManager.checkAdBeforePlay(() => { engine.toggleTrack(sound); renderBrowseGrid(browseSearchInput ? browseSearchInput.value.trim() : '', currentCategory); updateUIState(); renderMixerList(); renderBookmarksList();
    if (window.adManager) window.adManager.updateTranslations(); }); } else { engine.toggleTrack(sound); }
        renderBookmarksList();
    if (window.adManager) window.adManager.updateTranslations();
        updateUIState();
        renderMixerList();
      });

      bookmarksListContainer.appendChild(row);
    });
  }

  if (playAllBookmarksBtn) {
    playAllBookmarksBtn.addEventListener('click', () => {
      if (bookmarks.length === 0) return;
      engine.stopAll();
      bookmarks.forEach(soundId => {
        const sound = SOUND_CATALOG.find(s => s.id === soundId);
        if (sound) {
          engine.playTrack(sound, sound.defaultVolume || 0.65);
        }
      });
      updateUIState();
      renderMixerList();
      renderBookmarksList();
    if (window.adManager) window.adManager.updateTranslations();
    });
  }

  if (clearBookmarksBtn) {
    clearBookmarksBtn.addEventListener('click', () => {
      if (confirm('즐겨찾기를 모두 삭제하시겠습니까?')) {
        bookmarks = [];
        saveBookmarks();
      }
    });
  }

  // ========================================================
  // 6. 믹서 (Mixer) 렌더링 & 슬라이더 조절
  // ========================================================
  function renderMixerList() {
    window.renderMixerList = renderMixerList;
    if (!mixerActiveList) return;
    mixerActiveList.innerHTML = '';

    const tracks = Array.from(engine.activeTracks.values());
    if (tracks.length === 0) {
      if (mixerEmptyMsg) mixerEmptyMsg.classList.remove('hidden');
      return;
    }

    if (mixerEmptyMsg) mixerEmptyMsg.classList.add('hidden');

    tracks.forEach(track => {
      const sound = track.info;
      const trackId = sound.id;
      const locSound = i18n.getSoundInfo(trackId, sound);
      const catName = i18n.getCategoryName(sound.category);
      const row = document.createElement('div');
      row.className = 'bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-3.5 shadow-sm flex flex-col gap-2.5 transition-all';
      
      const volPercent = Math.round((track.volume || 1.0) * 100);

      row.innerHTML = `
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2.5 min-w-0">
            <div class="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-base">${sound.icon}</span>
            </div>
            <div class="min-w-0">
              <div class="flex items-center space-x-1">
                <span class="px-1 py-0.2 rounded bg-primary/10 text-primary font-mono text-[9px] font-bold">${sound.code || ''}</span>
                <span class="text-[10px] text-on-surface-variant/80">${catName}</span>
              </div>
              <h4 class="font-headline-lg text-sm font-bold text-primary truncate">${locSound.title}</h4>
            </div>
          </div>
          <div class="flex items-center space-x-2 shrink-0">
            <span class="text-xs font-mono text-accent-gold font-bold w-8 text-right" id="vol-label-${trackId}">${volPercent}%</span>
            <button class="remove-track-btn w-6 h-6 rounded-full hover:bg-surface-container text-on-surface-variant hover:text-red-600 flex items-center justify-center transition-colors" title="제거">
              <span class="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <span class="material-symbols-outlined text-xs text-on-surface-variant/60">volume_mute</span>
          <input type="range" min="0" max="100" value="${volPercent}" class="track-vol-slider flex-grow">
          <span class="material-symbols-outlined text-xs text-on-surface-variant/60">volume_up</span>
        </div>
      `;

      const slider = row.querySelector('.track-vol-slider');
      const volLabel = row.querySelector(`#vol-label-${trackId}`);
      slider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        if (volLabel) volLabel.textContent = `${val}%`;
        engine.setTrackVolume(trackId, val / 100);
      });

      const removeBtn = row.querySelector('.remove-track-btn');
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        engine.stopTrack(trackId);
        renderMixerList();
        renderBrowseGrid(browseSearchInput ? browseSearchInput.value.trim() : '', currentCategory);
        renderBookmarksList();
    if (window.adManager) window.adManager.updateTranslations();
        renderHomePresets();
        updateUIState();
      });

      mixerActiveList.appendChild(row);
    });
  }

  if (mixerStopAllBtn) {
    mixerStopAllBtn.addEventListener('click', () => {
      engine.stopAll();
      renderHomePresets();
      engine.stopAll();
      renderMixerList();
      renderBrowseGrid(browseSearchInput ? browseSearchInput.value.trim() : '', currentCategory);
      renderBookmarksList();
    if (window.adManager) window.adManager.updateTranslations();
      updateUIState();
    });
  }

  // ========================================================
  // 7. 이명 케어 (Tinnitus Care) 컨트롤 연동
  // ========================================================
  if (pitchSlider && pitchDisplay) {
    pitchSlider.addEventListener('input', (e) => {
      const freq = parseInt(e.target.value, 10);
      pitchDisplay.textContent = `${freq.toLocaleString()} Hz`;
      tinnitus.updatePitch(freq);
    });
  }

  if (testPitchBtn) {
    testPitchBtn.addEventListener('click', () => {
      if (tinnitus.isTestingPitch) {
        tinnitus.stopPitchTest();
        testPitchBtn.classList.remove('bg-accent-gold', 'text-black');
        testPitchBtn.classList.add('bg-surface-container', 'text-primary');
        if (testPitchIcon) testPitchIcon.textContent = 'volume_up';
        testPitchBtn.querySelector('span:last-child').textContent = i18n.t('testToneBtn');
      } else {
        const freq = parseInt(pitchSlider.value, 10);
        tinnitus.startPitchTest(freq);
        testPitchBtn.classList.add('bg-accent-gold', 'text-black');
        testPitchBtn.classList.remove('bg-surface-container', 'text-primary');
        if (testPitchIcon) testPitchIcon.textContent = 'stop';
        testPitchBtn.querySelector('span:last-child').textContent = i18n.t('testToneStop');
      }
    });
  }

  if (notchToggleCheckbox) {
    notchToggleCheckbox.addEventListener('change', (e) => {
      tinnitus.setNotchEnabled(e.target.checked);
      const statusLabel = document.getElementById('notch-status-text');
      if (statusLabel) {
        statusLabel.textContent = e.target.checked ? i18n.t('notchEnabled') : i18n.t('notchDisabled');
        statusLabel.className = e.target.checked ? 'text-xs text-accent-gold font-bold' : 'text-xs text-on-surface-variant';
      }
    });
  }

  if (residualStartBtn) {
    residualStartBtn.addEventListener('click', () => {
      if (tinnitus.residualTimer) {
        tinnitus.stopResidualInhibition();
        residualStartBtn.querySelector('span:last-child').textContent = i18n.t('residualStartBtn');
        if (residualTimerDisplay) residualTimerDisplay.textContent = '02:00';
      } else {
        if (tinnitusContinuousBtn) {
          tinnitusContinuousBtn.classList.remove('bg-primary', 'text-white');
          tinnitusContinuousBtn.classList.add('bg-surface-container', 'text-primary');
          tinnitusContinuousBtn.querySelector('span:last-child').textContent = i18n.t('tinnitusContinuousBtn');
        }

        residualStartBtn.querySelector('span:last-child').textContent = i18n.t('residualStopBtn');
        tinnitus.startResidualInhibition(
          (secLeft) => {
            const m = String(Math.floor(secLeft / 60)).padStart(2, '0');
            const s = String(secLeft % 60).padStart(2, '0');
            if (residualTimerDisplay) residualTimerDisplay.textContent = `${m}:${s}`;
          },
          () => {
            residualStartBtn.querySelector('span:last-child').textContent = i18n.t('residualStartBtn');
            if (residualTimerDisplay) residualTimerDisplay.textContent = '02:00';
          }
        );
      }
    });
  }

  if (tinnitusContinuousBtn) {
    tinnitusContinuousBtn.addEventListener('click', () => {
      if (tinnitus.isContinuousPlaying) {
        tinnitus.stopReliefSound();
        tinnitusContinuousBtn.classList.remove('bg-primary', 'text-white');
        tinnitusContinuousBtn.classList.add('bg-surface-container', 'text-primary');
        tinnitusContinuousBtn.querySelector('span:last-child').textContent = i18n.t('tinnitusContinuousBtn');
      } else {
        if (tinnitus.residualTimer) {
          tinnitus.stopResidualInhibition();
          if (residualStartBtn) residualStartBtn.querySelector('span:last-child').textContent = i18n.t('residualStartBtn');
          if (residualTimerDisplay) residualTimerDisplay.textContent = '02:00';
        }

        tinnitus.startContinuousRelief();
        tinnitusContinuousBtn.classList.add('bg-primary', 'text-white');
        tinnitusContinuousBtn.classList.remove('bg-surface-container', 'text-primary');
        tinnitusContinuousBtn.querySelector('span:last-child').textContent = i18n.t('tinnitusStopBtn');
      }
    });
  }

  // ========================================================
  // 8. 슬립 타이머 모달 관리
  // ========================================================
  if (timerBtn && timerModal) {
    timerBtn.addEventListener('click', () => {
      timerModal.classList.remove('hidden');
      timerModal.classList.add('flex');
    });
  }

  if (closeTimerBtn && timerModal) {
    closeTimerBtn.addEventListener('click', () => {
      timerModal.classList.add('hidden');
      timerModal.classList.remove('flex');
    });
  }

  timerOptionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const minutes = parseInt(btn.getAttribute('data-minutes'), 10);
      if (minutes === 0) {
        engine.stopSleepTimer();
        if (timerStatusLabel) timerStatusLabel.textContent = i18n.t('sleepTimerDefault');
      } else {
        engine.startSleepTimer(
          minutes,
          (secLeft) => {
            const m = Math.floor(secLeft / 60);
            const s = secLeft % 60;
            if (timerStatusLabel) timerStatusLabel.textContent = `${m}m ${s}s (${i18n.t('sleepTimerTitle')})`;
          },
          () => {
            if (timerStatusLabel) timerStatusLabel.textContent = i18n.t('sleepTimerDefault');
            updateUIState();
          }
        );
      }
      timerModal.classList.add('hidden');
      timerModal.classList.remove('flex');
    });
  });

  // ========================================================
  // 8-1. 디자인 & 5대 테마 색상 설정 모달 관리
  // ========================================================
  const topSettingsBtn = document.getElementById('top-settings-btn');
  const settingsModal = document.getElementById('settings-modal');
  const closeSettingsModalBtn = document.getElementById('close-settings-modal-btn');
  const applySettingsBtn = document.getElementById('apply-settings-btn');
  const themeCards = document.querySelectorAll('.theme-select-card');

  const THEMES = ['theme-sand', 'theme-rain', 'theme-forest', 'theme-meditation', 'theme-brainwave'];

  function applyTheme(themeName) {
    THEMES.forEach(t => document.body.classList.remove(t));
    if (themeName && themeName !== 'theme-sand') {
      document.body.classList.add(themeName);
    }
    localStorage.setItem('living_sound_theme', themeName);

    // Update checkmark and border in modal
    themeCards.forEach(card => {
      const isSelected = card.getAttribute('data-theme') === themeName;
      const checkIcon = card.querySelector('.theme-check-icon');
      if (isSelected) {
        card.classList.add('border-2', 'border-accent-gold');
        card.classList.remove('border-outline-variant/30');
        if (checkIcon) checkIcon.classList.remove('hidden');
      } else {
        card.classList.remove('border-2', 'border-accent-gold');
        card.classList.add('border-outline-variant/30');
        if (checkIcon) checkIcon.classList.add('hidden');
      }
    });

    renderBrowseGrid(browseSearchInput ? browseSearchInput.value.trim() : '', currentCategory);
    renderBookmarksList();
    if (window.adManager) window.adManager.updateTranslations();
  }

  // Load saved theme on startup
  const savedTheme = localStorage.getItem('living_sound_theme') || 'theme-sand';
  applyTheme(savedTheme);

  if (topSettingsBtn && settingsModal) {
    topSettingsBtn.addEventListener('click', () => {
      settingsModal.classList.remove('hidden');
      settingsModal.classList.add('flex');
    });
  }

  if (closeSettingsModalBtn && settingsModal) {
    closeSettingsModalBtn.addEventListener('click', () => {
      settingsModal.classList.add('hidden');
      settingsModal.classList.remove('flex');
    });
  }

  if (applySettingsBtn && settingsModal) {
    applySettingsBtn.addEventListener('click', () => {
      settingsModal.classList.add('hidden');
      settingsModal.classList.remove('flex');
    });
  }

  themeCards.forEach(card => {
    card.addEventListener('click', () => {
      const selected = card.getAttribute('data-theme');
      applyTheme(selected);
    });
  });

  // ========================================================
  // 9. 미니 플레이어 & 공통 UI 상태 갱신
  // ========================================================
        function updateUIState() {
    window.updateUIState = updateUIState;
    if (!engine) return;

    const activeCount = engine.activeTracks.size;
    const isPlaying = (activeCount > 0 && !engine.isPaused);

    const badge = document.getElementById('active-track-count-badge');
    const miniIcon = document.getElementById('mini-play-pause-icon');
    const miniEl = document.getElementById('mini-audio-player');
    const miniTitle = document.getElementById('mini-player-title');
    const miniSub = document.getElementById('mini-player-sub');

    if (badge) {
      badge.textContent = isPlaying 
        ? `${activeCount} ${(typeof i18n !== 'undefined' ? i18n.t('activeTracksUnit') : '개 재생')}`
        : (activeCount > 0 
            ? `${activeCount} (${typeof i18n !== 'undefined' && i18n.currentLang === 'en' ? 'Paused' : (typeof i18n !== 'undefined' && i18n.currentLang === 'ru' ? 'Пауза' : '일시정지')})` 
            : `0 ${(typeof i18n !== 'undefined' ? i18n.t('activeTracksUnit') : '개 재생')}`);
    }

    if (miniIcon) {
      miniIcon.textContent = isPlaying ? 'pause' : 'play_arrow';
    }

    if (miniEl) {
      if (activeCount > 0) {
        miniEl.classList.remove('opacity-40');
      } else {
        miniEl.classList.add('opacity-40');
      }
    }

    if (miniTitle) {
      if (activeCount > 0) {
        const titles = Array.from(engine.activeTracks.values())
          .map(t => (typeof i18n !== 'undefined' ? i18n.getSoundInfo(t.info.id, t.info).title : (t.info.title || t.info.id)))
          .join(', ');
        miniTitle.textContent = titles;
      } else {
        miniTitle.textContent = (typeof i18n !== 'undefined' ? i18n.t('miniNoTrack') : '선택된 사운드 없음');
      }
    }

    if (miniSub) {
      if (isPlaying) {
        miniSub.textContent = (typeof i18n !== 'undefined' ? i18n.t('miniStreaming') : '24시간 무한 연속 스트리밍 중');
      } else if (activeCount > 0) {
        miniSub.textContent = (typeof i18n !== 'undefined' && i18n.currentLang === 'en' ? 'Paused (Tap to resume)' : (typeof i18n !== 'undefined' && i18n.currentLang === 'ru' ? 'Пауза (нажмите для воспроизведения)' : '일시정지됨 (탭하여 재생)'));
      } else {
        miniSub.textContent = (typeof i18n !== 'undefined' ? i18n.t('miniSelectPrompt') : '사운드를 선택하여 믹싱해 보세요');
      }
    }

    // Sync Native Foreground Notification
    if (window.AndroidSouliffBridge && typeof window.AndroidSouliffBridge.updateNotification === 'function') {
      if (activeCount > 0) {
        const titleStr = Array.from(engine.activeTracks.values()).map(t => (typeof i18n !== 'undefined' ? i18n.getSoundInfo(t.info.id, t.info).title : t.info.title)).join(', ');
        const subStr = isPlaying ? `${activeCount}개 사운드 믹싱 재생 중` : `${activeCount}개 사운드 (일시정지됨)`;
        window.AndroidSouliffBridge.updateNotification(titleStr, subStr, isPlaying);
      } else {
        window.AndroidSouliffBridge.updateNotification('Souliff 힐링 사운드스케이프', '선택된 사운드 없음 (대기 중)', false);
      }
    }
  }

  const masterVolumeLabel = document.getElementById('master-volume-label');
  if (masterVolumeSlider) {
    masterVolumeSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      const vol = val / 100;
      if (masterVolumeLabel) masterVolumeLabel.textContent = `${val}%`;
      engine.setMasterVolume(vol);
    });
  }

  // 초기화 및 렌더링
  initLanguageDropdown();
  reRenderAllComponents();
});
