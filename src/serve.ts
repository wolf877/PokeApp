import express, {Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import mongoose from 'mongoose';

import {router} from './routes';

import "./Database"

async function run(): Promise<void> {
    await mongoose.connect("mongodb+srv://Me:" + process.env.SENHA + "@cluster0.fy2ae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

run()

const app = express();

app.use("/public", express.static("../public"));

app.use(express.json());
app.use(router)

app.listen(3030, ()=>{
    console.log('listening on port 3030');
})

app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return res.status(400).json({error:err.message});
    }
    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})



app.get("/teste", (req:Request, res:Response)=>{
    console.log(process.env.SENHA);
    res.send("Working")
})