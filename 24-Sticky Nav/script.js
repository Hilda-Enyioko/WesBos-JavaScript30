const nav = document.querySelector("#main");

function fixedNav() {
    if (scrollY >= nav.offsetTop) {
        document.body.classList.add('fixed-nav');
        document.body.style.paddingTop = nav.offsetHeight + 'px';
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixedNav);