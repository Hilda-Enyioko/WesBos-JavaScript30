const divs = document.querySelectorAll('divs');
const button = document.querySelector('button');

function logText(e) {
    console.log(this.classList.value);
    // e.stopPropagation(); // stop bubbling!
    // console.log(this);
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true
  }));

button.addEventListener('click', () => {console.log('clicked !!!')});