const UserView = require("../../app/views/UserView");

describe("Unit test for UserView class", () =>{
    test('Requirement 1: Payload null', ()=>{
        const payload = null;
        const result = UserView.createUser(payload);
    
        expect(result.error).toBe('payload no existe');
    });
    test('Requirement 2: Payload properties null', ()=>{
        const payload = {id:"id", username: "paulinaom", name: null};
        const result = UserView.createUser(payload);
    
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    });
    test('Requirement 3: Payload missing properties', ()=>{
        const payload = {id:"id", username: "paulinaom"};
        const result = UserView.createUser(payload);
    
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    });
    test('Requirement 4: Creating a user by a given valid payload', ()=>{
        const payload = {id:"id", username: "paulinaom", name: 'Paulina Otero'};
        const user = UserView.createUser(payload);
    
        console.log(user);
    
        expect(user.id).toMatch(/id/);
        expect(user.username).toMatch(/paulinaom/);
        expect(user.name).toMatch(/Paulina Otero/);
        expect(user.bio).not.toBeNull();
        expect(user.dateCreated).not.toBeNull();
        expect(user.lastUpdated).not.toBeNull();
    });
});


