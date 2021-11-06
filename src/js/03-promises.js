import { Notify } from 'notiflix/build/notiflix-notify-aio';


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}

const form = document.querySelector('.form');
form.addEventListener("submit", onSubmitForm);



function onSubmitForm(element) {
  element.preventDefault();
  const { delay, step, amount } = element.currentTarget;

  const amountRef = Number(amount.value);
  const stepRef = Number(step.value);
  const delayRef = Number(delay.value);

  for (let i = 1; i <= amountRef; i += 1) {
    createPromise(i, delayRef)
      .then(({ i, delayRef }) => {
        setTimeout(() => {
          Notify.success(`✅ Fulfilled promise ${i} in ${delayRef}ms`, { useIcon: false });
        }, delayRef);
      })
      .catch(({ i, delayRef }) => {
        setTimeout(() => {
          Notify.failure(`❌ Rejected promise ${i} in ${delayRef}ms`, { useIcon: false });
        }, delayRef);
      });
    delayRef += stepRef;
  }

}






















// delay = refs.element.delay.currentTarget.value;
// step = refs.element.step.currentTarget.value;
// amount = refs.element.amount.currentTarget.value;


