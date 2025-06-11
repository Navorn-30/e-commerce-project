"use strict";

let mainImage = document.querySelector("#mainImage");
const changeImage = (src) => {
  mainImage.src = src;
};

let defaultColor = "transparent";
let activeColor = "bg-blue-400";
let buttons = document.querySelectorAll("#button");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => {
      b.classList.add(defaultColor);
      b.classList.remove(activeColor);
    });

    btn.classList.remove(defaultColor);
    btn.classList.add(activeColor);
  });
});

let subImages = document.querySelector("#subImages");
let subImages2 = document.querySelector("#subImages2");
let subImages3 = document.querySelector("#subImages3");
let subImages4 = document.querySelector("#subImages4");
let productTitle = document.querySelector("#title");
let desc = document.querySelector("#description");
let productPrice = document.querySelector("#price");

const fetchProductDetails = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  if (!productId) return;

  try {
    const res = await fetch(
      `https://api.escuelajs.co/api/v1/products/${productId}`
    );
    const data = await res.json();
    mainImage.src =
      data.images[0] ||
      "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
    productTitle.textContent = data.title || "Unknown";
    desc.textContent = data.description || "Unknown";
    productPrice.textContent = data.price || "Unknown";
    subImages.src = data.images[1] || "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
    subImages2.src = data.images[2] || "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
    subImages3.src = data.images[1] || "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
    subImages4.src = data.images[2] || "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
  } catch (error) {
    console.log(error);
  }
};

fetchProductDetails();
