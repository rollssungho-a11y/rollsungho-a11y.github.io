const menu=document.querySelector('.menu'),links=document.querySelector('.links');
if(menu)menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('on')}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));

const footer=document.querySelector('footer');
if(footer){
  footer.innerHTML='<div class="wrap foot"><div><strong>주식회사 티디씨컬렉티브</strong><p>대표이사 조성호<br>서울특별시 강남구 테헤란로79길 6, JS타워 3층<br><a href="mailto:tmsk0823@naver.com">tmsk0823@naver.com</a> · <a href="tel:01032290823">010-3229-0823</a></p></div><div><strong>TOGETHER. DEVELOP. CONNECT.</strong><p>BRANDS × CREATORS × COMMERCE<br>© 2026 TDC COLLECTIVE. All rights reserved.</p></div></div>';
}
