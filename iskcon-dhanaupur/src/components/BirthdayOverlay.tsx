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
  soundSrc?: string; // crackers ki awaaz ki file (public/ me), jaise '/crackers.mp3'
};
type Balloon = { left: number; color: string; dur: number; delay: number; scale: number };
type Star = { x: number; y: number; s: number; d: number };

// Light background ke liye gehre/saturated colors (website ke plum + gold ke saath mel khate hue)
const COLORS = ['#b8860b', '#e0a800', '#7b2d6b', '#c2185b', '#e65100', '#6a1b9a'];

const Lotus = () => (
  <svg width="38" height="38" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
    <path d="M32 6C40 18 40 34 32 46C24 34 24 18 32 6Z" />
    <path d="M30 47C16 45 8 35 6 22C18 22 28 31 30 47Z" opacity=".85" />
    <path d="M34 47C48 45 56 35 58 22C46 22 36 31 34 47Z" opacity=".85" />
    <path d="M27 51C15 55 6 51 2 43C12 39 22 43 27 51Z" opacity=".65" />
    <path d="M37 51C49 55 58 51 62 43C52 39 42 43 37 51Z" opacity=".65" />
  </svg>
);

type SFX = { launch: () => void; boom: () => void };

// Rocket upar jaane ki seeti
function whistle(ctx: AudioContext, out: AudioNode) {
  const t = ctx.currentTime;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = 'sine';
  o.frequency.setValueAtTime(500, t);
  o.frequency.exponentialRampToValueAtTime(1800, t + 0.7);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.05, t + 0.05);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
  o.connect(g).connect(out);
  o.start(t);
  o.stop(t + 0.75);
}

// Dhamaka + chhote crackles
function boom(ctx: AudioContext, out: AudioNode, noise: AudioBuffer) {
  const t = ctx.currentTime;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = 'sine';
  o.frequency.setValueAtTime(140, t);
  o.frequency.exponentialRampToValueAtTime(40, t + 0.35);
  g.gain.setValueAtTime(0.35, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
  o.connect(g).connect(out);
  o.start(t);
  o.stop(t + 0.45);

  const n = ctx.createBufferSource();
  n.buffer = noise;
  const lp = ctx.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.setValueAtTime(2500, t);
  lp.frequency.exponentialRampToValueAtTime(300, t + 0.5);
  const ng = ctx.createGain();
  ng.gain.setValueAtTime(0.25, t);
  ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
  n.connect(lp).connect(ng).connect(out);
  n.start(t);
  n.stop(t + 0.55);

  for (let i = 0; i < 8; i++) {
    const tt = t + 0.1 + Math.random() * 0.6;
    const c = ctx.createBufferSource();
    c.buffer = noise;
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 3000;
    const cg = ctx.createGain();
    cg.gain.setValueAtTime(0.08, tt);
    cg.gain.exponentialRampToValueAtTime(0.0001, tt + 0.04);
    c.connect(hp).connect(cg).connect(out);
    c.start(tt, Math.random() * 0.5);
    c.stop(tt + 0.05);
  }
}

const SoundIcon = ({ on }: { on: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 5 6 9H3v6h3l5 4V5z" />
    {on ? (
      <>
        <path d="M15.5 8.5a5 5 0 0 1 0 7" />
        <path d="M18.5 5.5a9 9 0 0 1 0 13" />
      </>
    ) : (
      <path d="m16 9 5 6m0-6-5 6" />
    )}
  </svg>
);

// Pehle sirf ye message dikhega. Volume button par tap karte hi asli page khulega
export default function BirthdayOverlay(props: Props) {
  const [started, setStarted] = useState(false);

  // gate dikhte waqt peeche ka page scroll na ho
  useEffect(() => {
    if (started) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [started]);

  if (started) return <BirthdayOverlayInner {...props} />;

  const hi = props.lang === 'hi';
  return (
    <div
      id={props.id}
      className="bdg-root"
      role="dialog"
      aria-modal="true"
      aria-label="Sound"
      style={{ ['--hf' as string]: props.headFont, ['--bf' as string]: props.bodyFont }}
    >
      <style>{gateCss}</style>
      <div className="bdg-box">
        <p className="bdg-msg">
          {hi
            ? 'वॉल्यूम बटन पर टैप करें'
            : 'Tap the volume button'}
        </p>
        <button className="bdg-btn" onClick={() => setStarted(true)} aria-label={hi ? 'वॉल्यूम' : 'Volume'}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M11 5 6 9H3v6h3l5 4V5z" />
            <path d="M15.5 8.5a5 5 0 0 1 0 7" />
            <path d="M18.5 5.5a9 9 0 0 1 0 13" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function BirthdayOverlayInner({
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
  soundSrc = '/crackers.mp3',
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [stars, setStars] = useState<Star[]>([]);
  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const sfxRef = useRef<SFX>({ launch: () => {}, boom: () => {} });
  const [soundOn, setSoundOn] = useState(true);
  const [needsTap, setNeedsTap] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileOkRef = useRef(false); // asli awaaz ki file mil gayi to code wali awaaz band

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

  // Fireworks ki awaaz (Web Audio se browser me hi banti hai, koi audio file nahi => 0 KB)
  useEffect(() => {
    const AC = window.AudioContext || (window as any).webkitAudioContext;
    if (!AC) return;
    const ctx: AudioContext = new AC();
    const master = ctx.createGain();
    master.gain.value = 0.8;
    master.connect(ctx.destination);
    const noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = noise.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    ctxRef.current = ctx;
    masterRef.current = master;
    sfxRef.current = {
      launch: () => ctx.state === 'running' && !fileOkRef.current && whistle(ctx, master),
      boom: () => ctx.state === 'running' && !fileOkRef.current && boom(ctx, master, noise),
    } as SFX;
    setNeedsTap(ctx.state !== 'running');

    // Browser bina tap ke awaaz allow nahi karta: pehle tap/click/key par chalu ho jayegi
    const unlock = () => { ctx.resume().then(() => setNeedsTap(false)).catch(() => {}); };
    const evs = ['pointerdown', 'touchstart', 'keydown'];
    evs.forEach((e) => window.addEventListener(e, unlock, { once: true }));
    return () => {
      evs.forEach((e) => window.removeEventListener(e, unlock));
      sfxRef.current = { launch: () => {}, boom: () => {} };
      ctx.close().catch(() => {});
    };
  }, []);

  // Asli crackers ki awaaz (public/crackers.mp3). File na mile to upar wali code-wali awaaz chalti rahegi
  useEffect(() => {
    if (!soundSrc) return;
    const a = new Audio(soundSrc);
    a.loop = true;
    a.volume = 0.7; // awaaz kam/zyada karne ke liye 0 se 1 ke beech
    a.preload = 'auto';
    audioRef.current = a;
    const ok = () => { fileOkRef.current = true; };
    a.addEventListener('canplay', ok);
    a.play().then(() => setNeedsTap(false)).catch(() => {}); // blocked ho to pehle tap par chalegi
    const unlock = () => { a.play().then(() => setNeedsTap(false)).catch(() => {}); };
    const evs = ['pointerdown', 'touchstart', 'keydown'];
    evs.forEach((e) => window.addEventListener(e, unlock, { once: true }));
    return () => {
      evs.forEach((e) => window.removeEventListener(e, unlock));
      a.removeEventListener('canplay', ok);
      a.pause();
      a.src = '';
      audioRef.current = null;
      fileOkRef.current = false;
    };
  }, [soundSrc]);

  useEffect(() => {
    if (masterRef.current) masterRef.current.gain.value = soundOn ? 0.8 : 0;
    if (audioRef.current) audioRef.current.muted = !soundOn;
  }, [soundOn]);

  const toggleSound = () => {
    if (needsTap) {
      ctxRef.current?.resume().catch(() => {});
      audioRef.current?.play().catch(() => {});
      setNeedsTap(false);
      setSoundOn(true);
      return;
    }
    setSoundOn((v) => !v);
  };

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

    const launch = () => {
      sfxRef.current.launch();
      rockets.push({
        x: w * (0.1 + Math.random() * 0.8),
        y: h,
        ty: h * (0.12 + Math.random() * 0.33),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    };
    const explode = (r: Rocket) => {
      sfxRef.current.boom();
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
      // purane frame ko halka mitao (trail effect), light background pe bhi dikhe isliye 'source-over' se draw
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,0.18)';
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';
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
        ctx.arc(p.x, p.y, 2.4, 0, Math.PI * 2);
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

  const title = lang === 'hi' ? 'जन्मदिन की हार्दिक शुभकामनाएँ!' : 'जन्मदिन की हार्दिक शुभकामनाएँ!';
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

      {/* soft background shapes */}
      <div className="bdo-blob b1" />
      <div className="bdo-blob b2" />
      <div className="bdo-blob b3" />

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

      <button className={`bdo-sound${needsTap ? ' pulse' : ''}`} onClick={toggleSound} aria-label="Toggle sound">
        <SoundIcon on={soundOn && !needsTap} />
        {needsTap && <span>{lang === 'hi' ? 'ध्वनि के लिए टैप करें' : 'Tap for sound'}</span>}
      </button>

      <div className="bdo-scroll">
        <div className="bdo-wrap">
          {/* Photo frame: ~2.5s baad pop up */}
          <div className="bdo-photoframe">
            <div className="bdo-ring bdo-stars">
              {Array.from({ length: 14 }).map((_, i) => (
                <span key={i} style={{ transform: `rotate(${i * (360 / 14)}deg) translateY(calc(var(--s) / -2 + 4px))` }}>★</span>
              ))}
            </div>
            <div className="bdo-ring bdo-dash" />
            <div className="bdo-photo">
              {photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photo} alt={name} />
              ) : (
                <span>🪷</span>
              )}
            </div>
          </div>

          {/* Text frame ke neeche */}
          {blessing && <p className="bdo-pop bdo-bless" style={{ animationDelay: '3.4s' }}>{blessing}</p>}
          <h1 className="bdo-pop bdo-title" style={{ animationDelay: '3.9s' }}>{title}</h1>
          <h2 className="bdo-pop bdo-name" style={{ animationDelay: '4.4s' }}>{name}</h2>
          <div className="bdo-pop bdo-orn" style={{ animationDelay: '4.7s' }}><i /><span className="bdo-lotus"><Lotus /></span><i /></div>
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

// "Volume button par tap karein" wale pehle screen ki styling
const gateCss = `
.bdg-root{--bm:var(--maroon,#4a1a4a);--bg:var(--gold,#b8860b);--bc:var(--cream,#fdf9f3);--bp:var(--parchment,#f6ecdb);
  position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;padding:20px;color:var(--bm);font-family:var(--bf,Georgia,serif);
  background:linear-gradient(180deg,var(--bc) 0%,var(--bp) 100%)}
.bdg-box{max-width:420px;width:100%;text-align:center;padding:32px 24px;border:1.5px solid color-mix(in srgb,var(--bg) 60%,transparent);border-radius:20px;background:rgba(255,255,255,.72);box-shadow:0 6px 24px color-mix(in srgb,var(--bm) 10%,transparent)}
.bdg-msg{font-family:var(--hf,Georgia,serif);font-size:clamp(18px,4.5vw,22px);line-height:1.6;margin:0 0 24px}
.bdg-btn{width:88px;height:88px;border-radius:50%;border:2px solid var(--bg);background:var(--bm);color:var(--bg);display:inline-flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 14px color-mix(in srgb,var(--bm) 25%,transparent);animation:bdg-pulse 1.6s ease-in-out infinite}
@keyframes bdg-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}
`;

const css = `
/* Website ke colors (--maroon, --gold, --cream, --parchment) use hote hain; na mile to ye fallback */
.bdo-root{--bm:var(--maroon,#4a1a4a);--bg:var(--gold,#b8860b);--bc:var(--cream,#fdf9f3);--bp:var(--parchment,#f6ecdb);
  position:fixed;inset:0;z-index:99999;overflow:hidden;color:var(--bm);font-family:var(--bf,Georgia,serif);animation:bdo-in .5s ease both;
  background:linear-gradient(180deg,var(--bc) 0%,var(--bp) 100%)}
@keyframes bdo-in{from{opacity:0}to{opacity:1}}
.bdo-blob{position:absolute;border-radius:50%;z-index:0;pointer-events:none}
.bdo-blob.b1{top:-130px;left:-110px;width:340px;height:340px;background:color-mix(in srgb,var(--bg) 22%,transparent)}
.bdo-blob.b2{bottom:-150px;right:-130px;width:400px;height:400px;background:color-mix(in srgb,var(--bm) 14%,transparent)}
.bdo-blob.b3{top:38%;right:-100px;width:220px;height:220px;background:color-mix(in srgb,var(--bg) 14%,transparent)}
.bdo-canvas{position:absolute;inset:0;z-index:2;pointer-events:none}
.bdo-bgstar{position:absolute;background:var(--bg);border-radius:50%;animation:bdo-twinkle 3s ease-in-out infinite}
@keyframes bdo-twinkle{0%,100%{opacity:.1}50%{opacity:.7}}
.bdo-balloon{position:absolute;bottom:-130px;width:60px;height:76px;border-radius:50% 50% 50% 50%/60% 60% 40% 40%;z-index:1;opacity:.85;box-shadow:inset -8px -8px 16px rgba(0,0,0,.14),inset 8px 8px 12px rgba(255,255,255,.4);animation:bdo-float linear infinite}
.bdo-balloon::after{content:'';position:absolute;left:50%;top:100%;width:1px;height:50px;background:color-mix(in srgb,var(--bm) 40%,transparent)}
@keyframes bdo-float{
  0%{transform:translate(0,0) scale(var(--sc,1))}
  25%{transform:translate(18px,-30vh) scale(var(--sc,1))}
  50%{transform:translate(-18px,-65vh) scale(var(--sc,1))}
  75%{transform:translate(18px,-95vh) scale(var(--sc,1))}
  100%{transform:translate(0,-130vh) scale(var(--sc,1))}
}
@keyframes bdo-spin{to{transform:rotate(360deg)}}

.bdo-scroll{position:absolute;inset:0;z-index:3;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}
.bdo-wrap{max-width:720px;margin:0 auto;padding:48px 18px 90px;text-align:center}

/* photo frame: size yahan se badlo (desktop max 500px, mobile pe screen ke hisaab se chhota ho jata hai) */
.bdo-photoframe{--s:min(500px,88vw);position:relative;width:var(--s);height:var(--s);margin:0 auto 26px;opacity:0;transform:scale(0);animation:bdo-framepop .9s cubic-bezier(.34,1.56,.64,1) 2.5s forwards}
@keyframes bdo-framepop{to{opacity:1;transform:scale(1)}}
.bdo-ring{position:absolute;inset:0;animation:bdo-spin 22s linear infinite}
.bdo-stars span{position:absolute;top:50%;left:50%;margin:-9px 0 0 -9px;width:18px;height:18px;line-height:18px;text-align:center;font-size:16px;color:var(--bg);text-shadow:0 0 8px color-mix(in srgb,var(--bg) 60%,transparent)}
.bdo-dash{inset:12px;border:2px dashed color-mix(in srgb,var(--bg) 70%,transparent);border-radius:50%;animation-direction:reverse;animation-duration:30s}
.bdo-photo{position:absolute;inset:26px;border-radius:50%;overflow:hidden;border:5px solid var(--bg);background:var(--bp);display:flex;align-items:center;justify-content:center;font-size:64px;animation:bdo-glow 3s ease-in-out infinite}
.bdo-photo img{width:100%;height:100%;object-fit:cover;object-position:center top;display:block}
@keyframes bdo-glow{0%,100%{box-shadow:0 0 0 6px color-mix(in srgb,var(--bg) 22%,transparent),0 0 24px color-mix(in srgb,var(--bg) 45%,transparent)}50%{box-shadow:0 0 0 10px color-mix(in srgb,var(--bg) 30%,transparent),0 0 46px color-mix(in srgb,var(--bg) 75%,transparent)}}

/* text pop-ups */
.bdo-pop{opacity:0;transform:scale(.3);animation:bdo-textpop .7s cubic-bezier(.34,1.56,.64,1) forwards;margin:10px 0}
@keyframes bdo-textpop{to{opacity:1;transform:scale(1)}}
.bdo-bless{font-size:18px;color:var(--bg);font-weight:600;letter-spacing:.04em}
.bdo-title{font-family:var(--hf,Georgia,serif);font-size:clamp(30px,8vw,54px);font-weight:700;line-height:1.25;background:linear-gradient(90deg,var(--bm),#8e3a80,var(--bm));background-size:200% auto;-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 2px 6px color-mix(in srgb,var(--bg) 30%,transparent));animation:bdo-textpop .7s cubic-bezier(.34,1.56,.64,1) forwards,bdo-shine 5s linear infinite}
@keyframes bdo-shine{to{background-position:200% center}}
.bdo-name{font-family:var(--hf,Georgia,serif);font-size:clamp(24px,6vw,38px);font-weight:600;color:var(--bm)}
.bdo-orn{display:flex;align-items:center;justify-content:center;gap:12px}
.bdo-orn i{display:block;width:64px;height:1.5px;background:linear-gradient(90deg,transparent,var(--bg))}
.bdo-orn i:last-child{background:linear-gradient(270deg,transparent,var(--bg))}
.bdo-lotus{color:var(--bg);display:flex}
.bdo-badge{display:inline-block;padding:7px 24px;border-radius:999px;border:1.5px solid var(--bg);background:var(--bm);color:var(--bg);font-weight:600;font-size:clamp(16px,3.6vw,20px);box-shadow:0 4px 14px color-mix(in srgb,var(--bm) 25%,transparent)}
.bdo-intro{font-size:clamp(15.5px,3.4vw,18px);line-height:1.75;color:color-mix(in srgb,var(--bm) 90%,white);max-width:620px;margin:16px auto 6px}

/* content cards */
.bdo-card{margin:22px 0 0;padding:22px 20px;text-align:left;border:1.5px solid color-mix(in srgb,var(--bg) 60%,transparent);border-radius:20px;background:rgba(255,255,255,.72);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);box-shadow:0 6px 24px color-mix(in srgb,var(--bm) 10%,transparent)}
.bdo-cardtitle{font-family:var(--hf,Georgia,serif);text-align:center;font-size:clamp(19px,4vw,24px);color:var(--bm);margin:0 0 12px;padding-bottom:10px;border-bottom:1px solid color-mix(in srgb,var(--bg) 45%,transparent)}
.bdo-card ul{list-style:none;margin:0;padding:0}
.bdo-item{position:relative;padding-left:26px;font-size:clamp(14.5px,3vw,17px);line-height:1.75;color:color-mix(in srgb,var(--bm) 88%,white);transform-origin:left center}
.bdo-item::before{content:'✦';position:absolute;left:0;color:var(--bg)}

.bdo-sound{position:absolute;top:14px;right:14px;z-index:5;display:flex;align-items:center;gap:8px;padding:9px 13px;border-radius:999px;border:1.5px solid var(--bg);background:var(--bm);color:var(--bg);font-size:14px;font-family:inherit;cursor:pointer;box-shadow:0 4px 14px color-mix(in srgb,var(--bm) 25%,transparent)}
.bdo-sound.pulse{animation:bdo-pulse 1.6s ease-in-out infinite}
@keyframes bdo-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}

@media (prefers-reduced-motion:reduce){.bdo-balloon,.bdo-ring,.bdo-bgstar,.bdo-photo{animation:none}}
`;