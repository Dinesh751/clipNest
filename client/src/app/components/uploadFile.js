'use client'
import { useState } from "react";
import axios from "axios";


export default function UploadFile() {

    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios.post("http://localhost:8080/upload",formData,
            {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
     
        );

        if (response.data.success) {
            // Handle successful upload
            console.log("Handle successful upload")
        } else {
            // Handle upload error
            console.log(" error in upload")
        }
    };

    return (
        <>

          <form onSubmit={handleSubmit}>
               <input type="file"  onChange={(e) => setFile(e.target.files[0])} />
               <button type="submit">Upload</button>
           </form>
        </>
    )
}
