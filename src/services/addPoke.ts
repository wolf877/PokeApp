import{ getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UserRepository";
import{PokeRepository} from "../repositories/PokeRepository";

import {PoKeModel} from "../models/PokeModels";
import {UserModel} from "../models/UserModel";

class AddPokes{
    async execute(user: string){
        
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min)
            max = Math.ceil(max)
            return Math.floor(Math.random()* (max - min + 1)) +1
        }

        const userRepository = getCustomRepository(UsersRepository);
        const pokeRepository = getCustomRepository(PokeRepository);

        let { email } = await userRepository.findOne({ 
            id: user
        });

        let sort_id = getRandomIntInclusive(1, 801);

        let {Name, hp,Type, Secundary_type} = await pokeRepository.findOne({
            Id: sort_id
        });

        let newPoke = new PoKeModel({
            name: Name,
            hp: hp,
            type: Type,
            Secundary_type: Secundary_type,
            Capture_date: new Date().toDateString().substring(0, 10)
        });

        UserModel.findOne({email: email}, (err: any, result: any)=>{
            if(!err){
                // console.log(result)
                result.Pokes.push(newPoke);
                result.save((err:any, saved: any)=>{
                    if(!err){
                        console.log(saved)
                    }else{
                        console.log(err)
                    }
                })
            }else{
                console.log(err)
            }
        })   

        return newPoke;

    }
}

export {AddPokes}