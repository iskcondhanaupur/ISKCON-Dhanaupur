'use client';
import { useEffect, useRef, useState } from 'react';

type Props = {
  name: string;
  subtitle?: string;
  blessing?: string;
  intro?: string;
  sections?: { title: string; items: string[] }[];
  photo?: string; // jaise '/madhuri-mataji.png' (public/ folder me)
  lang?: 'en' | 'hi';
  id?: string;
  headFont?: string;
  bodyFont?: string;
};
type Balloon = { left: number; color: string; dur: number; delay: number; scale: number };
type Star = { x: number; y: number; s: number; d: number };

const COLORS = ['#ffd23f', '#ff9e00', '#ff4d6d', '#c77dff', '#4cc9f0', '#80ed99'];

export default function BirthdayOverlay({
  name,
  subtitle,
  blessing,
  intro,
  sections = [],
  photo,
  lang = 'en',
  id,
  headFont,
  bodyFont,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [stars, setStars] = useState<Star[]>([]);

  // random values sirf client pe (hydration mismatch se bachne ke liye)
  useEffect(() => {
    setBalloons(
      Array.from({ length: 5 }, (_, i) => ({
        left: Math.random() * 92,
        color: COLORS[i % COLORS.length],
        dur: 9 + Math.random() * 7,
        delay: Math.random() * 5,
        scale: 0.7 + Math.random() * 0.7,
      }))
    );
    setStars(
      Array.from({ length: 45 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: 2 + Math.random() * 3,
        d: Math.random() * 3,
      }))
    );
  }, []);

  // peeche ka page scroll na ho
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Fireworks (canvas script)
  useEffect(() => {
    const canvas = canvasRef.current;
    const root = rootRef.current;
    if (!canvas || !root) return;
    const ctx = canvas.getContext('2d')!;
    let w = (canvas.width = root.clientWidth);
    let h = (canvas.height = root.clientHeight);
    const onResize = () => {
      w = canvas.width = root.clientWidth;
      h = canvas.height = root.clientHeight;
    };
    window.addEventListener('resize', onResize);

    type Rocket = { x: number; y: number; ty: number; color: string };
    type Spark = { x: number; y: number; vx: number; vy: number; a: number; color: string };
    const rockets: Rocket[] = [];
    const sparks: Spark[] = [];

    const launch = () =>
      rockets.push({
        x: w * (0.1 + Math.random() * 0.8),
        y: h,
        ty: h * (0.12 + Math.random() * 0.33),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    const explode = (r: Rocket) => {
      for (let i = 0; i < 80; i++) {
        const ang = (Math.PI * 2 * i) / 80;
        const sp = 1.5 + Math.random() * 3.5;
        sparks.push({ x: r.x, y: r.y, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp, a: 1, color: r.color });
      }
    };

    // page khulte hi turant kuch crackers
    const timers = [0, 250, 500, 800].map((t) => setTimeout(launch, t));
    const iv = setInterval(launch, 900);

    let raf = 0;
    const loop = () => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,0.18)';
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.y -= 9;
        ctx.fillStyle = r.color;
        ctx.fillRect(r.x, r.y, 3, 10);
        if (r.y <= r.ty) {
          explode(r);
          rockets.splice(i, 1);
        }
      }
      for (let i = sparks.length - 1; i >= 0; i--) {
        const p = sparks[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04;
        p.vx *= 0.985;
        p.a -= 0.012;
        if (p.a <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = p.a;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(iv);
      timers.forEach(clearTimeout);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const title = lang === 'hi' ? 'जन्मदिन की हार्दिक शुभकामनाएँ!' : 'Happy Birthday!';
  let dl = 5.3;
  const next = () => `${(dl += 0.45).toFixed(2)}s`; // har agla card/bullet thoda baad me pop hoga

  return (
    <div
      id={id}
      ref={rootRef}
      className="bdo-root"
      role="region"
      aria-label="Birthday greeting"
      style={{ ['--hf' as string]: headFont, ['--bf' as string]: bodyFont }}
    >
      <style>{css}</style>

      {stars.map((s, i) => (
        <span key={i} className="bdo-bgstar" style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s, animationDelay: `${s.d}s` }} />
      ))}
      {balloons.map((b, i) => (
        <div
          key={i}
          className="bdo-balloon"
          style={{ left: `${b.left}%`, background: b.color, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s`, ['--sc' as string]: b.scale }}
        />
      ))}
      <canvas ref={canvasRef} className="bdo-canvas" />

      <div className="bdo-scroll">
        <div className="bdo-wrap">
          {/* Photo frame: ~2.5s baad pop up */}
          <div className="bdo-photoframe">
            <div className="bdo-ring bdo-stars">
              {Array.from({ length: 14 }).map((_, i) => (
                <span key={i} style={{ transform: `rotate(${i * (360 / 14)}deg) translateY(-116px)` }}>★</span>
              ))}
            </div>
            <div className="bdo-ring bdo-dash" />
            <div className="bdo-photo">
              {photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photo} alt={name} />
              ) : (
                <span></span>
              )}
            </div>
          </div>

          {/* Text frame ke neeche */}
          {blessing && <p className="bdo-pop bdo-bless" style={{ animationDelay: '3.4s' }}>{blessing}</p>}
          <h1 className="bdo-pop bdo-title" style={{ animationDelay: '3.9s' }}>{title}</h1>
          <h2 className="bdo-pop bdo-name" style={{ animationDelay: '4.4s' }}>{name}</h2>
          <div className="bdo-pop bdo-orn" style={{ animationDelay: '4.7s' }}><i /><span></span><i /></div>
          {subtitle && <p className="bdo-pop bdo-badge" style={{ animationDelay: '4.9s' }}>{subtitle}</p>}
          {intro && <p className="bdo-pop bdo-intro" style={{ animationDelay: '5.3s' }}>{intro}</p>}

          {sections.map((sec, si) => (
            <div key={si} className="bdo-pop bdo-card" style={{ animationDelay: next() }}>
              <h3 className="bdo-cardtitle">{sec.title}</h3>
              <ul>
                {sec.items.map((it, ii) => (
                  <li key={ii} className="bdo-pop bdo-item" style={{ animationDelay: next() }}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const css = `
.bdo-root{position:fixed;inset:0;z-index:99999;overflow:hidden;background:radial-gradient(ellipse at 50% 100%,#5a1030 0%,#1d0617 55%,#0a0310 100%);color:#fff;font-family:var(--bf,Georgia,serif);animation:bdo-in .5s ease both}
@keyframes bdo-in{from{opacity:0}to{opacity:1}}
.bdo-canvas{position:absolute;inset:0;z-index:2;pointer-events:none}
.bdo-bgstar{position:absolute;background:#fff;border-radius:50%;animation:bdo-twinkle 3s ease-in-out infinite}
@keyframes bdo-twinkle{0%,100%{opacity:.15}50%{opacity:1}}
.bdo-balloon{position:absolute;bottom:-130px;width:60px;height:76px;border-radius:50% 50% 50% 50%/60% 60% 40% 40%;z-index:1;opacity:.9;animation:bdo-float linear infinite}
.bdo-balloon::after{content:'';position:absolute;left:50%;top:100%;width:1px;height:50px;background:rgba(255,255,255,.6)}
@keyframes bdo-float{
  0%{transform:translate(0,0) scale(var(--sc,1))}
  25%{transform:translate(18px,-30vh) scale(var(--sc,1))}
  50%{transform:translate(-18px,-65vh) scale(var(--sc,1))}
  75%{transform:translate(18px,-95vh) scale(var(--sc,1))}
  100%{transform:translate(0,-130vh) scale(var(--sc,1))}
}
@keyframes bdo-spin{to{transform:rotate(360deg)}}

.bdo-scroll{position:absolute;inset:0;z-index:3;overflow-y:auto;-webkit-overflow-scrolling:touch}
.bdo-wrap{max-width:720px;margin:0 auto;padding:48px 18px 90px;text-align:center}

/* photo frame */
.bdo-photoframe{position:relative;width:500px;height:500px;margin:0 auto 26px;opacity:0;transform:scale(0);animation:bdo-framepop .9s cubic-bezier(.34,1.56,.64,1) 2.5s forwards}
@keyframes bdo-framepop{to{opacity:1;transform:scale(1)}}
.bdo-ring{position:absolute;inset:0;animation:bdo-spin 22s linear infinite}
.bdo-stars span{position:absolute;top:50%;left:50%;margin:-9px 0 0 -9px;width:18px;height:18px;line-height:18px;text-align:center;font-size:16px;color:#ffd23f;text-shadow:0 0 8px #ffd23f}
.bdo-dash{inset:12px;border:2px dashed rgba(255,210,63,.65);border-radius:50%;animation-direction:reverse;animation-duration:30s}
.bdo-photo{position:absolute;inset:26px;border-radius:50%;overflow:hidden;border:5px solid #ffd23f;background:#2a0c1f;display:flex;align-items:center;justify-content:center;font-size:64px;animation:bdo-glow 3s ease-in-out infinite}
.bdo-photo img{width:100%;height:100%;object-fit:cover;object-position:center top;display:block}
@keyframes bdo-glow{0%,100%{box-shadow:0 0 0 6px rgba(255,210,63,.2),0 0 24px rgba(255,210,63,.5)}50%{box-shadow:0 0 0 10px rgba(255,210,63,.3),0 0 50px rgba(255,210,63,.9)}}

/* text pop-ups */
.bdo-pop{opacity:0;transform:scale(.3);animation:bdo-textpop .7s cubic-bezier(.34,1.56,.64,1) forwards;margin:10px 0}
@keyframes bdo-textpop{to{opacity:1;transform:scale(1)}}
.bdo-bless{font-size:18px;color:#ffd23f;letter-spacing:.04em}
.bdo-title{font-family:var(--hf,Georgia,serif);font-size:clamp(30px,8vw,54px);font-weight:700;line-height:1.25;background:linear-gradient(90deg,#ffb703,#fff3b0,#ffb703);background-size:200% auto;-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 0 14px rgba(255,210,63,.45));animation:bdo-textpop .7s cubic-bezier(.34,1.56,.64,1) forwards,bdo-shine 4s linear infinite}
@keyframes bdo-shine{to{background-position:200% center}}
.bdo-name{font-family:var(--hf,Georgia,serif);font-size:clamp(24px,6vw,38px);font-weight:600;color:#fff}
.bdo-orn{display:flex;align-items:center;justify-content:center;gap:12px}
.bdo-orn i{display:block;width:64px;height:1.5px;background:linear-gradient(90deg,transparent,#ffd23f)}
.bdo-orn i:last-child{background:linear-gradient(270deg,transparent,#ffd23f)}
.bdo-badge{display:inline-block;padding:6px 22px;border-radius:999px;border:1.5px solid #ffd23f;background:rgba(255,210,63,.12);color:#ffd23f;font-size:clamp(16px,3.6vw,20px);font-style:italic}
.bdo-intro{font-size:clamp(15.5px,3.4vw,18px);line-height:1.75;color:rgba(255,255,255,.93);max-width:620px;margin:16px auto 6px}

/* content cards */
.bdo-card{margin:22px 0 0;padding:22px 20px;text-align:left;border:1.5px solid rgba(255,210,63,.55);border-radius:20px;background:rgba(255,255,255,.07);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);box-shadow:0 0 26px rgba(255,210,63,.12)}
.bdo-cardtitle{font-family:var(--hf,Georgia,serif);text-align:center;font-size:clamp(19px,4vw,24px);color:#ffd23f;margin:0 0 12px;padding-bottom:10px;border-bottom:1px solid rgba(255,210,63,.35)}
.bdo-card ul{list-style:none;margin:0;padding:0}
.bdo-item{position:relative;padding-left:26px;font-size:clamp(14.5px,3vw,17px);line-height:1.75;color:rgba(255,255,255,.93);transform-origin:left center}
.bdo-item::before{content:'✦';position:absolute;left:0;color:#ffd23f}

@media (prefers-reduced-motion:reduce){.bdo-balloon,.bdo-ring,.bdo-bgstar,.bdo-photo{animation:none}}
`;