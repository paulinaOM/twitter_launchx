const User = require("../models/User");

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Bio")
    }
    static getInfo(user){
        let attrList = [];
        attrList.push(user.id, user.username, user.name, user.bio, user.dateCreated, user.lastUpdated);
        return attrList;
    }
    static updateUsername(user, newUsername){
        user.username = newUsername;
        
    }
    static getAllUsernames(users){
        let usernamesList = [];
        users.forEach(user =>{ usernamesList.push(user.username)})
        return usernamesList;
    }
}

module.exports = UserService;