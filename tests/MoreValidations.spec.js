const {test,expect} = require("@playwright/test");

test('Pop-up Validations',async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await expect(page.locator(".error-message-container.error")).toBeHidden()
    await page.locator("#login-button").click()
    await expect(page.locator(".error-message-container.error")).toBeVisible()

    await page.goto("https://selenium.qabible.in/index.php")
    await page.getByRole("link",{name:'Alerts and Modals'}).click()
    await page.getByRole("link",{name:'Javascript Alert'}).click()
    page.on('dialog',async dialog=>{
        await page.waitForTimeout(3000)
        await dialog.accept()
    })
    await page.locator(".btn.btn-warning").click()

    // dismiss method to cancel the dialog box
    /*page.on('dialog',async dialog=>{
        await page.waitForTimeout(3000)
        await dialog.dismiss()
    })
    await page.locator(".btn.btn-warning").click()*/ 
    await page.getByRole("link",{name:'Others'}).hover()
    await page.goto("https://demoqa.com/frames")
    const framePage=page.frameLocator("#frame1")
    console.log(await framePage.locator("#sampleHeading").textContent())
    await expect(framePage.locator("#sampleHeading")).toHaveText("This is a sample page")
    //await page.pause()
})  

test('Screenshot',async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await expect(page.locator(".error-message-container.error")).toBeHidden()
    await page.locator("#login-button").click()
    await page.locator(".error-message-container.error").screenshot({path:'error.png'})
    await expect(page.locator(".error-message-container.error")).toBeVisible()
    await page.screenshot({path:'error1.png'})
    //await page.pause()  
})

//visual comparison
test('Visual comparison',async({page})=>{
   await page.goto("https://www.saucedemo.com/") 
   expect(await page.screenshot()).toMatchSnapshot("saucedemo.png")

})