const pieces=[
  ['pawn-idle','歩・待機','Pawn — Idle','通常待機','1.8 sec'],
  ['pawn-hold','歩・構え','Pawn — Hold','槍を保持した戦闘構え','1.8 sec'],
  ['pawn-run','歩・走行','Pawn — Run','現在の走行モーション','1.8 sec'],
  ['pawn-dodge','歩・回避','Pawn — Dodge','回避モーション','0.8 sec'],
  ['pawn-hit','歩・被弾','Pawn — Hit','被弾リアクション','0.8 sec'],
  ['pawn-defeated','歩・撃破','Pawn — Defeated','撃破・ダウン','1.0 sec'],
  ['pawn-revive','歩・復帰','Pawn — Revive','撃破状態からの復帰','0.8 sec'],
  ['pawn-attack01','歩・攻撃1','Pawn — Attack01','上半身レイヤーの槍攻撃1','0.8 sec'],
  ['pawn-attack02','歩・攻撃2','Pawn — Attack02','上半身レイヤーの槍攻撃2','0.8 sec'],
  ['pawn-attack03','歩・攻撃3','Pawn — Attack03','上半身レイヤーの槍攻撃3','0.8 sec'],
  ['pawn-attack03-full','歩・攻撃3 全身','Pawn — Attack03 Full Body','同系統攻撃の全身適用版','0.8 sec'],
  ['pawn-special','歩・必殺','Pawn — Pawn Special','歩の専用攻撃','0.8 sec'],
  ['pawn-promote','歩・成り','Pawn — Promote','成りモーション','0.8 sec'],
  ['pawn-demote','歩・成り解除','Pawn — Demote','成り解除モーション','0.8 sec'],
  ['pawn-to-special','と・攻撃','Pawn — ToSpecial','「と」状態の大振り攻撃','1.0 sec'],
  ['gold','金','Gold General','低く踏み込み、短く重い横打ち','8 sec'],
  ['silver','銀','Silver General','身体を絞って一直線に鋭く突く','8 sec'],
  ['knight','桂','Knight','深く沈み、跳躍して前脚から着地','8 sec'],
  ['lance','香','Lance','逆転プリロードから一直線に突進','8 sec'],
  ['bishop','角','Bishop','水平Xを収束し、対角線へ立体放出','8 sec'],
  ['rook','飛','Rook','スラスターを傾け加速し、砲撃反動へ','8 sec'],
  ['king','王','King','二段階の予兆から大きく薙ぎ払う','8 sec'],
  ['king-special','王・大技','King Royal Slam','長い予兆から全身で叩き下ろす','5 sec']
];
const g=document.querySelector('#gallery');
for(const [id,jp,en,note,duration] of pieces){
  const el=document.createElement('article');el.className='card';
  el.innerHTML=`<div class="media"><video muted loop autoplay playsinline preload="metadata" poster="media/${id}.jpg"><source src="media/${id}.mp4" type="video/mp4"></video><span class="badge">${duration} loop</span><button class="cardPlay" aria-label="再生/一時停止">Ⅱ</button></div><div class="info"><div><div class="jp">${jp}</div><div class="name">${en}</div></div><div class="note">${note}</div></div>`;
  g.appendChild(el);
}
let playing=true;
const videos=[...document.querySelectorAll('video')];
function setPlaying(next){playing=next;for(const v of videos){if(playing){v.play().catch(()=>{})}else v.pause()}document.querySelector('#toggleAll').textContent=playing?'一時停止':'すべて再生'}
document.querySelector('#toggleAll').onclick=()=>setPlaying(!playing);
document.querySelectorAll('[data-speed]').forEach(b=>b.onclick=()=>{const speed=Number(b.dataset.speed);videos.forEach(v=>v.playbackRate=speed);document.querySelectorAll('[data-speed]').forEach(x=>x.classList.toggle('active',x===b))});
document.querySelectorAll('.card').forEach(card=>{const v=card.querySelector('video'),btn=card.querySelector('.cardPlay');btn.onclick=()=>{if(v.paused){v.play();btn.textContent='Ⅱ'}else{v.pause();btn.textContent='▶'}}});
