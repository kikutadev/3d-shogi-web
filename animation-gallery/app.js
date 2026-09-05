const mediaRevision = '20260905-silver-footwork-v3';
const pieces = [
  {
    "id": "pawn-turntable",
    "piece": "歩",
    "group": "基本",
    "jp": "360°回転",
    "state": "Model / Turntable",
    "note": "モデル全周を一定速度で確認する360°ターンテーブル",
    "duration": "6.0 sec",
    "vfx": [],
    "modelReview": true
  },
  {
    "id": "pawn-idle",
    "piece": "歩",
    "group": "基本",
    "jp": "待機",
    "state": "Base Layer / Idle",
    "note": "通常待機",
    "duration": "1.8 sec",
    "vfx": []
  },
  {
    "id": "pawn-hold",
    "piece": "歩",
    "group": "基本",
    "jp": "構え",
    "state": "Polearm Hold / Hold",
    "note": "槍を保持した戦闘構え",
    "duration": "1.8 sec",
    "vfx": []
  },
  {
    "id": "pawn-run",
    "piece": "歩",
    "group": "移動",
    "jp": "走行",
    "state": "Base Layer / Run",
    "note": "走行モーション",
    "duration": "1.8 sec",
    "vfx": []
  },
  {
    "id": "pawn-dodge",
    "piece": "歩",
    "group": "移動",
    "jp": "回避",
    "state": "Base Layer / Dodge",
    "note": "1マス回避の身体モーション",
    "duration": "0.8 sec",
    "vfx": []
  },
  {
    "id": "pawn-attack01",
    "piece": "歩",
    "group": "攻撃",
    "jp": "攻撃 1",
    "state": "Attack Upper Body / Attack01",
    "note": "通常コンボ1段目",
    "duration": "0.8 sec",
    "vfx": [
      "IMPACT 1"
    ]
  },
  {
    "id": "pawn-attack02",
    "piece": "歩",
    "group": "攻撃",
    "jp": "攻撃 2",
    "state": "Attack Upper Body / Attack02",
    "note": "通常コンボ2段目",
    "duration": "0.8 sec",
    "vfx": [
      "IMPACT 2"
    ]
  },
  {
    "id": "pawn-attack03",
    "piece": "歩",
    "group": "攻撃",
    "jp": "攻撃 3",
    "state": "Attack Upper Body / Attack03",
    "note": "通常コンボ3段目",
    "duration": "0.8 sec",
    "vfx": [
      "FINISHER IMPACT"
    ]
  },
  {
    "id": "pawn-attack03-full",
    "piece": "歩",
    "group": "攻撃",
    "jp": "攻撃 3・全身",
    "state": "Base Layer / Attack03FullBody",
    "note": "3段目の全身適用版",
    "duration": "0.8 sec",
    "vfx": [
      "FINISHER IMPACT"
    ]
  },
  {
    "id": "pawn-hit",
    "piece": "歩",
    "group": "リアクション",
    "jp": "被弾",
    "state": "Base Layer / Hit",
    "note": "被弾リアクション",
    "duration": "0.8 sec",
    "vfx": [
      "HIT IMPACT"
    ]
  },
  {
    "id": "pawn-defeated",
    "piece": "歩",
    "group": "リアクション",
    "jp": "撃破",
    "state": "Base Layer / Defeated",
    "note": "撃破・ダウン",
    "duration": "1.0 sec",
    "vfx": []
  },
  {
    "id": "pawn-revive",
    "piece": "歩",
    "group": "リアクション",
    "jp": "復帰",
    "state": "Base Layer / Revive",
    "note": "撃破状態からの復帰",
    "duration": "0.8 sec",
    "vfx": []
  },
  {
    "id": "pawn-special",
    "piece": "歩",
    "group": "特殊",
    "jp": "必殺",
    "state": "Base Layer / PawnSpecial",
    "note": "歩の専用前方攻撃",
    "duration": "0.8 sec",
    "vfx": [
      "CHARGE",
      "SPECIAL IMPACT"
    ]
  },
  {
    "id": "pawn-promote",
    "piece": "歩",
    "group": "特殊",
    "jp": "成り",
    "state": "Base Layer / Promote",
    "note": "「歩」から「と」への変化",
    "duration": "0.8 sec",
    "vfx": [
      "PROMOTION BURST"
    ]
  },
  {
    "id": "pawn-demote",
    "piece": "歩",
    "group": "特殊",
    "jp": "成り解除",
    "state": "Base Layer / Demote",
    "note": "「と」状態の解除",
    "duration": "0.8 sec",
    "vfx": [
      "NARI RELEASE"
    ]
  },
  {
    "id": "pawn-to-special",
    "piece": "と",
    "group": "特殊",
    "jp": "薙ぎ払い",
    "state": "Base Layer / ToSpecial",
    "note": "「と」状態の大振り攻撃",
    "duration": "1.0 sec",
    "vfx": [
      "TO SWEEP"
    ]
  },
  {
    "id": "gold-turntable",
    "piece": "金",
    "group": "基本",
    "jp": "360°回転",
    "state": "Model / Turntable",
    "note": "モデル全周を一定速度で確認する360°ターンテーブル",
    "duration": "6.0 sec",
    "vfx": [],
    "modelReview": true
  },
  {
    "id": "gold-idle",
    "piece": "金",
    "group": "基本",
    "jp": "待機",
    "state": "Gallery / Idle",
    "note": "静止時の呼吸・浮遊・姿勢保持",
    "duration": "1.2 sec",
    "vfx": []
  },
  {
    "id": "gold-move",
    "piece": "金",
    "group": "移動",
    "jp": "移動",
    "state": "Gallery / Move",
    "note": "各駒固有の移動サンプル",
    "duration": "1.0 sec",
    "vfx": []
  },
  {
    "id": "gold-attack",
    "piece": "金",
    "group": "攻撃",
    "jp": "攻撃",
    "state": "Gallery / Attack",
    "note": "短く重い横打ち",
    "duration": "2.3 sec",
    "vfx": [
      "HEAVY BASH"
    ]
  },
  {
    "id": "gold-hit",
    "piece": "金",
    "group": "リアクション",
    "jp": "被弾",
    "state": "Gallery / Hit",
    "note": "低く沈み杖を寄せて踏ん張る重い被弾",
    "duration": "0.5 sec",
    "vfx": []
  },
  {
    "id": "gold-defeated",
    "piece": "金",
    "group": "リアクション",
    "jp": "撃破",
    "state": "Gallery / Defeated",
    "note": "撃破時の倒れ・沈み込み",
    "duration": "0.7 sec",
    "vfx": []
  },
  {
    "id": "gold-revive",
    "piece": "金",
    "group": "リアクション",
    "jp": "復帰",
    "state": "Gallery / Revive",
    "note": "撃破状態からの立ち上がり・再起動",
    "duration": "1.1 sec",
    "vfx": []
  },
  {
    "id": "silver-turntable",
    "piece": "銀",
    "group": "基本",
    "jp": "360°回転",
    "state": "Model / Turntable",
    "note": "モデル全周を一定速度で確認する360°ターンテーブル",
    "duration": "6.0 sec",
    "vfx": [],
    "modelReview": true
  },
  {
    "id": "silver-idle",
    "piece": "銀",
    "group": "基本",
    "jp": "待機",
    "state": "Gallery / Idle",
    "note": "前傾を保ち、槍先を静かに整える警戒姿勢",
    "duration": "1.2 sec",
    "vfx": []
  },
  {
    "id": "silver-move",
    "piece": "銀",
    "group": "移動",
    "jp": "移動",
    "state": "Gallery / Move",
    "note": "支持脚と遊脚を交互に切り替え、膝と足首を使う軽快な戦闘歩法",
    "duration": "1.0 sec",
    "vfx": []
  },
  {
    "id": "silver-attack",
    "piece": "銀",
    "group": "攻撃",
    "jp": "攻撃",
    "state": "Gallery / Attack",
    "note": "後脚を深く畳み、前脚を着いて反対斜めへ身体ごと踏み込む高速突き",
    "duration": "2.3 sec",
    "vfx": [
      "DIAGONAL FEINT",
      "DIAGONAL THRUST"
    ]
  },
  {
    "id": "silver-hit",
    "piece": "銀",
    "group": "リアクション",
    "jp": "被弾",
    "state": "Gallery / Hit",
    "note": "片足で衝撃を逃がしながら頭と槍腕が外へ流れ、すぐ構えへ戻る被弾",
    "duration": "0.5 sec",
    "vfx": []
  },
  {
    "id": "silver-defeated",
    "piece": "銀",
    "group": "リアクション",
    "jp": "撃破",
    "state": "Gallery / Defeated",
    "note": "支持脚が崩れ、両脚が絡みながら槍を外へ逃がして横倒れする",
    "duration": "0.7 sec",
    "vfx": []
  },
  {
    "id": "silver-revive",
    "piece": "銀",
    "group": "リアクション",
    "jp": "復帰",
    "state": "Gallery / Revive",
    "note": "片足を着き、槍側を支点に身体を起こして素早く構えへ戻る",
    "duration": "1.1 sec",
    "vfx": []
  },
  {
    "id": "knight-turntable",
    "piece": "桂",
    "group": "基本",
    "jp": "360°回転",
    "state": "Model / Turntable",
    "note": "モデル全周を一定速度で確認する360°ターンテーブル",
    "duration": "6.0 sec",
    "vfx": [],
    "modelReview": true
  },
  {
    "id": "knight-idle",
    "piece": "桂",
    "group": "基本",
    "jp": "待機",
    "state": "Gallery / Idle",
    "note": "静止時の呼吸・浮遊・姿勢保持",
    "duration": "1.2 sec",
    "vfx": []
  },
  {
    "id": "knight-move",
    "piece": "桂",
    "group": "移動",
    "jp": "移動",
    "state": "Gallery / Move",
    "note": "各駒固有の移動サンプル",
    "duration": "1.0 sec",
    "vfx": []
  },
  {
    "id": "knight-attack",
    "piece": "桂",
    "group": "攻撃",
    "jp": "攻撃",
    "state": "Gallery / Attack",
    "note": "深く沈んで跳躍し、前脚から着地",
    "duration": "2.3 sec",
    "vfx": [
      "LANDING RING"
    ]
  },
  {
    "id": "knight-hit",
    "piece": "桂",
    "group": "リアクション",
    "jp": "被弾",
    "state": "Gallery / Hit",
    "note": "被弾時の短いリアクション",
    "duration": "0.5 sec",
    "vfx": []
  },
  {
    "id": "knight-defeated",
    "piece": "桂",
    "group": "リアクション",
    "jp": "撃破",
    "state": "Gallery / Defeated",
    "note": "馬体が横へ倒れ込む撃破モーション",
    "duration": "0.7 sec",
    "vfx": []
  },
  {
    "id": "knight-revive",
    "piece": "桂",
    "group": "リアクション",
    "jp": "復帰",
    "state": "Gallery / Revive",
    "note": "横倒れから四脚を戻して立ち上がる",
    "duration": "1.1 sec",
    "vfx": []
  },
  {
    "id": "lance-turntable",
    "piece": "香",
    "group": "基本",
    "jp": "360°回転",
    "state": "Model / Turntable",
    "note": "モデル全周を一定速度で確認する360°ターンテーブル",
    "duration": "6.0 sec",
    "vfx": [],
    "modelReview": true
  },
  {
    "id": "lance-idle",
    "piece": "香",
    "group": "基本",
    "jp": "待機",
    "state": "Gallery / Idle",
    "note": "静止時の呼吸・浮遊・姿勢保持",
    "duration": "1.2 sec",
    "vfx": []
  },
  {
    "id": "lance-move",
    "piece": "香",
    "group": "移動",
    "jp": "移動",
    "state": "Gallery / Move",
    "note": "各駒固有の移動サンプル",
    "duration": "1.0 sec",
    "vfx": []
  },
  {
    "id": "lance-attack",
    "piece": "香",
    "group": "攻撃",
    "jp": "攻撃",
    "state": "Gallery / Attack",
    "note": "逆転プリロードから一直線に突進",
    "duration": "2.3 sec",
    "vfx": [
      "CHARGE IMPACT",
      "SPEAR STREAK"
    ]
  },
  {
    "id": "lance-hit",
    "piece": "香",
    "group": "リアクション",
    "jp": "被弾",
    "state": "Gallery / Hit",
    "note": "被弾時の短いリアクション",
    "duration": "0.5 sec",
    "vfx": []
  },
  {
    "id": "lance-defeated",
    "piece": "香",
    "group": "リアクション",
    "jp": "撃破",
    "state": "Gallery / Defeated",
    "note": "車体が横転して停止",
    "duration": "0.7 sec",
    "vfx": []
  },
  {
    "id": "lance-revive",
    "piece": "香",
    "group": "リアクション",
    "jp": "復帰",
    "state": "Gallery / Revive",
    "note": "横転状態から二段階で起き上がる",
    "duration": "1.1 sec",
    "vfx": []
  },
  {
    "id": "bishop-turntable",
    "piece": "角",
    "group": "基本",
    "jp": "360°回転",
    "state": "Model / Turntable",
    "note": "モデル全周を一定速度で確認する360°ターンテーブル",
    "duration": "6.0 sec",
    "vfx": [],
    "modelReview": true
  },
  {
    "id": "bishop-idle",
    "piece": "角",
    "group": "基本",
    "jp": "待機",
    "state": "Gallery / Idle",
    "note": "静止時の呼吸・浮遊・姿勢保持",
    "duration": "1.2 sec",
    "vfx": []
  },
  {
    "id": "bishop-move",
    "piece": "角",
    "group": "移動",
    "jp": "移動",
    "state": "Gallery / Move",
    "note": "各駒固有の移動サンプル",
    "duration": "1.0 sec",
    "vfx": []
  },
  {
    "id": "bishop-attack",
    "piece": "角",
    "group": "攻撃",
    "jp": "攻撃",
    "state": "Gallery / Attack",
    "note": "X形を収束して対角線へ放出",
    "duration": "2.3 sec",
    "vfx": [
      "DIAGONAL BURST",
      "CORE BURST"
    ]
  },
  {
    "id": "bishop-hit",
    "piece": "角",
    "group": "リアクション",
    "jp": "被弾",
    "state": "Gallery / Hit",
    "note": "被弾時の短いリアクション",
    "duration": "0.5 sec",
    "vfx": []
  },
  {
    "id": "bishop-defeated",
    "piece": "角",
    "group": "リアクション",
    "jp": "撃破",
    "state": "Gallery / Defeated",
    "note": "4Finを畳みX構造を崩して機能停止",
    "duration": "0.7 sec",
    "vfx": []
  },
  {
    "id": "bishop-revive",
    "piece": "角",
    "group": "リアクション",
    "jp": "復帰",
    "state": "Gallery / Revive",
    "note": "対角ペアを順に展開してXを再構成",
    "duration": "1.1 sec",
    "vfx": []
  },
  {
    "id": "rook-turntable",
    "piece": "飛",
    "group": "基本",
    "jp": "360°回転",
    "state": "Model / Turntable",
    "note": "モデル全周を一定速度で確認する360°ターンテーブル",
    "duration": "6.0 sec",
    "vfx": [],
    "modelReview": true
  },
  {
    "id": "rook-idle",
    "piece": "飛",
    "group": "基本",
    "jp": "待機",
    "state": "Gallery / Idle",
    "note": "静止時の呼吸・浮遊・姿勢保持",
    "duration": "1.2 sec",
    "vfx": []
  },
  {
    "id": "rook-move",
    "piece": "飛",
    "group": "移動",
    "jp": "移動",
    "state": "Gallery / Move",
    "note": "各駒固有の移動サンプル",
    "duration": "1.0 sec",
    "vfx": []
  },
  {
    "id": "rook-attack",
    "piece": "飛",
    "group": "攻撃",
    "jp": "攻撃",
    "state": "Gallery / Attack",
    "note": "スラスターを溜め、砲撃反動へ",
    "duration": "2.3 sec",
    "vfx": [
      "MUZZLE BLAST"
    ]
  },
  {
    "id": "rook-hit",
    "piece": "飛",
    "group": "リアクション",
    "jp": "被弾",
    "state": "Gallery / Hit",
    "note": "被弾時の短いリアクション",
    "duration": "0.5 sec",
    "vfx": []
  },
  {
    "id": "rook-defeated",
    "piece": "飛",
    "group": "リアクション",
    "jp": "撃破",
    "state": "Gallery / Defeated",
    "note": "推力を失い片側へ傾いて機首が沈む",
    "duration": "0.7 sec",
    "vfx": []
  },
  {
    "id": "rook-revive",
    "piece": "飛",
    "group": "リアクション",
    "jp": "復帰",
    "state": "Gallery / Revive",
    "note": "低い側のスラスターから再点火して水平復帰",
    "duration": "1.1 sec",
    "vfx": []
  },
  {
    "id": "king-turntable",
    "piece": "王",
    "group": "基本",
    "jp": "360°回転",
    "state": "Model / Turntable",
    "note": "モデル全周を一定速度で確認する360°ターンテーブル",
    "duration": "6.0 sec",
    "vfx": [],
    "modelReview": true
  },
  {
    "id": "king-idle",
    "piece": "王",
    "group": "基本",
    "jp": "待機",
    "state": "Gallery / Idle",
    "note": "静止時の呼吸・浮遊・姿勢保持",
    "duration": "1.2 sec",
    "vfx": []
  },
  {
    "id": "king-move",
    "piece": "王",
    "group": "移動",
    "jp": "移動",
    "state": "Gallery / Move",
    "note": "各駒固有の移動サンプル",
    "duration": "1.0 sec",
    "vfx": []
  },
  {
    "id": "king-attack",
    "piece": "王",
    "group": "攻撃",
    "jp": "攻撃",
    "state": "Gallery / Attack",
    "note": "大きく予兆して杖を薙ぎ払う",
    "duration": "2.3 sec",
    "vfx": [
      "ROYAL IMPACT"
    ]
  },
  {
    "id": "king-hit",
    "piece": "王",
    "group": "リアクション",
    "jp": "被弾",
    "state": "Gallery / Hit",
    "note": "杖で踏ん張り、遅れてマントが揺れる被弾",
    "duration": "0.5 sec",
    "vfx": []
  },
  {
    "id": "king-defeated",
    "piece": "王",
    "group": "リアクション",
    "jp": "撃破",
    "state": "Gallery / Defeated",
    "note": "撃破時の倒れ・沈み込み",
    "duration": "0.7 sec",
    "vfx": []
  },
  {
    "id": "king-revive",
    "piece": "王",
    "group": "リアクション",
    "jp": "復帰",
    "state": "Gallery / Revive",
    "note": "撃破状態からの立ち上がり・再起動",
    "duration": "1.1 sec",
    "vfx": []
  },
  {
    "id": "king-special",
    "piece": "王",
    "group": "特殊",
    "jp": "大技",
    "state": "Gallery / Royal Slam",
    "note": "長い二段階予兆から全身で叩き下ろす王専用大技",
    "duration": "5.0 sec",
    "vfx": [
      "WARNING RINGS",
      "SHOCKWAVE"
    ]
  }
];

const vfxCount = pieces.filter(x => x.vfx.length).length;
const modelReviewCount = pieces.filter(x => x.modelReview).length;
const motionOnlyCount = pieces.length - vfxCount - modelReviewCount;
document.querySelector('#coverage').innerHTML = `
  <div class="coverageItem"><strong>${pieces.length}</strong><span>表示動画</span></div>
  <div class="coverageItem"><strong>${vfxCount}</strong><span>VFX付き動作</span></div>
  <div class="coverageItem"><strong>${modelReviewCount}</strong><span>360°モデル確認</span></div>
  <p>現行8駒すべてに360°ターンテーブルを追加。歩兵はUnity Animator State全15件、その他7駒は既存Blenderシーケンスを分割表示し、VFXなしの通常動作は${motionOnlyCount}件です。</p>`;
const groups = ['すべて','基本','移動','攻撃','リアクション','特殊'];
const filters = document.querySelector('#filters'); let activeGroup='すべて';
for(const group of groups){const b=document.createElement('button');b.textContent=group;b.className=group===activeGroup?'active':'';b.onclick=()=>{activeGroup=group;[...filters.children].forEach(x=>x.classList.toggle('active',x===b));render()};filters.appendChild(b)}
const pieceOrder=['歩兵','金','銀','桂','香','角','飛','王']; const root=document.querySelector('#gallery'); let playing=true; let speed=1;
function render(){root.innerHTML='';const shown=activeGroup==='すべて'?pieces:pieces.filter(x=>x.group===activeGroup);const keyOf=x=>x.id.startsWith('pawn-')?'歩兵':x.piece;const grouped=shown.reduce((a,x)=>{const k=keyOf(x);(a[k]??=[]).push(x);return a},{});for(const piece of pieceOrder){const entries=grouped[piece];if(!entries?.length)continue;const section=document.createElement('section');section.className='pieceSection';const kanji=piece==='歩兵'?'歩':piece;const total=pieces.filter(x=>keyOf(x)===piece).length;section.innerHTML=`<div class="sectionHeading"><div><span class="pieceKanji">${kanji}</span><h2>${piece} — ${entries.length}アニメーション</h2></div><span>${entries.length} / ${total}</span></div><div class="grid"></div>`;const grid=section.querySelector('.grid');for(const item of entries){const tags=item.modelReview?'<span class="motionTag">MODEL 360°</span>':item.vfx.length?item.vfx.map(v=>`<span class="vfxTag">VFX · ${v}</span>`).join(''):'<span class="motionTag">MOTION ONLY</span>';const card=document.createElement('article');card.className='card';card.innerHTML=`<div class="media"><video muted loop autoplay playsinline preload="metadata" poster="media/${item.id}.jpg?v=${mediaRevision}"><source src="media/${item.id}.mp4?v=${mediaRevision}" type="video/mp4"></video><span class="duration">${item.duration}</span><button class="cardPlay" aria-label="再生/一時停止">Ⅱ</button></div><div class="info"><div class="titleRow"><div><div class="jp">${item.piece}・${item.jp}</div><div class="groupLabel">${item.group}</div></div><div class="tags">${tags}</div></div><div class="state"><span>STATE</span><code>${item.state}</code></div><p>${item.note}</p></div>`;const video=card.querySelector('video'),btn=card.querySelector('.cardPlay');video.playbackRate=speed;if(!playing)video.pause();btn.onclick=()=>{if(video.paused){video.play();btn.textContent='Ⅱ'}else{video.pause();btn.textContent='▶'}};grid.appendChild(card)}root.appendChild(section)}}
render(); function videos(){return [...document.querySelectorAll('video')]} function setPlaying(next){playing=next;for(const v of videos()){if(playing){v.play().catch(()=>{})}else v.pause()}document.querySelector('#toggleAll').textContent=playing?'一時停止':'すべて再生'} document.querySelector('#toggleAll').onclick=()=>setPlaying(!playing); document.querySelectorAll('[data-speed]').forEach(b=>b.onclick=()=>{speed=Number(b.dataset.speed);videos().forEach(v=>v.playbackRate=speed);document.querySelectorAll('[data-speed]').forEach(x=>x.classList.toggle('active',x===b))});
