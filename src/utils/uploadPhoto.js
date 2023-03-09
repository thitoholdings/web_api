import cloudinary from 'cloudinary'

//require('dotenv').config({ path: require('app-root-path') + '/.env' });

cloudinary.v2.config({
    cloud_name: 'kutlo-sek',
    api_key: '231333757859233',
    api_secret: 'IW-TCY1xHd2JGcoMl6RJDcWO-_8',
})

const opts = {
    overwrite: true,
    invalidate: true,
    resource_type: "auto"
}

const uploadPhoto = (image) => {
    return new Promise((resolve , reject)=> {
        cloudinary.v2.uploader.upload(image ,opts ,(error , result)=>{
            if(result && result.secure_url) {
                console.log(result.secure_url)
                return resolve(result.secure_url)}
            console.log(error.message)
            return reject({message: error.message})
        })
    })
}

export default uploadPhoto