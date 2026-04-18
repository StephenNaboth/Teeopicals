function Reviews() {
  const { useState, useEffect } = React;
  const [reviews, setReviews] = useState([]);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    fetch('reviews.json').then(r=>r.json()).then(setReviews);
  }, []);
  useEffect(() => {
    if (!reviews.length) return;
    const t = setInterval(()=>setIdx(i => (i+1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, [reviews.length]);

  if (!reviews.length) return null;
  const visible = [0,1,2].map(o => reviews[(idx+o) % reviews.length]);
  const langLabel = {'sw':'Swahili', 'en':'English', 'sw-en':'Swahili + English'};

  return (
    <section id="reviews" className="py-section" style={{background:'var(--iris-900)', color:'white', position:'relative', overflow:'hidden'}}>
      <div style={{position:'absolute', width:400, height:400, borderRadius:'50%', background:'var(--iris-700)', filter:'blur(80px)', left:-100, top:-100, opacity:.6}}/>
      <div className="container" style={{position:'relative', zIndex:2}}>
        <div className="reviews-toolbar" style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:40, flexWrap:'wrap', gap:16}}>
          <div style={{minWidth:0, flex:'1 1 280px'}}>
            <span className="eyebrow" style={{color:'var(--iris-300)'}}>Real patients, real voices</span>
            <h2 className="display-lg" style={{color:'white', margin:'12px 0 0', maxWidth:560}}>
              <em style={{color:'var(--coral-300)'}}>Huduma ni top.</em> And other things our patients have said.
            </h2>
          </div>
          <div style={{display:'flex', gap:8, flexShrink:0}}>
            <button onClick={()=>setIdx(i=>(i-1+reviews.length)%reviews.length)} aria-label="Previous" style={navBtn}>←</button>
            <button onClick={()=>setIdx(i=>(i+1)%reviews.length)} aria-label="Next" style={navBtn}>→</button>
          </div>
        </div>

        <div className="reviews-grid" style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:20}}>
          {visible.map((r, i) => (
            <div key={idx+'-'+i} style={{
              background:'rgba(255,255,255,0.06)',
              border:'1px solid rgba(255,255,255,0.1)',
              borderRadius:14, padding:'20px 18px', minHeight:200,
              display:'flex', flexDirection:'column', justifyContent:'space-between'
            }}>
              <p style={{fontSize:16, lineHeight:'26px', color:'white', margin:0}}>"{r.text}"</p>
              <div style={{marginTop:20}}>
                <div style={{fontFamily:'var(--font-display)', fontSize:22, color:'white'}}>{r.name}</div>
                <div style={{fontSize:11, color:'var(--iris-300)', textTransform:'uppercase', letterSpacing:'.12em', fontWeight:600, marginTop:2}}>{langLabel[r.lang]}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{marginTop:32, display:'flex', gap:6, justifyContent:'center'}}>
          {reviews.map((_,i) => (
            <div key={i} style={{
              width: i===idx?24:6, height:6, borderRadius:3,
              background: i===idx?'var(--coral-300)':'rgba(255,255,255,0.2)',
              transition:'all 220ms'
            }}/>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) { .reviews-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) {
          .reviews-toolbar { align-items: flex-start !important; flex-direction: column; }
          .reviews-grid > div { min-height: 0 !important; padding: 18px 16px !important; }
        }
      `}</style>
    </section>
  );
}
const navBtn = {
  width:44, height:44, borderRadius:'50%', border:'1px solid rgba(255,255,255,0.2)',
  background:'transparent', color:'white', fontSize:18, cursor:'pointer',
  display:'flex', alignItems:'center', justifyContent:'center'
};

window.Reviews = Reviews;
