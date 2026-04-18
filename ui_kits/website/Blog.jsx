function Blog() {
  const posts = [
    { tag:'Screen health', title:'Digital eye strain: what to do before you buy glasses', sw:'Macho ya kompyuta', read:'4 min', date:'Apr 12' },
    { tag:'Children', title:'When should your child have their first eye test?', sw:'Macho ya watoto', read:'3 min', date:'Apr 05' },
    { tag:'Driving', title:'Why night driving gets harder after 40', sw:'Kuendesha usiku', read:'5 min', date:'Mar 28' },
    { tag:'Dry eyes', title:'Dry eyes in Arusha: dust, wind, and what actually helps', sw:'Macho makavu', read:'4 min', date:'Mar 20' },
  ];
  const colors = ['var(--iris-600)', 'var(--coral-500)', 'var(--iris-700)', 'var(--iris-500)'];
  return (
    <section id="blog" style={{padding:'96px 0', background:'var(--cream-100)', position:'relative', overflow:'hidden'}}>
      <AnimatedBg variant="cream"/>
      <div className="container" style={{position:'relative', zIndex:2}}>
        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:36, flexWrap:'wrap', gap:16}}>
          <div>
            <span className="eyebrow">Eye care tips</span>
            <h2 className="display-lg" style={{fontSize:42, lineHeight:'48px', margin:'12px 0 0', maxWidth:520}}>
              Stories from the clinic.
            </h2>
          </div>
          <a href="#blog" className="btn btn-ghost btn-sm">See all posts →</a>
        </div>

        {/* Featured */}
        <div style={{display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:20, marginBottom:20}} className="blog-featured">
          <article style={{borderRadius:22, background:'var(--iris-900)', color:'white', padding:40, position:'relative', overflow:'hidden', minHeight:280}}>
            <div className="iris-ring" style={{width:120, height:120, right:-40, top:-40, borderColor:'var(--iris-500)'}}/>
            <div className="iris-ring" style={{width:120, height:120, right:-40, top:-40, borderColor:'var(--coral-300)', animationDelay:'1.2s'}}/>
            <span style={{display:'inline-block', padding:'4px 10px', borderRadius:999, background:'rgba(255,255,255,0.1)', fontSize:11, fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', marginBottom:16}}>Featured</span>
            <h3 style={{fontFamily:'var(--font-display)', fontSize:36, fontWeight:400, lineHeight:'42px', color:'white', margin:'0 0 12px', maxWidth:440}}>
              Why you shouldn't ignore jioni headaches.
            </h3>
            <p style={{fontSize:15, color:'var(--iris-100)', lineHeight:'24px', maxWidth:440, margin:'0 0 20px'}}>
              Evening headaches after long screen days aren't just "being tired" — they're often the first sign your eyes need attention. Here's how to tell.
            </p>
            <a href="#" style={{color:'white', fontWeight:600, textDecoration:'none', borderBottom:'1px solid rgba(255,255,255,0.4)', paddingBottom:2}}>Read the post →</a>
          </article>
          <article style={{borderRadius:22, background:'var(--coral-500)', color:'white', padding:36, position:'relative', overflow:'hidden', minHeight:280}}>
            <span style={{display:'inline-block', padding:'4px 10px', borderRadius:999, background:'rgba(255,255,255,0.18)', fontSize:11, fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', marginBottom:16}}>Nutrition</span>
            <h3 style={{fontFamily:'var(--font-display)', fontSize:30, fontWeight:400, lineHeight:'36px', color:'white', margin:'0 0 12px'}}>
              6 foods in your local market that protect your eyes.
            </h3>
            <p style={{fontSize:14, color:'rgba(255,255,255,0.9)', lineHeight:'22px', margin:'0 0 20px'}}>
              Mchicha, parachichi, samaki, ndimu — your sight might be sitting on the next soko table.
            </p>
            <a href="#" style={{color:'white', fontWeight:600, textDecoration:'none', borderBottom:'1px solid rgba(255,255,255,0.5)', paddingBottom:2}}>Read →</a>
          </article>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:14}}>
          {posts.map((p,i) => (
            <article key={i} className="card" style={{padding:22, display:'flex', flexDirection:'column', gap:10}}>
              <span style={{fontSize:11, fontWeight:600, color:colors[i%colors.length], letterSpacing:'.1em', textTransform:'uppercase'}}>{p.tag}</span>
              <h3 style={{fontSize:17, lineHeight:'22px', margin:'0', color:'var(--ink-900)'}}>{p.title}</h3>
              <span style={{fontFamily:'var(--font-display)', fontStyle:'italic', color:'var(--ink-500)', fontSize:14}}>{p.sw}</span>
              <div style={{display:'flex', gap:10, marginTop:'auto', paddingTop:10, fontSize:12, color:'var(--ink-400)'}}>
                <span>{p.date}</span><span>·</span><span>{p.read} read</span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`@media (max-width:860px) { .blog-featured { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
window.Blog = Blog;
