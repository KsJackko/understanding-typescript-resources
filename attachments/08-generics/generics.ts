let names: Array<string> = ['Max', 'Anna'];

type DataStore2<T> = {
  [key: string]: T;
};

let store2: DataStore2<string | boolean | number> = {};
store2.name = 'Jackko';
store2.age = 20;
store2.married = false;

let nameStore: DataStore2<string> = {};

function merge<T, U>(a: T, b: U) {
  return [a, b];
}

const ids = merge('ppp', 1);
ids[0];

function mergeObj<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

// function mergeObj(a: object, b: object) {
//   return { ...a, ...b };
// }

const merged = mergeObj({ userName: 'Jackko' }, { age: 20 });
console.log(merged);

class User3<T> {
  constructor(public id: T) {}
}

const user = new User3('Jackko');
user.id;
