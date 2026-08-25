const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const cursor=$('.cursor');
if(cursor){document.addEventListener('mousemove',e=>{cursor.style.left=e.clientX-7+'px';cursor.style.top=e.clientY-7+'px'})}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
$$('.reveal').forEach(e=>io.observe(e));
$$('[data-tabs]').forEach(group=>{
 const tabs=group.querySelectorAll('.tab'), panels=group.querySelectorAll('.sport-panel');
 tabs.forEach((t,i)=>t.addEventListener('click',()=>{tabs.forEach(x=>x.classList.remove('active'));panels.forEach(x=>x.classList.remove('active'));t.classList.add('active');panels[i].classList.add('active')}));
});
const clueBtn=$('[data-clue]'); if(clueBtn){clueBtn.addEventListener('click',()=>{const c=$(clueBtn.dataset.clue); c.hidden=!c.hidden; clueBtn.textContent=c.hidden?'REVEAL A CLUE':'HIDE CLUE';})}
