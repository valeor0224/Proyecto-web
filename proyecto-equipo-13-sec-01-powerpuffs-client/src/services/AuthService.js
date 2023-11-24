import { user } from '../components/initial-data.js';

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
        return true;
      } else {
        return false;
      }
    }
  
    logout() {
      // Remove user data from localStorage on logout
      localStorage.removeItem('user');
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
  
  