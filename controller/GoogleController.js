const fs = require("fs");
const readLine = require("readline");
const path = require("path");
const { google } = require("googleapis");
const GOOGLE_DRIVE_FOLDER_ID ="1sL0MjgVOYvfYrZLKKL_MrCE8zZnyKjg2"
const KEYFILEPATH = './googleKeys.json';

async function getAllFileFromGoogleDrive() {
    const auth = new google.auth.GoogleAuth({
        keyFile: KEYFILEPATH,
        scopes: ["https://www.googleapis.com/auth/drive"],
    });
    const driveService = google.drive({ version: "v3", auth });
    const response = await driveService.files.list({
        q: `'${GOOGLE_DRIVE_FOLDER_ID}' in parents`,
        fields: "files(id,name)",
    });
    return response.data.files;

}


async function uploadFile(file){
    var p =path.basename(file);
    console.log(p);
    const auth = new google.auth.GoogleAuth({
        keyFile: KEYFILEPATH,
        scopes:['https://www.googleapis.com/auth/drive']
    })
    const driveService = google.drive(
        {version:'v3',auth});
        const fileMetadata = {
            'name':p,
            'parents':[GOOGLE_DRIVE_FOLDER_ID]
        }
        const media = {
            mimeType:'image/jpeg',
            body:fs.createReadStream(file)
        }
        const response = await driveService.files.create({
            resource:fileMetadata,
            media:media,
            fields:'id'
        })
        return response.data.id;
}
// uploadFile().then((data)=>{
//    console.log(data);
// })
// module.exports = {uploadFile,getAllFileFromGoogleDrive}
console.log(getAllFileFromGoogleDrive());