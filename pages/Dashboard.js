class Dashboard{
    constructor(page){
        this.page=page
        this.product=page.locator(".inventory_item_name")
        this.item=page.locator(".inventory_item")
        this.cart=page.locator("#shopping_cart_container")
    }
    async selectProduct(productname){
        await this.page.waitForLoadState('networkidle');
        await this.product.first().waitFor();
        const titles=await this.product.allTextContents();
        console.log(titles);
        //const productname="Sauce Labs Backpack";
        //const product=page.locator(".inventory_item_name");
        const count=await this.product.count();
        console.log(count);
        for(let i=0;i<count;i++){
            if(await this.product.nth(i).textContent()===productname){
                await this.item.nth(i).locator("text=Add to cart").click()
                break
            }
        }
    }
    async moveToCart(){
        await this.cart.click();
    }
}
module.exports=Dashboard