class User2 {
  protected _firstName: string = '';
  private _lastName: string = '';
  // constructor(private firstName: string, private lastName: string) {}
  set firstName(name: string) {
    if (name.trim() === '') {
      throw new Error('Invalid name');
    }
    this._firstName = name;
  }

  set lastName(name: string) {
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
  constructor(public jobTitle: string) {
    super();
    //super.firstName = 'Jackko'
  }
  work() {
    console.log(this._firstName);
  }
}

abstract class UIElement {
  constructor(public identifier: string) {}
  clone(targetLocation: string) {}
}

// let uiElement = new UIElement(); Cannot create an instance of an abstract class.

class Button extends UIElement {
  constructor(public identifier: string, public position: 'left' | 'right') {
    super(identifier);
  }
}
