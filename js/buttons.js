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
  clone.querySelector(".bag-img").src = bag.front_img.guid;
  // clone.querySelector(".bag-img2").src = bag.model_img.guid;

  const parent = document.querySelector("#dynamic-grid");
  parent.appendChild(clone);
}

// <section id="dynamic-grid">
//     <template id="bag-template">
//         <div class="img-card">
//             <img class="bag-img" src="" alt="">
//             <div class="opt1"></div>
//         </div>
//     </template>
// </section>
