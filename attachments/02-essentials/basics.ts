let userName: string;
let userAge: number = 20;

userName = 'Jackko';
// userAge = '20';

console.log(userName);

function add(a: number, b = 5) {
  return a + b;
}

add(10);
add('10');
