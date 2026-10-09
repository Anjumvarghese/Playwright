class Cart{
    constructor(page){
        this.page=page
        this.checkout=page.locator("#checkout")
    }
    async clickCheckout(){
         await this.checkout.click()
    }
}
module.exports=Cart