// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const atLeastOne = people.some(item => {
    const kotoshi = new Date().getFullYear();
    return (kotoshi - item.year) >= 19;
})

// Array.prototype.every() // is everyone 19 or older?
const every = people.every(item => {
    const kotoshi = new Date().getFullYear();
    return (kotoshi - item.year) >= 19;
})

console.log(atLeastOne, every)


// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const com823423 = comments.find(item => item.id === 823423);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const com823423Index = comments.findIndex(item => item.id === 823423);

console.log(com823423, com823423Index);

comments.splice(com823423Index, 1);
console.log(comments);
