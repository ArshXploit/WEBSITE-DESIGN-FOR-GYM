// Example: You can add interactivity for the form or smooth scrolling for the page
document.querySelector('a[href^="#"]').addEventListener('click', function(e) {
  e.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  target.scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', () => {
  const images = [
    '2023-09-01.jpg',
    '32.jpg',
    '34.jpg',
    '51.jpg',
    '89.jpg',
    '69.jpg'
  ];

  let currentIndex = 0;
  const galleryImage = document.getElementById('gallery-image');

  function changeImage() {
    // Change the image
    galleryImage.src = images[currentIndex];

    // Update the index
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image

    // Fade effect
    galleryImage.style.opacity = 0; // Start with opacity 0
    setTimeout(() => {
      galleryImage.style.opacity = 1; // Fade in
    }, 500); // Delay to allow for fading out
  }

  // Change image every 3 seconds
  setInterval(changeImage, 3000);
});

