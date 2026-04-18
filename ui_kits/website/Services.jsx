const eyeIcon = <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>;
const shieldIcon = <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>;
const babyIcon = <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12h.01M15 12h.01M10 16s.5 1 2 1 2-1 2-1"/><path d="M17.5 9a4 4 0 0 1-3.5 2 4 4 0 0 1-3.5-2"/><circle cx="12" cy="12" r="10"/></svg>;
const monitorIcon = <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>;
const glassesIcon = <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M10 15h4M2 11l3-5h4M22 11l-3-5h-4"/></svg>;
const sunIcon = <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>;
const circleIcon = <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg>;
const sparkIcon = <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>;

function ServiceCard({icon, title, titleSw, desc, price, compact}) {
  return (
    <div className="card" style={{padding: compact?18:22, display:'flex', flexDirection:'column', gap:8}}>
      <div style={{width:42, height:42, borderRadius:12, background:'var(--iris-100)', color:'var(--iris-700)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:6}}>{icon}</div>
      <h3 style={{margin:0, fontSize:18, lineHeight:'24px'}}>{title}</h3>
      {titleSw && <div style={{fontFamily:'var(--font-display)', fontStyle:'italic', color:'var(--iris-700)', fontSize:15, marginTop:-4}}>{titleSw}</div>}
      <p style={{fontSize:14, lineHeight:'22px', color:'var(--ink-500)', margin:'4px 0 0'}}>{desc}</p>
      {price && <div style={{marginTop:10, fontFamily:'var(--font-mono)', fontSize:13, fontWeight:500, color:'var(--ink-700)'}}>{price}</div>}
    </div>
  );
}

function Services() {
  return (
    <section id="clinic" style={{padding:'96px 0', background:'var(--cream-100)', position:'relative', overflow:'hidden'}}>
      <AnimatedBg variant="cream"/>
      <div className="container" style={{position:'relative', zIndex:2}}>
        <div style={{textAlign:'center', maxWidth:640, margin:'0 auto 48px'}}>
          <span className="eyebrow">Two sides, one clinic</span>
          <h2 className="display-lg" style={{fontSize:46, lineHeight:'52px', margin:'12px 0 12px'}}>
            Clinical care + eyewear you'll actually wear.
          </h2>
          <p style={{color:'var(--ink-500)', fontSize:17, margin:'0 auto', maxWidth:520}}>
            Medical eye care on one side. A curated frame shop on the other. Walk through both in under an hour.
          </p>
        </div>

        <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:18}}>
          <div style={{width:8, height:8, borderRadius:'50%', background:'var(--iris-600)'}}/>
          <h3 style={{margin:0, fontSize:22}}>Tee Optometry Clinic</h3>
          <span style={{fontFamily:'var(--font-display)', fontStyle:'italic', color:'var(--ink-500)', fontSize:18}}>— where every pair of eyes gets the time it deserves</span>
        </div>
        <div className="svc-grid" style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:16, marginBottom:48}}>
          <ServiceCard icon={eyeIcon} title="Comprehensive eye exam" titleSw="Uchunguzi kamili" desc="Vision, pressure, retina health. About 30 minutes." price="TZS 25,000"/>
          <ServiceCard icon={shieldIcon} title="Disease screening" titleSw="Uchunguzi wa magonjwa" desc="Glaucoma, cataract, diabetic retinopathy." price="TZS 35,000"/>
          <ServiceCard icon={babyIcon} title="Children's vision" titleSw="Macho ya watoto" desc="Amblyopia, first check-ups, school reports."/>
          <ServiceCard icon={monitorIcon} title="Dry eye & screen strain" titleSw="Macho ya kompyuta" desc="Treatment for long-hours-on-laptop eyes."/>
        </div>

        <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:18}}>
          <div style={{width:8, height:8, borderRadius:'50%', background:'var(--coral-500)'}}/>
          <h3 style={{margin:0, fontSize:22}}>Tee Opticals Retail</h3>
          <span style={{fontFamily:'var(--font-display)', fontStyle:'italic', color:'var(--ink-500)', fontSize:18}}>— duka la miwani</span>
        </div>
        <div className="svc-grid" style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:16}}>
          <ServiceCard icon={glassesIcon} title="Prescription frames" titleSw="Miwani ya dawa" desc="Stylish frames fitted to your prescription."/>
          <ServiceCard icon={sunIcon} title="Sunglasses" titleSw="Miwani ya jua" desc="UV-protected, polarized, ready to go."/>
          <ServiceCard icon={circleIcon} title="Contact lenses" titleSw="Lenzi za macho" desc="Fitting + trial pair + follow-up included."/>
          <ServiceCard icon={sparkIcon} title="Blue-light lenses" titleSw="Ulinzi wa skrini" desc="For long screen days and night driving."/>
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) { .svc-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 520px) { .svc-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

window.Services = Services;
