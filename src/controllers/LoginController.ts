import{Request, Response} from "express";
import { LoginService } from "../services/LoginService";

class LoginController{
    async handle(req: Request, res: Response){
        const {email, password} = req.body;

        const loginService = new LoginService();

        const token = await loginService.execute({
            email, password
        })

        return res.json(token);
    }
}

export {LoginController};