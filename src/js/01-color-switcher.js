function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    colorBody: document.querySelector('body'),
};


function onColorImprovisation(){
    const color = getRandomHexColor();
    refs.colorBody.style.backgroundColor = color;
};

const onClick = () => { 
  setInterval(() => {
        onColorImprovisation();
    }, 1000);
  };

const stopClick = () => {
  btnStop.style.display= "block";
};


refs.btnStart.addEventListener("click", onClick);
refs.btnStop.addEventListener("click", stopClick);



