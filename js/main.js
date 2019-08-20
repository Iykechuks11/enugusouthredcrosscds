// const slides = document.querySelectorAll('.slide');
// const next = document.querySelector('#next');
// const prev = document.querySelector('#prev');

// const auto = true;
// const intervalTime = 5000;
// let slideInterval;

// const nextSlide = () => {
//   // GET CURRENT CLASS
//   const current = document.querySelector('.current');
//   // REMOVE CURRENT CLASS
//   current.classList.remove('current');
//   // CHECK FOR NEXT SLIDE
//   if (current.nextElementSibling) {
//     // ADD CURRENT TO NEXT SIBLING
//     current.nextElementSibling.classList.add('current');
//   } else {
//     // ADD CURRENT TO START
//     slides[0].classList.add('current');
//   }
//   setTimeout(() => current.classList.remove('current'));
// };

// const prevSlide = () => {
//   // GET CURRENT CLASS
//   const current = document.querySelector('.current');
//   // REMOVE CURRENT CLASS
//   current.classList.remove('current');
//   // CHECK FOR PREVIOUS SLIDE
//   if (current.previousElementSibling) {
//     // ADD CURRENT TO NEXT SIBLING
//     current.previousElementSibling.classList.add('current');
//   } else {
//     // ADD CURRENT TO LAST
//     slides[slides.length - 1].classList.add('current');
//   }
//   setTimeout(() => current.classList.remove('current'));
// };

// // BUTTON EVENTS
// next.addEventListener('click', e => {
//   nextSlide();
//   if (auto) {
//     clearInterval(slideInterval);
//     slideInterval = setInterval(nextSlide, intervalTime);
//   }
// });

// prev.addEventListener('click', e => {
//   prevSlide();
// });

// // AUTO SLIDE
// if (auto) {
//   // RUN NEXT SLIDE AT INTERVAL TIME
//   slideInterval = setInterval(nextSlide, intervalTime);

// }
