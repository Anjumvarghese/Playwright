const {test,expect} = require("@playwright/test");

test("@web ClientApp Login using Special locators",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name:'Login'}).click();
    await page.waitForLoadState('networkidle');
    await page.locator(".inventory_item_name").first().waitFor();   // from
    const titles=await page.locator(".inventory_item_name").allTextContents();
    console.log(titles);
    const productname="Sauce Labs Backpack";
    const product=page.locator(".inventory_item_name");
    const count=await product.count();
    console.log(count);
    for(let i=0;i<count;i++){
        if(await product.nth(i).textContent()===productname){
           // await page.locator(".inventory_item").nth(i).locator("text=Add to cart").click()
           await page.locator(".inventory_item").nth(i).getByRole("button",{name:'Add to cart'}).click()
            break
        }
    }
    await page.locator("#shopping_cart_container").click();         //to
    await page.getByRole("button",{name:'Checkout'}).click();
    await page.getByPlaceholder("First Name").fill("Anju");
    await page.getByPlaceholder("Last Name").fill("Varghese");
    await page.getByPlaceholder("Zip/Postal Code").fill("560091");
    await page.getByRole("button",{name:'Continue'}).click();
    await page.locator(".inventory_item_name").waitFor();
    await expect(page.getByText("Item total: $29.99")).toHaveText("Item total: $29.99")
    await page.getByRole("button",{name:'Finish'}).click();
    await expect(page.getByText("Thank you for your order!")).toContainText("Thank you")//use tobevisible instead of tocontaintext
    //await page.pause();
})

