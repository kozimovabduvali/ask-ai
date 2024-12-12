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
