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
        console.log(user)
        const attr_list = UserService.getInfo(user);
        console.log(attr_list)

        expect(attr_list[0]).toBe(1);
        expect(attr_list[1]).toBe('paulinaom');
        expect(attr_list[2]).toBe('Paulina');
        expect(attr_list[3]).toBe("Bio");
        expect(attr_list[4]).not.toBeUndefined(); //dateCreated
        expect(attr_list[5]).not.toBeUndefined(); //lastUpdated
    })
});


