const person = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 67,
    homeTown: 'Lehi',
    hobbies: ['Fishing', 'Running', 'Camping'],
    favMovies: {
        name: 'Spiderman',
        rating: 5,
        year: '2000'
    },
    favFoods: [
        {
            name: 'pizza',
            size: 'large',
            topping: ['pepperoni', 'pineapple']
        },
        {
            name: 'noodles',
            size: 'large',
            topping: ['cheese', 'sausage']
        }
    ]
}
const person1 = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 67,
    homeTown: 'Provo',
    hobbies: ['Fishing', 'Running', 'Camping'],
    favMovies: {
        name: 'Spiderman',
        rating: 5,
        year: '2000'
    },
    favFoods: [
        {
            name: 'pizza',
            size: 'large',
            topping: ['pepperoni', 'pineapple']
        },
        {
            name: 'noodles',
            size: 'large',
            topping: ['cheese', 'sausage']
        }
    ]
}

let {homeTown, firstName} = person
let {homeTown: person1Hometown, firstName: person1Firstname} = person1

// console.log(homeTown);
// // console.log(firstName);

// console.log(person1Hometown);

// person.favColor = ['red', 'blue']

// delete person.age

// console.log(person);

// person.favFoods.splice(0,1)
// console.log(person.favFoods);
// ---------CLASSES--------- //

class Dog {
    constructor (name, breed, age){
        this.name = name
        this.breed = breed
        this.age = age
    }

    greeting () {
        console.log(`Hello, my name is ${this.name}. I am ${this.breed}. I am ${this.age} years old.`);
    }
}

let dog1 = new Dog('lassie', 'collie', 5)
let dog2 = new Dog('John', 'lab', 8)

// console.log(dog1);
// console.log(dog2);

// dog1.greeting()
// dog2.greeting()

// for (let key in dog1) {
//     console.log(dog1[key]);
// }

class Puppy extends Dog {
    constructor (name, breed, age, trainingLevel) {
        super (name, breed, age)

        this.trainingLevel = trainingLevel
    }

    levelUp (num) {
        this.trainingLevel += num
    }
}

let puppy1 = new Puppy ('jane', 'husky', 3, 20)
puppy1.levelUp(5)

console.log(puppy1);