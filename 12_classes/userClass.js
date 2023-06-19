class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  getFullIntroduction(){
    return `Hi, my name is ${this.name}`;
  }
}
module.exports = User

// IN NODE

// > const User = require('./userClass.js');
// undefined
const user = new User('Noah');
// undefined
// > user.getName();
// 'Noah'
// > user.getFullIntroduction();
// 'Hi, my name is Noah'
// > 



class UserBase {
  constructor(arrayOfNames) {
    this.users = arrayOfNames;
  }
  numberOfUsers(){
    return this.users.length
  }

  getNames(){
    return this.users.map((user) => user.getName());
  }

  getFullIntroduction(){
    return this.users.map((user) => user.getFullIntroduction());
  }
}
const users = [ new User('Uma'), new User('Josh'), new user('Ollie')];

module.exports = UserBase