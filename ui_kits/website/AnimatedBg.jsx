function AnimatedBg({ variant = 'cream' }) {
  const palettes = {
    cream: [
      { c: 'var(--iris-100)', size: 520, pos:{right:-160, top:-120}, a:'a1', op:.9 },
      { c: 'var(--coral-300)', size: 300, pos:{right:200, bottom:-80}, a:'a2', op:.45 },
      { c: 'var(--iris-300)', size: 380, pos:{left:-120, bottom:-160}, a:'a3', op:.5 },
    ],
    dark: [
      { c: 'var(--iris-700)', size: 520, pos:{left:-140, top:-140}, a:'a1', op:.7 },
      { c: 'var(--coral-700)', size: 320, pos:{right:-80, bottom:-80}, a:'a2', op:.4 },
    ],
    light: [
      { c: 'var(--iris-100)', size: 380, pos:{left:-100, top:-100}, a:'a1', op:.8 },
      { c: 'var(--coral-100)', size: 320, pos:{right:-80, bottom:-100}, a:'a2', op:.9 },
    ],
  };
  const halos = palettes[variant] || palettes.cream;
  return (
    <>
      {halos.map((h,i) => (
        <div key={i} className={`bg-halo ${h.a}`} style={{
          width:h.size, height:h.size, background:h.c, opacity:h.op, ...h.pos
        }}/>
      ))}
      <div className="grain-layer"/>
    </>
  );
}
window.AnimatedBg = AnimatedBg;
