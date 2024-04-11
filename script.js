'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// using querySelectorAll to select all the node list
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModel = function () {
  // don't use dot its only for selector

  // not preffered
  // modal.style.display = 'block';
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModel);
}

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// clicking close btn
// not callling fucntion closeModel() but using closeModel to add/pass the function as an expression
// passing function as an expression rather then calling the function
btnCloseModal.addEventListener('click', closeModel);

overlay.addEventListener('click', closeModel);
console.log(closeModel);
// e stands for event
document.addEventListener('keydown', function (e) {
  console.log('a key is pressed');
  // console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // executes when there is no hidden class and then adds the hidden class
    // if (!modal.classList.contains('hidden'))
    closeModel();
  }
});
