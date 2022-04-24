const UserService = require("../services/UserService");

class UserView{
    static createUser(payload){
        let message;
        let success;

        //Requirement #1: Payload is not null
        success = payload != null;
        if(success){
            //Requirement #2: Some payload information is null --> false
            success = !Object.values(payload).some(val=>val==null)
            
            if(success){
                //Requirement #3: Some necesary propperties
                let userNeededParams = ['id', 'username', 'name']
                let payloadParams = Object.keys(payload);
                success = userNeededParams.every(neededParam => payloadParams.includes(neededParam));

                if(success){
                    const user = UserService.create(payload.id, payload.username, payload.name);
                    return user;
                }
                else{
                    message = "necesitan tener un valor válido"
                }
            }
            else{
                message = "necesitan tener un valor válido"
            }
        }
        else{
            message = "payload no existe"
        }
        return {"error" : message}
    }
}

module.exports = UserView;