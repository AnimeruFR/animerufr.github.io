/* ===================== EFFECTS ===================== */

function magicCircle(c1, c2) {
  c1 = c1 || "#8b5cf6"; c2 = c2 || "#7fd8ff";
  const runes = "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛋᛏᛒᛖᛗᛚᛜᛞᛟ";
  let rt = "", ticks = "";
  for (let i = 0; i < 28; i++) { const a = i / 28 * 360; rt += `<text x="200" y="34" font-size="13" fill="${c2}" opacity=".85" transform="rotate(${a} 200 200)" text-anchor="middle" font-family="Cinzel,serif">${runes[Math.floor(Math.random()*runes.length)]}</text>`; }
  for (let i = 0; i < 72; i++) { const a = i / 72 * 360, l = i % 6 === 0 ? 12 : 6; ticks += `<line x1="200" y1="62" x2="200" y2="${62+l}" stroke="${c1}" stroke-width="1" opacity=".6" transform="rotate(${a} 200 200)"/>`; }
  return `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <g stroke="${c1}" fill="none" stroke-width="1.4">
      <circle cx="200" cy="200" r="190" opacity=".5"/><circle cx="200" cy="200" r="170" opacity=".7"/>
      <circle cx="200" cy="200" r="120" opacity=".6"/><circle cx="200" cy="200" r="92" opacity=".5" stroke="${c2}"/>
      <circle cx="200" cy="200" r="58" opacity=".7" stroke="${c2}"/></g>
    ${ticks}
    <g stroke="${c2}" fill="none" stroke-width="1.2" opacity=".85"><polygon points="200,52 328,290 72,290"/><polygon points="200,348 72,110 328,110"/></g>
    <g stroke="${c1}" fill="none" stroke-width="1" opacity=".7"><polygon points="200,82 305,260 95,260"/><polygon points="200,318 95,140 305,140"/></g>
    ${rt}<circle cx="200" cy="200" r="14" fill="${c2}" opacity=".9"/><circle cx="200" cy="200" r="26" fill="none" stroke="${c1}" stroke-width="1.2"/></svg>`;
}

export function initFx() {
  if (typeof window === 'undefined' || window.__fx_initialized) return;
  window.__fx_initialized = true;

  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* particules */
  const cv = document.createElement("canvas"); cv.id="particles"; document.body.appendChild(cv);
  const ctx = cv.getContext("2d"); let W,H,parts=[];
  const pal=["#b89bff","#8b5cf6","#7fd8ff"];
  function rs(){ W=cv.width=innerWidth; H=cv.height=innerHeight; } rs(); window.addEventListener("resize",rs);
  for(let i=0;i<(innerWidth<700?42:80);i++) parts.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*2.2+.6,vx:(Math.random()-.5)*.3,vy:Math.random()*.5+.15,a:Math.random()*.6+.2,c:pal[(Math.random()*3)|0],s:Math.random()*6,sw:Math.random()*.02+.005});
  let bursts=[];
  function tick(){ if(document.hidden){requestAnimationFrame(tick);return;} ctx.clearRect(0,0,W,H);
    for(const p of parts){ p.s+=p.sw; p.x+=p.vx+Math.sin(p.s)*.4; p.y+=p.vy; if(p.y>H+10){p.y=-10;p.x=Math.random()*W;} if(p.x>W+10)p.x=-10; if(p.x<-10)p.x=W+10;
      ctx.globalAlpha=p.a; ctx.fillStyle=p.c; ctx.shadowColor=p.c; ctx.shadowBlur=8; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,7); ctx.fill(); }
    for(let i=bursts.length-1;i>=0;i--){ const b=bursts[i]; b.x+=b.vx;b.y+=b.vy;b.vx*=.95;b.vy*=.95;b.a-=.02; if(b.a<=0){bursts.splice(i,1);continue;} ctx.globalAlpha=b.a;ctx.fillStyle=b.c;ctx.shadowColor=b.c;ctx.shadowBlur=12;ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,7);ctx.fill(); }
    ctx.globalAlpha=1;ctx.shadowBlur=0; requestAnimationFrame(tick); }
  if(!reduce) tick();
  function burst(){ for(let i=0;i<60;i++) bursts.push({x:W/2,y:H/2,vx:(Math.random()-.5)*14,vy:(Math.random()-.5)*14,r:Math.random()*3+1,a:1,c:pal[(Math.random()*3)|0]}); }

  /* transition "sort" */
  const spell=document.createElement("div"); spell.id="spell"; spell.innerHTML='<div class="g"></div><div class="incant" style="position:absolute;bottom:14%;left:0;right:0;text-align:center;font-family:Cinzel,serif;letter-spacing:.5em;text-transform:uppercase;color:#bdecff;font-size:1.1rem;text-shadow:0 0 24px rgba(127,216,255,.6);opacity:0;transition:opacity .4s"></div>';
  document.body.appendChild(spell);
  const sg=spell.querySelector(".g"); sg.innerHTML=magicCircle();
  const incant=spell.querySelector(".incant");
  const words=["Ul Goa","El Huma","Fula","El Minya","Al Shamak","Cor Leonis","Vita"];
  function playSpell(){ if(reduce) return;
    spell.classList.add("on"); incant.textContent="— "+words[(Math.random()*words.length)|0]+" —"; incant.style.opacity=1;
    document.body.classList.add("spell-active");
    sg.style.transition="none"; sg.style.transform="scale(.2) rotate(-120deg)"; sg.style.opacity=0;
    requestAnimationFrame(()=>{ sg.style.transition="transform .5s cubic-bezier(.2,.8,.2,1),opacity .4s"; sg.style.transform="scale(1) rotate(0)"; sg.style.opacity=1; });
    setTimeout(burst,430);
    setTimeout(()=>{ spell.classList.remove("on"); incant.style.opacity=0; document.body.classList.remove("spell-active"); }, 760);
  }

  /* Return by Death */
  const rbd=document.createElement("div"); rbd.id="rbd"; rbd.innerHTML='<div class="hand">🖐</div><div class="h">死に戻り<br><span style="font-size:.4em;letter-spacing:.3em">RETURN BY DEATH</span></div>'; document.body.appendChild(rbd);
  let rbdBusy=false;
  function playRbd(){ if(rbdBusy) return; rbdBusy=true; rbd.classList.add("on");
    try{ const AC=window.AudioContext||window.webkitAudioContext; const ac=new AC(); if(ac.state==="suspended")ac.resume(); const now=ac.currentTime; const m=ac.createGain(); m.gain.value=.9; m.connect(ac.destination);
      const nb=ac.createBuffer(1,ac.sampleRate*2,ac.sampleRate); const nd=nb.getChannelData(0); for(let i=0;i<nd.length;i++)nd[i]=Math.random()*2-1;
      
      // Bruit de fond angoissant (static)
      (()=>{const src=ac.createBufferSource(),g=ac.createGain(),f=ac.createBiquadFilter();src.buffer=nb;src.loop=true;f.type="bandpass";f.frequency.value=1200;g.gain.setValueAtTime(.0001,now);g.gain.exponentialRampToValueAtTime(.8,now+.1);g.gain.exponentialRampToValueAtTime(.0001,now+3.5);src.connect(f);f.connect(g);g.connect(m);src.start(now);src.stop(now+3.8);})();
      
      // Battement de coeur
      (()=>{const o=ac.createOscillator(),g=ac.createGain();o.type="sine";o.frequency.setValueAtTime(150,now);o.frequency.exponentialRampToValueAtTime(28,now+.6);g.gain.setValueAtTime(.0001,now);g.gain.exponentialRampToValueAtTime(.9,now+.02);g.gain.exponentialRampToValueAtTime(.0001,now+.7);o.connect(g);g.connect(m);o.start(now);o.stop(now+.75);})();
      [.55,.9,1.45].forEach(t=>{const s=now+t,o=ac.createOscillator(),g=ac.createGain();o.type="sine";o.frequency.setValueAtTime(75,s);o.frequency.exponentialRampToValueAtTime(38,s+.18);g.gain.setValueAtTime(.0001,s);g.gain.exponentialRampToValueAtTime(.85,s+.04);g.gain.exponentialRampToValueAtTime(.0001,s+.32);o.connect(g);g.connect(m);o.start(s);o.stop(s+.34);});
      
      // L'appel de la sorcière (hurlement strident)
      (()=>{const t=now+2.2,o=ac.createOscillator(),g=ac.createGain(),lp=ac.createBiquadFilter();o.type="sawtooth";o.frequency.setValueAtTime(60,t);o.frequency.exponentialRampToValueAtTime(1600,t+1.4);lp.type="lowpass";lp.frequency.setValueAtTime(400,t);lp.frequency.exponentialRampToValueAtTime(5000,t+1.4);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.22,t+.3);g.gain.exponentialRampToValueAtTime(.0001,t+1.5);o.connect(lp);lp.connect(g);g.connect(m);o.start(t);o.stop(t+1.55);})();
      
      setTimeout(()=>{try{ac.close();}catch(e){}},4500);
    }catch(e){}
    setTimeout(()=>{ rbd.classList.remove("on"); rbdBusy=false; }, 4300);
  }
  let seq="",hold=null;
  window.addEventListener("keydown",e=>{ if(e.key&&e.key.length===1){seq=(seq+e.key.toLowerCase()).slice(-5); if(seq==="death"){playRbd();seq="";}} if((e.key==="r"||e.key==="R")&&!hold&&!e.repeat) hold=setTimeout(playRbd,1400); });
  window.addEventListener("keyup",e=>{ if(e.key==="r"||e.key==="R"){clearTimeout(hold);hold=null;} });

  /* progress + back-to-top + cursor */
  const pr=document.createElement("div"); pr.id="progress"; document.body.appendChild(pr);
  const tt=document.createElement("button"); tt.id="totop"; tt.innerHTML="↑"; tt.setAttribute("aria-label","Haut"); document.body.appendChild(tt);
  tt.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
  window.addEventListener("scroll",()=>{ const h=document.documentElement,mx=h.scrollHeight-h.clientHeight; pr.style.width=(mx>0?h.scrollTop/mx*100:0)+"%"; tt.classList.toggle("on",h.scrollTop>600); },{passive:true});
  if(!reduce && matchMedia("(pointer:fine)").matches){ let last=0; window.addEventListener("mousemove",e=>{ const n=performance.now(); if(n-last<30)return; last=n; const s=document.createElement("div"); s.className="cursor-spark"; s.style.left=e.clientX+"px"; s.style.top=e.clientY+"px"; const c=pal[(Math.random()*3)|0]; s.style.background="radial-gradient(circle,"+c+",transparent)"; document.body.appendChild(s); s.animate([{transform:"translate(0,0) scale(1)",opacity:.9},{transform:"translate("+((Math.random()-.5)*30)+"px,"+((Math.random()-.5)*30+10)+"px) scale(0)",opacity:0}],{duration:680,easing:"ease-out"}).onfinish=()=>s.remove(); }); }

  /* reveal scan (réutilisable à chaque changement de page) */
  let io;
  function scan(){ fillCircles(); if(!io) io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add("in");io.unobserve(en.target);}}),{threshold:.12});
    document.querySelectorAll(".reveal:not(.in)").forEach(el=>io.observe(el)); }

  window.__fx = { spell:playSpell, rbd:playRbd, scan };
  setTimeout(scan, 60);
}

export function fillCircles() {
  if (typeof window === 'undefined') return;
  document.querySelectorAll(".hero-circle").forEach((el,i)=>{ if(!el.dataset.f){ el.innerHTML = magicCircle(i?"#7fd8ff":"#8b5cf6", i?"#8b5cf6":"#7fd8ff"); el.dataset.f=1; } });
}
