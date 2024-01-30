const input = document.querySelectorAll('.controls input');

function handleUpdate() {
    const unit = this.dataset.sizing || "";

    document.documentElement.style.setProperty(`--${this.name}`, this.value + unit)
}

input.forEach(input => {
    input.addEventListener('change', handleUpdate);
})

input.forEach(input => {
    input.addEventListener('mousemove', handleUpdate);
})