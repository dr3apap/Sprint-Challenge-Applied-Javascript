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
const carouselEntry = document.querySelector('.carousel-container'),
  carouselArray = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"];

let displayIndex = 0;

function makeCarousel(arr) {
  const carousel = document.createElement('div'),
    carouselLeftButton = document.createElement('div'),
    carouselRightButton = document.createElement('div');

  carousel.append(carouselLeftButton);
  arr.forEach(item => {
    const carouselImg = document.createElement('img');
    carouselImg.src = item;
    console.log(carouselImg);
    carousel.append(carouselImg);
    console.log(carousel);
  })
  carousel.append(carouselRightButton);

  carousel.classList.add('carousel');
  carouselLeftButton.classList.add('left-button');
  carouselRightButton.classList.add('right-button');




  carouselLeftButton.addEventListener("click", event => {
    event.stopPropagation();
    event.preventDefault();
    document.querySelectorAll('.carousel img')[displayIndex].style.display = "none";
    if (displayIndex === 0) {
      displayIndex = arr.length - 1;
    }
    else {
      displayIndex -= 1;
    }
    document.querySelectorAll('.carousel img')[displayIndex].style.display = "block";
  })

  carouselLeftButton.addEventListener("dblclick", event => {
    event.stopPropagation();
    event.preventDefault();
  })

  carouselRightButton.addEventListener("click", event => {
    event.stopPropagation();
    event.preventDefault();
    document.querySelectorAll('.carousel img')[displayIndex].style.display = "none";
    if (displayIndex === arr.length - 1) {
      displayIndex = 0;
    }
    else {
      displayIndex += 1;
    }
    document.querySelectorAll('.carousel img')[displayIndex].style.display = "block";
  })

  carouselRightButton.addEventListener("dblclick", event => {
    event.stopPropagation();
    event.preventDefault();
  })


  return carousel;

}

carouselEntry.append(makeCarousel(carouselArray));
document.querySelectorAll('.carousel img')[displayIndex].style.display = "block";

