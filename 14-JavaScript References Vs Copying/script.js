// start with strings, numbers and booleans
let herName = "Hilda";
let age = "19";
let copyName = herName;
let copyAge = age;
console.log(herName, copyName, '\n', age, copyAge);
herName = "Amarachi";
age = 20;
console.log(herName, copyName, '\n', age, copyAge);



    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.

    // You might think we can just do something like this:
    let team = players;
    console.log(players, team);

    // however what happens when we update that array?
    // team[3] = 'Hilda';
    // now here is the problem!
    console.log(players, team);
    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    let newTeam = players.slice();
    console.log(players, newTeam);
    // one way
    newTeam[3] = 'Hilda';
    console.log(players, newTeam);

    // or create a new array and concat the old one in
    let team2 = [].concat(players);
    console.log(players, team2);

    // or use the new ES6 Spread
    let team3 = [...players];
    console.log(players, team3);

    // now when we update it, the original one isn't changed
    team3[3] = 'Hilda';
    console.log(players, team3);

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    let newPerson = person;
    console.log(person, newPerson);

    // newPerson.age = 19;
    console.log(person, newPerson);

    // how do we take a copy instead?
    let person2 = Object.assign({}, person, {age: 19});
    console.log(person, person2);

    // We will hopefully soon see the object ...spread
    const wes = {
      name: 'Wes',
      age: 100,
      social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
      }
    };

    let hilda = {...wes};
    console.log(wes, hilda);
    
    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    hilda.name = 'Hilda';
    console.log(wes, hilda);

    // hilda.social.twitter = '@hildahaemaxwell';
    console.log(wes, hilda);

    // to clone deep
    const newHilda = JSON.parse(JSON.stringify(wes));
    newHilda.social.twitter = '@hildahaemaxwell';
    console.log(wes, newHilda);