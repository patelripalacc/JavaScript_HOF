console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number){
    return function (plusNumber){
        return number + plusNumber;
    }
}

const plus15 = plus(15);

console.log("Result:",plus15(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
];

users.forEach(users => console.log("Name:",users.name));

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let newUser = users.map((user) => {
    return { name: user.name,score: user.score};
});

console.log("Name and Score of Users:",newUser);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

const usersActive = users.filter((users) => users.isActive == true);

console.log("Active Users:",usersActive);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

const descendingOrder = users.sort((a,b) => b.score - a.score);

console.log("Descending order by Score:",descendingOrder);


// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");

const sumScore =  users.reduce((sum,users) => sum + users.score,0);
console.log("Sum of all Users Scores:",sumScore);

const averageScore = sumScore/users.length;
console.log("Average Score of Users:",averageScore);
