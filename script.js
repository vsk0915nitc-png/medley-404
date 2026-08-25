
const cursor=document.querySelector('.cursor');
if(cursor){
 document.addEventListener('mousemove',e=>{cursor.style.left=e.clientX-9+'px';cursor.style.top=e.clientY-9+'px'});
 document.querySelectorAll('a,button,.poster').forEach(x=>x.addEventListener('mouseenter',()=>cursor.style.transform='scale(2.1)'));
 document.querySelectorAll('a,button,.poster').forEach(x=>x.addEventListener('mouseleave',()=>cursor.style.transform='scale(1)'));
}
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.12});
document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
document.querySelectorAll('[data-clue]').forEach(btn=>{
 btn.addEventListener('click',()=>{
   const target=document.querySelector(btn.dataset.clue);
   target.classList.toggle('show');
   btn.textContent=target.classList.contains('show')?'HIDE THE CLUE':'REVEAL A CLUE';
 });
});
