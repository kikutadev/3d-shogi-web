const pieces=[
  ['gold','金','Gold General','低く踏み込み、短く重い横打ち'],
  ['silver','銀','Silver General','身体を絞って一直線に鋭く突く'],
  ['knight','桂','Knight','深く沈み、跳躍して前脚から着地'],
  ['lance','香','Lance','逆転プリロードから一直線に突進'],
  ['bishop','角','Bishop','水平Xを収束し、対角線へ立体放出'],
  ['rook','飛','Rook','スラスターを傾け加速し、砲撃反動へ'],
  ['king','王','King','二段階の予兆から大きく薙ぎ払う'],
  ['king-special','王・大技','King Royal Slam','長い予兆から全身で叩き下ろす']
];
const g=document.querySelector('#gallery');
for(const [id,jp,en,note] of pieces){
  const el=document.createElement('article');el.className='card';
  el.innerHTML=`<div class="media"><video muted loop autoplay playsinline preload="metadata" poster="media/${id}.jpg"><source src="media/${id}.mp4" type="video/mp4"></video><span class="badge">5 sec loop</span><button class="cardPlay" aria-label="再生/一時停止">Ⅱ</button></div><div class="info"><div><div class="jp">${jp}</div><div class="name">${en}</div></div><div class="note">${note}</div></div>`;
  g.appendChild(el);
}
let playing=true;
const videos=[...document.querySelectorAll('video')];
function setPlaying(next){playing=next;for(const v of videos){if(playing){v.play().catch(()=>{})}else v.pause()}document.querySelector('#toggleAll').textContent=playing?'一時停止':'すべて再生'}
document.querySelector('#toggleAll').onclick=()=>setPlaying(!playing);
document.querySelectorAll('[data-speed]').forEach(b=>b.onclick=()=>{const speed=Number(b.dataset.speed);videos.forEach(v=>v.playbackRate=speed);document.querySelectorAll('[data-speed]').forEach(x=>x.classList.toggle('active',x===b))});
document.querySelectorAll('.card').forEach(card=>{const v=card.querySelector('video'),btn=card.querySelector('.cardPlay');btn.onclick=()=>{if(v.paused){v.play();btn.textContent='Ⅱ'}else{v.pause();btn.textContent='▶'}}});
