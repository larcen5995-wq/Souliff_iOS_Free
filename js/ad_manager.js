/**
 * 🌿 Souliff Free - AdMob Manager (AdMob & 4-Hour Free Pass Engine)
 * - Real AdMob App ID (iOS): ca-app-pub-8036094597229084~9200530680
 * - Real Banner Unit ID (iOS): ca-app-pub-8036094597229084/2687093227
 * - Real Interstitial Unit ID (iOS): ca-app-pub-8036094597229084/6828734393
 * - 4-Hour Free Pass with Real-Time Countdown & 14-Language Modal
 */

class AdManager {
  constructor() {
    this.BANNER_ID = 'ca-app-pub-8036094597229084/2687093227';
    this.INTERSTITIAL_ID = 'ca-app-pub-8036094597229084/6828734393';
    this.FREE_PASS_HOURS = 4;
    this.FREE_PASS_KEY = 'souliff_free_pass_expiry';
    this.LAST_AD_TIME_KEY = 'souliff_last_ad_timestamp';
    this.AD_COOLDOWN_MS = 2 * 60 * 60 * 1000; // 2 hours buffer

    this.isAdmobReady = false;
    this.isAppInForeground = true;

    this.init();
  }

  async init() {
    this.setupAppLifecycle();
    this.setupFreePassTimerUI();

    // Check if First Install -> Grant initial 4-Hour Free Pass!
    if (!localStorage.getItem(this.FREE_PASS_KEY)) {
      this.grantFreePass(this.FREE_PASS_HOURS);
    }

    // Initialize Capacitor AdMob Plugin if available
    try {
      if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.AdMob) {
        const { AdMob } = window.Capacitor.Plugins;
        await AdMob.initialize({
          initializeForTesting: false
        });
        this.isAdmobReady = true;
        console.log('[AdMob] Initialized successfully with Real IDs');
        this.showBannerAd();
      } else {
        console.log('[AdMob] Running in Web mode / fallback');
      }
    } catch (e) {
      console.warn('[AdMob] Init warning:', e);
    }
  }

  setupAppLifecycle() {
    document.addEventListener('visibilitychange', () => {
      this.isAppInForeground = (document.visibilityState === 'visible');
    });
  }

  isFreePassActive() {
    const expiry = parseInt(localStorage.getItem(this.FREE_PASS_KEY) || '0', 10);
    return Date.now() < expiry;
  }

  getRemainingFreePassMs() {
    const expiry = parseInt(localStorage.getItem(this.FREE_PASS_KEY) || '0', 10);
    return Math.max(0, expiry - Date.now());
  }

  grantFreePass(hours = 4) {
    const expiry = Date.now() + (hours * 60 * 60 * 1000);
    localStorage.setItem(this.FREE_PASS_KEY, expiry.toString());
    localStorage.setItem(this.LAST_AD_TIME_KEY, Date.now().toString());
    this.updatePassBadgeUI();
  }

  isInCooldown() {
    const lastAd = parseInt(localStorage.getItem(this.LAST_AD_TIME_KEY) || '0', 10);
    return (Date.now() - lastAd) < this.AD_COOLDOWN_MS;
  }

  // 1. Banner Ad (Docked above Mini Player)
  async showBannerAd() {
    if (!this.isAdmobReady) return;
    try {
      const { AdMob, BannerAdSize, BannerAdPosition } = window.Capacitor.Plugins;
      await AdMob.showBanner({
        adId: this.BANNER_ID,
        adSize: BannerAdSize.BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 72,
        isTesting: false
      });
    } catch (e) {
      console.warn('[AdMob] Banner load error:', e);
    }
  }

  // 2. Interstitial Ad (Triggered on 4-Hour Pass Recharge)
  async triggerInterstitialAd(onDone) {
    if (this.isAdmobReady && window.Capacitor && window.Capacitor.Plugins.AdMob) {
      try {
        const { AdMob } = window.Capacitor.Plugins;
        await AdMob.prepareInterstitial({
          adId: this.INTERSTITIAL_ID,
          isTesting: false
        });
        await AdMob.showInterstitial();
      } catch (e) {
        console.warn('[AdMob] Interstitial fallback:', e);
      }
    }
    if (onDone) onDone();
  }

  // 3. Check Before Play Sound
  checkAdBeforePlay(onAllowed) {
    if (!this.isAppInForeground) {
      if (onAllowed) onAllowed();
      return;
    }
    if (this.isFreePassActive()) {
      if (onAllowed) onAllowed();
      return;
    }
    if (this.isInCooldown()) {
      if (onAllowed) onAllowed();
      return;
    }
    this.showAdNoticeModal(onAllowed);
  }

  showAdNoticeModal(onSuccess) {
    const modal = document.getElementById('ad-pass-modal');
    if (!modal) {
      this.grantFreePass(this.FREE_PASS_HOURS);
      if (onSuccess) onSuccess();
      return;
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    const watchBtn = document.getElementById('ad-watch-btn');
    if (watchBtn) {
      watchBtn.onclick = () => {
        this.triggerInterstitialAd(() => {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
          this.grantFreePass(this.FREE_PASS_HOURS);
          if (onSuccess) onSuccess();
        });
      };
    }
  }

  setupFreePassTimerUI() {
    setInterval(() => {
      this.updatePassBadgeUI();
    }, 1000);
  }

  updateTranslations() {
    const bannerTitle = document.querySelector('[data-i18n="adBannerTitle"]');
    const bannerSub = document.querySelector('[data-i18n="adBannerSub"]');
    const bannerBtn = document.querySelector('[data-i18n="adBannerBtn"]');
    const modalTitle = document.querySelector('[data-i18n="adPassModalTitle"]');
    const modalDesc = document.querySelector('[data-i18n="adPassModalDesc"]');
    const watchBtn = document.querySelector('[data-i18n="adWatchBtn"]');
    const nextBtn = document.querySelector('[data-i18n="adNextTime"]');
    
    if (typeof i18n !== 'undefined') {
      if (bannerTitle) bannerTitle.textContent = i18n.t('adBannerTitle');
      if (bannerSub) bannerSub.textContent = i18n.t('adBannerSub');
      if (bannerBtn) bannerBtn.textContent = i18n.t('adBannerBtn');
      if (modalTitle) modalTitle.textContent = i18n.t('adPassModalTitle');
      if (modalDesc) modalDesc.textContent = i18n.t('adPassModalDesc');
      if (watchBtn) watchBtn.textContent = i18n.t('adWatchBtn');
      if (nextBtn) nextBtn.textContent = i18n.t('adNextTime');
    }
    this.updatePassBadgeUI();
  }

  updatePassBadgeUI() {
    const badge = document.getElementById('ad-free-pass-badge');
    const timerText = document.getElementById('ad-pass-timer-text');
    if (!badge || !timerText) return;

    const remainingMs = this.getRemainingFreePassMs();
    if (remainingMs > 0) {
      const totalSec = Math.floor(remainingMs / 1000);
      const h = String(Math.floor(totalSec / 3600)).padStart(2, '0');
      const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0');
      const s = String(totalSec % 60).padStart(2, '0');
      timerText.textContent = `${h}:${m}:${s}`;
      badge.classList.remove('opacity-50', 'bg-red-500/20');
      badge.classList.add('bg-emerald-500/20');
    } else {
      timerText.textContent = '00:00:00';
      badge.classList.remove('bg-emerald-500/20');
      badge.classList.add('opacity-50', 'bg-red-500/20');
    }
  }
}

// Instantiate globally
window.adManager = new AdManager();
