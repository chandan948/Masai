// Step 1: Create User Objects
const users = [
    {
        name: 'Ruhi',
        age: 22,
        hobbies: ['reading', 'traveling', 'cooking']
    },
    {
        name: 'Priyanshu',
        age: 23,
        hobbies: ['gaming', 'hiking', 'photography']
    },
    {
        name: 'Ashu',
        age: 21,
        hobbies: ['swimming', 'cycling', 'running']
    }
];

// Step 2: Destructure Properties
users.forEach(user => {
    const { name, age } = user;
    console.log(`Name: ${name}, Age: ${age}`);
});

// Step 3: Use Spread Operator to Combine Hobbies Arrays
const allHobbies = users.reduce((acc, user) => [...acc, ...user.hobbies], []);
console.log('All Hobbies:', allHobbies);
