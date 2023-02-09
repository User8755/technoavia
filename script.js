const button = document.querySelector(".button");
const form = document.querySelector(".form");
const article = document.querySelector(".block__paragraf_type-article");
const input = document.querySelector(".input");
const place = document.querySelector(".block__paragraf_type-place");

// const list = [
//   { art: "5149", place: "1-1-1" },
//   { art: "5148", place: "5-2-1" },
//   { art: "5147", place: "3-3-9" },
//   { art: "5676", place: "30-3-9" },
//   { art: "5331", place: "31-4-1, 31-5-1" }
// ];

const formSubmit = (evt) => {
  evt.preventDefault();
};

const findArt = (list) => {
  const findArt = list.find((item) => item.art === input.value);
  return findArt;
};

const pre = (item) => {
  if (typeof item == "object") {
    place.textContent = item.place;
  } else {
    place.textContent = "Неверный артикул";
  }
};

form.addEventListener("submit", formSubmit);
button.addEventListener("click", () => {
  (article.textContent = input.value), pre(findArt(list), input.value = '');
});
