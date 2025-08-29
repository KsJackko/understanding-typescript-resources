"use strict";
class User {
    name;
    age;
    hobbies = [];
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`My age is ${this.age}`);
    }
}
const jackko = new User('Jackko', 20);
const jacky = new User('Jacky', 19);
const Jay = new User('Jay', 18);
// jackko.age = 21;
// jackko.hobbies = [swimming];
jackko.hobbies.push('swimming');
console.log(jackko);
