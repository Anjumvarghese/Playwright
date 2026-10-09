const excelJS= require('exceljs')
async function writeExcelFile(filePath,searchValue,changeValue){
    const workBook=new excelJS.Workbook()
    await workBook.xlsx.readFile(filePath)
    const workSheet=workBook.getWorksheet('Sheet1')
    const output= await readExcelFile(workSheet,searchValue)
    const cell= workSheet.getCell(output.row,output.col+2)  //adding +2 to get the location value  
    cell.value=changeValue
    await workBook.xlsx.writeFile(filePath)
}
async function readExcelFile(workSheet,searchValue){
    //creating excel workbook object
    // const workBook=new excelJS.Workbook()
    // await workBook.xlsx.readFile("c:/Users/anjuv/Downloads/Obsqura Testing.xlsx")
    // const workSheet=workBook.getWorksheet('Sheet1')
    let output={row:-1,col:-1}
    workSheet.eachRow((row,rowNumber)=>{
        row.eachCell((cell,colNumber)=>{
            //console.log(cell.value)
            if(cell.value===searchValue){
                output.row=rowNumber
                output.col=colNumber
            }
        })
    })
    return output
}
writeExcelFile("c:/Users/anjuv/Downloads/Obsqura Testing.xlsx","Bruno Nash","Tokyo")
