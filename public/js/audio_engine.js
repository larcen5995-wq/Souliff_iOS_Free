/**
 * 🌊 Souliff Relaxing Sounds - Master Web Audio High-Fidelity Engine
 * Studio Mastering Compressor + Full-Gain Throughput (3X Volume & Crisp Harmonics)
 */

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.compressor = null;
    this.masterVolume = 1.0;
    this.activeTracks = new Map();
    this.isPaused = false; // trackId -> { audioElement, sourceNode, gainNode, volume, info }
    this.allAudioInstances = new Set();
    this.tinnitusEngine = typeof TinnitusEngine !== 'undefined' ? new TinnitusEngine(this) : null;
    
    // Sleep Timer
    this.timerInterval = null;
    this.timerSecondsLeft = 0;
    this.timerTotalSeconds = 0;
    
    this.isInitialized = false;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
        
        // Studio Mastering Dynamics Compressor (Boosts delicate singing bowls and rain overtones)
        try {
          this.compressor = this.ctx.createDynamicsCompressor();
          this.compressor.threshold.setValueAtTime(-16, this.ctx.currentTime);
          this.compressor.knee.setValueAtTime(25, this.ctx.currentTime);
          this.compressor.ratio.setValueAtTime(3.5, this.ctx.currentTime);
          this.compressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
          this.compressor.release.setValueAtTime(0.25, this.ctx.currentTime);
          
          this.masterGain.connect(this.compressor);
          this.compressor.connect(this.ctx.destination);
        } catch (e) {
          this.masterGain.connect(this.ctx.destination);
        }
      }
      this.isInitialized = true;
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setMasterVolume(val) {
    this.initContext();
    this.masterVolume = Math.max(0, Math.min(1.5, val));
    if (this.masterGain && this.ctx) {
      try {
        this.masterGain.gain.setTargetAtTime(this.masterVolume, this.ctx.currentTime, 0.02);
      } catch (e) {
        this.masterGain.gain.value = this.masterVolume;
      }
    }
  }

  // ========================================================
  // 1. Multi-Track MP3 Play & Mix Management
  // ========================================================
  toggleTrack(trackInfo) {
    this.initContext();
    const id = trackInfo.id;
    if (this.activeTracks.has(id)) {
      this.stopTrack(id);
      return false;
    } else {
      this.isPaused = false;
      this.playTrack(trackInfo);
      return true;
    }
  }

  playTrack(trackInfo, targetVolume = null) {
    this.initContext();
    this.isPaused = false;
    const id = trackInfo.id;
    if (this.activeTracks.has(id)) {
      this.stopTrack(id);
    }

    const volume = targetVolume !== null ? targetVolume : (trackInfo.defaultVolume || 1.0);
    const src = trackInfo.file || `assets/audio/${id}.mp3`;

    const audio = new Audio();
    audio.loop = true;
    audio.addEventListener('ended', () => { audio.currentTime = 0; audio.play().catch(()=>{}); });
    audio.addEventListener('error', (err) => { console.warn('Audio loop recovered:', err); audio.load(); audio.play().catch(()=>{}); });
    audio.preload = 'auto';
    audio.crossOrigin = 'anonymous';
    // 100% throughput to Web Audio GainNode
    audio.volume = 1.0;
    audio.src = src;

    this.allAudioInstances.add(audio);

    // Web Audio Gain Node for this track
    let trackGain = null;
    let sourceNode = null;

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (window.webkit && window.webkit.messageHandlers);
    audio.volume = Math.max(0, Math.min(1.0, volume * this.masterVolume));

    // On iOS Safari / WKWebView, direct HTML5 Audio does not freeze when backgrounded
    if (!isIOS && this.ctx) {
      try {
        sourceNode = this.ctx.createMediaElementSource(audio);
        trackGain = this.ctx.createGain();
        trackGain.gain.setValueAtTime(volume, this.ctx.currentTime);

        if (this.tinnitusEngine && this.tinnitusEngine.isNotchEnabled) {
          const notch = this.tinnitusEngine.createTrackNotchFilter();
          this.tinnitusEngine.notchFilters.set(id, notch);
          sourceNode.connect(trackGain);
          trackGain.connect(notch);
          notch.connect(this.masterGain);
        } else {
          sourceNode.connect(trackGain);
          trackGain.connect(this.masterGain);
        }
      } catch (e) {
        console.warn('Web Audio node creation warning:', e);
      }
    }

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        console.warn('Playback autoplay policy wait:', err);
      });
    }

    this.activeTracks.set(id, {
      audioElement: audio,
      sourceNode: sourceNode,
      gainNode: trackGain,
      volume: volume,
      info: trackInfo
    });
  }

  stopTrack(id) {
    const track = this.activeTracks.get(id);
    if (track) {
      try {
        track.audioElement.pause();
        track.audioElement.currentTime = 0;
        track.audioElement.src = '';
        this.allAudioInstances.delete(track.audioElement);
      } catch (e) {}

      if (this.tinnitusEngine && this.tinnitusEngine.notchFilters && this.tinnitusEngine.notchFilters.has(id)) {
        try {
          const notch = this.tinnitusEngine.notchFilters.get(id);
          notch.disconnect();
          this.tinnitusEngine.notchFilters.delete(id);
        } catch(e) {}
      }

      if (track.gainNode) {
        try {
          track.gainNode.disconnect();
        } catch(e) {}
      }

      this.activeTracks.delete(id);
    }
  }

  setTrackVolume(id, val) {
    const track = this.activeTracks.get(id);
    if (track) {
      track.volume = Math.max(0, Math.min(1.5, val));
      if (track.gainNode && this.ctx) {
        try {
          track.gainNode.gain.setTargetAtTime(track.volume, this.ctx.currentTime, 0.02);
        } catch (e) {
          track.gainNode.gain.value = track.volume;
        }
      }
    }
  }

  stopAllTracks() {
    this.stopAll();
  }

    // Phone Call Auto-Handling
  pauseAllForCall() {
    this.wasPlayingBeforeCall = this.activeTracks.size > 0;
    this.activeTracks.forEach(t => {
      if (t.audioElement) t.audioElement.pause();
    });
  }

  resumeAllAfterCall() {
    if (this.wasPlayingBeforeCall) {
      this.activeTracks.forEach(t => {
        if (t.audioElement) t.audioElement.play().catch(()=>{});
      });
      this.wasPlayingBeforeCall = false;
    }
  }

  // ========================================================
  // True Pause & Resume Multi-Track Management (Preserves Mix)
  // ========================================================
  pauseAll() {
    this.isPaused = true;
    this.allAudioInstances.forEach(audio => {
      try { audio.pause(); } catch(e){}
    });
    this.activeTracks.forEach(t => {
      if (t.audioElement) {
        try { t.audioElement.pause(); } catch(e){}
      }
    });
    this.saveMixState();
  }

  resumeAll() {
    this.initContext();
    this.isPaused = false;
    this.activeTracks.forEach(t => {
      if (t.audioElement) {
        try {
          const p = t.audioElement.play();
          if (p && p.catch) p.catch(()=>{});
        } catch(e){}
      }
    });
    this.saveMixState();
  }

  togglePlayPause() {
    if (this.activeTracks.size === 0) {
      const restored = this.restoreSavedMix();
      if (!restored) {
        if (typeof PRESET_MIXES !== 'undefined' && PRESET_MIXES.length > 0) {
          if (typeof window.applyPreset === 'function') window.applyPreset(PRESET_MIXES[0]);
        }
      }
      return true;
    }

    if (this.isPaused) {
      this.resumeAll();
      return true;
    } else {
      this.pauseAll();
      return false;
    }
  }

  saveMixState() {
    try {
      if (this.activeTracks.size > 0) {
        const mix = Array.from(this.activeTracks.values()).map(t => ({
          id: t.info.id,
          volume: t.gainNode ? t.gainNode.gain.value : t.volume
        }));
        localStorage.setItem('souliff_saved_mix', JSON.stringify(mix));
      }
    } catch(e){}
  }

  restoreSavedMix() {
    try {
      const raw = localStorage.getItem('souliff_saved_mix');
      if (raw) {
        const list = JSON.parse(raw);
        if (Array.isArray(list) && list.length > 0) {
          const soundsList = (typeof SOUNDS !== 'undefined') ? SOUNDS : [];
          list.forEach(item => {
            const sound = soundsList.find(s => s.id === item.id);
            if (sound) this.playTrack(sound, item.volume);
          });
          this.isPaused = false;
          return true;
        }
      }
    } catch(e){}
    return false;
  }

  stopAll() {
    this.isPaused = false;
    this.allAudioInstances.forEach(audio => {
      try {
        audio.pause();
        audio.currentTime = 0;
      } catch(e){}
    });
    this.activeTracks.forEach(t => {
      if (t.audioElement) {
        try {
          t.audioElement.pause();
          t.audioElement.currentTime = 0;
        } catch(e){}
      }
      if (t.sourceNode) {
        try { t.sourceNode.disconnect(); } catch(e){}
      }
    });
    this.activeTracks.clear();
    localStorage.removeItem('souliff_saved_mix');
  }

  getPlayingCount() {
    return this.activeTracks.size;
  }

  // ========================================================
  // 2. Sleep Timer System
  // ========================================================
  startSleepTimer(minutes, onTick, onComplete) {
    this.stopSleepTimer();
    if (minutes <= 0) return;

    this.timerSecondsLeft = Math.round(minutes * 60);
    this.timerTotalSeconds = this.timerSecondsLeft;

    if (onTick) onTick(this.timerSecondsLeft, this.timerTotalSeconds);

    this.timerInterval = setInterval(() => {
      this.timerSecondsLeft--;

      // Fade out volume in last 3 minutes (180s)
      if (this.timerSecondsLeft <= 180 && this.timerTotalSeconds > 180) {
        const factor = Math.max(0, this.timerSecondsLeft / 180);
        this.setMasterVolume(this.masterVolume * factor);
      }

      if (onTick) onTick(this.timerSecondsLeft, this.timerTotalSeconds);

      if (this.timerSecondsLeft <= 0) {
        this.stopSleepTimer();
        this.stopAll();
        this.setMasterVolume(1.0);
        if (onComplete) onComplete();
      }
    }, 1000);
  }

  stopSleepTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.timerSecondsLeft = 0;
    this.timerTotalSeconds = 0;
  }

  getTimerRemainingFormatted() {
    if (this.timerSecondsLeft <= 0) return "";
    const m = Math.floor(this.timerSecondsLeft / 60);
    const s = this.timerSecondsLeft % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }
}

if (typeof window !== "undefined") {
  window.AudioEngine = AudioEngine;
}
