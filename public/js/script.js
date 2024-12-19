// Typing Effect
const txt = "Введите свой запрос!";
const txtLen = txt.length;
let char = 0;
let timeOut;

const inputElement = document.querySelector('.main-search');

inputElement.setAttribute('placeholder', '|');

function typeIt() {
  const humanize = Math.round(Math.random() * (200 - 30)) + 30;
  timeOut = setTimeout(function () {
    char++;
    const type = txt.substring(0, char);
    inputElement.setAttribute('placeholder', type + '|');

    if (char === txtLen) {
      setTimeout(() => {
        clearTimeout(timeOut);
        resetTyping();
      }, 2000);
    } else {
      typeIt();
    }
  }, humanize);
}

function resetTyping() {
  char = 0;
  inputElement.setAttribute('placeholder', '|');
  typeIt();
}

typeIt();





// accordion
const accordions = document.querySelectorAll(".accordion__item");
const accordionHeaders = document.querySelectorAll(".accordion__header");
const accordionIcons = document.querySelectorAll(".accordion__icon");
const accordionContents = document.querySelectorAll(".accordion__content");

// Har bir header uchun click hodisasi
accordionHeaders.forEach((header, index) => {
  header.addEventListener("click", () => {
    const isActive = accordionContents[index].classList.contains("open");

    // Barcha accordionlarni yopish
    accordionContents.forEach((content, i) => {
      content.classList.remove("open");
      accordionIcons[i].classList.remove("rotate-45");
      accordionIcons[i].classList.add("rotate-0");
    });

    // Faqat tanlangan accordionni ochish
    if (!isActive) {
      accordionContents[index].classList.add("open");
      accordionIcons[index].classList.add("rotate-45");
      accordionIcons[index].classList.remove("rotate-0");
    }
  });
});

// Tashqariga bosilganda barcha accordionlarni yopish
document.addEventListener("click", (e) => {
  if (!e.target.closest(".accordion__item")) {
    accordionContents.forEach((content, i) => {
      content.classList.remove("open");
      accordionIcons[i].classList.remove("rotate-45");
      accordionIcons[i].classList.add("rotate-0");
    });
  }
});
