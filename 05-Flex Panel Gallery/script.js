const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('open');
}

panels.forEach(panel => {
    panel.addEventListener('click', toggleOpen);
});

function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }

    console.log(e);
}

panels.forEach(panel => {
    panel.addEventListener('transitionend', toggleActive);
});