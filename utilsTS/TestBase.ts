import { test as baseTest } from "@playwright/test"
interface TestDataForOrder{
    username:string,
    password:string,
    productname:string
}

export const customTest=baseTest.extend<{testDataforOrder:TestDataForOrder}>(
    {
        testDataforOrder:{
            username:"standard_user",
            password:"secret_sauce",
            productname:"Sauce Labs Backpack"
        }
    }
)