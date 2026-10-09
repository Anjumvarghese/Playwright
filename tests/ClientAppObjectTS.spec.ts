import {test,expect} from "@playwright/test";
import { POManager } from "../pagesTS/POManager";
import { customTest } from "../utilsTS/TestBase";

//const POManager = require("../pages/POManager");
//const { customTest } = require("../utils/TestBase");
const testData= JSON.parse(JSON.stringify(require("../utils/PlaceOrderTestData.json")))

for(const data of testData)
{

test(`Automation of Shopping cart application using Page Object Model for purchasing the product ${data.productname}`,async({page})=>{
    /*const username="standard_user"
    const password="secret_sauce"
    const productname="Sauce Labs Backpack"*/
    const poManager=new POManager(page)
    //const login=new Login(page)
    const login=poManager.getLoginPage()
    await login.goto()
    await login.validLogin(data.username,data.password)

    //const dashboard=new Dashboard(page)
    const dashboard=poManager.getDashboard()
    await dashboard.selectProduct(data.productname)
    await dashboard.moveToCart()

    //const cart=new Cart(page)
    const cart=poManager.getCart()
    await cart.clickCheckout()

   // const shipping=new ShippingDetails(page)
    const shipping=poManager.getShippingDetails()
    await shipping.enterUserDetails("Anju","Varghese","560091")
    await shipping.clickContinue()

    //const summary=new Summary(page)
    const summary=poManager.getSummary()
    await summary.getSummary()
    await summary.clickFinish()
    await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!")
    //await page.pause()
})
}

customTest('Customized test case',async({page,testDataforOrder})=>{
    const poManager=new POManager(page)
    const login=poManager.getLoginPage()
    await login.goto()
    await login.validLogin(testDataforOrder.username,testDataforOrder.password)

    const dashboard=poManager.getDashboard()
    await dashboard.selectProduct(testDataforOrder.productname)
    await dashboard.moveToCart()

    const cart=poManager.getCart()
    await cart.clickCheckout()
})