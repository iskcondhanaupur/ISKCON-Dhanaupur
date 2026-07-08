// components/PageBackground.tsx
'use client'

export default function PageBackground() {
  return (
    <>
      <style>{`
        .idw-corner-wave-tl {
          position: absolute; top: 0; left: 0;
          width: clamp(200px, 35vw, 420px); height: auto;
          z-index: 0; pointer-events: none;
        }
        .idw-corner-wave-br {
          position: absolute; bottom: 0; right: 0;
          width: clamp(220px, 38vw, 450px); height: auto;
          z-index: 0; pointer-events: none;
        }
        .idw-leaf-tl {
          position: absolute; top: 4%; right: 4%;
          width: clamp(100px, 15vw, 220px); height: auto;
          z-index: 0; pointer-events: none; opacity: 0.25;
        }
        .idw-leaf-bl {
          position: absolute; bottom: 4%; left: 4%;
          width: clamp(100px, 15vw, 220px); height: auto;
          z-index: 0; pointer-events: none; opacity: 0.25;
        }
      `}</style>

      <svg className="idw-corner-wave-tl" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H280C240 45 210 55 160 85C110 115 95 150 65 210C40 260 25 275 0 300V0Z" fill="#e3d5eb" opacity="0.85" />
        <path d="M0 240C35 215 50 190 75 145C105 90 130 75 190 45C225 28 245 20 265 0" stroke="#a68eb5" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <path d="M0 0H180C145 30 120 45 85 75C50 105 35 130 0 175V0Z" fill="#cbbae0" opacity="0.5" />
      </svg>

      <svg className="idw-corner-wave-br" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M300 300V20C260 65 235 75 185 105C135 135 120 170 90 230C65 280 45 288 0 300H300Z" fill="#bfaecf" opacity="0.75" />
        <path d="M300 60C265 100 245 110 200 135C155 160 140 190 115 240C95 280 85 290 50 300" stroke="#9073aa" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M300 300V110C275 135 255 150 220 175C185 200 170 225 150 260C135 285 125 292 100 300H300Z" fill="#a591bd" opacity="0.4" />
      </svg>

       <svg
        width="220" height="220" viewBox="0 0 200 200"
        style={{ position: 'absolute', top: 25, right: -5, opacity: 0.5, pointerEvents: 'none' }}
      >
        <g fill="none" stroke="var(--gold)" strokeWidth="1">
          <path d="M100 170 C60 140 60 100 100 60 C140 100 140 140 100 170Z" />
          <path d="M100 170 C40 150 30 100 55 55 C90 90 100 130 100 170Z" />
          <path d="M100 170 C160 150 170 100 145 55 C110 90 100 130 100 170Z" />
          <path d="M100 170 C50 165 20 130 25 90 C70 100 95 130 100 170Z" />
          <path d="M100 170 C150 165 180 130 175 90 C130 100 105 130 100 170Z" />
        </g>
      </svg>

      {[
        { top: '12%', left: '22%' }, { top: '18%', right: '32%' },
        { top: '35%', left: '12%' }, { bottom: '22%', right: '16%' },
        { bottom: '12%', left: '35%' }, { top: '56%', right: '9%' },
      ].map((pos, i) => (
        <span key={i} style={{ position: 'absolute', width: 4, height: 4, borderRadius: '50%', background: '#cca462', opacity: 0.4, zIndex: 0, ...pos }} />
      ))}
    </>
  )
}