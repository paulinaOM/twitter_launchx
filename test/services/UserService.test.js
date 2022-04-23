const UserService = require('../../app/services/UserService');

describe("Unit test for User class", () =>{
    test('Creating UserService', ()=>{
        const user = UserService.create(1, 'paulinaom', 'Paulina');
    
        expect(user.id).toBe(1);
        expect(user.username).toBe('paulinaom');
        expect(user.name).toBe('Paulina');
        expect(user.bio).not.toBeUndefined();
    });
    test('Creating getInfo', ()=>{
        const user = UserService.create(1, 'paulinaom', 'Paulina');
        const attrList = UserService.getInfo(user);

        expect(attrList[0]).toBe(1);
        expect(attrList[1]).toBe('paulinaom');
        expect(attrList[2]).toBe('Paulina');
        expect(attrList[3]).toBe("Bio");
        expect(attrList[4]).not.toBeUndefined(); //dateCreated
        expect(attrList[5]).not.toBeUndefined(); //lastUpdated
    })
    test('Creating updateUsername static method', ()=>{
        const user = UserService.create(1, 'paulinaom', 'Paulina');
        UserService.updateUsername(user, "jesus");

        expect(user.username).toBe("jesus");
    })
    test('Creating getAllUsernames static method', ()=>{
        const user1 = UserService.create(1, 'paulinaom', 'Paulina');
        const user2 = UserService.create(1, 'jesus', 'Jesus');
        const user3 = UserService.create(1, 'jose', 'Jose');
        const usernamesList = UserService.getAllUsernames([user1, user2, user3]);

        expect(usernamesList[0]).toBe("paulinaom");
        expect(usernamesList[1]).toBe("jesus");
        expect(usernamesList[2]).toBe("jose");
        
    })
});


