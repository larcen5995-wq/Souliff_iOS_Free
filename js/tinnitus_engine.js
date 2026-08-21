/**
 * 🩺 Tinnitus Care Engine (Tailor-Made Notched & Narrowband Masking System)
 * 이명 테스트 톤, 2분 집중 세션 및 24시간 무제한 연속 완화 사운드 엔진
 */

class TinnitusEngine {
  constructor(audioEngine) {
    this.engine = audioEngine;

    this.currentPitch = 6000;
    this.isNotchEnabled = false;

    // Pitch test oscillator
    this.testOsc = null;
    this.testGain = null;
    this.isTestingPitch = false;

    // Residual Inhibition & Continuous Relief Node
    this.reliefSource = null;
    this.reliefFilter = null;
    this.reliefGain = null;
    this.residualTimer = null;
    this.isContinuousPlaying = false;
  }

  get ctx() {
    this.engine.initContext();
    return this.engine.ctx;
  }

  get masterGain() {
    this.engine.initContext();
    return this.engine.masterGain;
  }

  updatePitch(freq) {
    this.currentPitch = Math.max(1000, Math.min(12000, freq));
    const ctx = this.ctx;
    if (this.testOsc) {
      try {
        this.testOsc.frequency.setTargetAtTime(this.currentPitch, ctx.currentTime, 0.05);
      } catch (e) {}
    }
    if (this.reliefFilter) {
      try {
        this.reliefFilter.frequency.setTargetAtTime(this.currentPitch, ctx.currentTime, 0.05);
      } catch (e) {}
    }
  }

  setNotchEnabled(enabled) {
    this.isNotchEnabled = enabled;
  }

  startPitchTest(freq = 6000) {
    const ctx = this.ctx;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    this.stopPitchTest();

    this.currentPitch = freq;
    this.testOsc = ctx.createOscillator();
    this.testGain = ctx.createGain();

    this.testOsc.type = 'sine';
    this.testOsc.frequency.setValueAtTime(this.currentPitch, ctx.currentTime);

    this.testGain.gain.setValueAtTime(0.001, ctx.currentTime);
    this.testGain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.1);

    this.testOsc.connect(this.testGain);
    this.testGain.connect(this.masterGain);

    this.testOsc.start();
    this.isTestingPitch = true;
  }

  stopPitchTest() {
    const ctx = this.engine.ctx;
    if (this.testOsc && ctx) {
      try {
        this.testGain.gain.setValueAtTime(this.testGain.gain.value, ctx.currentTime);
        this.testGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
        const osc = this.testOsc;
        const gain = this.testGain;
        setTimeout(() => {
          try {
            osc.stop();
            osc.disconnect();
            gain.disconnect();
          } catch (e) {}
        }, 100);
      } catch (e) {
        try { this.testOsc.stop(); } catch (err) {}
      }
      this.testOsc = null;
      this.testGain = null;
    }
    this.isTestingPitch = false;
  }

  /**
   * 2분 집중 완화 세션 (2-Minute Focused Residual Session)
   */
  startResidualInhibition(onTick, onComplete) {
    this.stopReliefSound();

    const ctx = this.ctx;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    this._createReliefAudioGraph();

    let secondsRemaining = 120;
    if (onTick) onTick(secondsRemaining);

    this.residualTimer = setInterval(() => {
      secondsRemaining--;
      if (onTick) onTick(secondsRemaining);

      if (secondsRemaining <= 0) {
        this.stopReliefSound();
        if (onComplete) onComplete();
      }
    }, 1000);
  }

  /**
   * 24시간 무제한 연속 완화 사운드 재생
   */
  startContinuousRelief() {
    this.stopReliefSound();

    const ctx = this.ctx;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    this._createReliefAudioGraph();
    this.isContinuousPlaying = true;
  }

  _createReliefAudioGraph() {
    const ctx = this.ctx;
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    this.reliefSource = ctx.createBufferSource();
    this.reliefSource.buffer = noiseBuffer;
    this.reliefSource.loop = true;

    this.reliefFilter = ctx.createBiquadFilter();
    this.reliefFilter.type = 'bandpass';
    this.reliefFilter.frequency.setValueAtTime(this.currentPitch, ctx.currentTime);
    this.reliefFilter.Q.setValueAtTime(4.0, ctx.currentTime);

    this.reliefGain = ctx.createGain();
    this.reliefGain.gain.setValueAtTime(0.001, ctx.currentTime);
    this.reliefGain.gain.exponentialRampToValueAtTime(0.35, ctx.currentTime + 0.2);

    this.reliefSource.connect(this.reliefFilter);
    this.reliefFilter.connect(this.reliefGain);
    this.reliefGain.connect(this.masterGain);

    this.reliefSource.start();
  }

  stopReliefSound() {
    if (this.residualTimer) {
      clearInterval(this.residualTimer);
      this.residualTimer = null;
    }

    this.isContinuousPlaying = false;

    const ctx = this.engine.ctx;
    if (this.reliefGain && ctx) {
      try {
        this.reliefGain.gain.setValueAtTime(this.reliefGain.gain.value, ctx.currentTime);
        this.reliefGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.15);
        const src = this.reliefSource;
        const filter = this.reliefFilter;
        const gain = this.reliefGain;
        setTimeout(() => {
          try {
            if (src) {
              src.stop();
              src.disconnect();
            }
            if (filter) filter.disconnect();
            if (gain) gain.disconnect();
          } catch (e) {}
        }, 180);
      } catch (e) {
        if (this.reliefSource) {
          try { this.reliefSource.stop(); } catch (err) {}
        }
      }
      this.reliefSource = null;
      this.reliefFilter = null;
      this.reliefGain = null;
    }
  }

  stopResidualInhibition() {
    this.stopReliefSound();
  }
}
