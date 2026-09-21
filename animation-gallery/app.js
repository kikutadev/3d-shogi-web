const mediaRevision = '20260921-bishop-v10';
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
    "note": "短い接触sparkを伴う被弾。身体のリアクションを主役にした軽い二次演出",
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
    "note": "倒れた身体の接地に低い盤面dustを重ねる撃破",
    "duration": "0.8 sec",
    "vfx": []
  },
  {
    "id": "pawn-revive",
    "piece": "歩",
    "group": "リアクション",
    "jp": "復帰",
    "state": "Base Layer / Revive",
    "note": "味方化演出を邪魔しない小さな立ち上がりring",
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
    "duration": "0.9 sec",
    "vfx": [
      "CHARGE",
      "SPECIAL IMPACT"
    ]
  },
  {
    "id": "pawn-piercing-windup",
    "piece": "歩",
    "group": "特殊",
    "jp": "穿陣・溜め",
    "state": "Base Layer / PiercingWindup",
    "note": "穿陣の溜め。槍を引き、全身を貫通突進へ圧縮する予備動作",
    "duration": "0.8 sec",
    "vfx": [
      "PIERCING CHARGE"
    ]
  },
  {
    "id": "pawn-piercing-drive",
    "piece": "歩",
    "group": "特殊",
    "jp": "穿陣・貫通",
    "state": "Base Layer / PiercingDrive",
    "note": "穿陣の貫通中。盤面上の移動量はGridMotorが所有し、Animatorは突進姿勢だけを担当",
    "duration": "0.8 sec",
    "vfx": [
      "PIERCING PATH"
    ]
  },
  {
    "id": "pawn-piercing-recovery",
    "piece": "歩",
    "group": "特殊",
    "jp": "穿陣・復帰",
    "state": "Base Layer / PiercingRecovery",
    "note": "貫通後の制動から槍を戻す復帰動作",
    "duration": "0.8 sec",
    "vfx": [
      "PIERCING IMPACT"
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
    "duration": "0.9 sec",
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
    "state": "Production / Idle",
    "note": "両足を接地したまま膝を緩め、重心を静かに移す重装待機",
    "duration": "1.2 sec",
    "vfx": []
  },
  {
    "id": "gold-move",
    "piece": "金",
    "group": "移動",
    "jp": "移動",
    "state": "Production / Move",
    "note": "短い歩幅で支持脚を切り替え、着地ごとに沈む重い足運び",
    "duration": "1.0 sec",
    "vfx": []
  },
  {
    "id": "gold-attack",
    "piece": "金",
    "group": "攻撃",
    "jp": "攻撃",
    "state": "Production / Attack",
    "note": "後脚で溜め、前脚を着いて全身で押し込む重い杖打撃",
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
    "state": "Production / Hit",
    "note": "低いringで重量を受け止める被弾",
    "duration": "0.6 sec",
    "vfx": []
  },
  {
    "id": "gold-defeated",
    "piece": "金",
    "group": "リアクション",
    "jp": "撃破",
    "state": "Production / Defeated",
    "note": "膝から潰れる重い崩れと盤面crackを伴う撃破",
    "duration": "0.7 sec",
    "vfx": []
  },
  {
    "id": "gold-revive",
    "piece": "金",
    "group": "リアクション",
    "jp": "復帰",
    "state": "Production / Revive",
    "note": "低いringから重心を押し戻す復帰",
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
    "state": "Production / Idle",
    "note": "刀を身体の近くで立て、前傾を保つ警戒姿勢",
    "duration": "1.2 sec",
    "vfx": []
  },
  {
    "id": "silver-move",
    "piece": "銀",
    "group": "移動",
    "jp": "移動",
    "state": "Production / Move",
    "note": "支持脚と遊脚を交互に切り替え、刀を身体の近くで制御した軽快な戦闘歩法",
    "duration": "1.0 sec",
    "vfx": []
  },
  {
    "id": "silver-attack",
    "piece": "銀",
    "group": "攻撃",
    "jp": "攻撃",
    "state": "Production / Attack",
    "note": "刀を持つ側の高い構えから足・腰・肩の順に踏み込み、銀の正面を大きく横切って反対側の低い位置まで斬り抜ける袈裟斬り",
    "duration": "2.3 sec",
    "vfx": [
      "KATANA SLASH",
      "CUT IMPACT"
    ]
  },
  {
    "id": "silver-hit",
    "piece": "銀",
    "group": "リアクション",
    "jp": "被弾",
    "state": "Production / Hit",
    "note": "細いblade glintが交差する、剣士らしい素早い被弾",
    "duration": "0.6 sec",
    "vfx": []
  },
  {
    "id": "silver-defeated",
    "piece": "銀",
    "group": "リアクション",
    "jp": "撃破",
    "state": "Production / Defeated",
    "note": "脚から崩れる横倒しにblade glintと細い盤面cutが残る撃破",
    "duration": "0.7 sec",
    "vfx": []
  },
  {
    "id": "silver-revive",
    "piece": "銀",
    "group": "リアクション",
    "jp": "復帰",
    "state": "Production / Revive",
    "note": "立ち上がりに細い刀身glintを重ねる復帰",
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
    "state": "Production / Idle",
    "note": "頭・胸・臀部・尾が別位相で微動する、警戒した木馬の待機",
    "duration": "1.2 sec",
    "vfx": []
  },
  {
    "id": "knight-move",
    "piece": "桂",
    "group": "移動",
    "jp": "移動",
    "state": "Production / Move",
    "note": "各駒固有の移動サンプル",
    "duration": "1.0 sec",
    "vfx": []
  },
  {
    "id": "knight-attack",
    "piece": "桂",
    "group": "攻撃",
    "jp": "攻撃",
    "state": "Production / Attack",
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
    "state": "Production / Hit",
    "note": "蹄元のdust fanで支持替えを強調する被弾",
    "duration": "0.6 sec",
    "vfx": []
  },
  {
    "id": "knight-defeated",
    "piece": "桂",
    "group": "リアクション",
    "jp": "撃破",
    "state": "Production / Defeated",
    "note": "木馬の横倒しとlateral slide dustを組み合わせた撃破",
    "duration": "0.7 sec",
    "vfx": []
  },
  {
    "id": "knight-revive",
    "piece": "桂",
    "group": "リアクション",
    "jp": "復帰",
    "state": "Production / Revive",
    "note": "左右の蹄接地を小さく見せる復帰",
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
    "state": "Production / Idle",
    "note": "衝撃受けと槍架台を見せた低い車体で、長槍がわずかに遅れて揺れる待機",
    "duration": "1.2 sec",
    "vfx": []
  },
  {
    "id": "lance-move",
    "piece": "香",
    "group": "移動",
    "jp": "移動",
    "state": "Production / Move",
    "note": "4輪の転動に対して長槍が遅れて追従する攻城槍車の移動",
    "duration": "1.0 sec",
    "vfx": []
  },
  {
    "id": "lance-attack",
    "piece": "香",
    "group": "攻撃",
    "jp": "攻撃",
    "state": "Production / Attack",
    "note": "長槍の衝突と同時に盤面へ扇状の衝撃・粉塵が流れる攻城槍車の突撃",
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
    "state": "Production / Hit",
    "note": "前輪／軸周辺に短いsparkが走る被弾",
    "duration": "0.6 sec",
    "vfx": []
  },
  {
    "id": "lance-defeated",
    "piece": "香",
    "group": "リアクション",
    "jp": "撃破",
    "state": "Production / Defeated",
    "note": "車体の横倒しと左右wheel skidを強調する撃破",
    "duration": "0.7 sec",
    "vfx": []
  },
  {
    "id": "lance-revive",
    "piece": "香",
    "group": "リアクション",
    "jp": "復帰",
    "state": "Production / Revive",
    "note": "左右の車輪軸が再び立ち上がる短いspark",
    "duration": "1.1 sec",
    "vfx": []
  },
  {
    "id": "bishop-turntable",
    "piece": "角",
    "group": "基本",
    "jp": "360°回転",
    "state": "Model / Turntable",
    "note": "固定Root joint、inner arm、outer blade、CoreUpperまで分離した2関節X機構を全周確認",
    "duration": "6.0 sec",
    "vfx": [],
    "modelReview": true
  },
  {
    "id": "bishop-idle",
    "piece": "角",
    "group": "基本",
    "jp": "待機",
    "state": "Production / Idle",
    "note": "長い静止からCoreUpper、1対角pair、反対pairの順に微調整する角専用5秒Idle",
    "duration": "5.1 sec",
    "vfx": []
  },
  {
    "id": "bishop-move",
    "piece": "角",
    "group": "移動",
    "jp": "移動",
    "state": "Production / Move",
    "note": "Coreのbank後にinner arm、さらにouter bladeが遅れて追従し、X字を保ったまま浮遊する",
    "duration": "1.1 sec",
    "vfx": []
  },
  {
    "id": "bishop-attack",
    "piece": "角",
    "group": "攻撃",
    "jp": "攻撃",
    "state": "Production / Attack",
    "note": "inner hinge→outer hingeの順に二段階で畳み、112fで4方向を同時解放。bladeだけが遅れてovershootする",
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
    "state": "Production / Hit",
    "note": "一方向のouter bladeが先に折れ、2f後に対角bladeが補正し、CoreUpperと残り2腕へ衝撃が伝わる",
    "duration": "0.6 sec",
    "vfx": []
  },
  {
    "id": "bishop-defeated",
    "piece": "角",
    "group": "リアクション",
    "jp": "撃破",
    "state": "Production / Defeated",
    "note": "outer blade→inner hinge→反対pair→Coreの順にX構造を失う段階的な機構崩壊",
    "duration": "0.7 sec",
    "vfx": []
  },
  {
    "id": "bishop-revive",
    "piece": "角",
    "group": "リアクション",
    "jp": "復帰",
    "state": "Production / Revive",
    "note": "Core→inner hinge→一対角blade→反対対角blade→compass lockの順にX機構を再構築する",
    "duration": "1.3 sec",
    "vfx": []
  },
  {
    "id": "rook-turntable",
    "piece": "飛",
    "group": "基本",
    "jp": "360°回転",
    "state": "Model / Turntable",
    "note": "太くした主砲口、船体から分離した4基の推進器、大型rear finを全周確認",
    "duration": "6.0 sec",
    "vfx": [],
    "modelReview": true
  },
  {
    "id": "rook-idle",
    "piece": "飛",
    "group": "基本",
    "jp": "待機",
    "state": "Production / Idle",
    "note": "船体をほぼ静止させ、4基の推進器→主砲が非同期に姿勢補正する6秒待機",
    "duration": "6.1 sec",
    "vfx": []
  },
  {
    "id": "rook-move",
    "piece": "飛",
    "group": "移動",
    "jp": "移動",
    "state": "Production / Move",
    "note": "rear pairで推進を作り、船体→front pairへ受け渡し、停止時は逆順に制動する移動",
    "duration": "1.1 sec",
    "vfx": []
  },
  {
    "id": "rook-attack",
    "piece": "飛",
    "group": "攻撃",
    "jp": "攻撃",
    "state": "Production / Attack",
    "note": "breech lock→砲身recoil→2f後に船体recoil→さらに遅れてthrusterが姿勢回復する貫通砲撃",
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
    "state": "Production / Hit",
    "note": "front-left thruster失調→opposite rear counter-thrustで水平を取り戻す被弾",
    "duration": "0.6 sec",
    "vfx": []
  },
  {
    "id": "rook-defeated",
    "piece": "飛",
    "group": "リアクション",
    "jp": "撃破",
    "state": "Production / Defeated",
    "note": "rear-right故障から補正失敗と連鎖停止を経て、砲身が沈みlift-lossへ至る撃破",
    "duration": "0.7 sec",
    "vfx": []
  },
  {
    "id": "rook-revive",
    "piece": "飛",
    "group": "リアクション",
    "jp": "復帰",
    "state": "Production / Revive",
    "note": "一基ずつ再点火し、全4基のovershoot→砲塔lock→安定hoverへ戻る復帰",
    "duration": "1.3 sec",
    "vfx": []
  },
  {
    "id": "king-turntable",
    "piece": "王",
    "group": "基本",
    "jp": "360°回転",
    "state": "Model / Turntable",
    "note": "王冠のinner cap・peak gem、立体王笏、肩から吊られたcape構造まで全周確認",
    "duration": "6.0 sec",
    "vfx": [],
    "modelReview": true
  },
  {
    "id": "king-idle",
    "piece": "王",
    "group": "基本",
    "jp": "待機",
    "state": "Production / Idle",
    "note": "長い静止から視線、杖、マントの順に遅れて動く王専用8秒Idle。常時bobしない",
    "duration": "8.1 sec",
    "vfx": []
  },
  {
    "id": "king-move",
    "piece": "王",
    "group": "移動",
    "jp": "移動",
    "state": "Production / Move",
    "note": "短い儀礼歩行のまま足を盤面から明確に離し、接地後に胴体→杖→マントが遅れて荷重を受ける",
    "duration": "1.0 sec",
    "vfx": []
  },
  {
    "id": "king-attack",
    "piece": "王",
    "group": "攻撃",
    "jp": "攻撃",
    "state": "Production / Attack",
    "note": "脚に溜めた荷重を骨盤・胸・肩・杖へ流し、全周を薙いだ後にマントが遅れて戻る",
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
    "state": "Production / Hit",
    "note": "杖側の膝と杖で衝撃を止め、頭と王冠は崩さず、重いマントだけが遅れて大きく振られる被弾",
    "duration": "0.6 sec",
    "vfx": []
  },
  {
    "id": "king-defeated",
    "piece": "王",
    "group": "リアクション",
    "jp": "撃破",
    "state": "Production / Defeated",
    "note": "膝→杖→頭／王冠→マントの順で崩れ、broken royal sealは接地付近まで遅れて現れる最終撃破",
    "duration": "0.8 sec",
    "vfx": []
  },
  {
    "id": "king-revive",
    "piece": "王",
    "group": "リアクション",
    "jp": "復帰",
    "state": "Production / Revive",
    "note": "Gallery確認用。マントを逃がし杖を立て、膝を伸ばして戻る復帰。実戦では王は味方化しない",
    "duration": "1.1 sec",
    "vfx": []
  },
  {
    "id": "king-special",
    "piece": "王",
    "group": "特殊",
    "jp": "大技",
    "state": "Production / BossAttack",
    "note": "長い静止溜めで両脚へ圧縮を蓄え、全身を一気に解放して杖を叩き付ける王の円相",
    "duration": "2.6 sec",
    "vfx": [
      "WARNING RINGS",
      "SHOCKWAVE"
    ]
  }
];

const pieceRoutes = {
  pawn:   { key: '歩兵', kanji: '歩', label: '歩兵' },
  gold:   { key: '金',   kanji: '金', label: '金' },
  silver: { key: '銀',   kanji: '銀', label: '銀' },
  knight: { key: '桂',   kanji: '桂', label: '桂' },
  lance:  { key: '香',   kanji: '香', label: '香' },
  bishop: { key: '角',   kanji: '角', label: '角' },
  rook:   { key: '飛',   kanji: '飛', label: '飛' },
  king:   { key: '王',   kanji: '王', label: '王' },
};
const keyOf = item => item.id.startsWith('pawn-') || item.id.startsWith('to-') ? '歩兵' : item.piece;
const route = pieceRoutes[document.body.dataset.piece];
if (!route) throw new Error('Animation Gallery piece page requires data-piece.');
const pagePieces = pieces.filter(item => keyOf(item) === route.key);
const mediaBase = document.body.dataset.mediaBase || '../media/';

const vfxCount = pagePieces.filter(x => x.vfx.length).length;
const modelReviewCount = pagePieces.filter(x => x.modelReview).length;
const motionOnlyCount = pagePieces.length - vfxCount - modelReviewCount;
document.querySelector('#coverage').innerHTML = `
  <div class="coverageItem"><strong>${pagePieces.length}</strong><span>この駒の動画</span></div>
  <div class="coverageItem"><strong>${vfxCount}</strong><span>VFX付き動作</span></div>
  <div class="coverageItem"><strong>${modelReviewCount}</strong><span>360°モデル確認</span></div>
  <p>${route.label}だけを読み込む軽量ページです。他の駒の動画は読み込みません。VFXなしの通常動作は${motionOnlyCount}件です。</p>`;

const groups = ['すべて', ...['基本','移動','攻撃','リアクション','特殊'].filter(group => pagePieces.some(x => x.group === group))];
const filters = document.querySelector('#filters');
let activeGroup='すべて';
for(const group of groups){
  const b=document.createElement('button');
  b.textContent=group;
  b.className=group===activeGroup?'active':'';
  b.onclick=()=>{
    activeGroup=group;
    [...filters.children].forEach(x=>x.classList.toggle('active',x===b));
    render();
  };
  filters.appendChild(b);
}

const root=document.querySelector('#gallery');
let playing=true;
let speed=1;
function render(){
  root.innerHTML='';
  const entries=activeGroup==='すべて'?pagePieces:pagePieces.filter(x=>x.group===activeGroup);
  const section=document.createElement('section');
  section.className='pieceSection';
  section.innerHTML=`<div class="sectionHeading"><div><span class="pieceKanji">${route.kanji}</span><h2>${route.label} — ${entries.length}アニメーション</h2></div><span>${entries.length} / ${pagePieces.length}</span></div><div class="grid"></div>`;
  const grid=section.querySelector('.grid');
  for(const item of entries){
    const tags=item.modelReview?'<span class="motionTag">MODEL 360°</span>':item.vfx.length?item.vfx.map(v=>`<span class="vfxTag">VFX · ${v}</span>`).join(''):'<span class="motionTag">MOTION ONLY</span>';
    const card=document.createElement('article');
    card.className='card';
    card.innerHTML=`<div class="media"><video muted loop autoplay playsinline preload="metadata" poster="${mediaBase}${item.id}.jpg?v=${mediaRevision}"><source src="${mediaBase}${item.id}.mp4?v=${mediaRevision}" type="video/mp4"></video><span class="duration">${item.duration}</span><button class="cardPlay" aria-label="再生/一時停止">Ⅱ</button></div><div class="info"><div class="titleRow"><div><div class="jp">${item.piece}・${item.jp}</div><div class="groupLabel">${item.group}</div></div><div class="tags">${tags}</div></div><div class="state"><span>STATE</span><code>${item.state}</code></div><p>${item.note}</p></div>`;
    const video=card.querySelector('video'),btn=card.querySelector('.cardPlay');
    video.playbackRate=speed;
    if(!playing) video.pause();
    btn.onclick=()=>{if(video.paused){video.play();btn.textContent='Ⅱ'}else{video.pause();btn.textContent='▶'}};
    grid.appendChild(card);
  }
  root.appendChild(section);
}
render();
function videos(){return [...document.querySelectorAll('video')]}
function setPlaying(next){
  playing=next;
  for(const v of videos()){if(playing){v.play().catch(()=>{})}else v.pause()}
  document.querySelector('#toggleAll').textContent=playing?'一時停止':'すべて再生';
}
document.querySelector('#toggleAll').onclick=()=>setPlaying(!playing);
document.querySelectorAll('[data-speed]').forEach(b=>b.onclick=()=>{
  speed=Number(b.dataset.speed);
  videos().forEach(v=>v.playbackRate=speed);
  document.querySelectorAll('[data-speed]').forEach(x=>x.classList.toggle('active',x===b));
});
