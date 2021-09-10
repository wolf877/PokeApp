import {Request, Response, NextFunction} from "express";
import {verify} from "jsonwebtoken";

interface data{
    sub: string;
}

export function VerifyLogin(req: Request, res: Response, next: NextFunction){
    
    const Authorization = req.headers.authorization

    if(!Authorization){
        return res.status(401).end();
    }

    const [, token] = Authorization.split("")

    try{
        const { sub } = verify(token, process.env.CHAVE) as data;
        req.user = sub;
    }catch(err){
        res.status(401).end();
    }

    return next();
}