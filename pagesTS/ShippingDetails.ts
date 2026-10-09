import { Locator, Page } from "@playwright/test"

export class ShippingDetails{
    page:Page
    firstName:Locator
    lastName:Locator
    pin:Locator
    continueBtn:Locator


    constructor(page:Page){
        this.page=page
        this.firstName=page.locator("#first-name")
        this.lastName=page.locator("#last-name")
        this.pin=page.locator("#postal-code")
        this.continueBtn=page.locator("#continue")
    }
    async enterUserDetails(fName:string,lName:string,pin:string){
        await this.firstName.fill(fName)
        await this.lastName.fill(lName)
        await this.pin.fill(pin)
    }
    async clickContinue(){
        await this.continueBtn.click();
    }
}