/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
let images = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg']
function createCarousel (images) {
  let current = 0;
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const img = document.createElement('img');
  const rightButton = document.createElement('div');

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  img.src = images[0];
  rightButton.classList.add('right-button');

  leftButton.textContent = ' < ';
  rightButton.textContent = ' > ';

  leftButton.addEventListener("click", function (event) {
    if (current === 3) {
      img.src = images[0];
      current = 0;
    } else {
      img.src = images[current + 1];
      current += 1;
    }
  })

  rightButton.addEventListener("click", function (event) {
    if (current === 0) {
      img.src = images[3];
      current = 3;
    } else {
      img.src = images[current - 1];
      current -= 1;
    }
  })

  carousel.appendChild(leftButton);
  carousel.appendChild(img);
  carousel.appendChild(rightButton);

  return carousel;
}

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(createCarousel(images));
