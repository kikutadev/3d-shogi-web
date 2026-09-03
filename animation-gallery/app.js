const pieces=[
['gold','金','Gold General','低い溜め → 重い横打ち'],['silver','銀','Silver General','斜めに絞る → 鋭い突き'],['knight','桂','Knight','四脚を畳む → 跳躍 → 着地'],['lance','香','Lance','逆転プリロード → 直線Charge'],['bishop','角','Bishop','4Fin収束 → 対角Discharge'],['rook','飛','Rook','Thruster Charge → Fire / Recoil'],['king','王','King','大きな溜め → Boss Sweep']];
const phases=[['Idle',0,.16],['Move',.16,.30],['Anticipation',.30,.52],['Attack',.52,.63],['Recovery',.63,.82],['Settle',.82,1]];
const g=document.querySelector('#gallery');
for(const [id,jp,en,note] of pieces){const el=document.createElement('article');el.className='card';el.innerHTML=`<div class="media"><video muted loop autoplay playsinline preload="metadata" poster="media/${id}.jpg"><source src="media/${id}.mp4" type="video/mp4"></video><span class="badge">5.0 sec loop</span><button class="cardPlay" aria-label="再生/一時停止">Ⅱ</button></div><div class="timeline"><div class="phaseMarks">${phases.map(p=>`<span style="left:${p[1]*100}%;width:${(p[2]-p[1])*100}%">${p[0]}</span>`).join('')}</div><i></i></div><div class="info"><div><div class="jp">${jp}</div><div class="name">${en}</div></div><div class="note">${note}<br>Anticipation / Impact / Recoveryを確認</div></div>`;g.appendChild(el)}
let playing=true; let speed=1;
const videos=[...document.querySelectorAll('video')];
function setPlaying(next){playing=next;document.body.classList.toggle('paused',!playing);for(const v of videos){if(playing){v.play().catch(()=>{})}else v.pause()}document.querySelector('#toggleAll').textContent=playing?'一時停止':'すべて再生'}
document.querySelector('#toggleAll').onclick=()=>setPlaying(!playing);
document.querySelectorAll('[data-speed]').forEach(b=>b.onclick=()=>{speed=Number(b.dataset.speed);videos.forEach(v=>v.playbackRate=speed);document.querySelectorAll('[data-speed]').forEach(x=>x.classList.toggle('active',x===b))});
document.querySelectorAll('.card').forEach(card=>{const v=card.querySelector('video'),btn=card.querySelector('.cardPlay');btn.onclick=()=>{if(v.paused){v.play();btn.textContent='Ⅱ'}else{v.pause();btn.textContent='▶'}}});
function tick(){for(const card of document.querySelectorAll('.card')){const v=card.querySelector('video'),bar=card.querySelector('.timeline>i');bar.style.transform=`scaleX(${v.duration?Math.min(1,v.currentTime/v.duration):0})`}requestAnimationFrame(tick)}requestAnimationFrame(tick);
