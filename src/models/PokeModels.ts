import { Schema, model } from "mongoose";

interface Poke {
    name: string;
    hp: number;
    type: string;
    Secundary_type: string;
    Capture_date: Date;
}

const PokeSchema = new Schema<Poke>({
    name: {type: String, required: true},
    hp: {type: Number, required: true},
    type: {type: String, required: true},
    Secundary_type: String,
    Capture_date: String
});

const PoKeModel = model<Poke>('Poke', PokeSchema)

export {PokeSchema, PoKeModel} 