// enum Role {
//   Admin,
//   Editor,
//   Guest,
// }

type User = {
  name: string;
  age: number;
  role: Role;
  permissions: string[];
};

type Role = 'admin' | 'editor' | 'guest'; //custom type

let userRole: Role = 'admin';

userRole = 'guest';
console.log(userRole);

let possibleResults2: [1 | -1, 1 | -1];

possibleResults2 = [1, -1];

console.log(possibleResults2);

function access(role: Role) {
  console.log(role);
}

access('admin');
