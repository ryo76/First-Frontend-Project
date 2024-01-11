// About Us Carousel
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("demo");
//     let captionText = document.getElementById("caption");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     captionText.innerHTML = dots[slideIndex - 1].alt;
// }

// Subscribe to Email Alert
function subprompt() {
    alert('Thanks for Subscribing. (◑‿◐)');
}

document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    showSlide(slideIndex);
  
    function showSlide(index) {
      const slides = document.querySelectorAll('.slide');
      if (index >= slides.length) {
        slideIndex = 0;
      } else if (index < 0) {
        slideIndex = slides.length - 1;
      }
      slides.forEach((slide) => {
        slide.classList.remove('active');
      });
      slides[slideIndex].classList.add('active');
    }
  
    function nextSlide() {
      showSlide(slideIndex + 1);
    }
  
    function prevSlide() {
      showSlide(slideIndex - 1);
    }
  
    // Add event listeners for next and previous buttons
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', nextSlide);
  
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.addEventListener('click', prevSlide);
  
    const slider = document.querySelector('.slider');
    slider.appendChild(nextButton);
    slider.appendChild(prevButton);
  });
  