const pieces = [
  {id:'pawn-idle',piece:'歩',group:'基本',jp:'待機',state:'Base Layer / Idle',note:'通常待機',duration:'1.8 sec',vfx:[]},
  {id:'pawn-hold',piece:'歩',group:'基本',jp:'構え',state:'Polearm Hold / Hold',note:'槍を保持した戦闘構え',duration:'1.8 sec',vfx:[]},
  {id:'pawn-run',piece:'歩',group:'移動',jp:'走行',state:'Base Layer / Run',note:'走行モーション',duration:'1.8 sec',vfx:[]},
  {id:'pawn-dodge',piece:'歩',group:'移動',jp:'回避',state:'Base Layer / Dodge',note:'1マス回避の身体モーション',duration:'0.8 sec',vfx:[]},
  {id:'pawn-attack01',piece:'歩',group:'攻撃',jp:'攻撃 1',state:'Attack Upper Body / Attack01',note:'通常コンボ1段目',duration:'0.8 sec',vfx:['IMPACT 1']},
  {id:'pawn-attack02',piece:'歩',group:'攻撃',jp:'攻撃 2',state:'Attack Upper Body / Attack02',note:'通常コンボ2段目',duration:'0.8 sec',vfx:['IMPACT 2']},
  {id:'pawn-attack03',piece:'歩',group:'攻撃',jp:'攻撃 3',state:'Attack Upper Body / Attack03',note:'通常コンボ3段目',duration:'0.8 sec',vfx:['FINISHER IMPACT']},
  {id:'pawn-attack03-full',piece:'歩',group:'攻撃',jp:'攻撃 3・全身',state:'Base Layer / Attack03FullBody',note:'3段目の全身適用版',duration:'0.8 sec',vfx:['FINISHER IMPACT']},
  {id:'pawn-hit',piece:'歩',group:'リアクション',jp:'被弾',state:'Base Layer / Hit',note:'被弾リアクション',duration:'0.8 sec',vfx:['HIT IMPACT']},
  {id:'pawn-defeated',piece:'歩',group:'リアクション',jp:'撃破',state:'Base Layer / Defeated',note:'撃破・ダウン',duration:'1.0 sec',vfx:[]},
  {id:'pawn-revive',piece:'歩',group:'リアクション',jp:'復帰',state:'Base Layer / Revive',note:'撃破状態からの復帰',duration:'0.8 sec',vfx:[]},
  {id:'pawn-special',piece:'歩',group:'特殊',jp:'必殺',state:'Base Layer / PawnSpecial',note:'歩の専用前方攻撃',duration:'0.8 sec',vfx:['CHARGE','SPECIAL IMPACT']},
  {id:'pawn-promote',piece:'歩',group:'特殊',jp:'成り',state:'Base Layer / Promote',note:'「歩」から「と」への変化',duration:'0.8 sec',vfx:['PROMOTION BURST']},
  {id:'pawn-demote',piece:'歩',group:'特殊',jp:'成り解除',state:'Base Layer / Demote',note:'「と」状態の解除',duration:'0.8 sec',vfx:['NARI RELEASE']},
  {id:'pawn-to-special',piece:'と',group:'特殊',jp:'薙ぎ払い',state:'Base Layer / ToSpecial',note:'「と」状態の大振り攻撃',duration:'1.0 sec',vfx:['TO SWEEP']},
  {id:'gold',piece:'金',group:'攻撃ショーケース',jp:'攻撃シーケンス',state:'Gallery sequence',note:'低く踏み込み、短く重い横打ち',duration:'8 sec',vfx:[]},
  {id:'silver',piece:'銀',group:'攻撃ショーケース',jp:'攻撃シーケンス',state:'Gallery sequence',note:'身体を絞って一直線に鋭く突く',duration:'8 sec',vfx:[]},
  {id:'knight',piece:'桂',group:'攻撃ショーケース',jp:'攻撃シーケンス',state:'Gallery sequence',note:'深く沈み、跳躍して前脚から着地',duration:'8 sec',vfx:[]},
  {id:'lance',piece:'香',group:'攻撃ショーケース',jp:'攻撃シーケンス',state:'Gallery sequence',note:'逆転プリロードから一直線に突進',duration:'8 sec',vfx:[]},
  {id:'bishop',piece:'角',group:'攻撃ショーケース',jp:'攻撃シーケンス',state:'Gallery sequence',note:'水平Xを収束し、対角線へ立体放出',duration:'8 sec',vfx:[]},
  {id:'rook',piece:'飛',group:'攻撃ショーケース',jp:'攻撃シーケンス',state:'Gallery sequence',note:'スラスターを傾け加速し、砲撃反動へ',duration:'8 sec',vfx:[]},
  {id:'king',piece:'王',group:'攻撃ショーケース',jp:'攻撃シーケンス',state:'Gallery sequence',note:'二段階の予兆から大きく薙ぎ払う',duration:'8 sec',vfx:[]},
  {id:'king-special',piece:'王',group:'攻撃ショーケース',jp:'大技',state:'Royal Slam',note:'長い予兆から全身で叩き下ろす',duration:'5 sec',vfx:[]}
];

const pawn = pieces.filter(x => x.id.startsWith('pawn-'));
const vfxCount = pawn.filter(x => x.vfx.length).length;
document.querySelector('#coverage').innerHTML = `
  <div class="coverageItem"><strong>${pawn.length} / ${pawn.length}</strong><span>歩兵 Animator State</span></div>
  <div class="coverageItem"><strong>${vfxCount}</strong><span>VFX付き動作</span></div>
  <div class="coverageItem"><strong>${pawn.length-vfxCount}</strong><span>Motion only</span></div>
  <p>歩兵は全Stateを個別カード化。その他の駒は現時点では攻撃シーケンス単位のショーケースです。</p>`;

const groups = ['すべて','基本','移動','攻撃','リアクション','特殊','攻撃ショーケース'];
const filters = document.querySelector('#filters');
let activeGroup = 'すべて';
for (const group of groups) {
  const button = document.createElement('button');
  button.textContent = group;
  button.className = group === activeGroup ? 'active' : '';
  button.onclick = () => { activeGroup = group; [...filters.children].forEach(x => x.classList.toggle('active', x === button)); render(); };
  filters.appendChild(button);
}

const root = document.querySelector('#gallery');
let playing = true;
let speed = 1;
function render(){
  root.innerHTML = '';
  const shown = activeGroup === 'すべて' ? pieces : pieces.filter(x => x.group === activeGroup);
  const keyOf = x => x.id.startsWith('pawn-') ? '歩兵' : x.piece;
  const grouped = Object.groupBy ? Object.groupBy(shown, keyOf) : shown.reduce((a,x)=>{const k=keyOf(x);(a[k]??=[]).push(x);return a},{});
  for (const [piece, entries] of Object.entries(grouped)) {
    const section = document.createElement('section'); section.className = 'pieceSection';
    section.innerHTML = `<div class="sectionHeading"><div><span class="pieceKanji">${piece === '歩兵' ? '歩' : piece}</span><h2>${piece === '歩兵' ? '歩兵 — 全15アニメーション' : piece}</h2></div><span>${entries.length} animation${entries.length===1?'':'s'}</span></div><div class="grid"></div>`;
    const grid = section.querySelector('.grid');
    for (const item of entries) {
      const tags = item.vfx.length ? item.vfx.map(v=>`<span class="vfxTag">VFX · ${v}</span>`).join('') : '<span class="motionTag">MOTION ONLY</span>';
      const card = document.createElement('article'); card.className='card';
      card.innerHTML=`<div class="media"><video muted loop autoplay playsinline preload="metadata" poster="media/${item.id}.jpg"><source src="media/${item.id}.mp4" type="video/mp4"></video><span class="duration">${item.duration}</span><button class="cardPlay" aria-label="再生/一時停止">Ⅱ</button></div><div class="info"><div class="titleRow"><div><div class="jp">${item.piece}・${item.jp}</div><div class="groupLabel">${item.group}</div></div><div class="tags">${tags}</div></div><div class="state"><span>STATE</span><code>${item.state}</code></div><p>${item.note}</p></div>`;
      const video=card.querySelector('video'), btn=card.querySelector('.cardPlay'); video.playbackRate=speed;
      if(!playing) video.pause();
      btn.onclick=()=>{if(video.paused){video.play();btn.textContent='Ⅱ'}else{video.pause();btn.textContent='▶'}};
      grid.appendChild(card);
    }
    root.appendChild(section);
  }
}
render();
function videos(){return [...document.querySelectorAll('video')]}
function setPlaying(next){playing=next;for(const v of videos()){if(playing){v.play().catch(()=>{})}else v.pause()}document.querySelector('#toggleAll').textContent=playing?'一時停止':'すべて再生'}
document.querySelector('#toggleAll').onclick=()=>setPlaying(!playing);
document.querySelectorAll('[data-speed]').forEach(b=>b.onclick=()=>{speed=Number(b.dataset.speed);videos().forEach(v=>v.playbackRate=speed);document.querySelectorAll('[data-speed]').forEach(x=>x.classList.toggle('active',x===b))});
