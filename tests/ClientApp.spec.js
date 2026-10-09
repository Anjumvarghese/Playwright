const {test,expect} = require("@playwright/test");

test("@web ClientApp Login",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".inventory_item_name").first().waitFor();
    const titles=await page.locator(".inventory_item_name").allTextContents();
    console.log(titles);
    const productname="Sauce Labs Backpack";
    const product=page.locator(".inventory_item_name");
    const count=await product.count();
    console.log(count);
    for(let i=0;i<count;i++){
        if(await product.nth(i).textContent()===productname){
            await page.locator(".inventory_item").nth(i).locator("text=Add to cart").click()
            break
        }
    }
    await page.locator("#shopping_cart_container").click();
    await page.locator("#checkout").click()
    await page.locator("#first-name").fill("Anju");
    await page.locator("#last-name").fill("Varghese")
    await page.locator("#postal-code").fill("560091")
    await page.locator("#continue").click();
    await page.locator(".inventory_item_name").waitFor();
    await expect(page.locator(".summary_subtotal_label")).toHaveText("Item total: $29.99")
    await page.locator("#finish").click();
    await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!")
    //await page.pause();
})
