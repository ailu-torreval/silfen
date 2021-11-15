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

{
  /* <section id="filter-nav">
        <div id="filter-drop">
            <h3 id="drop-txt">DROP <span><i class="fas fa-chevron-right"></i></span></h3>
            <template id="drop">
                <a href="filter.html"></a>
            </template>
        </div>
        <div id="filter-mat">
            <h3 id="mat-txt">MATERIAL <span><i class="fas fa-chevron-right"></i></span></h3>
            <template id="mat">
                <a href="filter.html"></a>
            </template>
        </div>
        <div id="filter-type">
            <h3 id="type-txt">TYPE <span><i class="fas fa-chevron-right"></i></span></h3>
            <template id="type">
                <a href="filter.html"></a>
            </template>
        </div>
        <div id="filter-color">
            <h3 id="color-txt">COLOR <span><i class="fas fa-chevron-right"></i></span></h3>
            <template id="color">
                <a href="filter.html"></a>
            </template>
        </div>
    </section> */
}

{
  /* <template id="bag-template">
                    <div class="bag-card">
                        <a class="bag-link" href="">
                            <div class="container">
                                <img class="bag-pic" src="" alt="">
                                <!-- <img src="" alt="" class="bag-pic2"> -->
                                <div class="material"></div>
                                <div class="fav-icon"><i class="far fa-heart"></i>
                                    <!-- <i class="fas fa-heart"></i> -->
                                </div>
                                <div class="sold-out-tag">Sold Out <span><i class="far fa-tired"></i></span></div>
                                <!-- <div class="quickview">QUICKVIEW <span><i class="fas fa-search"></i></span></div> -->
                            </div>
                        </a>
                        <a href="bag.html" class="card-title"></a>
                        <p class="color-name"> </p>
                        <p class="price"></p>
                        <p class="off"></p>
                    </div>
                </template> */
}
