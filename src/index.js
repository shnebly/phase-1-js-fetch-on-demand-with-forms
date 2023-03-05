const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('input#searchByID');
    console.log(input.value);
  })
}

document.addEventListener('DOMContentLoaded', init);