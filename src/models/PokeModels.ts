import { Schema, model } from "mongoose";

interface Poke {
    name: string;
    type: string;
    Capture_date: Date;
}

const PokeSchema = new Schema<Poke>({
    name: {type: String, required: true},
    type: {type: String, required: true},
    Capture_date: String
});

const PoKeModel = model<Poke>('Poke', PokeSchema)

export {PokeSchema, PoKeModel} 