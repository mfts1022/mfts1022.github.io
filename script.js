document.addEventListener("DOMContentLoaded", function () {
  const slideshows = document.querySelectorAll(".slideshow");

  slideshows.forEach(function (slideshow) {
    const images = slideshow.getElementsByTagName("img");
    let currentIndex = 0;

    function showImage(index) {
      if (index < 0) {
        index = images.length - 1;
      } else if (index >= images.length) {
        index = 0;
      }

      for (let i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
      }

      images[index].classList.add("active");
      currentIndex = index;
    }

    showImage(currentIndex);

    setInterval(function () {
      showImage(currentIndex + 1);
    }, 3000);
  });
});
