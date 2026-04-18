function Eyewear() {
  const { useState } = React;
  const [cat, setCat] = useState(0);

  const categories = [
    {
      id:'luxury', label:'Luxury', sw:'Miwani ya hadhi',
      tagline:"For when the frames matter as much as the lenses.",
      brands:['Tom Ford','Gucci','Prada','Cartier'],
      accent:'#E8C07D', badge:'PREMIUM',
      bg:'radial-gradient(ellipse at 30% 20%, #2a2420 0%, #0f0c0a 70%)',
      frame:{ color:'#E8C07D', lens:'rgba(232,192,125,0.12)', shape:'aviator', thick:2.2, shine:'#FFF5D6' },
    },
    {
      id:'durable', label:'Durable', sw:'Imara na ngumu',
      tagline:"Built for dust, sweat, safari roads, and kids.",
      brands:['Oakley','Ray-Ban active','Wiley X','Silhouette'],
      accent:'var(--iris-500)', badge:'SHOCK · UV · SWEAT',
      bg:'radial-gradient(ellipse at 70% 30%, #1a5f48 0%, #072218 75%)',
      frame:{ color:'#ECF5F0', lens:'rgba(255,255,255,0.1)', shape:'square', thick:3.2, shine:'#ffffff' },
    },
    {
      id:'everyday', label:'Everyday', sw:'Za kila siku',
      tagline:"Light, affordable, and still good looking.",
      brands:['Seen','Ray-Ban classics','Vogue','House frames'],
      accent:'var(--iris-600)', badge:'DAILY DRIVER',
      bg:'radial-gradient(ellipse at 50% 30%, #F5EFE3 0%, #E8DFCC 80%)',
      frame:{ color:'#2a2a2a', lens:'rgba(255,255,255,0.6)', shape:'rectangle', thick:2.4, shine:'#ffffff' },
    },
    {
      id:'sun', label:'Sunglasses', sw:'Miwani ya jua',
      tagline:"UV400, polarized, shaped for the Tanzanian sun.",
      brands:['Ray-Ban','Oakley','Persol','Maui Jim'],
      accent:'#fff', badge:'POLARIZED · UV400',
      bg:'radial-gradient(ellipse at 40% 20%, #FFB97A 0%, #E05025 65%, #8F2A13 100%)',
      frame:{ color:'#1a1a1a', lens:'rgba(0,0,0,0.55)', shape:'aviator', thick:2, shine:'#FFD89E' },
    },
    {
      id:'kids', label:'Kids', sw:'Watoto',
      tagline:"Flexible hinges, fun colors, indestructible temples.",
      brands:['Tomato','Miraflex','Nano Vista','Ray-Ban Junior'],
      accent:'var(--ink-900)', badge:'AGES 3–14',
      bg:'radial-gradient(ellipse at 30% 30%, #FFE1BC 0%, #F4A572 70%)',
      frame:{ color:'#E85D3F', lens:'rgba(255,255,255,0.55)', shape:'round', thick:3, shine:'#ffffff' },
    },
    {
      id:'contacts', label:'Contacts', sw:'Lenzi',
      tagline:"Daily, monthly, toric, colored. Fitting included.",
      brands:['Acuvue','Bausch+Lomb','Alcon','CooperVision'],
      accent:'var(--iris-900)', badge:'DAILY · MONTHLY',
      bg:'radial-gradient(ellipse at 50% 40%, #E4F3ED 0%, #8CBBA8 80%)',
      frame:{ shape:'contact' },
    },
    {
      id:'blue', label:'Blue-light', sw:'Ulinzi wa skrini',
      tagline:"For 10-hour screen days and late-night drives.",
      brands:['Zeiss BlueGuard','Essilor Eyezen','Crizal Prevencia'],
      accent:'#A8D8F0', badge:'BLUE · ANTI-GLARE',
      bg:'radial-gradient(ellipse at 60% 30%, #3E6FA8 0%, #0E3558 75%)',
      frame:{ color:'#0F2A44', lens:'rgba(168,216,240,0.35)', shape:'rectangle', thick:2.2, shine:'#A8D8F0' },
    },
    {
      id:'sport', label:'Sport', sw:'Michezo',
      tagline:"Wraparound fit, no slipping during the run.",
      brands:['Oakley Prizm','Nike Vision','Rudy Project'],
      accent:'#E85D3F', badge:'WRAPAROUND',
      bg:'radial-gradient(ellipse at 40% 30%, #1e2f26 0%, #0a0f0c 80%)',
      frame:{ color:'#0f0f0f', lens:'rgba(232,93,63,0.38)', shape:'wrap', thick:2.6, shine:'#E85D3F' },
    },
  ];

  const c = categories[cat];

  return (
    <section id="eyewear" style={{padding:'96px 0', background:'var(--cream-50)', position:'relative', overflow:'hidden'}}>
      <AnimatedBg variant="cream"/>
      <div className="container" style={{position:'relative', zIndex:2}}>
        <div style={{textAlign:'center', maxWidth:680, margin:'0 auto 40px'}}>
          <span className="eyebrow">Eyewear collection</span>
          <h2 className="display-lg" style={{fontSize:44, lineHeight:'50px', margin:'12px 0 12px'}}>
            Luxury, durable, everyday — <em style={{color:'var(--iris-700)'}}>every taste fulfilled.</em>
          </h2>
          <p style={{color:'var(--ink-500)', fontSize:17, margin:'0 auto', maxWidth:540}}>
            Over 800 frames in store. Whatever your face, budget, or lifestyle — we have something that fits.
          </p>
        </div>

        <div style={{display:'flex', gap:8, flexWrap:'wrap', justifyContent:'center', marginBottom:36}}>
          {categories.map((cc, i) => (
            <button key={cc.id} onClick={()=>setCat(i)} style={{
              padding:'10px 18px', borderRadius:999, cursor:'pointer',
              border: cat===i ? '1.5px solid var(--ink-900)' : '1.5px solid var(--line-200)',
              background: cat===i ? 'var(--ink-900)' : 'white',
              color: cat===i ? 'white' : 'var(--ink-700)',
              fontSize:14, fontWeight:500, fontFamily:'var(--font-sans)',
              transition:'all 180ms var(--ease-out)',
            }}>{cc.label}</button>
          ))}
        </div>

        <div className="eyewear-feature" style={{
          display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:24,
          borderRadius:24, overflow:'hidden', background:'var(--paper)',
          boxShadow:'var(--shadow-lg)', minHeight:380,
        }}>
          <div style={{position:'relative', minHeight:360, background:c.bg, perspective:'1200px', overflow:'hidden'}}>
            <div style={{position:'absolute', top:0, left:0, right:0, bottom:0, background:'radial-gradient(ellipse at 50% 110%, rgba(255,255,255,0.06), transparent 60%)'}}/>
            <span style={{position:'absolute', top:18, right:20, fontSize:10, letterSpacing:'.2em', color:c.accent, fontWeight:700, zIndex:3}}>{c.badge}</span>
            <div key={c.id} className="glasses-3d-stage">
              <Glasses3D frame={c.frame}/>
            </div>
            {/* floor reflection */}
            <div style={{position:'absolute', left:'50%', bottom:'18%', width:'55%', height:12, transform:'translateX(-50%)', background:'radial-gradient(ellipse, rgba(0,0,0,0.35), transparent 70%)', filter:'blur(4px)', zIndex:1}}/>
          </div>
          <div style={{padding:40, display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <span style={{fontSize:12, fontWeight:600, color:c.accent, textTransform:'uppercase', letterSpacing:'.14em', marginBottom:12, mixBlendMode:'normal'}}>{c.label}</span>
            <h3 style={{fontFamily:'var(--font-display)', fontSize:34, fontWeight:400, lineHeight:'40px', color:'var(--ink-900)', margin:'0 0 6px'}}>{c.sw}</h3>
            <p style={{fontSize:19, color:'var(--ink-700)', margin:'0 0 24px', lineHeight:'28px'}}>{c.tagline}</p>

            <div style={{marginBottom:24}}>
              <div style={{fontSize:11, fontWeight:600, color:'var(--ink-500)', textTransform:'uppercase', letterSpacing:'.12em', marginBottom:10}}>Brands we carry</div>
              <div style={{display:'flex', gap:6, flexWrap:'wrap'}}>
                {c.brands.map(b => (
                  <span key={b} style={{
                    padding:'6px 12px', background:'var(--cream-100)', border:'1px solid var(--line-200)',
                    borderRadius:8, fontSize:13, color:'var(--ink-700)', fontFamily:'var(--font-sans)'
                  }}>{b}</span>
                ))}
              </div>
            </div>

            <div style={{display:'flex', alignItems:'center', justifyContent:'flex-end', gap:16, flexWrap:'wrap', marginTop:'auto'}}>
            </div>
          </div>
        </div>

        <div className="eyewear-stats" style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:14, marginTop:24}}>
          {[
            {n:'800+', l:'frames in store'},
            {n:'40+', l:'brands carried'},
            {n:'24 hrs', l:'glasses ready'},
            {n:'1 year', l:'warranty'},
          ].map((s,i) => (
            <div key={i} style={{padding:'20px 18px', background:'var(--paper)', border:'1px solid var(--line-200)', borderRadius:14}}>
              <div style={{fontFamily:'var(--font-display)', fontSize:30, lineHeight:'34px', color:'var(--ink-900)'}}>{s.n}</div>
              <div style={{fontSize:12, color:'var(--ink-500)', textTransform:'uppercase', letterSpacing:'.1em', fontWeight:600, marginTop:4}}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes glassesSpin {
          0%   { transform: rotateY(-26deg) rotateX(6deg) translateY(0); }
          50%  { transform: rotateY(26deg)  rotateX(-4deg) translateY(-6px); }
          100% { transform: rotateY(-26deg) rotateX(6deg) translateY(0); }
        }
        @keyframes contactFloat {
          0%,100% { transform: rotateY(-20deg) rotateX(20deg) translateY(0); }
          50%     { transform: rotateY(20deg)  rotateX(12deg) translateY(-10px); }
        }
        @keyframes fadeIn { from {opacity:0; transform:translateY(10px);} to {opacity:1; transform:translateY(0);} }
        .glasses-3d-stage {
          position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          transform-style: preserve-3d;
          animation: fadeIn 420ms var(--ease-out);
          z-index:2;
        }
        .glasses-3d {
          transform-style: preserve-3d;
          animation: glassesSpin 7s ease-in-out infinite;
          will-change: transform;
          filter: drop-shadow(0 20px 24px rgba(0,0,0,0.35));
        }
        .contact-3d {
          transform-style: preserve-3d;
          animation: contactFloat 6s ease-in-out infinite;
          filter: drop-shadow(0 18px 20px rgba(0,0,0,0.25));
        }
        @media (prefers-reduced-motion: reduce){
          .glasses-3d, .contact-3d { animation: none !important; }
        }
        @media (max-width: 860px) {
          .eyewear-feature { grid-template-columns: 1fr !important; }
          .eyewear-stats { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .eyewear-stats { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Glasses3D({ frame }) {
  if (frame.shape === 'contact') return <ContactLens3D/>;

  const { color, lens, shape, thick, shine } = frame;
  // shape params
  const shapes = {
    aviator:   { rx: 52, ry: 46, skew: 'M 38 42 Q 70 32 100 42' },
    square:    { rx: 46, ry: 42, skew: 'M 44 36 L 102 36' },
    rectangle: { rx: 50, ry: 38, skew: 'M 42 38 L 102 38' },
    round:     { rx: 46, ry: 46, skew: 'M 46 36 Q 74 30 102 36' },
    wrap:      { rx: 56, ry: 40, skew: 'M 34 36 Q 74 22 114 36' },
  };
  const s = shapes[shape] || shapes.rectangle;

  // Two lenses positioned in 3D space, with a bridge and temples
  return (
    <div className="glasses-3d" style={{width:360, height:180, position:'relative'}}>
      {/* Main SVG frame (front face) */}
      <svg viewBox="0 0 360 180" style={{position:'absolute', inset:0, transform:'translateZ(8px)'}}>
        <defs>
          <linearGradient id={`lensGrad-${shape}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.5)"/>
            <stop offset="40%" stopColor="rgba(255,255,255,0.05)"/>
            <stop offset="100%" stopColor="rgba(0,0,0,0.15)"/>
          </linearGradient>
          <linearGradient id={`frameGrad-${shape}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={shine} stopOpacity="0.9"/>
            <stop offset="30%" stopColor={color}/>
            <stop offset="100%" stopColor={color}/>
          </linearGradient>
        </defs>
        {/* Left lens */}
        {shape === 'round'
          ? <circle cx="110" cy="90" r={s.rx} fill={lens} stroke={`url(#frameGrad-${shape})`} strokeWidth={thick*2}/>
          : <rect x={110-s.rx} y={90-s.ry} width={s.rx*2} height={s.ry*2} rx={shape==='aviator'?s.ry:shape==='wrap'?12:8} ry={shape==='aviator'?s.ry:shape==='wrap'?12:8} fill={lens} stroke={`url(#frameGrad-${shape})`} strokeWidth={thick*2}/>
        }
        {/* Right lens */}
        {shape === 'round'
          ? <circle cx="250" cy="90" r={s.rx} fill={lens} stroke={`url(#frameGrad-${shape})`} strokeWidth={thick*2}/>
          : <rect x={250-s.rx} y={90-s.ry} width={s.rx*2} height={s.ry*2} rx={shape==='aviator'?s.ry:shape==='wrap'?12:8} ry={shape==='aviator'?s.ry:shape==='wrap'?12:8} fill={lens} stroke={`url(#frameGrad-${shape})`} strokeWidth={thick*2}/>
        }
        {/* Bridge */}
        <path d={`M ${110+s.rx-2} 90 Q 180 ${shape==='wrap'?76:82} ${250-s.rx+2} 90`} stroke={color} strokeWidth={thick*2} fill="none" strokeLinecap="round"/>
        {/* Shine highlights on lenses */}
        <ellipse cx={90} cy={72} rx={shape==='round'?18:22} ry={8} fill={`url(#lensGrad-${shape})`} opacity="0.9"/>
        <ellipse cx={230} cy={72} rx={shape==='round'?18:22} ry={8} fill={`url(#lensGrad-${shape})`} opacity="0.6"/>
        {/* Nose pads */}
        <circle cx={110+s.rx-4} cy={100} r={2} fill={color} opacity="0.7"/>
        <circle cx={250-s.rx+4} cy={100} r={2} fill={color} opacity="0.7"/>
      </svg>

      {/* Left temple (3D: rotated Y) */}
      <div style={{
        position:'absolute', top:'46%', left:-4, width:80, height: thick*3.5,
        background:`linear-gradient(90deg, transparent 0%, ${color} 14%, ${color} 100%)`,
        transform:'translateZ(4px) rotateY(70deg)',
        transformOrigin:'right center',
        borderRadius: thick,
      }}/>
      {/* Right temple */}
      <div style={{
        position:'absolute', top:'46%', right:-4, width:80, height: thick*3.5,
        background:`linear-gradient(-90deg, transparent 0%, ${color} 14%, ${color} 100%)`,
        transform:'translateZ(4px) rotateY(-70deg)',
        transformOrigin:'left center',
        borderRadius: thick,
      }}/>
      {/* Depth layer (back side of frame) */}
      <svg viewBox="0 0 360 180" style={{position:'absolute', inset:0, transform:'translateZ(-4px)', opacity:0.55}}>
        {shape === 'round'
          ? <><circle cx="110" cy="90" r={s.rx} fill="none" stroke={color} strokeWidth={thick*2}/><circle cx="250" cy="90" r={s.rx} fill="none" stroke={color} strokeWidth={thick*2}/></>
          : <><rect x={110-s.rx} y={90-s.ry} width={s.rx*2} height={s.ry*2} rx={shape==='aviator'?s.ry:8} ry={shape==='aviator'?s.ry:8} fill="none" stroke={color} strokeWidth={thick*2}/><rect x={250-s.rx} y={90-s.ry} width={s.rx*2} height={s.ry*2} rx={shape==='aviator'?s.ry:8} ry={shape==='aviator'?s.ry:8} fill="none" stroke={color} strokeWidth={thick*2}/></>
        }
      </svg>
    </div>
  );
}

function ContactLens3D() {
  return (
    <div className="contact-3d" style={{width:220, height:220, position:'relative'}}>
      <div style={{
        position:'absolute', inset:0, borderRadius:'50%',
        background:'radial-gradient(circle at 40% 35%, rgba(255,255,255,0.95) 0%, rgba(200,230,220,0.55) 30%, rgba(14,107,83,0.35) 70%, rgba(14,107,83,0.1) 100%)',
        border:'2px solid rgba(14,107,83,0.45)',
        boxShadow:'inset 0 0 40px rgba(14,107,83,0.2), 0 20px 40px rgba(0,0,0,0.2)',
        transform:'rotateX(55deg)',
      }}/>
      {/* shine */}
      <div style={{
        position:'absolute', top:'14%', left:'22%', width:'28%', height:'14%',
        background:'radial-gradient(ellipse, rgba(255,255,255,0.9), transparent 70%)',
        transform:'rotateX(55deg)',
        borderRadius:'50%',
      }}/>
      {/* secondary shine */}
      <div style={{
        position:'absolute', top:'45%', left:'60%', width:'12%', height:'6%',
        background:'radial-gradient(ellipse, rgba(255,255,255,0.8), transparent 70%)',
        transform:'rotateX(55deg)',
        borderRadius:'50%',
      }}/>
    </div>
  );
}

window.Eyewear = Eyewear;
