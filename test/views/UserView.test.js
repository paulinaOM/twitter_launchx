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
});


