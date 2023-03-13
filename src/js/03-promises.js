const formEl = document.querySelector('.form');

formEl.addEventListener('submit', formValue);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}

function formValue(eve) {
  eve.preventDefault();
  const firstDelay = eve.target.delay.value;
  const delayStep = eve.target.step.value;
  const amount = eve.target.amount.value;

  let counter = 0;
  let stepCounter = Number(delayStep);

  const int = setInterval(() => {
    counter += 1;
    stepCounter += Number(firstDelay);

    createPromise(delayStep, amount)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${counter} in ${stepCounter}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${counter} in ${stepCounter}ms`);
      });
    if (counter >= amount) {
      clearInterval(int);
    }
    console.log(stepCounter);
  }, firstDelay);
}
