import { Locator, Page } from "@playwright/test"

export class Cart{
    page:Page
    checkout:Locator
    constructor(page:Page){
        this.page=page
        this.checkout=page.locator("#checkout")
    }
    async clickCheckout(){
         await this.checkout.click()
    }
}