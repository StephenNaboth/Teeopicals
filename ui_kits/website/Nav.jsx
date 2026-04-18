const { useState, useEffect } = React;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);
  const links = ['Clinic', 'Eyewear', 'Wellness', 'Blog', 'Reviews', 'Visit'];
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      height: scrolled ? 56 : 72,
      background: scrolled ? 'rgba(250,246,239,0.82)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line-200)' : '1px solid transparent',
      transition: 'all 220ms var(--ease-out)',
      display: 'flex', alignItems: 'center'
    }}>
      <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%'}}>
        <a href="#" style={{display:'flex', alignItems:'center', gap:10, textDecoration:'none'}}>
          <img src="assets/logo.png" alt="" style={{height: scrolled?30:38, width:'auto', transition:'height 220ms'}}/>
          <span style={{fontFamily:'var(--font-display)', fontSize:22, color:'var(--ink-900)', letterSpacing:'-.01em'}}>Teeopticals</span>
        </a>

        <div className="hide-mobile" style={{display:'flex', gap:4, alignItems:'center'}}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              padding:'8px 12px', fontSize:14, fontWeight:500,
              color:'var(--ink-700)', textDecoration:'none', borderRadius:999
            }}>{l}</a>
          ))}
          <a href="#book" className="btn btn-primary btn-sm" style={{marginLeft:8}}>Book eye test</a>
        </div>

        <button
          className="show-mobile"
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
          style={{
            display:'none', background:'transparent', border:'1px solid var(--line-200)',
            width:44, height:44, borderRadius:12, cursor:'pointer', padding:0,
            alignItems:'center', justifyContent:'center'
          }}>
          <div style={{width:18, height:12, position:'relative'}}>
            <span style={{position:'absolute', top:open?5:0, left:0, right:0, height:1.5, background:'var(--ink-900)', transform:open?'rotate(45deg)':'none', transition:'.22s'}}/>
            <span style={{position:'absolute', top:5, left:0, right:0, height:1.5, background:'var(--ink-900)', opacity:open?0:1, transition:'.22s'}}/>
            <span style={{position:'absolute', top:open?5:11, left:0, right:0, height:1.5, background:'var(--ink-900)', transform:open?'rotate(-45deg)':'none', transition:'.22s'}}/>
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div style={{
        position:'fixed', inset:`${scrolled?56:72}px 0 0 0`, zIndex:49,
        background:'var(--cream-50)', padding:'32px 20px',
        transform: open ? 'translateY(0)' : 'translateY(-8px)',
        opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
        transition: 'all 260ms var(--ease-out)',
      }} className="show-mobile">
        <div style={{display:'flex', flexDirection:'column', gap:4}}>
          {links.map((l,i) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={()=>setOpen(false)} style={{
              padding:'18px 4px', fontSize:24, fontFamily:'var(--font-display)',
              color:'var(--ink-900)', textDecoration:'none',
              borderBottom:'1px solid var(--line-200)',
              display:'flex', justifyContent:'space-between', alignItems:'baseline'
            }}>
              <span>{l}</span>
              <span style={{fontSize:12, color:'var(--ink-400)', letterSpacing:'.1em'}}>0{i+1}</span>
            </a>
          ))}
          <a href="#book" onClick={()=>setOpen(false)} className="btn btn-primary btn-lg" style={{marginTop:24, justifyContent:'center'}}>Book eye test</a>
          <div style={{marginTop:32, display:'flex', flexDirection:'column', gap:8, color:'var(--ink-500)', fontSize:14}}>
            <div><strong style={{color:'var(--ink-900)'}}>+255 767 123 456</strong></div>
            <div>Usa River, Arusha · Mon–Sat 9–18</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

window.Nav = Nav;
