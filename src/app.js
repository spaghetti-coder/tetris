(() => {
  const FALLBACK_URL = 'https://use.fontawesome.com/releases/v6.7.2/css/all.css';
  const FA_FONT = '900 1em "Font Awesome 6 Free"';
  const primary = document.getElementById('fa-primary');
  let added = false;
  let primaryLoaded = false;
  const addFallback = () => {
    if (added) return;
    added = true;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = FALLBACK_URL;
    document.head.appendChild(link);
  };
  const isLoaded = () => {
    if (!primaryLoaded) return false;
    try { return document.fonts.check(FA_FONT); } catch (_) {}
    return false;
  };
  if (!primary) { addFallback(); return; }
  primary.onload = () => { primaryLoaded = true; };
  primary.onerror = addFallback;
  setTimeout(() => { if (!primaryLoaded) addFallback(); }, 5000);
  document.fonts?.ready?.then(() => { if (!isLoaded()) addFallback(); });
})();

// --- I18N ---

const LANG_STORAGE_KEY = 'tetris.lang';

const I18N = {
  langs: ['en', 'ru', 'bg', 'ro', 'fr', 'es', 'zh', 'ja'],
  default: 'en',
  names: {
    en: 'English',
    ru: 'Русский',
    bg: 'Български',
    ro: 'Română',
    fr: 'Français',
    es: 'Español',
    zh: '中文',
    ja: '日本語'
  },
  messages: {
    en: {
      score: 'Score',
      level: 'Level',
      lines: 'Lines',
      next: 'Next',
      move: 'Move',
      rotate: 'Rotate',
      softDrop: 'Soft Drop',
      hardDrop: 'Hard Drop',
      hold: 'Hold',
      pause: 'Pause',
      restart: 'Restart',
      confirmRestart: 'Confirm Restart',
      controls: 'Controls',
      paused: 'PAUSED',
      resume: 'RESUME',
      resumeLabel: 'Resume',
      gameOver: 'GAME OVER',
      playAgain: 'PLAY AGAIN',
      settings: 'Settings',
      ghost: 'Ghost',
      sevenBag: '7-bag',
      blackWhite: 'B/W theme',
      grid: 'Grid',
      langLabel: 'Lang',
      ranking: 'Ranking',
      bestScore: 'Best Score:',
      previousBest: 'Previous Best:',
      youCanBetter: 'You can better!',
      soClose: 'So Close!',
      yourScore: 'Your Score:',
      clear: 'Clear',
      confirmClear: 'Confirm Clear',
      noRecords: 'No records yet',
      pageTitle: 'Tetris'
    },
    ru: {
      score: 'Очко',
      level: 'Уровень',
      lines: 'Линий',
      next: 'Следующая',
      move: 'Перемещение',
      rotate: 'Поворот',
      softDrop: 'Мягкое падение',
      hardDrop: 'Жёсткое падение',
      hold: 'Карман',
      pause: 'Пауза',
      restart: 'Рестарт',
      confirmRestart: 'Подтвердить рестарт',
      controls: 'Управление',
      paused: 'Ты на ручнике',
      resume: 'Жми на газ',
      resumeLabel: 'Дай газу',
      gameOver: 'Все, капец',
      playAgain: 'Еще по одной',
      settings: 'На стройку',
      ghost: 'Тень',
      sevenBag: '7-мешок',
      blackWhite: 'Ч/Б тема',
      grid: 'Сетка',
      langLabel: 'Язык',
      ranking: 'Рекорды',
      bestScore: 'Рекорд:',
      previousBest: 'Прежний рекорд:',
      youCanBetter: 'Лошара!',
      soClose: 'Ого, почти!',
      yourScore: 'Твой счёт:',
      clear: 'Очистить',
      confirmClear: 'Подтвердить очистку',
      noRecords: 'Пока пусто',
      pageTitle: 'Тетрис'
    },
    bg: {
      score: 'Точки',
      level: 'Ниво',
      lines: 'Редове',
      next: 'Следваща',
      move: 'Движение',
      rotate: 'Завъртане',
      softDrop: 'Бавно спускане',
      hardDrop: 'Бързо спускане',
      hold: 'Резерва',
      pause: 'Пауза',
      restart: 'Рестарт',
      confirmRestart: 'Потвърди рестарт',
      controls: 'Управление',
      paused: 'ПАУЗА',
      resume: 'ПРОДЪЛЖИ',
      resumeLabel: 'Продължи',
      gameOver: 'КРАЙ НА ИГРАТА',
      playAgain: 'ИГРАЙ ОТНОВО',
      settings: 'Настройки',
      ghost: 'Сенка',
      sevenBag: '7-чувал',
      blackWhite: 'Ч/Б тема',
      grid: 'Мрежа',
      langLabel: 'Език',
      ranking: 'Рекорди',
      bestScore: 'Рекорд:',
      previousBest: 'Предишен рекорд:',
      youCanBetter: 'Може и по-добре!',
      soClose: 'Тъй близо!',
      yourScore: 'Твоят резултат:',
      clear: 'Изчисти',
      confirmClear: 'Потвърди изчистване',
      noRecords: 'Все още няма записи',
      pageTitle: 'Тетрис'
    },
    ro: {
      score: 'Scor',
      level: 'Nivel',
      lines: 'Linii',
      next: 'Următoarea',
      move: 'Mișcare',
      rotate: 'Rotație',
      softDrop: 'Coborâre lentă',
      hardDrop: 'Coborâre rapidă',
      hold: 'Rezervă',
      pause: 'Pauză',
      restart: 'Restart',
      confirmRestart: 'Confirmă restart',
      controls: 'Controale',
      paused: 'PAUZĂ',
      resume: 'CONTINUĂ',
      resumeLabel: 'Continuă',
      gameOver: 'JOC TERMINAT',
      playAgain: 'JOACĂ DIN NOU',
      settings: 'Setări',
      ghost: 'Umbră',
      sevenBag: '7-sac',
      blackWhite: 'Alb & Neg',
      grid: 'Grilă',
      langLabel: 'Limbă',
      ranking: 'Clasament',
      bestScore: 'Cel mai bun scor:',
      previousBest: 'Scor anterior:',
      youCanBetter: 'Poți și mai bine!',
      soClose: 'Așa de aproape!',
      yourScore: 'Scorul tău:',
      clear: 'Șterge',
      confirmClear: 'Confirmă ștergerea',
      noRecords: 'Nicio înregistrare încă',
      pageTitle: 'Tetris'
    },
    fr: {
      score: 'Score',
      level: 'Niveau',
      lines: 'Lignes',
      next: 'Suivante',
      move: 'Déplacement',
      rotate: 'Rotation',
      softDrop: 'Chute lente',
      hardDrop: 'Chute rapide',
      hold: 'Réserve',
      pause: 'Pause',
      restart: 'Redémarrer',
      confirmRestart: 'Confirmer redémarrage',
      controls: 'Commandes',
      paused: 'PAUSE',
      resume: 'REPRENDRE',
      resumeLabel: 'Reprendre',
      gameOver: 'PARTIE TERMINÉE',
      playAgain: 'REJOUER',
      settings: 'Paramètres',
      ghost: 'Ombre',
      sevenBag: '7-sac',
      blackWhite: 'Noir & Blanc',
      grid: 'Grille',
      langLabel: 'Langue',
      ranking: 'Classement',
      bestScore: 'Meilleur score :',
      previousBest: 'Précédent record :',
      youCanBetter: 'Tu peux mieux faire !',
      soClose: 'Si proche !',
      yourScore: 'Ton score :',
      clear: 'Effacer',
      confirmClear: 'Confirmer l\'effacement',
      noRecords: 'Pas encore de records',
      pageTitle: 'Tetris'
    },
    es: {
      score: 'Puntuación',
      level: 'Nivel',
      lines: 'Líneas',
      next: 'Siguiente',
      move: 'Mover',
      rotate: 'Rotar',
      softDrop: 'Caída lenta',
      hardDrop: 'Caída rápida',
      hold: 'Reserva',
      pause: 'Pausa',
      restart: 'Reiniciar',
      confirmRestart: 'Confirmar reinicio',
      controls: 'Controles',
      paused: 'PAUSA',
      resume: 'CONTINUAR',
      resumeLabel: 'Continuar',
      gameOver: 'FIN DEL JUEGO',
      playAgain: 'JUGAR DE NUEVO',
      settings: 'Ajustes',
      ghost: 'Fantasma',
      sevenBag: '7-bolsa',
      blackWhite: 'B/N',
      grid: 'Cuadrícula',
      langLabel: 'Idioma',
      ranking: 'Récords',
      bestScore: 'Mejor puntuación:',
      previousBest: 'Anterior:',
      youCanBetter: '¡Puedes mejor!',
      soClose: '¡Tan cerca!',
      yourScore: 'Tu puntuación:',
      clear: 'Borrar',
      confirmClear: 'Confirmar borrado',
      noRecords: 'Sin registros aún',
      pageTitle: 'Tetris'
    },
    zh: {
      score: '分数',
      level: '等级',
      lines: '行数',
      next: '下一个',
      move: '移动',
      rotate: '旋转',
      softDrop: '软降',
      hardDrop: '硬降',
      hold: '暂存',
      pause: '暂停',
      restart: '重新开始',
      confirmRestart: '确认重新开始',
      controls: '操作',
      paused: '已暂停',
      resume: '继续',
      resumeLabel: '继续',
      gameOver: '游戏结束',
      playAgain: '再来一局',
      settings: '设置',
      ghost: '影子',
      sevenBag: '7袋',
      blackWhite: '黑白',
      grid: '网格',
      langLabel: '语言',
      ranking: '排行榜',
      bestScore: '最高分：',
      previousBest: '上次最高：',
      youCanBetter: '你能更好！',
      soClose: '差一点！',
      yourScore: '你的分数：',
      clear: '清除',
      confirmClear: '确认清除',
      noRecords: '暂无记录',
      pageTitle: '俄罗斯方块'
    },
    ja: {
      score: 'スコア',
      level: 'レベル',
      lines: 'ライン',
      next: 'ネクスト',
      move: '移動',
      rotate: '回転',
      softDrop: 'ソフトドロップ',
      hardDrop: 'ハードドロップ',
      hold: 'ホールド',
      pause: '一時停止',
      restart: 'リスタート',
      confirmRestart: 'リスタート確認',
      controls: '操作',
      paused: '一時停止中',
      resume: '再開',
      resumeLabel: '再開',
      gameOver: 'ゲームオーバー',
      playAgain: 'もう一度',
      settings: '設定',
      ghost: 'ゴースト',
      sevenBag: '7バッグ',
      blackWhite: '白黒',
      grid: 'グリッド',
      langLabel: '言語',
      ranking: 'ランキング',
      bestScore: 'ベストスコア：',
      previousBest: '前回ベスト：',
      youCanBetter: 'もっといける！',
      soClose: 'あと少し！',
      yourScore: 'あなたのスコア：',
      clear: 'クリア',
      confirmClear: 'クリア確認',
      noRecords: '記録なし',
      pageTitle: 'テトリス'
    }
  },
  current: 'en',

  t(key) {
    return this.messages[this.current]?.[key] ?? key;
  },

  detectLanguage() {
    let lang = (navigator.language || '').slice(0, 2);
    try {
      lang = localStorage.getItem(LANG_STORAGE_KEY) ?? lang;
    } catch (_) {}
    return this.langs.includes(lang) ? lang : this.default;
  },

  setLanguage(lang) {
    if (!this.langs.includes(lang)) return;
    this.current = lang;
    document.documentElement.lang = lang;
    try { localStorage.setItem(LANG_STORAGE_KEY, lang); } catch (_) {}
  },

  applyI18n() {
    const t = this.t.bind(this);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const attr = el.dataset.i18nAttr;
      if (attr) el.setAttribute(attr, t(key));
      else el.textContent = t(key);
    });
    document.title = t('pageTitle');
  }
};

I18N.setLanguage(I18N.detectLanguage());
I18N.applyI18n();
document.documentElement.classList.remove('i18n-loading');

// --- Constants ---

const COLS = 10, ROWS = 20;
const LINE_SCORES = [0, 100, 300, 500, 800];

// SRS kick tables (Guideline): [dx, dy] pairs, tried in order.
// 5 kicks per transition. All 8 transitions explicit.
// For J/L/S/T/Z pieces
const SRS_KICK_JLSTZ = {
  '0>1': [[ 0, 0], [-1, 0], [-1, +1], [ 0, -2], [-1, -2]],
  '1>0': [[ 0, 0], [+1, 0], [+1, -1], [ 0, +2], [+1, +2]],
  '1>2': [[ 0, 0], [+1, 0], [+1, -1], [ 0, +2], [+1, +2]],
  '2>1': [[ 0, 0], [-1, 0], [-1, +1], [ 0, -2], [-1, -2]],
  '2>3': [[ 0, 0], [+1, 0], [+1, +1], [ 0, -2], [+1, -2]],
  '3>2': [[ 0, 0], [-1, 0], [-1, -1], [ 0, +2], [-1, +2]],
  '3>0': [[ 0, 0], [-1, 0], [-1, -1], [ 0, +2], [-1, +2]],
  '0>3': [[ 0, 0], [+1, 0], [+1, +1], [ 0, -2], [+1, -2]]
};
// For I piece
const SRS_KICK_I = {
  '0>1': [[ 0, 0], [-2, 0], [+1, 0], [-2, -1], [+1, +2]],
  '1>0': [[ 0, 0], [+2, 0], [-1, 0], [+2, +1], [-1, -2]],
  '1>2': [[ 0, 0], [-1, 0], [+2, 0], [-1, +2], [+2, -1]],
  '2>1': [[ 0, 0], [+1, 0], [-2, 0], [+1, -2], [-2, +1]],
  '2>3': [[ 0, 0], [+2, 0], [-1, 0], [+2, +1], [-1, -2]],
  '3>2': [[ 0, 0], [-2, 0], [+1, 0], [-2, -1], [+1, +2]],
  '3>0': [[ 0, 0], [+1, 0], [-2, 0], [+1, -2], [-2, +1]],
  '0>3': [[ 0, 0], [-1, 0], [+2, 0], [-1, +2], [+2, -1]]
};

function getSRSKicks(pieceType, fromState, toState) {
  const table = pieceType === 'I' ? SRS_KICK_I : SRS_KICK_JLSTZ;
  return table[`${fromState}>${toState}`] || [[0, 0]];
}
const COLORS = [
  null,
  '#00f0f0', '#0000f0', '#f0a000', '#f0f000', '#00f000', '#f00000', '#a000f0'
];
const SHAPES = {
  I: { id: 1, blocks: [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]] },
  J: { id: 2, blocks: [[1,0,0],[1,1,1],[0,0,0]] },
  L: { id: 3, blocks: [[0,0,1],[1,1,1],[0,0,0]] },
  O: { id: 4, blocks: [[1,1],[1,1]] },
  S: { id: 5, blocks: [[0,1,1],[1,1,0],[0,0,0]] },
  T: { id: 6, blocks: [[0,1,0],[1,1,1],[0,0,0]] },
  Z: { id: 7, blocks: [[1,1,0],[0,1,1],[0,0,0]] }
};
const PIECE_NAMES = Object.keys(SHAPES);

const LOCK_DELAY = 500;
const DAS_DELAY = 150;
const ARR_RATE = 50;

const GHOST_STORAGE_KEY = 'tetris.ghost.enabled';
const SEVENBAG_STORAGE_KEY = 'tetris.sevenbag.enabled';
const BLACKWHITE_STORAGE_KEY = 'tetris.blackwhite.enabled';
const GRID_STORAGE_KEY = 'tetris.grid.enabled';

// --- Game ---

const randInt = (() => {
  const cryptoSrc = globalThis.crypto;
  if (! typeof cryptoSrc?.getRandomValues === 'function') {
    return max => Math.floor(Math.random() * max);
  }
  const buf = new Uint32Array(1);
  return max => {
    const limit = Math.floor(0x100000000 / max) * max;
    let v;
    do { cryptoSrc.getRandomValues(buf); v = buf[0]; }
    while (v >= limit);
    return v % max;
  };
})();

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

function vibrate(ms) {
  if (navigator.vibrate) navigator.vibrate(ms);
}

const Game = {
  // -- State --

  grid: null,
  score: 0, level: 1, lines: 0,
  paused: false, gameOver: false,
  current: null, next: null,
  heldPiece: null,
  holdUsed: false,
  dropCounter: 0, dropInterval: 1000,
  softDropActive: false, suppressSoftDrop: false,
  lockTimer: null, dasTimer: null, arrTimer: null, dasDir: 0,
  bag: [],
  _ghostY: 0,
  _ghostDirty: true,

  // -- Status --

  isRunning()  { return !this.paused && !this.gameOver; },
  isPlayable() { return this.isRunning() && this.current; },

  // -- Soft drop --

  clearSoftDrop() {
    this.softDropActive = false;
    this.suppressSoftDrop = false;
  },

  // -- Piece generation --

  fillBag() {
    this.bag = [...PIECE_NAMES];
    for (let i = this.bag.length - 1; i > 0; i--) {
      const j = randInt(i + 1);
      [this.bag[i], this.bag[j]] = [this.bag[j], this.bag[i]];
    }
  },

  randomPiece(typeName) {
    let name = PIECE_NAMES[randInt(PIECE_NAMES.length)];
    if (typeName) {
      name = typeName;
    } else if (Settings.sevenBagEnabled) {
      if (!this.bag.length) this.fillBag();
      name = this.bag.pop();
    }
    const s = SHAPES[name];
    return {
      type: name,
      blocks: s.blocks.map(r => [...r]),
      color: s.id,
      x: Math.floor((COLS - s.blocks[0].length) / 2),
      y: 0,
      state: 0
    };
  },

  // -- Rotation --

  rotateCW(blocks) {
    const N = blocks.length;
    const r = Array.from({ length: N }, () => Array(N).fill(0));
    for (let y = 0; y < N; y++)
      for (let x = 0; x < N; x++)
        r[x][N - 1 - y] = blocks[y][x];
    return r;
  },

  rotateCCW(blocks) {
    const N = blocks.length;
    const r = Array.from({ length: N }, () => Array(N).fill(0));
    for (let y = 0; y < N; y++)
      for (let x = 0; x < N; x++)
        r[N - 1 - x][y] = blocks[y][x];
    return r;
  },

  srsRotate(direction) {
    const p = this.current;
    if (!p || p.type === 'O') return;
    this.resetLock();
    const from = p.state;
    const to = direction === 1
      ? (from + 1) % 4
      : (from + 3) % 4;
    const rotated = direction === 1
      ? this.rotateCW(p.blocks)
      : this.rotateCCW(p.blocks);
    const kicks = getSRSKicks(p.type, from, to);
    for (const [dx, dy] of kicks) {
      if (this.collidesAt(rotated, p.x + dx, p.y + dy)) continue;
      p.blocks = rotated;
      p.x += dx;
      p.y += dy;
      p.state = to;
      this.invalidateGhost();
      this.tryLock();
      return;
    }
  },

  // -- Collision --

  collidesAt(b, x, y) {
    for (let by = 0; by < b.length; by++)
      for (let bx = 0; bx < b[by].length; bx++)
        if (b[by][bx]) {
          const nx = x + bx;
          const ny = y + by;
          if (nx < 0 || nx >= COLS || ny >= ROWS) return true;
          if (ny >= 0 && this.grid[ny][nx]) return true;
        }
    return false;
  },

  // -- Movement --

  drop() {
    this.tryLock();
    let moved = false;
    if (!this.collidesAt(this.current.blocks, this.current.x, this.current.y + 1)) {
      this.current.y++;
      this.invalidateGhost();
      this.resetLock();
      moved = true;
    }
    this.dropCounter = 0;
    return moved;
  },

  softDrop() {
    if (this.drop()) this.score += 1;
  },

  hardDrop() {
    while (!this.collidesAt(this.current.blocks, this.current.x, this.current.y + 1)) {
      this.current.y++;
      this.score += 2;
    }
    this.invalidateGhost();
    this.resetLock();
    vibrate(15);
    this.lock();
  },

  hold() {
    if (!this.current || this.holdUsed) return;
    const heldBlocks = this.current.blocks;
    const heldX = this.current.x;
    const heldY = this.current.y;
    const heldColor = this.current.color;
    const currentType = this.current.type;
    this.resetLock();
    this.stopDAS();
    this.clearSoftDrop();
    if (this.heldPiece === null) {
      this.heldPiece = currentType;
      this.current = this.next;
      this.next = this.randomPiece();
    } else {
      const swapType = this.heldPiece;
      this.heldPiece = currentType;
      this.current = this.randomPiece(swapType);
    }
    this.holdUsed = true;
    this.invalidateGhost();
    this.dropCounter = 0;
    HoldTransition.trigger(heldBlocks, heldX, heldY, heldColor);
    if (this.collidesAt(this.current.blocks, this.current.x, this.current.y)) {
      this.endGame();
    }
  },

  move(dir) {
    if (this.collidesAt(this.current.blocks, this.current.x + dir, this.current.y)) return;
    this.current.x += dir;
    this.invalidateGhost();
    this.resetLock();
    this.tryLock();
  },



  // -- Locking --

  tryLock() {
    if (this.lockTimer || !this.current) return;
    if (this.collidesAt(this.current.blocks, this.current.x, this.current.y + 1)) {
      this.lockTimer = setTimeout(() => {
        this.lockTimer = null;
        if (this.isPlayable()) this.lock();
      }, LOCK_DELAY);
    }
  },

  resetLock() {
    if (this.lockTimer) { clearTimeout(this.lockTimer); this.lockTimer = null; }
  },

  lock() {
    this.resetLock();
    for (let y = 0; y < this.current.blocks.length; y++)
      for (let x = 0; x < this.current.blocks[y].length; x++)
        if (this.current.blocks[y][x]) {
          const ny = this.current.y + y;
          if (ny < 0) { this.endGame(); return; }
          this.grid[ny][this.current.x + x] = this.current.color;
        }
    this.clearLines();
    this.holdUsed = false;
    this.current = this.next;
    this.next = this.randomPiece();
    this.dropCounter = 0;
    this.invalidateGhost();
    // Suppress initial drop tick when soft-drop was held across lock
    if (this.softDropActive) this.suppressSoftDrop = true;
    if (this.collidesAt(this.current.blocks, this.current.x, this.current.y)) this.endGame();
  },

  // -- Scoring --

  clearLines() {
    let cleared = 0;
    const clearedRowData = [];
    for (let y = ROWS - 1; y >= 0; y--) {
      if (this.grid[y].every(c => c !== 0)) {
        clearedRowData.push({ y: y, colors: [...this.grid[y]] });
        this.grid.splice(y, 1);
        this.grid.unshift(Array(COLS).fill(0));
        cleared++;
        y++;
      }
    }
    if (cleared > 0) {
      Particles.burst(clearedRowData, cleared);
      if (cleared === 4) Shake.trigger();
      this.score += LINE_SCORES[cleared] * this.level;
      this.lines += cleared;
      this.level = Math.floor(this.lines / 10) + 1;
      this.dropInterval = Math.max(50, 1000 - (this.level - 1) * 80);
      vibrate(cleared * 15);
    }
  },

  // -- Game flow --

  endGame() {
    this.gameOver = true;
  },

  computeGhostY() {
    if (!this._ghostDirty) return this._ghostY;
    this._ghostDirty = false;
    if (!this.current) { this._ghostY = 0; return 0; }
    let y = this.current.y;
    while (!this.collidesAt(this.current.blocks, this.current.x, y + 1)) y++;
    this._ghostY = y;
    return y;
  },

  invalidateGhost() {
    this._ghostDirty = true;
  },

  // -- DAS / ARR --

  startDAS(dir) {
    if (this.dasDir === dir) return;
    this.stopDAS();
    this.dasDir = dir;
    this.move(dir);
    this.dasTimer = setTimeout(() => {
      this.arrTimer = setInterval(() => {
        if (this.isPlayable()) this.move(dir);
      }, ARR_RATE);
    }, DAS_DELAY);
  },

  stopDAS() {
    if (this.dasTimer) clearTimeout(this.dasTimer);
    if (this.arrTimer) clearInterval(this.arrTimer);
    this.dasTimer = null;
    this.arrTimer = null;
    this.dasDir = 0;
  },

  // -- Lifecycle --

  resetGame() {
    this.stopDAS();
    this.resetLock();
    this.grid = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
    this.score = 0; this.level = 1; this.lines = 0;
    this.paused = false; this.gameOver = false;
    this.dropInterval = 1000;
    this.dropCounter = 0;
    this.bag = [];
    this.heldPiece = null;
    this.holdUsed = false;
    this._ghostY = 0;
    this._ghostDirty = true;
    this.current = this.randomPiece();
    this.next = this.randomPiece();
    this.clearSoftDrop();
    Particles.reset();
    Shake.reset();
    HoldTransition.reset();
  },

  setPaused(v) {
    this.paused = v;
  },

  tick(dt) {
    if (this.isRunning()) {
      if (this.suppressSoftDrop) this.suppressSoftDrop = false;
      this.dropCounter += dt;
      if (this.dropCounter > this.dropInterval) this.drop();
    }
  },
};

// --- Particles ---

const Particles = {
  particles: [],
  flashes: [],

  burst(clearedRowData, clearedCount) {
    const cfg = [
      null,
      { count: 4,  speed: 0.004, life: 350, size: 0.12 },
      { count: 7,  speed: 0.006, life: 400, size: 0.15 },
      { count: 10, speed: 0.008, life: 450, size: 0.18 },
      { count: 14, speed: 0.010, life: 500, size: 0.22 },
    ][Math.min(clearedCount, 4)];

    for (const row of clearedRowData) {
      for (let x = 0; x < COLS; x++) {
        const colorId = row.colors[x];
        if (colorId === 0) continue;
        const color = COLORS[colorId];
        for (let i = 0; i < cfg.count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const v = cfg.speed * (0.5 + Math.random() * 0.5);
          this.particles.push({
            x: x + 0.5,
            y: row.y + 0.5,
            vx: Math.cos(angle) * v,
            vy: Math.sin(angle) * v,
            color: color,
            size: cfg.size + Math.random() * 0.05,
            alpha: 1,
            life: cfg.life,
            maxLife: cfg.life,
          });
        }
      }
      if (clearedCount >= 2) {
        const flashLife = 80 + clearedCount * 20;
        this.flashes.push({
          y: row.y,
          life: flashLife,
          maxLife: flashLife,
          intensity: 0.12 + clearedCount * 0.04,
        });
      }
    }
  },

  update(dt) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= dt;
      if (p.life <= 0) { this.particles.splice(i, 1); continue; }
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.alpha = p.life / p.maxLife;
    }
    for (let i = this.flashes.length - 1; i >= 0; i--) {
      const f = this.flashes[i];
      f.life -= dt;
      if (f.life <= 0) this.flashes.splice(i, 1);
    }
  },

  draw(ctx, BLOCK) {
    ctx.save();
    for (const f of this.flashes) {
      const a = (f.life / f.maxLife) * f.intensity;
      ctx.fillStyle = `rgba(255,255,255,${a})`;
      ctx.fillRect(0, f.y * BLOCK, COLS * BLOCK, BLOCK);
    }
    for (const p of this.particles) {
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      const s = p.size * BLOCK;
      ctx.fillRect(p.x * BLOCK - s / 2, p.y * BLOCK - s / 2, s, s);
    }
    ctx.restore();
  },

  reset() {
    this.particles = [];
    this.flashes = [];
  },
};

// --- Shake ---

const Shake = {
  intensity: 0,
  timer: 0,
  maxTimer: 0,
  _ox: 0,
  _oy: 0,

  trigger(intensity = 4, duration = 300) {
    this.intensity = intensity;
    this.timer = duration;
    this.maxTimer = duration;
  },

  update(dt) {
    if (this.timer > 0) {
      this.timer -= dt;
      if (this.timer < 0) this.timer = 0;
    }
    if (this.timer <= 0) {
      this._ox = 0;
      this._oy = 0;
    } else {
      const decay = this.timer / this.maxTimer;
      const mag = this.intensity * decay;
      this._ox = (Math.random() * 2 - 1) * mag;
      this._oy = (Math.random() * 2 - 1) * mag;
    }
  },

  offset() {
    return { x: this._ox, y: this._oy };
  },

  reset() {
    this.intensity = 0;
    this.timer = 0;
    this.maxTimer = 0;
    this._ox = 0;
    this._oy = 0;
  },
};

// --- HoldTransition ---

const HoldTransition = {
  fadeOut: { active: false, blocks: null, x: 0, y: 0, color: null, alpha: 1 },
  fadeIn: { active: false, alpha: 0 },
  duration: 300,
  get fadeInAlpha() { return this.fadeIn.active ? this.fadeIn.alpha : 1; },

  trigger(blocks, x, y, color) {
    this.fadeOut = { active: true, blocks: blocks.map(r => [...r]), x, y, color, alpha: 1 };
    this.fadeIn = { active: true, alpha: 0 };
  },

  update(dt) {
    const speed = dt / this.duration;
    if (this.fadeOut.active) {
      this.fadeOut.alpha -= speed;
      if (this.fadeOut.alpha <= 0) {
        this.fadeOut.active = false;
        this.fadeOut.alpha = 1;
        this.fadeOut.blocks = null;
      }
    }
    if (this.fadeIn.active) {
      this.fadeIn.alpha += speed;
      if (this.fadeIn.alpha >= 1) {
        this.fadeIn.alpha = 1;
        this.fadeIn.active = false;
      }
    }
  },

  reset() {
    this.fadeOut = { active: false, blocks: null, x: 0, y: 0, color: null, alpha: 1 };
    this.fadeIn = { active: false, alpha: 0 };
  },
};

// --- Confirm factory ---

// Two-step confirm guard: request once, confirm or cancel.
function createTwoStepConfirm({ confirmKey, applyVisual, revertVisual, onConfirm }) {
  let btn = null;
  let className = '';

  return {
    isPending(candidate) { return btn === candidate; },

    request(candidate) {
      this.cancel();
      btn = candidate;
      className = candidate.className;
      candidate.textContent = I18N.t(confirmKey);
      if (applyVisual) applyVisual(candidate);
      Shake.trigger(16);
    },

    confirm() {
      this.cancel();
      onConfirm();
    },

    cancel() {
      if (!btn) return;
      const key = btn.dataset.i18n;
      if (key) btn.textContent = I18N.t(key);
      if (revertVisual) revertVisual(btn, className);
      else btn.className = className;
      btn = null;
      className = '';
    },
  };
}

const RestartConfirm = createTwoStepConfirm({
  confirmKey: 'confirmRestart',
  applyVisual: (btn) => btn.classList.remove('secondary'),
  onConfirm: () => Lifecycle.resetGame(),
});

const ClearConfirm = createTwoStepConfirm({
  confirmKey: 'confirmClear',
  applyVisual: (btn) => btn.classList.add('confirming'),
  revertVisual: (btn) => btn.classList.remove('confirming'),
  onConfirm: () => {
    Scores.clear();
    view.renderRanking();
    Lifecycle.rerenderGameOver();
  },
});

// --- Rendering ---

const Render = {
  // -- Primitives --

  drawBlock(context, x, y, colorId, size, ox = 0, oy = 0) {
    const px = x * size + ox, py = y * size + oy;
    const mono = Settings.blackWhiteEnabled;
    const fill = mono ? '#ffffff' : COLORS[colorId];
    const lightEdge = mono ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.25)';
    const darkEdge = mono ? 'rgba(0,0,0,0.45)' : 'rgba(0,0,0,0.25)';
    const stroke = mono ? '#000000' : '#222';

    context.fillStyle = fill;
    context.fillRect(px, py, size, size);
    context.fillStyle = lightEdge;
    context.fillRect(px, py, size, 2);
    context.fillRect(px, py, 2, size);
    context.fillStyle = darkEdge;
    context.fillRect(px + size - 2, py, 2, size);
    context.fillRect(px, py + size - 2, size, 2);
    context.strokeStyle = stroke;
    context.lineWidth = 1;
    context.strokeRect(px, py, size, size);
  },

  renderBlocks(ctx, blocks, ox, oy, color, size, px = 0, py = 0) {
    const colorAt = typeof color === 'function' ? color : () => color;
    for (let y = 0; y < blocks.length; y++)
      for (let x = 0; x < blocks[y].length; x++)
        if (blocks[y][x]) this.drawBlock(ctx, ox + x, oy + y, colorAt(x, y), size, px, py);
  },

  drawEdge(ctx, x1, y1, x2, y2) {
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
  },

  // -- Pipeline --

  draw() {
    const ctx = view.ctx;
    const nextCtx = view.nextCtx;
    const BLOCK = view.BLOCK;
    this.clearCanvas(ctx);
    if (Settings.gridEnabled) this.drawGrid(ctx, BLOCK);
    this.drawBoard(ctx, BLOCK);
    this.drawPiece(ctx, BLOCK);
    if (Settings.ghostEnabled && Game.current) this.drawGhost(ctx, BLOCK);
    if (HoldTransition.fadeOut.active) this.drawFadeOut(ctx, BLOCK);
    this.drawNext(nextCtx);
    this.drawHold(view.holdCtx);
    if (getComputedStyle(view._holdBtnCanvas.parentElement).display !== 'none') {
      this.drawHoldBtn(view.holdBtnCtx);
    }
    Particles.draw(ctx, BLOCK);
  },

  drawFadeOut(ctx, BLOCK) {
    const fo = HoldTransition.fadeOut;
    ctx.save();
    ctx.globalAlpha = fo.alpha;
    this.renderBlocks(ctx, fo.blocks, fo.x, fo.y, fo.color, BLOCK);
    ctx.restore();
  },

  drawHoldBtn(holdBtnCtx) {
    const holdType = Game.heldPiece;
    const canvas = view._holdBtnCanvas;
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio;
    const W = rect.width;
    const H = rect.height;
    if (canvas.width !== Math.floor(W * ratio) || canvas.height !== Math.floor(H * ratio)) {
      canvas.width = Math.floor(W * ratio);
      canvas.height = Math.floor(H * ratio);
      holdBtnCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }
    holdBtnCtx.clearRect(0, 0, W, H);
    if (!holdType) return;
    const s = SHAPES[holdType];
    const bs = Math.min(Math.floor(W / 5), Math.floor(H / 5));
    const trimmed = this._trimBlocks(s.blocks);
    const tw = trimmed[0].length;
    const th = trimmed.length;
    const cx = Math.floor((W - tw * bs) / 2);
    const cy = Math.floor((H - th * bs) / 2);
    holdBtnCtx.save();
    holdBtnCtx.globalAlpha = HoldTransition.fadeInAlpha;
    this.renderBlocks(holdBtnCtx, trimmed, 0, 0, s.id, bs, cx, cy);
    holdBtnCtx.restore();
  },

  clearCanvas(ctx) {
    const VIEW_W = view.VIEW_W;
    const VIEW_H = view.VIEW_H;
    ctx.fillStyle = '#0f0f23';
    ctx.fillRect(-4, -4, VIEW_W + 8, VIEW_H + 8);
  },

  drawGrid(ctx, BLOCK) {
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 1; x < COLS; x++) {
      ctx.moveTo(x * BLOCK, 0);
      ctx.lineTo(x * BLOCK, ROWS * BLOCK);
    }
    for (let y = 1; y < ROWS; y++) {
      ctx.moveTo(0, y * BLOCK);
      ctx.lineTo(COLS * BLOCK, y * BLOCK);
    }
    ctx.stroke();
    ctx.restore();
  },

  drawBoard(ctx, BLOCK) {
    this.renderBlocks(ctx, Game.grid, 0, 0, (x, y) => Game.grid[y][x], BLOCK);
  },

  drawPiece(ctx, BLOCK) {
    if (!Game.current) return;
    this.renderBlocks(ctx, Game.current.blocks, Game.current.x, Game.current.y, Game.current.color, BLOCK);
  },

  drawGhost(ctx, BLOCK) {
    const ghostY = Game.computeGhostY();
    ctx.globalAlpha = 0.1;
    this.renderBlocks(ctx, Game.current.blocks, Game.current.x, ghostY, Game.current.color, BLOCK);
    ctx.globalAlpha = 1;
    this.drawGhostOutline(ctx, ghostY, BLOCK);
  },

  drawGhostOutline(ctx, ghostY, BLOCK) {
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.lineWidth = Math.max(1.2, BLOCK / 16);
    ctx.setLineDash([BLOCK * 0.2, BLOCK * 0.15]);
    for (let y = 0; y < Game.current.blocks.length; y++) {
      for (let x = 0; x < Game.current.blocks[y].length; x++) {
        if (!Game.current.blocks[y][x]) continue;
        const px = (Game.current.x + x) * BLOCK;
        const py = (ghostY + y) * BLOCK;
        const noTop   = y === 0 || !Game.current.blocks[y - 1][x];
        const noBot   = y === Game.current.blocks.length - 1 || !Game.current.blocks[y + 1][x];
        const noLeft  = x === 0 || !Game.current.blocks[y][x - 1];
        const noRight = x === Game.current.blocks[y].length - 1 || !Game.current.blocks[y][x + 1];
        if (noTop)    this.drawEdge(ctx, px, py, px + BLOCK, py);
        if (noBot)    this.drawEdge(ctx, px, py + BLOCK, px + BLOCK, py + BLOCK);
        if (noLeft)   this.drawEdge(ctx, px, py, px, py + BLOCK);
        if (noRight)  this.drawEdge(ctx, px + BLOCK, py, px + BLOCK, py + BLOCK);
      }
    }
    ctx.restore();
  },

  _trimBlocks(blocks) {
    let top = blocks.length, bot = 0, left = blocks[0].length, right = 0;
    for (let y = 0; y < blocks.length; y++)
      for (let x = 0; x < blocks[y].length; x++)
        if (blocks[y][x]) { top = Math.min(top, y); bot = Math.max(bot, y); left = Math.min(left, x); right = Math.max(right, x); }
    const w = right - left + 1;
    const trimmed = [];
    for (let y = top; y <= bot; y++) trimmed.push(blocks[y].slice(left, left + w));
    return trimmed;
  },

  _nextCache: null,
  _nextSize: { w: 0, h: 0 },
  _holdCache: null,
  _holdSize: { w: 0, h: 0 },

  drawNext(nextCtx) {
    const NEXT_W = view.NEXT_W;
    const NEXT_H = view.NEXT_H;
    const nextType = Game.next?.type;
    if (this._nextCache === nextType && this._nextSize.w === NEXT_W && this._nextSize.h === NEXT_H) return;
    this._nextCache = nextType;
    this._nextSize = { w: NEXT_W, h: NEXT_H };
    nextCtx.fillStyle = '#16213e';
    nextCtx.fillRect(0, 0, NEXT_W, NEXT_H);
    if (Game.next) {
      const bs = NEXT_W >= 100 ? 22 : 14;
      const trimmed = this._trimBlocks(Game.next.blocks);
      const cx = 0;
      const cy = trimmed.length === 1 ? bs : 0;
      this.renderBlocks(nextCtx, trimmed, 0, 0, Game.next.color, bs, cx, cy);
    }
  },

  drawHold(holdCtx) {
    const NEXT_W = view.NEXT_W;
    const NEXT_H = view.NEXT_H;
    const holdType = Game.heldPiece;
    if (this._holdCache === holdType && this._holdSize.w === NEXT_W && this._holdSize.h === NEXT_H && !HoldTransition.fadeIn.active) return;
    this._holdCache = holdType;
    this._holdSize = { w: NEXT_W, h: NEXT_H };
    holdCtx.fillStyle = '#16213e';
    holdCtx.fillRect(0, 0, NEXT_W, NEXT_H);
    if (holdType) {
      const s = SHAPES[holdType];
      const bs = NEXT_W >= 100 ? 22 : 14;
      const trimmed = this._trimBlocks(s.blocks);
      const cx = 0;
      const cy = trimmed.length === 1 ? bs : 0;
      holdCtx.save();
      holdCtx.globalAlpha = HoldTransition.fadeInAlpha;
      this.renderBlocks(holdCtx, trimmed, 0, 0, s.id, bs, cx, cy);
      holdCtx.restore();
    }
  },
};

// --- View ---

const view = {
  _canvas: null, _ctx: null,
  _nextCanvas: null, _nextCtx: null,
  _holdCanvas: null, _holdCtx: null,
  _holdBtnCanvas: null, _holdBtnCtx: null,
  _pauseBtn: null, _settingsBtn: null, _menu: null,
  _ghostToggle: null, _ghostIndicator: null,
  _sevenBagToggle: null, _sevenBagIndicator: null,
  _blackWhiteToggle: null, _blackWhiteIndicator: null,
  _gridToggle: null, _gridIndicator: null,
  _langToggle: null, _langSubmenu: null,
  _langOptions: null,
  _overlayPause: null, _overlayOver: null,
  _stats: {},
  _actionBtns: null,
  _gameArea: null,

  _rankingSubmenu: null,
  _rankingToggle: null,
  BLOCK: 30, VIEW_W: 0, VIEW_H: 0, NEXT_W: 0, NEXT_H: 0,
  _statsCache: {},

  init() {
    this.initRefs();
    this.initLangOptions();
  },

  // -- DOM refs --

  initRefs() {
    // Canvases
    this._canvas = document.getElementById('board');
    this._ctx = this._canvas.getContext('2d');
    this._nextCanvas = document.getElementById('next-canvas');
    this._nextCtx = this._nextCanvas.getContext('2d');
    this._holdCanvas = document.getElementById('hold-canvas');
    this._holdCtx = this._holdCanvas.getContext('2d');
    this._holdBtnCanvas = document.getElementById('hold-btn-canvas');
    this._holdBtnCtx = this._holdBtnCanvas.getContext('2d');
    // Layout
    this._gameArea = document.querySelector('.game-area');
    // Controls
    this._pauseBtn = document.getElementById('pause-btn');
    this._settingsBtn = document.getElementById('settings-btn');
    this._menu = document.getElementById('settings-menu');
    this._actionBtns = document.querySelectorAll('[data-action]');
    // Settings toggles
    this._ghostToggle = document.getElementById('ghost-toggle');
    this._ghostIndicator = document.getElementById('ghost-indicator');
    this._sevenBagToggle = document.getElementById('sevenbag-toggle');
    this._sevenBagIndicator = document.getElementById('sevenbag-indicator');
    this._blackWhiteToggle = document.getElementById('blackwhite-toggle');
    this._blackWhiteIndicator = document.getElementById('blackwhite-indicator');
    this._gridToggle = document.getElementById('grid-toggle');
    this._gridIndicator = document.getElementById('grid-indicator');
    // Language
    this._langToggle = document.getElementById('lang-toggle');
    this._langSubmenu = document.getElementById('lang-submenu');
    // Ranking
    this._rankingToggle = document.getElementById('ranking-toggle');
    this._rankingSubmenu = document.getElementById('ranking-submenu');
    // Overlays
    this._overlayPause = document.getElementById('overlay-pause');
    this._overlayOver = document.getElementById('overlay-over');
    // Stats
    this._stats = {
      score: document.getElementById('score'),
      level: document.getElementById('level'),
      lines: document.getElementById('lines')
    };
    // Game over
    this._overMsg = document.getElementById('over-msg');
    this._overSoClose = document.getElementById('over-msg-soclose');
    this._overYouCan = document.getElementById('over-msg-youcan');
    this._overYourScore = document.getElementById('over-yourscore');
    this._overYourVal = document.getElementById('over-your');
    this._overBest = document.getElementById('over-bestline');
    this._overBestVal = document.getElementById('over-bestline-val');
    this._overPrevBest = document.getElementById('over-prevbest');
    this._overPrevVal = document.getElementById('over-prev');
  },

  // -- UI construction --

  initLangOptions() {
    this._langSubmenu.innerHTML = '';
    I18N.langs.forEach(lang => {
      const btn = document.createElement('button');
      btn.className = 'lang-option';
      btn.type = 'button';
      btn.setAttribute('role', 'menuitemradio');
      btn.dataset.lang = lang;
      btn.setAttribute('aria-checked', 'false');
      const indicator = document.createElement('span');
      indicator.className = 'indicator';
      const name = document.createElement('span');
      name.textContent = I18N.names[lang];
      btn.appendChild(indicator);
      btn.appendChild(name);
      this._langSubmenu.appendChild(btn);
    });
    this._langOptions = this._langSubmenu.querySelectorAll('.lang-option');
  },

  // -- Getters --

  get ctx()        { return this._ctx; },
  get nextCtx()    { return this._nextCtx; },
  get holdCtx()    { return this._holdCtx; },
  get holdBtnCtx() { return this._holdBtnCtx; },
  get actionBtns() { return this._actionBtns; },
  get langOptions() { return this._langOptions; },

  // -- Stats --

  setStat(k, v)    { this._stats[k].textContent = v; },
  setStats() {
    const stats = { score: Game.score, level: Game.level, lines: Game.lines };
    for (const k in stats) {
      if (this._statsCache[k] !== stats[k]) {
        this._statsCache[k] = stats[k];
        this.setStat(k, stats[k]);
      }
    }
  },

  // -- Shake --

  _shakeX: 0,
  _shakeY: 0,

  applyShake(x, y) {
    if (this._shakeX === x && this._shakeY === y) return;
    this._shakeX = x;
    this._shakeY = y;
    this._gameArea.style.transform = (x || y) ? `translate(${x}px, ${y}px)` : '';
  },

  // -- Overlays --

  showOverlay(name) {
    this._overlayPause.classList.add('hidden');
    this._overlayOver.classList.add('hidden');
    if (name === 'pause') this._overlayPause.classList.remove('hidden');
    else if (name === 'over') this._overlayOver.classList.remove('hidden');
  },

  renderGameOver(state, score, prevBest) {
    const hide = el => el.classList.add('hidden');
    const show = el => el.classList.remove('hidden');
    hide(this._overMsg); hide(this._overSoClose); hide(this._overYouCan);
    hide(this._overYourScore); hide(this._overBest); hide(this._overPrevBest);
    if (state === 'newBest') {
      this._overBestVal.textContent = score;
      show(this._overBest);
      if (prevBest !== null) {
        this._overPrevVal.textContent = prevBest;
        show(this._overPrevBest);
      }
    } else if (state === 'tiedBest') {
      show(this._overMsg); show(this._overSoClose);
      this._overYourVal.textContent = score; show(this._overYourScore);
      this._overBestVal.textContent = prevBest; show(this._overBest);
    } else if (state === 'notBest') {
      show(this._overMsg); show(this._overYouCan);
      this._overYourVal.textContent = score; show(this._overYourScore);
      this._overBestVal.textContent = prevBest; show(this._overBest);
    } else { // noBest
      this._overYourVal.textContent = score; show(this._overYourScore);
    }
  },

  // -- Pause button --

  setPauseBtnVisible(v) { this._pauseBtn.classList.toggle('hidden', !v); },
  setPauseAriaLabel(paused) { this._pauseBtn.setAttribute('aria-label', I18N.t(paused ? 'resumeLabel' : 'pause')); },

  // -- Settings menu --

  setSettingsMenuOpen(open) {
    this._menu.classList.toggle('open', open);
    this._settingsBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  },
  isSettingsMenuOpen() { return this._menu.classList.contains('open'); },
  closeAllSubmenus() {
    this.closeLangSubmenu();
    this.closeRankingSubmenu();
  },

  closeSettingsMenu() {
    this.closeAllSubmenus();
    if (!this.isSettingsMenuOpen()) return;
    this.setSettingsMenuOpen(false);
    this.blurMenuFocus();
  },
  blurMenuFocus() {
    const active = document.activeElement;
    if (active && (this._settingsBtn.contains(active) || this._menu.contains(active))) {
      active.blur();
    }
  },
  focusGhostToggle()   { this._ghostToggle.focus(); },
  focusLangToggle()      { this._langToggle.focus(); },

  // -- Language submenu --

  setLangSubmenuOpen(open) {
    this._langSubmenu.classList.toggle('open', open);
    this._langToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  },
  isLangSubmenuOpen() { return this._langSubmenu.classList.contains('open'); },
  closeLangSubmenu() {
    if (!this.isLangSubmenuOpen()) return;
    this.setLangSubmenuOpen(false);
    this.focusLangToggle();
  },
  setActiveLangOption(lang) {
    this._langOptions.forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-checked', active ? 'true' : 'false');
    });
  },
  updateLangToggleLabel() {
    const name = I18N.names[I18N.current];
    const label = I18N.t('langLabel');
    this._langToggle.querySelector('.label').textContent = `${label}: ${name}`;
  },

  // -- Ranking submenu --

  setRankingSubmenuOpen(open) {
    this._rankingSubmenu.classList.toggle('open', open);
    this._rankingToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  },
  isRankingSubmenuOpen() { return this._rankingSubmenu.classList.contains('open'); },
  closeRankingSubmenu() {
    if (!this.isRankingSubmenuOpen()) return;
    ClearConfirm.cancel();
    this.setRankingSubmenuOpen(false);
    this._rankingToggle.focus();
  },

  renderRanking() {
    const sub = this._rankingSubmenu;
    sub.innerHTML = '';
    const scores = Scores.all();
    const list = document.createElement('div');
    list.className = 'ranking-list custom-scroll';
    if (!scores.length) {
      const empty = document.createElement('div');
      empty.className = 'ranking-empty';
      empty.textContent = I18N.t('noRecords');
      list.appendChild(empty);
      sub.appendChild(list);
      return;
    }
    scores.forEach((s, i) => {
      const row = document.createElement('div');
      row.className = 'ranking-row';
      if (s === Scores.lastRecorded) row.classList.add('highlight');
      const rank = document.createElement('span');
      rank.className = 'rank';
      rank.textContent = `${i + 1}.`;
      const val = document.createElement('span');
      val.className = 'score';
      val.textContent = s;
      row.appendChild(rank);
      row.appendChild(val);
      list.appendChild(row);
    });
    sub.appendChild(list);
    list.scrollTop = 0;
    const clear = document.createElement('button');
    clear.type = 'button';
    clear.className = 'ranking-clear';
    clear.dataset.i18n = 'clear';
    clear.textContent = I18N.t('clear');
    clear.addEventListener('click', () => {
      if (ClearConfirm.isPending(clear)) ClearConfirm.confirm();
      else ClearConfirm.request(clear);
    });
    sub.appendChild(clear);
  },

  // -- Indicators --

  _setIndicator(indicatorEl, toggleEl, on) {
    indicatorEl.classList.toggle('on', on);
    toggleEl.setAttribute('aria-checked', on ? 'true' : 'false');
  },

  setGhostIndicator(on)    { this._setIndicator(this._ghostIndicator,   this._ghostToggle,   on); },
  setSevenBagIndicator(on) { this._setIndicator(this._sevenBagIndicator, this._sevenBagToggle, on); },
  setBlackWhiteIndicator(on) { this._setIndicator(this._blackWhiteIndicator, this._blackWhiteToggle, on); },
  setGridIndicator(on) { this._setIndicator(this._gridIndicator, this._gridToggle, on); },

  // -- Body state --

  setBodyState(paused, gameOver) {
    document.body.classList.toggle('paused', paused);
    document.body.classList.toggle('game-over', gameOver);
  },

  // -- Resize --

  resize() {
    const ratio = window.devicePixelRatio;
    // Clear inline styles so CSS can apply correct size for current viewport
    this._canvas.style.width = '';
    this._canvas.style.height = '';
    const rect = this._canvas.getBoundingClientRect();
    this.BLOCK = clamp(Math.floor(Math.min(rect.width / COLS, rect.height / ROWS)), 15, 99);
    this.VIEW_W = this.BLOCK * COLS;
    this.VIEW_H = this.BLOCK * ROWS;
    this._canvas.style.width = `${this.VIEW_W}px`;
    this._canvas.style.height = `${this.VIEW_H}px`;
    // Read actual size after CSS constraints (max-height, etc) are applied
    const finalRect = this._canvas.getBoundingClientRect();
    this._canvas.width  = Math.floor(finalRect.width * ratio);
    this._canvas.height = Math.floor(finalRect.height * ratio);
    this._ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const nextRect = this._nextCanvas.getBoundingClientRect();
    this._nextCanvas.width  = Math.floor(nextRect.width * ratio);
    this._nextCanvas.height = Math.floor(nextRect.height * ratio);
    this._nextCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const holdRect = this._holdCanvas.getBoundingClientRect();
    this._holdCanvas.width  = Math.floor(holdRect.width * ratio);
    this._holdCanvas.height = Math.floor(holdRect.height * ratio);
    this._holdCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const holdBtnRect = this._holdBtnCanvas.getBoundingClientRect();
    this._holdBtnCanvas.width  = Math.floor(holdBtnRect.width * ratio);
    this._holdBtnCanvas.height = Math.floor(holdBtnRect.height * ratio);
    this._holdBtnCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
    this.NEXT_W = nextRect.width;
    this.NEXT_H = nextRect.height;
    Render._nextCache = null;
    Render._holdCache = null;
  },
};

// --- Settings ---

const Settings = {
  ghostEnabled: true,
  sevenBagEnabled: true,
  blackWhiteEnabled: false,
  gridEnabled: true,

  _load(key, def) {
    try {
      const raw = localStorage.getItem(key);
      if (raw === 'true') return true;
      if (raw === 'false') return false;
    } catch (_) {}
    return def;
  },

  _save(key, val) {
    try { localStorage.setItem(key, val ? 'true' : 'false'); } catch (_) {}
  },

  init() {
    this.ghostEnabled = this._load(GHOST_STORAGE_KEY, this.ghostEnabled);
    this.sevenBagEnabled = this._load(SEVENBAG_STORAGE_KEY, this.sevenBagEnabled);
    this.blackWhiteEnabled = this._load(BLACKWHITE_STORAGE_KEY, this.blackWhiteEnabled);
    this.gridEnabled = this._load(GRID_STORAGE_KEY, this.gridEnabled);
  },

  _toggle(field, storageKey) {
    this[field] = !this[field];
    this._save(storageKey, this[field]);
  },

  toggleGhost()    { this._toggle('ghostEnabled',    GHOST_STORAGE_KEY); },
  toggleSevenBag() { this._toggle('sevenBagEnabled', SEVENBAG_STORAGE_KEY); },
  toggleBlackWhite() { this._toggle('blackWhiteEnabled', BLACKWHITE_STORAGE_KEY); },
  toggleGrid() { this._toggle('gridEnabled', GRID_STORAGE_KEY); },
};

// --- Scores ---

const Scores = {
  KEY: 'tetris.scores.best',
  MAX: 20,
  _scores: [],
  lastRecorded: null,

  load() {
    try {
      const raw = JSON.parse(localStorage.getItem(this.KEY));
      this._scores = Array.isArray(raw)
        ? raw.filter(n => Number.isInteger(n) && n > 0)
            .filter((n, i, a) => a.indexOf(n) === i)
            .sort((a, b) => b - a)
            .slice(0, this.MAX)
        : [];
    } catch (_) { this._scores = []; }
  },

  all()       { return [...this._scores]; },
  best()      { return this._scores[0] ?? null; },
  contains(s) { return this._scores.includes(s); },

  clear() {
    this._scores = [];
    try { localStorage.removeItem(this.KEY); } catch (_) {}
    this.lastRecorded = null;
  },

  record(score) {
    if (!Number.isInteger(score) || score <= 0) return false;
    if (this.contains(score)) return false;
    if (this._scores.length >= this.MAX && score <= this._scores[this.MAX - 1]) return false;
    this._scores.push(score);
    this._scores.sort((a, b) => b - a);
    this._scores = this._scores.slice(0, this.MAX);
    this._save();
    this.lastRecorded = score;
    return true;
  },

  _save() {
    try { localStorage.setItem(this.KEY, JSON.stringify(this._scores)); } catch (_) {}
  },
};

// --- Input ---

const Input = {
  init() {
    this._bindKeyboard();
    this._bindMobile();
    this._bindSettings();
    this._bindOutsideClick();
    this._bindVisibility();
  },

  // -- Outside click --

  _bindOutsideClick() {
    document.addEventListener('click', e => {
      this._closeSubmenuOnOutsideClick(
        e, view._rankingSubmenu, view._rankingToggle,
        view.isRankingSubmenuOpen.bind(view),
        view.closeRankingSubmenu.bind(view)
      );
      this._closeSubmenuOnOutsideClick(
        e, view._langSubmenu, view._langToggle,
        view.isLangSubmenuOpen.bind(view),
        view.closeLangSubmenu.bind(view)
      );
      if (view.isSettingsMenuOpen() &&
          !view._menu.contains(e.target) &&
          !view._settingsBtn.contains(e.target)) {
        view.closeSettingsMenu();
      }
    });
  },

  _closeSubmenuOnOutsideClick(e, submenuEl, toggleEl, isOpenFn, closeFn) {
    if (!isOpenFn()) return;
    if (submenuEl.contains(e.target) || toggleEl.contains(e.target)) return;
    closeFn();
  },

  // -- Keyboard --

  _handleGameOverKey(key, menuOpen) {
    if (!menuOpen && (key === 'r' || key === 'enter')) {
      Lifecycle.resetGame();
    }
  },

  _handleMenuKey(key) {
    if (key !== 'escape') return;
    if (view.isRankingSubmenuOpen()) view.closeRankingSubmenu();
    else if (view.isLangSubmenuOpen()) view.closeLangSubmenu();
    else view.closeSettingsMenu();
  },

  _handleGameplayKey(key, e) {
    switch (key) {
      case 'arrowleft':  Game.startDAS(-1); e.preventDefault(); break;
      case 'arrowright': Game.startDAS(1);  e.preventDefault(); break;
      case 'arrowdown':
        Game.softDropActive = true;
        if (!Game.suppressSoftDrop) Game.softDrop();
        e.preventDefault();
        break;
      case 'arrowup':
      case 'x':
        Game.srsRotate(1);
        e.preventDefault();
        break;
      case 'z':
        Game.srsRotate(-1);
        e.preventDefault();
        break;
      case ' ':
      case 'enter':
        Game.hardDrop();
        e.preventDefault();
        break;
      case 'c':
        Game.hold();
        e.preventDefault();
        break;
    }
  },

  _bindKeyboard() {
    document.addEventListener('keydown', e => {
      const key = e.key.toLowerCase();
      const menuOpen = view.isSettingsMenuOpen();

      if (Game.gameOver) {
        this._handleGameOverKey(key, menuOpen);
        return;
      }

      if (menuOpen) {
        this._handleMenuKey(key);
        if (key === 'escape') e.preventDefault();
        return;
      }

      if (key === 'p' || key === 'escape') {
        Lifecycle.togglePause();
        e.preventDefault();
        return;
      }

      if (Game.paused) return;

      this._handleGameplayKey(key, e);
    });

    document.addEventListener('keyup', e => {
      if (e.key === 'ArrowDown') {
        Game.clearSoftDrop();
      } else if (e.key === 'ArrowLeft' && Game.dasDir === -1) {
        Game.stopDAS();
      } else if (e.key === 'ArrowRight' && Game.dasDir === 1) {
        Game.stopDAS();
      }
    });
  },

  // -- Mobile helpers --

  _bindHold(button, action, isSoft = false) {
    let t1 = null, t2 = null, pid = null;
    const start = e => {
      e.preventDefault();
      if (Game.paused || Game.gameOver) return;
      pid = e.pointerId;
      try { button.setPointerCapture(pid); } catch (_) {}
      if (isSoft) {
        Game.softDropActive = true;
        if (!Game.suppressSoftDrop) Game.softDrop();
      } else {
        action();
      }
      t1 = setTimeout(() => {
        t2 = setInterval(() => {
          if (!Game.isRunning()) return;
          if (isSoft && Game.suppressSoftDrop) return;
          action();
        }, ARR_RATE);
      }, DAS_DELAY);
    };
    const end = () => {
      if (t1) { clearTimeout(t1); t1 = null; }
      if (t2) { clearInterval(t2); t2 = null; }
      if (isSoft) Game.clearSoftDrop();
      pid = null;
    };
    button.addEventListener('pointerdown', start);
    button.addEventListener('pointerup', end);
    button.addEventListener('pointercancel', end);
    button.addEventListener('pointerleave', end);
    button.addEventListener('contextmenu', e => e.preventDefault());
  },

  _bindTap(button, action, requireRunning = true) {
    button.addEventListener('click', e => {
      e.preventDefault();
      if (requireRunning && (Game.paused || Game.gameOver)) return;
      action();
    });
    button.addEventListener('contextmenu', e => e.preventDefault());
  },

  // -- Mobile --

  _bindMobile() {
    const ACTIONS = {
      left:    () => Game.move(-1),
      right:   () => Game.move(1),
      soft:    () => Game.softDrop(),
      hard:    () => Game.hardDrop(),
      hold:    () => Game.hold(),
      rotate:  () => Game.srsRotate(1),
      pause:   () => {
        if (Game.gameOver) return;
        if (view.isSettingsMenuOpen()) {
          view.closeSettingsMenu();
          if (Game.paused) Lifecycle.setPaused(false);
          return;
        }
        Lifecycle.togglePause();
      },
      resume:  () => {
        if (Game.gameOver) return;
        view.closeSettingsMenu();
        Lifecycle.setPaused(false);
      },
      restart: (btn) => {
        view.closeSettingsMenu();
        if (btn.hasAttribute('data-confirm-restart')) {
          if (RestartConfirm.isPending(btn)) RestartConfirm.confirm();
          else RestartConfirm.request(btn);
        } else {
          RestartConfirm.cancel();
          Lifecycle.resetGame();
        }
      }
    };

    view.actionBtns.forEach(btn => {
      const a = btn.dataset.action;
      const fn = ACTIONS[a];
      if (!fn) return;
      if (a === 'left' || a === 'right' || a === 'soft') {
        this._bindHold(btn, fn, a === 'soft');
      } else if (a === 'restart') {
        this._bindTap(btn, () => fn(btn), false);
      } else if (a === 'pause' || a === 'resume') {
        this._bindTap(btn, fn, false);
      } else {
        this._bindTap(btn, fn, true);
      }
    });
  },

  // -- Settings --

  _bindSettings() {
    view._settingsBtn.addEventListener('click', () => {
      const isOpen = view.isSettingsMenuOpen();
      if (isOpen) {
        view.closeLangSubmenu();
        view.setSettingsMenuOpen(false);
      } else {
        if (Game.isRunning()) Lifecycle.setPaused(true);
        view.setSettingsMenuOpen(true);
        view.focusGhostToggle();
      }
    });

    const SETTINGS_TOGGLES = [
      { el: '_ghostToggle', toggle: 'toggleGhost', field: 'ghostEnabled', indicator: 'setGhostIndicator' },
      { el: '_sevenBagToggle', toggle: 'toggleSevenBag', field: 'sevenBagEnabled', indicator: 'setSevenBagIndicator',
        after: () => { Game.bag = []; if (Settings.sevenBagEnabled) Game.fillBag(); } },
      { el: '_blackWhiteToggle', toggle: 'toggleBlackWhite', field: 'blackWhiteEnabled', indicator: 'setBlackWhiteIndicator' },
      { el: '_gridToggle', toggle: 'toggleGrid', field: 'gridEnabled', indicator: 'setGridIndicator' },
    ];
    SETTINGS_TOGGLES.forEach(cfg => {
      view[cfg.el].addEventListener('click', () => {
        view.closeAllSubmenus();
        Settings[cfg.toggle]();
        view[cfg.indicator](Settings[cfg.field]);
        if (cfg.after) cfg.after();
      });
    });

    view._langToggle.addEventListener('click', () => {
      view.closeRankingSubmenu();
      const open = view.isLangSubmenuOpen();
      view.setLangSubmenuOpen(!open);
      if (!open) view.langOptions[0]?.focus();
    });

    view._rankingToggle.addEventListener('click', () => {
      view.closeLangSubmenu();
      const open = view.isRankingSubmenuOpen();
      view.setRankingSubmenuOpen(!open);
      if (!open) {
        view.renderRanking();
        view._rankingSubmenu.querySelector('.ranking-clear')?.focus();
      }
    });

    view.langOptions.forEach(btn => {
      btn.addEventListener('click', () => {
        view.closeRankingSubmenu();
        const lang = btn.dataset.lang;
        if (!lang || lang === I18N.current) {
          view.closeLangSubmenu();
          return;
        }
        RestartConfirm.cancel();
        I18N.setLanguage(lang);
        I18N.applyI18n();
        view.setActiveLangOption(lang);
        view.updateLangToggleLabel();
        view.closeLangSubmenu();
        view.setPauseAriaLabel(Game.paused);
      });
    });
  },

  // -- Visibility --

  _bindVisibility() {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && !Game.gameOver) Lifecycle.setPaused(true);
    });
  },
};

// --- Lifecycle ---

const Lifecycle = {
  _lastTime: 0,
  _overHandled: false,
  _rafId: 0,

  init() {
    view.init();
    Settings.init();
    Scores.load();
    view.setGhostIndicator(Settings.ghostEnabled);
    view.setSevenBagIndicator(Settings.sevenBagEnabled);
    view.setBlackWhiteIndicator(Settings.blackWhiteEnabled);
    view.setGridIndicator(Settings.gridEnabled);
    view.setActiveLangOption(I18N.current);
    view.updateLangToggleLabel();
    view.resize();
    Input.init();
    window.addEventListener('resize', () => view.resize());
    window.addEventListener('orientationchange', () => setTimeout(() => view.resize(), 100));
    this.resetGame();
  },

  start() {
    this._lastTime = 0;
    this._rafId = requestAnimationFrame(t => this._loop(t));
  },

  _loop(t) {
    const dt = this._lastTime ? clamp(t - this._lastTime, 0, 100) : 0;
    this._lastTime = t;
    Game.tick(dt);
    Particles.update(dt);
    Shake.update(dt);
    HoldTransition.update(dt);
    const o = Shake.offset();
    view.applyShake(o.x, o.y);

    if (Game.gameOver) {
      RestartConfirm.cancel();
      if (!this._overHandled) {
        this._overHandled = true;
        this._handleGameOver();
      }
      view.showOverlay('over');
      view.setPauseBtnVisible(false);
      view.setBodyState(Game.paused, Game.gameOver);
      view.setStats();
      Render.draw();
      return;
    }
    view.setBodyState(Game.paused, Game.gameOver);
    view.setStats();

    Render.draw();
    this._rafId = requestAnimationFrame(t2 => this._loop(t2));
  },

  setPaused(v) {
    RestartConfirm.cancel();
    ClearConfirm.cancel();
    Game.setPaused(v);
    if (Game.gameOver) {
      view.showOverlay('over');
    } else {
      view.showOverlay(Game.paused ? 'pause' : null);
    }
    view.setBodyState(Game.paused, Game.gameOver);
    view.setPauseAriaLabel(Game.paused);
  },

  togglePause() {
    this.setPaused(!Game.paused);
  },

  _handleGameOver(forceNoBest = false) {
    Scores.lastRecorded = null;
    const score = Game.score;
    const prevBest = Scores.best();
    let state;
    if (forceNoBest) {
      state = 'noBest';
    } else {
      Scores.record(score);
      if (prevBest === null) state = score > 0 ? 'newBest' : 'noBest';
      else if (score > prevBest) state = 'newBest';
      else if (score === prevBest) state = 'tiedBest';
      else state = 'notBest';
    }
    view.renderGameOver(state, score, prevBest);
  },

  rerenderGameOver() { this._handleGameOver(true); },

  resetGame() {
    RestartConfirm.cancel();
    ClearConfirm.cancel();
    this._overHandled = false;
    Game.resetGame();
    view.showOverlay(null);
    view.setPauseBtnVisible(true);
    view.setBodyState(Game.paused, Game.gameOver);
    view.setPauseAriaLabel(Game.paused);
    view.setStats();
    cancelAnimationFrame(this._rafId);
    if (this._lastTime > 0) this.start();
  },
};

Lifecycle.init();
Lifecycle.start();
