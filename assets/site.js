
const menu=document.querySelector('.menu');
const nav=document.querySelector('#mainnav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close':'Menu'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu'}));}
const header=document.querySelector('.header');
const setHeader=()=>header&&header.classList.toggle('scrolled',scrollY>10);setHeader();addEventListener('scroll',setHeader,{passive:true});
document.querySelectorAll('section,.card,.feature-photo,.gallery figure').forEach(el=>el.classList.add('reveal'));
if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -30px'});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
const form=document.querySelector('#enquiry');if(form)form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form),to=d.get('office')==='uae'?'i@iaisuae.com':'i@iaisindia.com';const subject='AET enquiry — '+(d.get('asset')||'Industrial asset');const body=['Name: '+(d.get('name')||''),'Company: '+(d.get('company')||''),'Email: '+(d.get('email')||''),'Phone: '+(d.get('phone')||''),'Location: '+(d.get('location')||''),'Asset: '+(d.get('asset')||''),'Inspection requirement: '+(d.get('message')||'')].join('\n');location.href='mailto:'+to+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body)});
