let itemsTag = document.querySelectorAll(".home__tagbox--item");
let itembox = document.querySelectorAll(".home__cardcontainer--card");

for (let i = 0; i < itemsTag.length; i++) {
  itemsTag[i].addEventListener("click", function () {
    for (let j = 0; j < itemsTag.length; j++) {
      itemsTag[j].classList.remove("active");
    }
    itemsTag[i].classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < itembox.length; k++) {
      itembox[k].classList.add("hide");
      itembox[k].classList.remove("active");

      if (
        itembox[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        itembox[k].classList.add("active");
        itembox[k].classList.remove("hide");
      }
    }
  });
}
