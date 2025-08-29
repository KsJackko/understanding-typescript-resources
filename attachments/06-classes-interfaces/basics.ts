class User {
  public readonly hobbies: string[] = [];
  constructor(public name: string, private age: number) {}
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
