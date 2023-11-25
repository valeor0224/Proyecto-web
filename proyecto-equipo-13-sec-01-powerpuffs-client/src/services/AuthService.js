import { user } from '../components/initial-data.js';

// AuthService.js
class AuthService {
  constructor() {
    // Try to retrieve user data from localStorage
    this.user = JSON.parse(localStorage.getItem('user')) || null;
  }

  login(email, password) {
    const foundUser = user.find(
      (u) => u.userEmail === email && u.password === password
    );

    if (foundUser) {
      // Save user data to localStorage on successful login
      this.user = foundUser;
      localStorage.setItem('user', JSON.stringify(foundUser));
      localStorage.setItem('userRole', foundUser.roleId); // Save roleId to localStorage
      return true;
    } else {
      return false;
    }
  }

  logout() {
    // Remove user data and roleId from localStorage on logout
    localStorage.removeItem('user');
    localStorage.removeItem('userRole');
    this.user = null;
  }

  getUser() {
    return this.user;
  }

  isAuthenticated() {
    return !!this.user;
  }
}

export default new AuthService();

  
  