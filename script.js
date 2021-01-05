'use strict'

const btns = document.querySelectorAll('.main_title');

btns.forEach(btn => {
   btn.addEventListener('click', e => {
      e.target.nextElementSibling.classList.toggle('activeText');
      e.target.classList.toggle('activeTitle');
      // e.target.nextElementSibling.slideToggle(300);
   });
})



