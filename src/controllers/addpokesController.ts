import {Request, Response} from 'express';

import{AddPokes} from "../services/addPoke";

class addPokeController{
    async handle(req: Request, res: Response){
        const {user} = req;

        const addService = new AddPokes();

        const poke = await addService.execute(user);

        res.json(poke)
    }
}

export {addPokeController}