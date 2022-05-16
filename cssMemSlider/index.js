const point = document.querySelectorAll('.point');
const points = document.querySelector('.points');

const sliders = document.querySelector('.sliders');
const joke = document.querySelector('.joke-slider');

let num = 512;


// point.forEach((el, i) => {
//     el.addEventListener('click', (e) => {
//       sliders.style.transform = `translate(-${num*i}px)`
//       joke.style.transform = `translate(-${num*i}px)`
//       el.classList.add('activ')
//     })
//             el.classList.remove('activ')

// })

point.forEach((el, i) => {

    el.addEventListener('click', (e) => {
        point.forEach((elem, i) => {
            elem.classList.remove('activ')
        });

      sliders.style.transform = `translate(-${num*i}px)`
      joke.style.transform = `translate(-${num*i}px)`
      el.classList.add('activ')
    })
})