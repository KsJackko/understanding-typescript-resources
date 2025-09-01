var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var names = ['Max', 'Anna'];
var store2 = {};
store2.name = 'Jackko';
store2.age = 20;
store2.married = false;
var nameStore = {};
function merge(a, b) {
    return [a, b];
}
var ids = merge('ppp', 1);
ids[0];
// function mergeObj<T extends object>(a: T, b: T) {
//   return { ...a, ...b };
// }
function mergeObj(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = mergeObj({ userName: 'Jackko' }, { age: 20 });
console.log(merged);
