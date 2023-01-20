const reader = require('xlsx')
const readData = (filePath)=>{
    const file = reader.readFile(filePath);
    let data = [];
    const sheet = file.SheetNames
    for(let i=0;i<sheet.length;i++)
    {
        const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
        temp.forEach((res)=>{
            data.push(res)
        })
    }
       console.log(data);
    return data;
}
// readData('../Book1.xlsx')
module.exports = {readData};