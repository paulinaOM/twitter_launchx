const User = require('../app/models/user')

describe("Unit test for User class", () =>{
    test("Create an user object", ()=>{
        const user = new User(1, 'paulinaom', 'Paulina', 'Bio');
        
        expect(user.id).toBe(1);
        expect(user.username).toBe('paulinaom');
        expect(user.name).toBe('Paulina');
        expect(user.bio).toBe('Bio');
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    });
    test('Create getters for User class', ()=>{
        const user = new User(1, 'paulinaom', 'Paulina', 'Bio');

        expect(user.getUsername).toBe('paulinaom');
        expect(user.getName).toBe('Paulina');
        expect(user.getBio).toBe('Bio');
        expect(user.getDateCreated).not.toBeUndefined();
        expect(user.getLastUpdated).not.toBeUndefined();
    });
    test('Creating setters for User class', ()=>{
        const user = new User();

        user.setUsername = 'paulinaom';
        user.setBio = 'Bio';

        expect(user.getUsername).toBe('paulinaom');
        expect(user.getBio).toBe('Bio');
    })
});