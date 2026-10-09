import { Locator, Page } from "@playwright/test"

export class Summary{ 
    page:Page
    item:Locator
    total:Locator
    finishBtn:Locator


    constructor(page:Page){
        this.page=page
        this.item=page.locator(".inventory_item_name")
        this.total=page.locator(".summary_subtotal_label")
        this.finishBtn=page.locator("#finish")
    }
    async getSummary(){
        await this.item.waitFor();
        console.log(await this.total.textContent());
    
    }
    async clickFinish(){
        await this.finishBtn.click();
    }
}
