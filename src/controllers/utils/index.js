import catchErrors from "../../errors/catchErrors.js";
import aws_upload from "../../utils/aws_upload.js";
import uploadPhoto from "../../utils/uploadPhoto.js";

export const uploadPhotos = catchErrors(async (req,res)=>{

    const {image} = req.body

    if(Array.isArray(image)){
        const images = await Promise.all(image.map(async(file) =>(await uploadPhoto(file)).url))
        res.send(images)
    }
    else{
        const url = await uploadPhoto(image)
        res.send({url})
    }
})

export const uploadFileAWS = catchErrors(async (req, res) => {

    const {filename  , file} = req.body

    if(Array.isArray(file)){
        const files = await Promise.all(file.map(async(f) => (await aws_upload({filename,file})).url))
        res.send(files)
    }else {
        const url = (await aws_upload({file, filename})).url
        res.send({url})
    }

})