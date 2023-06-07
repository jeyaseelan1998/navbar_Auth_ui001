let wrapper = document.querySelector('.wrapper');
let navbar = document.querySelector('.nav-bar');
let registerLink = document.querySelector('.register-link');
let loginLink = document.querySelector('.login-link');
let btnLoginPopup = document.querySelector('.login-button-popup');
let formClose = document.querySelector('.icon-close');
let quoteEl = document.querySelector('.random-quote');


console.log(navbar.style);

registerLink.onclick = () => {
    wrapper.classList.add('active');
}

loginLink.onclick = () => {
    wrapper.classList.remove('active');
}


btnLoginPopup.onclick = () => {
    wrapper.classList.add('active-popup');
}

formClose.onclick = () => {
    wrapper.classList.remove('active-popup');
}

const getFact = () => {
    quoteEl.style.display = "none";
    let url = "https://api.quotable.io/quotes/random?limit=1";
    fetch(url)
    .then(response => response.json())
    .then(result => {
        quoteEl.style.display = "block";
        quoteEl.innerHTML = result[0]['content'];
    })
}

getFact();