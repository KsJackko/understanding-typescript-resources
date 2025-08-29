"use strict";
class User2 {
    _firstName = '';
    _lastName = '';
    // constructor(private firstName: string, private lastName: string) {}
    set firstName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name');
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name');
        }
        this._lastName = name;
    }
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
    static eid = 'USER';
    static greet() {
        console.log('Hello!');
    }
}
console.log(User2.eid);
User2.greet();
const jackko5545 = new User2();
jackko5545.firstName = 'Jackko';
jackko5545.lastName = 'Zhang';
console.log(jackko5545.fullName);
class Employee extends User2 {
    jobTitle;
    constructor(jobTitle) {
        super();
        this.jobTitle = jobTitle;
        //super.firstName = 'Jackko'
    }
    work() {
        console.log(this._firstName);
    }
}
class UIElement {
    identifier;
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone(targetLocation) { }
}
// let uiElement = new UIElement(); Cannot create an instance of an abstract class.
class Button extends UIElement {
    identifier;
    position;
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
}
