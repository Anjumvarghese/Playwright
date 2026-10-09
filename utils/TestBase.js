const base=require('@playwright/test')
exports.customTest=base.test.extend(
    {
        testDataforOrder:{
            username:"standard_user",
            password:"secret_sauce",
            productname:"Sauce Labs Backpack"
        }
    }
)