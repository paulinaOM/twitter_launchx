const User = require('../app/models/user')

describe("Unit test for User class", () =>{
    test("Create an user object", ()=>{
        const user = new User(1, 'paulinaom', 'Paulina', 'Bio', 'dateCreated', 'lastUpdated');
        
        expect(user.id).toBe(1);
        expect(user.username).toBe('paulinaom');
        expect(user.name).toBe('Paulina');
        expect(user.bio).toBe('Bio');
        expect(user.dateCreated).toBe('dateCreated');
        expect(user.lastUpdated).toBe('lastUpdated');
    });
});