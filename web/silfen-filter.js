const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("category");
url =
  "http://magmadesign.dk/wp21/wp-json/wp/v2/bag?_embed&per_page=100&categories=" +
  cat;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  console.log(data);
  data.forEach(showBag);
}

function showBag(bag) {
  console.log(bag);
  const shCard = document.querySelector("#bag-template").content;
  const clone = shCard.cloneNode(true);
  clone.querySelector(".material").textContent = bag.material;
  if (bag.material === "Recycled Nylon") {
    clone.querySelector(".material").classList.add("opt1");
  } else {
    clone.querySelector(".material").classList.add("opt2");
  }
  clone.querySelector(".bag-pic").src = bag.front_img.guid;
  // clone.querySelector(".bag-img2").src = bag.model_img.guid;
  clone.querySelector(".card-title").textContent = bag.model;
  clone.querySelector(".color-name").textContent = bag.color;
  clone.querySelector(".price").textContent = `${bag.price} kr.`;
  clone
    .querySelector(".bag-link")
    .setAttribute("href", "bag.html?id=" + bag.id);
  clone
    .querySelector(".card-title")
    .setAttribute("href", "bag.html?id=" + bag.id);

  const parent = document.querySelector(".bag-grid");
  parent.appendChild(clone);
}
