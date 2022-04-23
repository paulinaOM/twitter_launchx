const UserService = require('../../app/services/UserService');

describe("Unit test for User class", () =>{
    test('Creating UserService', ()=>{
        const user = UserService.create(1, 'paulinaom', 'Paulina');
    
        expect(user.id).toBe(1);
        expect(user.username).toBe('paulinaom');
        expect(user.name).toBe('Paulina');
        expect(user.bio).not.toBeUndefined();
    });
});


