import  AWS  from "aws-sdk";
import fs from 'fs';


const saveToS3Bucket = async(req,res) =>{
    

    try{

        console.log(req.file)

        if (!req.file) {
            console.log('No file received');
            return res.status(400).send('No file received...!');
        }
        const file = req.file;

        const s3 = new AWS.S3({

            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    
            region: 'ap-south-1' // Replace with your region
    
        });

        

        const params = {

            Bucket: 'clipnest', 
    
            Key: file.originalname,
            
            Body: file.buffer
    
        };

        s3.upload(params, (err, data) => {

            if (err) {
    
                console.log(err);
                res.status(400).send({
                    err,
                    message:"something went wrong while uploading",
                    success: false
                })
    
            } else {
    
                console.log('File uploaded successfully', data.Location);
                res.status(201).send({
                    message:"File uploaded successfully",
                    location:data.Location,
                    success: true
                })
    
            }
    
        });

    }catch(err){
        res.status(400).send({
            err,
            message:"something went wrong while saving the file to DB"
        })
    }

}

export {saveToS3Bucket}