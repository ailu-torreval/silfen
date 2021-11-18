fetch("http://magmadesign.dk/wp21/wp-json/wp/v2/bag?_embed&per_page=100")
  .then((res) => res.json())

  .then(gotData);

function gotData(bags) {
  bags.forEach(showBags);
}

function showBags(bag) {
  console.log(bag);
  const shCard = document.querySelector("#bag-template").content;
  const clone = shCard.cloneNode(true);
  clone.querySelector(".material").textContent = bag.material;
  if (bag.material === "Recycled Nylon") {
    clone.querySelector(".material").classList.add("opt1");
  } else {
    clone.querySelector(".material").classList.add("opt2");
  }
  if (bag.sold_out >= 1) {
    clone.querySelector(".sold-out-tag").classList.remove("hidden");
    clone.querySelector(".bag-pic").classList.add("opacity");
    clone.querySelector(".quickview").classList.add("hidden2");
    clone.querySelector(".card-info").classList.add("grey-txt");
    clone.querySelector(".card-title").classList.add("grey-txt");
  }

  if (bag.discount_price > 0) {
    clone.querySelector(".off").classList.remove("hidden");
    clone.querySelector(".off").textContent = `${bag.discount_price} kr.`;
    clone.querySelector(".price").classList.add("old-price");
  }
  clone.querySelector(".bag-pic").src = bag.front_img.guid;
  //   clone.querySelector(".bag-pic2").src = bag.model_img.guid;
  clone.querySelector(".card-title").textContent = bag.model;
  clone.querySelector(".color-name").textContent = bag.color;
  clone.querySelector(".price").textContent = `${bag.price} kr.`;
  clone
    .querySelector(".bag-link")
    .setAttribute("href", "bag.html?id=" + bag.id);
  clone
    .querySelector(".card-title")
    .setAttribute("href", "bag.html?id=" + bag.id);
  const aEl = clone.querySelector(".quickview");
  aEl.addEventListener("click", showPopUp);

  function showPopUp(e) {
    e.preventDefault();
    document.querySelector("#pop-up").classList.remove("hidden2");
    document.querySelector("#qv-img1").src = bag.front_img.guid;
    document
      .querySelector("#close-pop-up")
      .addEventListener("click", closePopUp);
  }

  const parent = document.querySelector(".bag-grid");
  parent.appendChild(clone);
}

function closePopUp() {
  document.querySelector("#pop-up").classList.add("hidden2");
}
