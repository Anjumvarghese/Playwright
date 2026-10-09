const {test,expect} = require("@playwright/test");

test('@api Get Request-fetch user',async({request})=>{
    const response=await request.get("https://jsonplaceholder.typicode.com/users");
    expect(response.ok()).toBeTruthy();
    const body=await response.json();
    expect(body.length).toBeGreaterThan(0);
    console.log(body[0].name)

})

//post method
test('@api Post request-create user',async({request})=>{
    const response=await request.post('https://jsonplaceholder.typicode.com/users',{
        data:{
            name:"John Doe",
            username:"John",
            email:"john@example.com"
        }
    });
    expect(response.status()).toBe(201);
    const responseBody=await response.json();
    expect(responseBody.name).toBe('John Doe');
})