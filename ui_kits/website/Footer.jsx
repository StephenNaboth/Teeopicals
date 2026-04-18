function Footer() {
  return (
    <footer id="visit" style={{padding:'80px 0 40px', background:'var(--cream-100)'}}>
      <div className="container">
        <div className="footer-grid" style={{display:'grid', gridTemplateColumns:'1.2fr 1fr 1fr 1fr', gap:48, marginBottom:48}}>
          <div>
            <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:14}}>
              <img src="assets/logo.png" alt="" style={{height:36}}/>
              <span style={{fontFamily:'var(--font-display)', fontSize:22}}>Teeopticals</span>
            </div>
            <p style={{fontSize:14, color:'var(--ink-500)', maxWidth:280, margin:0}}>
              Complete eyecare for Usa River and Arusha — clinical care + eyewear, under one roof.
            </p>
          </div>
          <FooterCol title="Visit">
            <div style={{fontSize:14, color:'var(--ink-700)', lineHeight:'22px'}}>
              House no 75, Mjimwema street<br/>
              Old Moshi road, Usa River<br/>
              Arusha, Tanzania
            </div>
          </FooterCol>
          <FooterCol title="Hours">
            <div style={{fontSize:14, color:'var(--ink-700)', lineHeight:'22px'}}>
              Mon–Fri &nbsp; 9am–6pm<br/>
              Saturday &nbsp; 9am–4pm<br/>
              Sunday &nbsp; Closed
            </div>
          </FooterCol>
          <FooterCol title="Contact">
            <a href="tel:+255740952555" style={{display:'block', fontSize:14, color:'var(--ink-700)', textDecoration:'none', marginBottom:4}}>+255 740 952 555</a>
            <a href="mailto:teeopticals@gmail.com" style={{display:'block', fontSize:14, color:'var(--ink-700)', textDecoration:'none', marginBottom:10}}>teeopticals@gmail.com</a>
            <div style={{display:'flex', gap:8}}>
              {['Instagram','Facebook','LinkedIn'].map(s => (
                <a key={s} href="#" style={{width:36, height:36, borderRadius:'50%', background:'var(--iris-600)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, fontWeight:600, textDecoration:'none'}}>{s[0]}</a>
              ))}
            </div>
          </FooterCol>
        </div>
        <div className="footer-bottom" style={{paddingTop:24, borderTop:'1px solid var(--line-200)', display:'flex', justifyContent:'space-between', fontSize:12, color:'var(--ink-500)', flexWrap:'wrap', gap:8}}>
          <span>© Teeopticals 2026 · Est. 2025</span>
          <span>Made with care in Arusha.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({title, children}) {
  return (
    <div>
      <div style={{fontSize:12, fontWeight:600, textTransform:'uppercase', letterSpacing:'.12em', color:'var(--iris-700)', marginBottom:12}}>{title}</div>
      {children}
    </div>
  );
}

const footerStyle = document.createElement('style');
footerStyle.textContent = `
  @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }
  @media (max-width: 520px) { .footer-grid { grid-template-columns: 1fr !important; } }
`;
document.head.appendChild(footerStyle);

window.Footer = Footer;
