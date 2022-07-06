"use strict";

const smallImage = document.querySelectorAll(".sm-img");
const firstLargeImage = document.querySelector(".upper-image");
const lowerDivImage = document.querySelector(".lower-image");
const upperDivImage = document.querySelector(".upper-image-cont");
const numberOfOrders = document.querySelector(".product-num");
const cart = document.querySelector(".cart");
const emptyCartBox = document.querySelector(".empty_cart");

for (let i = 0; i < smallImage.length; i++) {
  smallImage[i].addEventListener("click", changeImage);
  function changeImage() {
    const data = this.dataset.value;
    if (data === "1") {
      upperDivImage.innerHTML = '<img src="./images/image-product-1.jpg" />';
    } else if (data === "2") {
      upperDivImage.innerHTML = '<img src="./images/image-product-2.jpg" />';
    } else if (data === "3") {
      upperDivImage.innerHTML = '<img src="./images/image-product-3.jpg" />';
    } else if (data === "4") {
      upperDivImage.innerHTML = '<img src="./images/image-product-4.jpg" />';
    } else {
      upperDivImage.innerHTML = '<img src="./images/image-product-1.jpg" />';
    }
  }
}

smallImage.forEach((img) => {
  img.addEventListener("click", () => {
    lowerDivImage.querySelector(".active").classList.remove("active");
    img.classList.add("active");
  });
});

cart.addEventListener("click", () => {
  const number = parseInt(numberOfOrders.innerHTML.replace("0", 0));
  console.log(cart);
  if (number === 0) {
    emptyCartBox.classList.toggle("display_cart");
  }
});
