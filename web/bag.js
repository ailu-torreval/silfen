const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
url = "http://magmadesign.dk/wp21/wp-json/wp/v2/bag/" + id;
console.log(url);
// document.querySelector("#prod-list-title").textContent = id;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    showBag(data);
  });

function showBag(bag) {
  console.log(bag);
  document.title = `${bag.model} - Silfen Webshop`;
  document.querySelector("#product-name").textContent = bag.model;
  document.querySelector("#drop-info").textContent = bag.drop;
  document.querySelector("#prod-img1").src = bag.front_img.guid;
  document.querySelector("#prod-img2").src = bag.side_img.guid;
  document.querySelector("#prod-img3").src = bag.inside_img.guid;

  document.querySelector("#prod-price").textContent = `${bag.price} kr.`;
  if (bag.sold_out >= 1) {
    console.log("sold out");
    document.querySelector(".buy").remove();
    document.querySelector("#color-opt-txt").classList.add("out-of-stock");
  } else {
    document.querySelector(".sold-out-txt").classList.add("hidden");
  }
  if (bag.discount) {
    document.querySelector(".new-price").textContent = bag.discount;
    document.querySelector("#prod-price").classList.add("old-prod-price");
  } else {
    document.querySelector(".new-price").remove();
  }
  document.querySelector("#description").innerHTML = bag.short_description;
  document.querySelector("#specs").innerHTML = bag.description;
}

{
  /* <section id="prod">
<div id="img-grid">
    <img id="prod-img1" alt="">
    <img id="prod-img2" alt="">
    <img id="prod-img3" alt="">
</div>
<div id="prod-info">
    <div id="drop-fav">
        <p id="drop-info"></p>
        <i class="far fa-heart"></i>
        <!-- <i class="fas fa-heart"></i> -->
    </div>
    <h1 id="product-name"></h1>
    <div id="price-flex">
        <p id="prod-price"></p>
        <p class="new-price"></p>
    </div>
    <p>Colors</p>
    <div id="color-opt">
        <template id="color-opt-template">
            <a href="bag.html"></a>
        </template>
    </div>
    <p id="prod-color"></p>
    <p class="sold-out-txt">Sorry, this product is sold out. We can let you know when is back though!</p>
    <button class="buy">ADD TO BASKET</button>
    <p id="description"></p>
    <div id="specs">
        <h3>DESCRIPTION <i class="fas fa-chevron-right"></i></h3>
    </div> */
}
