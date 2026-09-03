const phaseSets={
  normal:[['Idle',0,.16],['Move',.16,.30],['Anticipation',.30,.52],['Attack',.52,.63],['Recovery',.63,.82],['Settle',.82,1]],
  boss:[['Calm',0,.32],['Warning I',.32,.51],['Warning II',.51,.70],['Slam',.70,.77],['Shockwave',.77,.84],['Recovery',.84,1]]
};
const pieces=[
{id:'gold',jp:'金',en:'Gold General',note:'低い溜め → 重い横打ち'},
{id:'silver',jp:'銀',en:'Silver General',note:'斜めに絞る → 鋭い突き'},
{id:'knight',jp:'桂',en:'Knight',note:'四脚を畳む → 跳躍 → 着地'},
{id:'lance',jp:'香',en:'Lance',note:'逆転プリロード → 正しいX軸タイヤ回転 → 直線Charge'},
{id:'bishop',jp:'角',en:'Bishop',note:'4Fin収束・捻り → 対角Discharge'},
{id:'rook',jp:'飛',en:'Rook',note:'Thruster gimbal + vane spin → Fire / Recoil'},
{id:'king',jp:'王',en:'King / Sweep',note:'二段階予兆 → Boss Sweep'},
{id:'king-special',jp:'王',en:'King / Royal Slam',note:'長い予兆 → 掲げる → 叩き下ろし → 全周衝撃波',phase:'boss'}
];
const g=document.querySelector('#gallery');
for(const item of pieces){
  const phases=phaseSets[item.phase||'normal'];
  const el=document.createElement('article');el.className='card';
  el.innerHTML=`<div class="media"><video muted loop autoplay playsinline preload="metadata" poster="media/${item.id}.jpg"><source src="media/${item.id}.mp4" type="video/mp4"></video><span class="badge">5.0 sec loop</span><button class="cardPlay" aria-label="再生/一時停止">Ⅱ</button></div><div class="timeline"><div class="phaseMarks">${phases.map(p=>`<span style="left:${p[1]*100}%;width:${(p[2]-p[1])*100}%">${p[0]}</span>`).join('')}</div><i></i></div><div class="info"><div><div class="jp">${item.jp}</div><div class="name">${item.en}</div></div><div class="note">${item.note}<br>Anticipation / Impact / Recoveryを確認</div></div>`;g.appendChild(el)
}
let playing=true; let speed=1;
const videos=[...document.querySelectorAll('video')];
function setPlaying(next){playing=next;document.body.classList.toggle('paused',!playing);for(const v of videos){if(playing){v.play().catch(()=>{})}else v.pause()}document.querySelector('#toggleAll').textContent=playing?'一時停止':'すべて再生'}
document.querySelector('#toggleAll').onclick=()=>setPlaying(!playing);
document.querySelectorAll('[data-speed]').forEach(b=>b.onclick=()=>{speed=Number(b.dataset.speed);videos.forEach(v=>v.playbackRate=speed);document.querySelectorAll('[data-speed]').forEach(x=>x.classList.toggle('active',x===b))});
document.querySelectorAll('.card').forEach(card=>{const v=card.querySelector('video'),btn=card.querySelector('.cardPlay');btn.onclick=()=>{if(v.paused){v.play();btn.textContent='Ⅱ'}else{v.pause();btn.textContent='▶'}}});
function tick(){for(const card of document.querySelectorAll('.card')){const v=card.querySelector('video'),bar=card.querySelector('.timeline>i');bar.style.transform=`scaleX(${v.duration?Math.min(1,v.currentTime/v.duration):0})`}requestAnimationFrame(tick)}requestAnimationFrame(tick);
