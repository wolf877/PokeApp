import { Schema } from "mongoose";

import { PokeSchema } from "./PokeModels";

interface User{
    name: string;
    email: string;
    Pokes: {name: string, type: string, Capture_date: Date;}[]
}

