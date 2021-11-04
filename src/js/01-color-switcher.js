function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    colorBody: document.querySelector('body'),
};

console.log(refs.btnStart);
console.log(refs.btnStop);


function onColorImprovisation(){
    const color = getRandomHexColor();
    refs.colorBody.style.backgroundColor = color;
};

const onClick = () => {
    setTimeout(() => {
        onColorImprovisation();
    }, 1000);
  };

refs.btnStart.addEventListener("click", onClick);

