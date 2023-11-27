import { user } from '../components/initial-data.js';

class AuthService {
  constructor() {
    
    this.user = JSON.parse(localStorage.getItem('user')) || null;
    this.listeners = [];
  }

  login(email, password) {
    const foundUser = user.find(
      (u) => u.userEmail === email && u.password === password
    );

    if (foundUser) {

      this.user = foundUser;
      localStorage.setItem('user', JSON.stringify(foundUser));
      localStorage.setItem('userRole', foundUser.roleId); 

      this.notifyListeners();
      return true;
    } else {
      return false;
    }
  }

  logout() {

    localStorage.removeItem('user');
    localStorage.removeItem('userRole');
    this.user = null;

    this.notifyListeners();
  }

  getUser() {
    return this.user;
  }

  isAuthenticated() {
    return !!this.user;
  }

  registerListener(listener) {
    this.listeners.push(listener);
  }

  unregisterListener(listener) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }
  notifyListeners() {
    this.listeners.forEach((listener) => listener());
  }
}

export default new AuthService();

  
  