function add(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log(message);
}

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

function performJob(cb: (m: string) => void) {
  cb('Job done!');
}

performJob(log);

type User = {
  name: string;
  age: number;
  greet: () => string;
};

let user: User = {
  name: 'Jackko',
  age: 20,
  greet() {
    console.log('Hello there');
    return 'Hello';
  },
};

user.greet();

export default function Bye() {
  console.log('byebye');
}
