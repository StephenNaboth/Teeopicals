function Wellness() {
  const items = [
    { ic:'🥬', en:'Leafy greens', sw:'Mboga za majani', desc:'Spinach, mchicha, kale — lutein + zeaxanthin shield the retina from blue light.' },
    { ic:'🥕', en:'Orange veg', sw:'Mboga za rangi ya machungwa', desc:'Carrots, pumpkin, sweet potato — beta-carotene for night vision.' },
    { ic:'🐟', en:'Oily fish', sw:'Samaki wenye mafuta', desc:'Sardines, tilapia, salmon — omega-3s calm dry eyes from inside.' },
    { ic:'🥑', en:'Avocado & nuts', sw:'Parachichi na karanga', desc:'Vitamin E + healthy fats — protect the lens from oxidative stress.' },
    { ic:'🫐', en:'Berries & citrus', sw:'Matunda ya msimu', desc:'Vitamin C slows cataract formation. Passion fruit, oranges, ndimu.' },
    { ic:'💧', en:'Water, always', sw:'Maji ya kutosha', desc:'Dehydration = dry eyes. Target 2L daily, more in the Arusha heat.' },
  ];
  const habits = [
    { t:'20–20–20', d:'Every 20 min on screen, look 20 feet away for 20 seconds.' },
    { t:'Sunglasses outside', d:'UV damage is cumulative. Even cloudy days count.' },
    { t:'Sleep well', d:'7+ hours lets eyes repair overnight and refresh tear film.' },
    { t:'Blink more', d:'Screens cut blink rate in half. Be intentional about it.' },
  ];
  return (
    <section id="wellness" className="py-section" style={{position:'relative', overflow:'hidden', background:'var(--cream-50)'}}>
      <AnimatedBg variant="light"/>
      <div className="container" style={{position:'relative', zIndex:2}}>
        <div style={{textAlign:'center', maxWidth:680, margin:'0 auto 48px'}}>
          <span className="eyebrow">Eye wellness · Afya ya macho</span>
          <h2 className="display-lg" style={{margin:'12px 0 12px'}}>
            Your plate is part of your prescription.
          </h2>
          <p style={{color:'var(--ink-500)', fontSize:17, margin:'0 auto', maxWidth:540}}>
            Good vision starts long before the exam chair. Small daily habits keep your eyes strong for decades.
          </p>
        </div>

        <div style={{marginBottom:28}}>
          <h3 style={{fontSize:18, marginBottom:16, display:'flex', alignItems:'center', gap:10, flexWrap:'wrap'}}>
            <span style={{width:8, height:8, borderRadius:'50%', background:'var(--iris-600)', flexShrink:0}}/>
            Nutrition for your eyes
            <span style={{fontFamily:'var(--font-display)', fontStyle:'italic', color:'var(--ink-500)', fontSize:16, fontWeight:400}}>— chakula cha macho</span>
          </h3>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap:14}}>
            {items.map((it,i) => (
              <div key={i} className="card" style={{padding:20}}>
                <div style={{fontSize:28, marginBottom:8}}>{it.ic}</div>
                <div style={{fontWeight:600, fontSize:16}}>{it.en}</div>
                <div style={{fontFamily:'var(--font-display)', fontStyle:'italic', color:'var(--iris-700)', fontSize:15, marginBottom:8}}>{it.sw}</div>
                <p style={{fontSize:13, lineHeight:'20px', color:'var(--ink-500)', margin:0}}>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap:14, marginTop:36}}>
          {habits.map((h,i) => (
            <div key={i} style={{padding:20, background:'var(--iris-900)', color:'white', borderRadius:14, position:'relative', overflow:'hidden'}}>
              <div style={{fontSize:11, color:'var(--iris-300)', letterSpacing:'.14em', textTransform:'uppercase', fontWeight:600, marginBottom:8}}>Daily habit</div>
              <div style={{fontFamily:'var(--font-display)', fontSize:26, marginBottom:6}}>{h.t}</div>
              <p style={{fontSize:13, lineHeight:'20px', color:'var(--iris-100)', margin:0}}>{h.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Wellness = Wellness;
