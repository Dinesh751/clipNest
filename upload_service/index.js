import express from "express"
import dotenv from "dotenv"
import router from "./router/uploadService.js";
import cors from "cors"


dotenv.config();



const PORT = process.env.PORT || 8080;
const app = express();



app.use(cors());
app.use(express.json());
app.use("/upload",router);

app.get("/", (req,res)=>{
    res.status(200).send({
        message:"hello i am from server"
    })
})

app.listen(PORT , ()=>{
    console.log(`server is running at ${PORT}`)
})


