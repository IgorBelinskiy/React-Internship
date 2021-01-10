'use strict'

const btn = document.querySelector('.selected_text');
const options = document.querySelectorAll('.option');

btn.addEventListener('click', () => {
   btn.classList.toggle('activeselected');
   btn.parentNode.classList.toggle('selectedact');
});


options.forEach(option => {
   option.addEventListener('click', e => {
      e.target.parentNode.classList.toggle('options_active');
      e.target.classList.toggle('option_active');
   });
})