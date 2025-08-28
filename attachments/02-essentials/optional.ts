function generateError(msg?: string) {
  throw new Error(msg);
}

generateError();

type User2 = {
  name: string;
  age: number;
  role?: 'admin' | 'guest';
};

let input = null;
const didProvideInput = input ?? false;

console.log(didProvideInput);
