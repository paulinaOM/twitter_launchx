const User = require("../models/User");

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Bio")
    }
    static getInfo(user){
        let attrList = new Array();
        attrList.push(user.id, user.username, user.name, user.bio, user.dateCreated, user.lastUpdated);
        return attrList;
    }
}

module.exports = UserService;