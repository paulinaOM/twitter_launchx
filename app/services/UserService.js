const User = require("../models/User");

class UserService{
    static create(id, username, name){
        
        return new User(id, username, name, "Bio")
    }
}

module.exports = UserService;