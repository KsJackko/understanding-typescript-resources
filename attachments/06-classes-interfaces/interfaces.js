"use strict";
// interface is like a contract that force a class to have a certain shape
class AuthenticatableUser {
    email;
    password;
    role;
    userName;
    constructor(email, password, role, userName) {
        this.email = email;
        this.password = password;
        this.role = role;
        this.userName = userName;
    }
    login() { }
    logout() { }
}
function authenticate(user) {
    user.login();
}
let user;
user = {
    email: 'test@example.com',
    password: '12345678',
    role: 'student',
    login() {
        // reach out to a database, check credentials, create a session
    },
    logout() {
        // clear the session
    },
};
