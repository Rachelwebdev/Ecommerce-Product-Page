"use strict";

const smallImage = document.querySelectorAll(".sm-img");
const largeImage = document.querySelector(".upper-image");
const lowerDivImage = document.querySelector(".lower-image");
const upperDivImage = document.querySelector(".upper-image-cont");

for (let i = 0; i < smallImage.length; i++) {
  smallImage[i].addEventListener("click", changeImage);
  function changeImage() {
    const data = this.dataset.value;
  }
}

smallImage.forEach((img) => {
  img.addEventListener("click", () => {
    lowerDivImage.querySelector(".active").classList.remove("active");
    img.classList.add("active");
  });
});
