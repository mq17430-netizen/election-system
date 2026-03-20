<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>عيد مبارك</title>
<link href="https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@700&family=Amiri:wght@400;700&display=swap" rel="stylesheet">
<style>
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

html, body {
  width: 100%; height: 100%;
  overflow: hidden;
  background: #030a1a;
  cursor: crosshair;
  font-family: 'Amiri', serif;
  user-select: none;
}

canvas#stars { position: fixed; inset: 0; z-index: 0; }
canvas#fx    { position: fixed; inset: 0; z-index: 3; pointer-events: none; }

.stage {
  position: fixed; inset: 0; z-index: 2;
  display: flex; align-items: center; justify-content: center;
  pointer-events: none;
}

.card {
  text-align: center;
  padding: 32px 56px 28px;
  border: 1.5px solid rgba(240,192,64,0);
  border-radius: 22px;
  background: rgba(3,10,26,0);
  backdrop-filter: blur(0px);
  transform: translateY(110vh) rotate(-8deg) scale(0.5);
  opacity: 0;
  transition:
    transform 1.2s cubic-bezier(.22,1.5,.36,1),
    opacity   0.6s ease,
    border-color 0.9s ease 0.85s,
    background   0.9s ease 0.85s;
}

.card.landed {
  transform: translateY(0) rotate(0deg) scale(1);
  opacity: 1;
  border-color: rgba(240,192,64,0.30);
  background: rgba(3,10,26,0.58);
}

.crescent {
  font-size: 60px;
  display: block;
  margin-bottom: 8px;
  filter: drop-shadow(0 0 16px #f0c040aa);
  animation: sway 5s ease-in-out infinite;
}

.line1 {
  font-family: 'Scheherazade New', serif;
  font-size: clamp(22px, 4.5vw, 56px);
  font-weight: 700;
  color: #f9e07a;
  line-height: 1.5;
  animation: glow 3s ease-in-out infinite;
}

.line2 {
  font-family: 'Amiri', serif;
  font-size: clamp(13px, 2.4vw, 26px);
  color: #c9a84c;
  margin-top: 12px;
  animation: glow 3s ease-in-out infinite 1.5s;
}

.stars-row {
  margin-top: 14px;
  display: flex; justify-content: center; gap: 16px;
}
.star-ico {
  width: 18px; height: 18px;
  fill: #f0c040;
  filter: drop-shadow(0 0 6px #f0c04099);
  animation: twinkle 2.2s ease-in-out infinite;
}
.star-ico:nth-child(2) { animation-delay: .55s; }
.star-ico:nth-child(3) { animation-delay: 1.1s; }

.hint {
  position: fixed; bottom: 32px; left: 50%;
  transform: translateX(-50%);
  z-index: 4; color: rgba(240,192,64,.6);
  font-size: 16px; letter-spacing: .08em;
  white-space: nowrap; pointer-events: none;
  animation: blink 2s ease-in-out infinite;
  transition: opacity .5s;
}
.hint.gone { opacity: 0; }

@keyframes sway    { 0%,100%{transform:rotate(-4deg) translateY(0)} 50%{transform:rotate(4deg) translateY(-8px)} }
@keyframes glow    { 0%,100%{text-shadow:0 0 30px #f0c04099,0 0 8px #f0c040bb} 50%{text-shadow:0 0 60px #f0c040cc,0 0 22px #f0c040dd,0 0 4px #fff8} }
@keyframes twinkle { 0%,100%{transform:scale(1);opacity:.75} 50%{transform:scale(1.35);opacity:1} }
@keyframes blink   { 0%,100%{opacity:.5} 50%{opacity:1} }
</style>
</head>
<body>

<canvas id="stars"></canvas>
<canvas id="fx"></canvas>

<div class="stage">
  <div class="card" id="card">
    <span class="crescent">☪</span>
    <div class="line1">كل عام وأنتم بألف خير</div>
    <div class="line2">الدكتورة حنان محمد أبو اصيبع</div>
    <div class="stars-row">
      <svg class="star-ico" viewBox="0 0 20 20"><polygon points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7"/></svg>
      <svg class="star-ico" viewBox="0 0 20 20"><polygon points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7"/></svg>
      <svg class="star-ico" viewBox="0 0 20 20"><polygon points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7"/></svg>
    </div>
  </div>
</div>

<div class="hint" id="hint">✦ انقر في أي مكان لتبدأ الاحتفالية ✦</div>

<script>
/* ══ نجوم الخلفية ══ */
const sc = document.getElementById('stars');
const fc = document.getElementById('fx');
const bc = sc.getContext('2d');
const ctx = fc.getContext('2d');
let W, H, starList = [];

function resize() {
  W = sc.width = fc.width = window.innerWidth;
  H = sc.height = fc.height = window.innerHeight;
  starList = Array.from({length:230}, () => ({
    x: Math.random()*W, y: Math.random()*H*.78,
    r: Math.random()*1.4+.3,
    a: Math.random(), sp: Math.random()*.013+.004
  }));
}

let t0 = 0;
(function loop() {
  t0 += .016;
  bc.clearRect(0,0,W,H);
  const g = bc.createRadialGradient(W/2,H*.28,0,W/2,H*.28,H);
  g.addColorStop(0,'#091833'); g.addColorStop(.55,'#04101f'); g.addColorStop(1,'#020810');
  bc.fillStyle=g; bc.fillRect(0,0,W,H);
  starList.forEach(s=>{
    const a=.3+.7*(0.5+0.5*Math.sin(t0*s.sp*44+s.a*20));
    bc.beginPath(); bc.arc(s.x,s.y,s.r,0,Math.PI*2);
    bc.fillStyle=`rgba(255,238,170,${a})`; bc.fill();
  });
  requestAnimationFrame(loop);
})();

/* ══ ألعاب نارية ══ */
const COLORS = ['#f9e07a','#f0c040','#ffb347','#88f7b0','#7ecef4','#ff8fa3','#d4aaff','#ffd700','#00e5ff','#ff6f91'];
const TEXTS  = ['كل عام وأنتم بألف خير','عيد مبارك','مبارك عليكم','✦','☪','★','✿'];

class Particle {
  constructor(x,y,angle,speed,color,isText,text){
    this.x=x; this.y=y;
    this.vx=Math.cos(angle)*speed; this.vy=Math.sin(angle)*speed;
    this.g=.16; this.alpha=1; this.color=color;
    this.isText=isText; this.text=text||'';
    this.size=isText?(Math.random()*7+11):(Math.random()*3+1.5);
    this.decay=isText?(Math.random()*.008+.006):(Math.random()*.02+.011);
    this.rot=Math.random()*Math.PI*2; this.rotSp=(Math.random()-.5)*.09;
    this.trail=[];
  }
  step(){
    this.trail.push({x:this.x,y:this.y,a:this.alpha});
    if(this.trail.length>7) this.trail.shift();
    this.vx*=.987; this.vy+=this.g;
    this.x+=this.vx; this.y+=this.vy;
    this.alpha-=this.decay; this.rot+=this.rotSp;
    return this.alpha>0.02;
  }
  draw(){
    ctx.save(); ctx.globalAlpha=this.alpha;
    if(this.isText){
      ctx.translate(this.x,this.y); ctx.rotate(this.rot);
      ctx.font=`bold ${this.size}px 'Scheherazade New',Amiri,serif`;
      ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillStyle=this.color; ctx.shadowColor=this.color; ctx.shadowBlur=16;
      ctx.fillText(this.text,0,0);
    } else {
      this.trail.forEach((t,i)=>{
        ctx.globalAlpha=t.a*(i/this.trail.length)*.3;
        ctx.beginPath(); ctx.arc(t.x,t.y,this.size*.5,0,Math.PI*2);
        ctx.fillStyle=this.color; ctx.fill();
      });
      ctx.globalAlpha=this.alpha;
      ctx.beginPath(); ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
      ctx.fillStyle=this.color; ctx.shadowColor=this.color; ctx.shadowBlur=14;
      ctx.fill();
    }
    ctx.restore();
  }
}

class Rocket {
  constructor(cx,cy){
    /* ينطلق من أسفل الشاشة باتجاه موضع النقر */
    this.x = cx + (Math.random()-.5)*80;
    this.y = H + 8;
    const ang = Math.atan2(cy - this.y, cx - this.x) + (Math.random()-.5)*(Math.PI/6);
    const spd = 13 + Math.random()*9;
    this.vx=Math.cos(ang)*spd; this.vy=Math.sin(ang)*spd;
    this.grav=.19;
    this.targetY = cy - Math.random()*60;
    this.color=COLORS[Math.floor(Math.random()*COLORS.length)];
    this.trail=[]; this.done=false;
  }
  step(){
    this.trail.push({x:this.x,y:this.y});
    if(this.trail.length>22) this.trail.shift();
    this.vy+=this.grav; this.x+=this.vx; this.y+=this.vy;
    if(this.vy>=0 || this.y<=this.targetY){ this.done=true; return false; }
    return true;
  }
  draw(){
    for(let i=0;i<this.trail.length;i++){
      ctx.globalAlpha=(i/this.trail.length)*.6;
      ctx.beginPath();
      ctx.arc(this.trail[i].x,this.trail[i].y,2.5*(i/this.trail.length),0,Math.PI*2);
      ctx.fillStyle=this.color; ctx.shadowColor=this.color; ctx.shadowBlur=8; ctx.fill();
    }
    ctx.globalAlpha=1;
    ctx.beginPath(); ctx.arc(this.x,this.y,3.8,0,Math.PI*2);
    ctx.fillStyle='#fff'; ctx.shadowColor=this.color; ctx.shadowBlur=20; ctx.fill();
  }
}

let parts=[], rockets=[];

function explode(x,y){
  const n=60+Math.floor(Math.random()*25);
  for(let i=0;i<n;i++){
    const angle=(i/n)*Math.PI*2+Math.random()*.4;
    const spd=2+Math.random()*7;
    parts.push(new Particle(x,y,angle,spd,COLORS[Math.floor(Math.random()*COLORS.length)],false,''));
  }
  for(let i=0;i<5;i++){
    const angle=(i/5)*Math.PI*2+Math.random()*.5;
    const spd=1.5+Math.random()*3.5;
    parts.push(new Particle(x,y,angle,spd,COLORS[Math.floor(Math.random()*COLORS.length)],true,TEXTS[Math.floor(Math.random()*TEXTS.length)]));
  }
}

function launchAt(cx,cy){
  const num=2+Math.floor(Math.random()*3);
  for(let i=0;i<num;i++)
    setTimeout(()=>rockets.push(new Rocket(cx,cy)), i*120+Math.random()*70);
}

(function fxLoop(){
  ctx.clearRect(0,0,W,H);
  rockets=rockets.filter(r=>{ const ok=r.step(); if(!ok&&r.done) explode(r.x,r.y); if(ok) r.draw(); return ok; });
  parts=parts.filter(p=>{ const ok=p.step(); if(ok) p.draw(); return ok; });
  requestAnimationFrame(fxLoop);
})();

/* ══ التفاعل ══ */
const card = document.getElementById('card');
const hint = document.getElementById('hint');
let ready = false;
let touchFired = false;

function firstLaunch(){
  ready = true;
  hint.classList.add('gone');
  card.classList.add('landed');
  setTimeout(()=>{
    for(let i=0;i<6;i++)
      setTimeout(()=>launchAt(W*(.1+Math.random()*.8), H*(.15+Math.random()*.4)), i*200);
  }, 1000);
}

function handlePoint(cx, cy){
  if(!ready){ firstLaunch(); return; }
  launchAt(cx, cy);
}

/* ── لمس الموبايل ── */
document.addEventListener('touchstart', e=>{
  e.preventDefault();
  touchFired = true;
  setTimeout(()=>{ touchFired = false; }, 600);
  for(const t of e.changedTouches)
    handlePoint(t.clientX, t.clientY);
}, { passive: false });

/* ── ماوس الحاسبة ── */
document.addEventListener('click', e=>{
  if(touchFired) return;
  handlePoint(e.clientX, e.clientY);
});

document.addEventListener('contextmenu', e=> e.preventDefault());

window.addEventListener('resize', resize);
resize();
</script>
</body>
</html>
