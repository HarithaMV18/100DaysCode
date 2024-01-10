const nav_list = document.querySelectorAll(".nav-menu-list  ul")[0].children;

const changeArrow = (count, index) => {
  if (count % 2 !== 0) {
    nav_list[index].firstElementChild.src = "./images/icon-arrow-up.svg";
    nav_list[index].lastElementChild.style.visibility = "visible";
    nav_list[index].lastElementChild.style.opacity = "1";
  } else {
    nav_list[index].firstElementChild.src = "./images/icon-arrow-down.svg";
    nav_list[index].lastElementChild.style.visibility = "hidden";
    nav_list[index].lastElementChild.style.opacity = "0";
  }
};

for (let index = 0; index < nav_list.length; index++) {
  if (index < 2) {
    let count = 0;
    nav_list[index].addEventListener("click", () => {
      count++;
      changeArrow(count, index);
    });
  }
}
// nav_list.forEach((item, index) => {
//   if (index < 2) {
//     let count = 0;
//     nav_list[index].addEventListener("click", () => {
//       count++;
//       changeArrow(count, index);
//     });
//   }
// });
