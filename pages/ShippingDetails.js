class ShippingDetails{
    constructor(page){
        this.page=page
        this.firstName=page.locator("#first-name")
        this.lastName=page.locator("#last-name")
        this.pin=page.locator("#postal-code")
        this.continueBtn=page.locator("#continue")
    }
    async enterUserDetails(fName,lName,pin){
        await this.firstName.fill(fName)
        await this.lastName.fill(lName)
        await this.pin.fill(pin)
    }
    async clickContinue(){
        await this.continueBtn.click();
    }
}
module.exports=ShippingDetails