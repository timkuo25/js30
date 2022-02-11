const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

const makeGreen = () => {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log(`hello I am ${'45'}`);

// Styled
console.log('%c some text', 'font-size: 50px;')

// warning!
console.warn('warn');

// Error :|
console.error('error');

// Info
console.info('info');

// Testing
console.assert(1 === 2, 'fail');

// clearing
// console.clear();

// Viewing DOM Elements
// console.log(p);
// console.dir(p);

// Grouping together
dogs.forEach(item => {
    console.group(`${item.name}`);
    console.log(`This is ${item.name}`);
    console.log(`${item.name} is ${item.age} years old`);
    console.groupEnd(`${item.name}`);
})

// counting
console.count(dogs);

// timing
console.time('start');
console.timeEnd('start');
console.table(dogs);