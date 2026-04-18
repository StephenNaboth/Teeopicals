function Booking() {
  const { useState, useMemo } = React;
  const [reason, setReason] = useState('Eye exam');
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(null); // Date obj
  const [slot, setSlot] = useState(null); // 'HH:MM'
  const [calOpen, setCalOpen] = useState(false);
  const [calMonth, setCalMonth] = useState(() => {
    const d = new Date(); d.setDate(1); return d;
  });
  const reasons = ['Eye exam', 'Contact lenses', 'Glasses', 'Dry eyes', 'Child check-up', 'Something else'];

  const slots = useMemo(() => {
    if (!date) return [];
    const day = date.getDay(); // 0 sun, 6 sat
    if (day === 0) return [];
    const morning = ['09:00','09:30','10:00','10:30','11:00','11:30'];
    const afternoon = day === 6
      ? ['12:00','12:30','13:00','13:30']
      : ['13:00','14:00','14:30','15:00','15:30','16:00','16:30','17:00'];
    return [...morning, ...afternoon];
  }, [date]);

  const canSubmit = name && phone && date && slot;

  return (
    <section id="book" className="py-section" style={{background:'var(--cream-50)', position:'relative', overflow:'hidden'}}>
      <AnimatedBg variant="light"/>
      <div className="container booking-grid" style={{position:'relative', zIndex:2, display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'start'}}>
        <div>
          <span className="eyebrow">Book in 2 minutes</span>
          <h2 className="display-lg" style={{margin:'12px 0 16px'}}>
            Tell us what's blurry. We'll take it from there.
          </h2>
          <p style={{fontSize:17, color:'var(--ink-700)', maxWidth:440}}>
            No forms, no portals, no insurance hassles. Leave your number and we'll confirm by WhatsApp within the hour.
          </p>
          <div style={{marginTop:28, display:'flex', flexDirection:'column', gap:10}}>
            <CheckRow text="Walk-ins welcome Mon–Sat"/>
            <CheckRow text="Bilingual care: Swahili + English"/>
            <CheckRow text="Glasses ready within 24 hours"/>
          </div>
        </div>

        <div className="card" style={{padding:28, boxShadow:'var(--shadow-lg)', background:'var(--paper)'}}>
          {!submitted ? (
            <>
              <div style={{marginBottom:16}}>
                <Label>Your name</Label>
                <Input value={name} onChange={e=>setName(e.target.value)} placeholder="Anna M."/>
              </div>
              <div style={{marginBottom:16}}>
                <Label>Phone / WhatsApp</Label>
                <Input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+255 7.."/>
              </div>
              <div style={{marginBottom:16}}>
                <Label>Reason</Label>
                <div style={{display:'flex', gap:6, flexWrap:'wrap'}}>
                  {reasons.map(r => (
                    <button key={r} onClick={()=>setReason(r)} style={{
                      padding:'8px 14px', borderRadius:999, border:'none', cursor:'pointer',
                      fontSize:13, fontWeight:500, fontFamily:'var(--font-sans)',
                      background: reason===r ? 'var(--iris-600)' : 'var(--iris-100)',
                      color: reason===r ? 'white' : 'var(--iris-900)',
                      transition:'all 120ms'
                    }}>{r}</button>
                  ))}
                </div>
              </div>

              {/* Date picker */}
              <div style={{marginBottom:16, position:'relative'}}>
                <Label>Date</Label>
                <button onClick={()=>setCalOpen(o=>!o)} style={dropdownBtn(calOpen)}>
                  <span style={{color: date?'var(--ink-900)':'var(--ink-400)'}}>
                    {date ? formatDate(date) : 'Pick a date'}
                  </span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                </button>
                {calOpen && (
                  <Calendar
                    month={calMonth}
                    setMonth={setCalMonth}
                    selected={date}
                    onSelect={(d)=>{ setDate(d); setSlot(null); setCalOpen(false); }}
                  />
                )}
              </div>

              {/* Time slot dropdown */}
              <div style={{marginBottom:20}}>
                <Label>Time {date && slots.length===0 && <span style={{textTransform:'none', letterSpacing:0, fontWeight:400, color:'var(--coral-500)'}}>(closed Sunday)</span>}</Label>
                <select
                  value={slot || ''}
                  onChange={e=>setSlot(e.target.value || null)}
                  disabled={!date || slots.length===0}
                  style={{
                    width:'100%', padding:'12px 14px', border:'1.5px solid var(--line-200)', borderRadius:12,
                    fontFamily:'var(--font-sans)', fontSize:16, background:'white', outline:'none',
                    boxSizing:'border-box', color: slot?'var(--ink-900)':'var(--ink-400)',
                    cursor: date && slots.length? 'pointer':'not-allowed',
                    appearance:'none', WebkitAppearance:'none',
                    backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B5D4F' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
                    backgroundRepeat:'no-repeat', backgroundPosition:'right 14px center',
                  }}
                >
                  <option value="">{date ? (slots.length? 'Choose time' : 'No slots') : 'Pick date first'}</option>
                  {slots.map(s => <option key={s} value={s}>{prettyTime(s)}</option>)}
                </select>
              </div>

              <button
                onClick={()=>canSubmit && setSubmitted(true)}
                disabled={!canSubmit}
                className="btn btn-primary"
                style={{width:'100%', padding:'16px', opacity: canSubmit?1:0.5, cursor: canSubmit?'pointer':'not-allowed'}}>
                Send booking →
              </button>
              <p style={{fontSize:12, color:'var(--ink-400)', textAlign:'center', margin:'12px 0 0'}}>By booking you agree to our care policies. Free to reschedule.</p>
            </>
          ) : (
            <div style={{textAlign:'center', padding:'20px 0'}}>
              <div style={{width:56, height:56, borderRadius:'50%', background:'var(--iris-100)', display:'inline-flex', alignItems:'center', justifyContent:'center', marginBottom:16}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0E6B53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <h3 style={{margin:'0 0 6px', fontFamily:'var(--font-display)', fontSize:28, fontWeight:400}}>Karibu, {name||'Anna'}.</h3>
              <p style={{color:'var(--ink-500)', margin:'0 0 18px'}}>
                We'll WhatsApp you within the hour to confirm your appointment on <strong>{formatDate(date)}</strong> at <strong>{prettyTime(slot)}</strong> for {reason.toLowerCase()}.
              </p>
              <button onClick={()=>{setSubmitted(false);setName('');setPhone('');setDate(null);setSlot(null);}} className="btn btn-ghost">Book another</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Calendar({ month, setMonth, selected, onSelect }) {
  const today = new Date(); today.setHours(0,0,0,0);
  const year = month.getFullYear();
  const mo = month.getMonth();
  const firstDow = new Date(year, mo, 1).getDay();
  const daysInMonth = new Date(year, mo+1, 0).getDate();
  const cells = [];
  for (let i=0;i<firstDow;i++) cells.push(null);
  for (let d=1; d<=daysInMonth; d++) cells.push(new Date(year, mo, d));
  const monthName = month.toLocaleDateString('en-US',{month:'long', year:'numeric'});
  const dow = ['S','M','T','W','T','F','S'];

  return (
    <div style={{
      position:'absolute', top:'calc(100% + 6px)', left:0, right:0, zIndex:20,
      background:'white', border:'1.5px solid var(--line-200)', borderRadius:14,
      padding:14, boxShadow:'var(--shadow-lg)',
      maxHeight: 'min(70vh, 400px)', overflowY: 'auto', WebkitOverflowScrolling: 'touch',
    }}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10}}>
        <button onClick={()=>setMonth(new Date(year, mo-1, 1))} style={calNavBtn} aria-label="Prev">‹</button>
        <div style={{fontFamily:'var(--font-display)', fontSize:18, color:'var(--ink-900)'}}>{monthName}</div>
        <button onClick={()=>setMonth(new Date(year, mo+1, 1))} style={calNavBtn} aria-label="Next">›</button>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(7, 1fr)', gap:2, marginBottom:4}}>
        {dow.map((d,i)=>(
          <div key={i} style={{textAlign:'center', fontSize:11, fontWeight:600, color:'var(--ink-400)', padding:'4px 0', letterSpacing:'.08em'}}>{d}</div>
        ))}
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(7, 1fr)', gap:2}}>
        {cells.map((d,i)=>{
          if (!d) return <div key={i}/>;
          const isPast = d < today;
          const isSunday = d.getDay()===0;
          const disabled = isPast || isSunday;
          const isSel = selected && d.toDateString()===selected.toDateString();
          const isToday = d.toDateString()===today.toDateString();
          return (
            <button
              key={i}
              disabled={disabled}
              onClick={()=>onSelect(d)}
              style={{
                aspectRatio:'1', border:'none', borderRadius:10, fontSize:13, fontFamily:'var(--font-sans)',
                cursor: disabled?'not-allowed':'pointer',
                background: isSel ? 'var(--iris-600)' : isToday ? 'var(--iris-50)' : 'transparent',
                color: isSel ? 'white' : disabled ? 'var(--ink-300)' : 'var(--ink-900)',
                fontWeight: isSel||isToday ? 600 : 400,
                textDecoration: isPast ? 'line-through' : 'none',
                transition: 'all 120ms',
              }}
              onMouseEnter={e=>{ if(!disabled && !isSel) e.target.style.background='var(--cream-100)'; }}
              onMouseLeave={e=>{ if(!disabled && !isSel) e.target.style.background = isToday?'var(--iris-50)':'transparent'; }}
            >{d.getDate()}</button>
          );
        })}
      </div>
      <div style={{marginTop:10, paddingTop:10, borderTop:'1px solid var(--line-200)', fontSize:11, color:'var(--ink-500)', display:'flex', justifyContent:'space-between'}}>
        <span>Mon–Fri 9–18 · Sat 9–14</span>
        <span>Closed Sundays</span>
      </div>
    </div>
  );
}

const calNavBtn = {
  width:30, height:30, borderRadius:8, border:'1px solid var(--line-200)',
  background:'white', cursor:'pointer', fontSize:18, color:'var(--ink-700)',
  display:'flex', alignItems:'center', justifyContent:'center', padding:0,
};

function dropdownBtn(open) {
  return {
    width:'100%', padding:'12px 14px', border: `1.5px solid ${open?'var(--iris-600)':'var(--line-200)'}`,
    borderRadius:12, background:'white', fontSize:16, fontFamily:'var(--font-sans)',
    display:'flex', alignItems:'center', justifyContent:'space-between', cursor:'pointer',
    color:'var(--ink-700)', outline:'none',
  };
}

function formatDate(d) {
  if (!d) return '';
  return d.toLocaleDateString('en-US',{weekday:'short', month:'short', day:'numeric'});
}
function prettyTime(s) {
  if (!s) return '';
  const [h,m] = s.split(':').map(Number);
  const period = h>=12?'pm':'am';
  const h12 = ((h+11)%12)+1;
  return `${h12}:${String(m).padStart(2,'0')} ${period}`;
}

function Label({children}) { return <label style={{display:'block', fontSize:12, fontWeight:600, textTransform:'uppercase', letterSpacing:'.1em', color:'var(--ink-500)', marginBottom:6}}>{children}</label>; }
function Input(props) {
  return <input {...props} style={{width:'100%', padding:'12px 14px', border:'1.5px solid var(--line-200)', borderRadius:12, fontFamily:'var(--font-sans)', fontSize:16, background:'white', outline:'none', boxSizing:'border-box'}} onFocus={e=>e.target.style.borderColor='var(--iris-600)'} onBlur={e=>e.target.style.borderColor='var(--line-200)'}/>;
}
function CheckRow({text}) {
  return (
    <div style={{display:'flex', alignItems:'center', gap:10}}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E6B53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
      <span style={{color:'var(--ink-700)'}}>{text}</span>
    </div>
  );
}

const bookingStyle = document.createElement('style');
bookingStyle.textContent = `
  @media (max-width: 860px) { .booking-grid { grid-template-columns: 1fr !important; gap: 36px !important; } }
  @media (max-width: 480px) { .booking-grid { gap: 28px !important; } }
`;
document.head.appendChild(bookingStyle);

window.Booking = Booking;
