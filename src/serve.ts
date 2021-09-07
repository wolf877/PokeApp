import express, {Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import mongoose from 'mongoose';

import "./Database"

async function run(): Promise<void> {
    await mongoose.connect("mongodb+srv://Me:" + process.env.SENHA + "@cluster0.fy2ae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

run()

const app = express();

app.use(express.json());

app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return res.status(400).json({error:err.message});
    }
    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

app.listen(3030, ()=>{
    console.log('listening on port 3030');
})

app.get("/teste", (req:Request, res:Response)=>{
    console.log(process.env.SENHA);
    res.send("Working")
})