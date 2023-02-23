const button = document.querySelector(".button");
const form = document.querySelector(".form");
const article = document.querySelector(".block__paragraf_type-article");
const input = document.querySelector(".input");
const place = document.querySelector(".block__paragraf_type-place");
const times = document.querySelector(".header__time");

const time = new Date();
const min = time.getMinutes();

const minutes = () => {
  if (`${min}`.length > 1) {
    return min;
  } else {
    return 0 + `${min}`;
  }
};

const setTimes = () => {
  const time = new Date();
  const min = time.getMinutes();

  const minutes = () => {
    if (`${min}`.length > 1) {
      return min;
    } else {
      return "0" + min;
    }
  };

  times.textContent = `${time.getHours()} : ${minutes()}`;
};

setInterval(() => setTimes());

const formSubmit = (evt) => {
  evt.preventDefault();
};

const findArt = (list) => {
  const arr = [];
  const findObj = list.filter((item) => item.art === input.value);
  findObj.forEach((item) => {
    arr.push(item.place);
  });



  return arr;
};

const pre = (item) => {
  if (item.length > 0) {
    const arrr = item.join('\n')
    console.log(arrr)
    const arrrr = arrr.split(', <br>')
    place.textContent = arrrr
  } else {
    article.textContent = "Неверный артикул";
    place.textContent = ''
  }
};

form.addEventListener("submit", formSubmit);
button.addEventListener("click", () => {
  (article.textContent = input.value), pre(findArt(list), (input.value = ""));
});
