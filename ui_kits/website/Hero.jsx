function Hero() {
  return (
    <section className="hero-section" style={{position:'relative', overflow:'hidden', paddingTop: 40, paddingBottom: 80}}>
      <AnimatedBg variant="cream"/>
      <div className="container hero-grid" style={{position:'relative', zIndex:2, display:'grid', gridTemplateColumns:'1.1fr 0.9fr', gap:48, alignItems:'center'}}>
        <div>
          <span className="eyebrow">Tee Optometry Clinic · Usa River, Arusha</span>
          <h1 className="display-xl" style={{marginTop:16, marginBottom:20}}>
            See clearly.<br/><em style={{color:'var(--iris-700)'}}>Feel seen.</em>
          </h1>
          <p style={{fontSize:19, lineHeight:'30px', color:'var(--ink-700)', maxWidth:480, marginBottom:28}}>
            Book an eye test, get a real conversation, leave with glasses that fit. <em>Macho yanakuchoka? Karibu.</em>
          </p>
          <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
            <a href="#book" className="btn btn-primary btn-lg">Book eye test</a>
            <a href="#eyewear" className="btn btn-ghost btn-lg">Shop eyewear</a>
          </div>
          <div className="hero-stats" style={{display:'flex', gap:20, marginTop:36, alignItems:'center', flexWrap:'wrap'}}>
            <Stat n="2 min" lbl="to book"/>
            <div style={{width:1, height:36, background:'var(--line-200)'}} className="stat-divider"/>
            <Stat n="30 min" lbl="eye exam"/>
            <div style={{width:1, height:36, background:'var(--line-200)'}} className="stat-divider"/>
            <Stat n="500+" lbl="happy patients"/>
          </div>
        </div>
        <div className="hero-orb-wrap" style={{position:'relative', display:'flex', justifyContent:'center'}}>
          <div className="iris-ring" style={{width:304, height:304, borderColor:'var(--iris-500)', opacity:.5}}/>
          <div className="iris-ring" style={{width:304, height:304, borderColor:'var(--coral-300)', animationDelay:'1.3s'}}/>
          <div className="iris-ring" style={{width:304, height:304, borderColor:'var(--iris-300)', animationDelay:'2.6s'}}/>
          <div className="hero-orb" style={{
            width: 304, height: 304, borderRadius: '50%',
            background:'radial-gradient(circle at 35% 35%, #DCEFE7 0%, #0E6B53 60%, #0A3D30 100%)',
            display:'flex', alignItems:'center', justifyContent:'center',
            boxShadow:'0 30px 80px rgba(14,107,83,0.25)',
            animation:'breathe 6s var(--ease-inout) infinite',
            position:'relative', zIndex:2,
          }}>
            <div style={{width:112, height:112, borderRadius:'50%', background:'var(--ink-900)', position:'relative'}}>
              <div style={{position:'absolute', top:21, left:26, width:29, height:29, borderRadius:'50%', background:'white', opacity:.9}}/>
              <div style={{position:'absolute', bottom:22, right:29, width:13, height:13, borderRadius:'50%', background:'white', opacity:.7}}/>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes breathe { 0%,100%{transform:scale(1)} 50%{transform:scale(1.035)} }
        @media (prefers-reduced-motion: reduce){ .hero-orb{animation:none !important} .iris-ring{animation:none !important} }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .hero-orb-wrap { order: -1; }
          .hero-orb, .iris-ring { width: 260px !important; height: 260px !important; }
          .hero-orb > div { width: 96px !important; height: 96px !important; }
          .hero-orb > div > div:nth-child(1) { top:18px !important; left:22px !important; width:26px !important; height:26px !important; }
          .hero-orb > div > div:nth-child(2) { bottom:20px !important; right:24px !important; width:12px !important; height:12px !important; }
        }
        @media (max-width: 640px) {
          .stat-divider { display:none; }
          .hero-stats { gap: 14px !important; }
          .hero-section { padding-top: 24px !important; padding-bottom: 48px !important; }
          .hero-stat-cell > div:first-child { font-size: 24px !important; line-height: 26px !important; }
        }
      `}</style>
    </section>
  );
}

function Stat({n, lbl}) {
  return (
    <div className="hero-stat-cell">
      <div style={{fontFamily:'var(--font-display)', fontSize:28, lineHeight:'30px', color:'var(--ink-900)'}}>{n}</div>
      <div style={{fontSize:12, color:'var(--ink-500)', textTransform:'uppercase', letterSpacing:'.1em', fontWeight:600}}>{lbl}</div>
    </div>
  );
}

window.Hero = Hero;
