
import formidable from 'formidable';
import { v4 as uuidv4 } from 'uuid';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';


const UserCreatePost = (req,res) => {
    const form = formidable({ multiples: true })
    form.parse(req,(error,fields,files) =>
    {
        const errors = [];
        const {title , body , description  , slug ,_id , name  ,image} = fields;

            // Validation
        if(title === "")
        {
            errors.push({msg:"Tittle is required"});
        }
        if(body === "")
        {
            errors.push({msg:"Body is required"});
        }
        if(description === "")
        {
            errors.push({msg:"Description is required"});
        }
        if(slug === "")
        {
            errors.push({msg:"Slug is required"});
        }
        if(Object.keys(files).length == 0)
        {
            errors.push({msg:"Image is required"});
        }
        else{
            const {mimetype} = files.image
            const split = mimetype.split("/")
            const ext = split[1].toLowerCase();
            if(ext !== "jpg" && ext !=="jpeg" && ext!=="png")
                errors.push({msg:ext+" is not valid Extension"})
            else
                files.image.newFilename= uuidv4() + "." + ext;
                const __filename = fileURLToPath(import.meta.url);
                const __dirname = dirname(__filename);
                // 
                const newPath= __dirname + "/../../client/public/images/" + files.image.newFilename;
                fs.copyFile(files.image.filepath,newPath,(err)=>{if(!err)console.log("Emage uploaded") })
                console.log(__dirname)


         }
        if(errors.length != 0)
        {
            return res.status(400).json({errors,files})  
        }
    })
}

export default UserCreatePost