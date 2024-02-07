const dogs = [
    {name: 'Snickers', age: 2},
    {name: 'Hugo', age: 8}
];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello'); // Prints 'hello'

// Interpolated
console.log('I am a %s string', '😝'); // Prints 'I am a 😝 string'

// Styled
console.log('%c I am smart', 'font-size:20px; background:red; text-shadow: 2px 2px 2px grey'); // Prints 'I am smart' with CSS styles

// warning!
console.warn('ERROR COMING!');

// error
console.error("YOU CAN'T DO THAT");

// info
console.info('FORTRAN was the first programming language');

// testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'THAT IS WRONG!'); // checks if element p contains a class called 'ouch'

// clear console
console.clear();

// viewin DOM Elements
console.log(p);
console.dir(p);

console.clear();

// counting
console.count('hil');

// grouping together
dogs.forEach((dog) =>{
    // console.group(`${dog.name}`);
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    })

console.table(dogs);