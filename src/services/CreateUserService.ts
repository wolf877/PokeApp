import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UserRepository";
import { hash } from "bcryptjs";


import {UserModel} from "../models/UserModel";
import { sendEmail } from "../function/sendEmail";

interface UserRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
    async execute({name, email, password}:UserRequest){
        if(!email || !name || !password){
            throw new Error("Please enter fill all required fields")
        }
        
        email = email.toLowerCase()

        const userRepository = getCustomRepository(UsersRepository)
        
        const userAlreadyExists = await userRepository.findOne({ 
            email
        });
       
        if(userAlreadyExists){
           throw new Error("User already exists")
       } 

       const passwordHash = await hash(password, 8);

       const user = userRepository.create({ 
           name,
           email,
           password: passwordHash
       });

       const newUser = new UserModel({ 
           name: name, 
           email: email, 
       });

       await newUser.save();

       await userRepository.save(user);

       sendEmail(email, name);

       return user;

    }
}

export {CreateUserService};