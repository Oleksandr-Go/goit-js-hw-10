import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const radioCheck = event.target.elements.state.value;
  const delay = event.target.elements.delay.value;

  const promise = delay => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => (radioCheck === 'fulfilled' ? resolve(delay) : reject(delay)),
        delay
      );
    });
  };

  promise(delay)
    .then(resolve => {
      iziToast.success({
        position: 'center',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(reject => {
      iziToast.error({
        position: 'center',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });

  form.reset();
});
