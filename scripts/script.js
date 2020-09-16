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

    sum = sum + (pages * 350);
    result.innerHTML = `<h1>Cena za usługę: ${sum} PLN</h1>`
}


form.addEventListener('submit', handleForm);



    // const wwwDesign = document.querySelector('#wwwDesign').value;
    // const WPinstalation = document.querySelector('#WPinstalation').value;
    // const rodo = document.querySelector('#rodo').value;
    // const google = document.querySelector('#google');
    // const googleMaps = document.querySelector('#googleMaps').value;
    // const seo = document.querySelector('#seo').value;
    // const ssl = document.querySelector('#ssl').value;
    // const mailing = document.querySelector('#mailing').value;
    // const page = document.querySelector('#page').value;
    // const contact = document.querySelector('#contact').value;
    // const gallery = document.querySelector('#gallery').value;
    // const regulations = document.querySelector('#regulations').value;
