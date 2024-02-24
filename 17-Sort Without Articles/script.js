const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function trim(a) {
    return a.replace(/^(a |an |the )/i, "");
}

const sortedBands = bands.sort((a, b) => {
    return trim(a) > trim(b) ? 1 : -1;
});
console.log(sortedBands);

const list = document.querySelector('#bands');

list.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');