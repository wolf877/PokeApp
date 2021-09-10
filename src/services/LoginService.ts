import { getCustomRepository} from "typeorm";
import { UsersRepository } from "../repositories/UserRepository";
import { compare } from "bcryptjs";
import {sign} from "jsonwebtoken";

interface LoginRequests{
    email: string;
    password: string;
}

class LoginService{
    async execute({email, password}:LoginRequests){
        const userRepository = getCustomRepository(UsersRepository);

        const user = await userRepository.findOne({email})

        if(!user){
            throw new Error('email or password is incorret')
        }

        const passwordVerified = await compare(password, user.password);

        if(!passwordVerified){
            throw new Error('email or password is incorret')
        }

        console.log(process.env.CHAVE)

        const token = sign({
            email: user.email,
        }, process.env.CHAVE, {
            subject: user.id,
            expiresIn: "1d"
        })

        return  token
    }
}

export { LoginService };