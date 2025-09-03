// type ElementType<T extends any[]> = T[number];
// type Example1 = ElementType<StringArray>;
var text = 1;
function getFullname(person) {
    if ('firstName' in person &&
        'lastName' in person &&
        person.firstName &&
        person.lastName) {
        return "".concat(person.firstName, " ").concat(person.lastName);
    }
    throw new Error('No firstname and / or lastname');
}
// const emptyName = getFullname({});
var myName = getFullname({ firstName: 'Jackko', lastName: 'Zhang' });
console.log(myName);
