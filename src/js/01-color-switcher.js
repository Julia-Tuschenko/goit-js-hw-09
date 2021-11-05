function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    colorBody: document.querySelector('body'),
};

const onClick = { 
  intervalId: null,
  isActive: false,

  start(){
    if(this.isActive){
      return;
    };
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const color = getRandomHexColor();
      refs.colorBody.style.backgroundColor = color;
    }, 1000);
  }, 

  stop(){
    clearInterval(this.intervalId);
    console.log(`Interval with id ${this.intervalId} has stopped!`);
  },
};

refs.btnStart.addEventListener("click", () => {
  onClick.start();
});
refs.btnStop.addEventListener("click", () => {
  onClick.stop();
});



// function onColorImprovisation(){
//     const color = getRandomHexColor();
//     refs.colorBody.style.backgroundColor = color;
// };


// onClick.start();

// const onClick = () => { 
//   setInterval(() => {
//         onColorImprovisation();
//     }, 1000);
//   };

// const stopClick = () => {
//   btnStop.style.display= "block";
// };
