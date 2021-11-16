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
    showProductCard(data);
  });

// function handleProductList(data) {
//   console.log(data);
//   data.forEach(showProductCard);
// }

function showProductCard(bag) {
  console.log(bag);
  document.title = `${bag.model} - Silfen Webshop`;
}
