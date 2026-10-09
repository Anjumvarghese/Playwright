class Summary{
    constructor(page){
        this.page=page
        this.item=page.locator(".inventory_item_name")
        this.total=page.locator(".summary_subtotal_label")
        this.finishBtn=page.locator("#finish")
    }
    async getSummary(){
        await this.item.waitFor();
        console.log( await this.total.textContent());
    
    }
    async clickFinish(){
        await this.finishBtn.click();
    }
}
module.exports=Summary