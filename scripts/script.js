const form = document.querySelector('#form');
const result = document.querySelector('.result');

const handleForm = (event) => {
    event.preventDefault();
    let sum = 0;
    let elements = [...form.elements];
    const pages = document.querySelector('#page').value;

    elements = elements.filter(element => element.checked);
    for (let i = 0; i < elements.length; i++) {
        sum = sum + (elements[i].dataset.price) * 1;
    }

    sum = sum + Math.abs(pages * 350);
    result.innerHTML = `<h1>Cena za usługę: ${sum} PLN</h1>`
}

form.addEventListener('submit', handleForm);




