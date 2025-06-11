"use strict";

let featureProduct = document.querySelector("#feature-product");

const fetchProducts = async () => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    console.log(data);
    featureProduct.innerHTML = data
      .map(
        (data) =>
          `<div class="card-hero w-full h-[300px] shadow-md bg-white cursor-pointer">
        <a href="../page/product_detail.html?id=${data.id}">
  <img
    class="w-full h-[155px] aspect-square object-cover"
    src=${data.images[0] || "https://www.chanchao.com.tw/images/default.jpg"}
    alt="product image"
  />
  </a>
  <div class="bady-card px-[6px] py-[8px]">
    <div class="price flex justify-between">
      <p class="font-poppins-medium text-primary">$ ${data?.price}</p>
      <i class="fa-regular fa-bookmark pt-[4px]"></i>
    </div>
    <p
      class="pro-name font-poppins-medium text-[18px] text-secondary py-[6px] line-clamp-1"
    >
      ${data?.title}
    </p>
    <p class="description font-poppins-regular line-clamp-2 text-primary text-[14px]">
      ${data?.description}
    </p>
  </div>
</div> `
      )
      .join("");
  } catch (error) {
    console.log(error);
  }
};
fetchProducts();

