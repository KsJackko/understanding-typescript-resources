interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

interface AuthenticatableAdmin extends Authenticatable {
  role: 'admin' | 'superadmin';
}

// interface is like a contract that force a class to have a certain shape
class AuthenticatableUser implements Authenticatable {
  constructor(
    public email: string,
    public password: string,
    public role: string,
    public userName: string,
  ) {}
  login() {}
  logout() {}
}

interface Authenticatable {
  role: string;
}

function authenticate(user: Authenticatable) {
  user.login();
}

let user: Authenticatable;
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
