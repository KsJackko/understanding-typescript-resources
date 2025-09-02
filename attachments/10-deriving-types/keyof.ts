type User = { name: String; age: number };
type UserKeys = keyof User;

let validKey: UserKeys;

validKey = 'name';
validKey = 'age';

function getProps<T extends object, U extends keyof T>(obj: T, key: U) {
  const val = obj[key];
  if (val === undefined || val === null) {
    throw new Error('Accessing undefined or null value');
  }
  return val;
}

const user = { name: 'Jackko', age: 20 };
const val = getProps(user, 'name');
