const {test,expect} = require("@playwright/test")
const excelJS= require('exceljs')

test('Excel download and upload',async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")
    await page.getByRole('link',{name:'Table'}).click()
    await page.getByRole('link',{name:'Table Data Download'}).click()
    const download = page.waitForEvent('download');
    await page.getByRole('button',{name:'Excel'}).click()
    const saveExcel = await download;
    await saveExcel.saveAs('./downloads/report.xlsx');
    

    async function writeExcelFile(filePath,searchValue,changeValue){
        const workBook=new excelJS.Workbook()
        await workBook.xlsx.readFile(filePath)
        const workSheet=workBook.getWorksheet('Sheet1')
        const output= await readExcelFile(workSheet,searchValue)
        const cell= workSheet.getCell(output.row,output.col)  
        cell.value=changeValue
        await workBook.xlsx.writeFile(filePath)
    }

    async function readExcelFile(workSheet,searchValue){
        let output={row:-1,col:-1}
        workSheet.eachRow((row,rowNumber)=>{
            row.eachCell((cell,colNumber)=>{
                if(cell.value===searchValue){
                    output.row=rowNumber
                    output.col=colNumber
                }
            })
        })
        return output
    }

    writeExcelFile("c:/Users/anjuv/Downloads/Obsqura Testing.xlsx","Jimmy","Cara Stevens")

    await page.goto("https://the-internet.herokuapp.com/upload")
    const fileChooser = page.waitForEvent('filechooser');
    await page.getByRole('button',{name:'Choose file'}).click()
    const uploadFile = await fileChooser;
    await page.locator("#file-upload").setInputFiles("c:/Users/anjuv/Downloads/Obsqura Testing.xlsx");
    await page.getByRole('button',{name:'Upload'}).click()
   // await page.pause()
})