let hobbies: string[] = ['Sports', 'Cooking'];

// hobbies.push(10);

// let users: (string | number)[];
let users: Array<string | number>;

users = [1, 'Jackko'];
console.log(users);

let possibleResults: [number, number];

possibleResults = [1, -1];
// possibleResults = [5, 10, 12];

let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: { description: string; id: number };
} = {
  name: 'Max',
  age: 38,
  hobbies: ['Sports', 'Cooking'],
  role: { description: 'admin', id: 9 },
};

// any non-null and non-undefine value
let val: {} = 'some text';

let data: Record<string, number | string>;
data = { id: 1, name: 'Alice' };
// data = { flag: true };
