import { Schema, model } from "mongoose";

import { PokeSchema } from "./PokeModels";

interface User{
    name: string;
    email: string;
    Pokes: {name: string, type: string, Capture_date: Date;}[]
}

const UserSchema = new Schema<User>({
    name: {type:String, required:true},
    email: {type:String, required:true},
    Pokes: [PokeSchema]
});

const UserModel = model('Users', UserSchema);

export { UserModel };