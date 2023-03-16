const button = document.querySelector(".button");
const form = document.querySelector(".form");
const article = document.querySelector(".block__span_type-article");
const input = document.querySelector(".input");
const place = document.querySelector(".block__span_type-place");
const times = document.querySelector(".header__time");
const name = document.querySelector(".block__span_type-name");
const time = new Date();

const setTimes = () => {
  const data = new Date();
  const min = data.getMinutes();
  const hours = data.getHours();

  const time = (item) => {
    return `0${item}`.slice(-2);
  };

  times.textContent = `${time(hours)} : ${time(min)}`;
};

setInterval(() => setTimes(), 1000);

const formSubmit = (evt) => {
  evt.preventDefault();
};

const findObj = (list) => {
  const findObj = list.filter((item) => item.art === input.value);

  return findObj;
};

const findPlace = (item) => {
  const foundArt = [];
  item.forEach((el) => {
      foundArt.push(el.place);
     });

     return foundArt
}

const findName = (item) => {
  const foundName = [];
  foundName.push(item[0].name)

  return foundName
}

const pre = (item) => {
  if (item.length > 0) {
    const arrr = findPlace(item).join("\n");
    const arrrr = arrr.split(", <br>");
    place.textContent = arrrr;
    name.textContent = findName(item)
  } else {
    place.textContent = "Место не задано";
    name.textContent = ''
  }
};

form.addEventListener("submit", formSubmit);
button.addEventListener("click", () => {
  (article.textContent = input.value), pre(findObj(list), input.value = "");
});