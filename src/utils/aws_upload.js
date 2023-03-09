import AWS from 'aws-sdk'

const ID ='AKIA23NQS2ECLE2MYOWP';
const SECRET='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';

AWS.config.update({
  "accessKeyId":ID,
  "secretAccessKey":SECRET,
  "region":"af-south-1"
})

var s3Bucket = new AWS.S3({params : {Bucket: 'boprita-online'}})

const aws_upload = (params) => {

  return new Promise((resolve, reject) => {

      const {filename , file} = params
      var buf = Buffer.from(file.replace(/^data:.+;base64,/, ""),'base64')
      const currentTime = new Date().getTime()
      var data = {
        Key: `helpdesk_${currentTime}_${filename}`,
        Body:buf,
        ContentEncoding:'base64',
        ACL:'public-read'
      }
      s3Bucket.putObject(data, function(err, data){
        if (err) { 
          console.log(err);
          console.log('Error uploading data');
          reject(err) 
        } else {
          const file_name =`helpdesk_${currentTime}_${filename}`
          const url = `https://boprita-online.s3.af-south-1.amazonaws.com/${file_name}`
          console.log('successfully uploaded the image! '+url);
          resolve({url})
        }
    });
  })
}
export default aws_upload



