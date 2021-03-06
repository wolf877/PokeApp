import { Entity, PrimaryColumn, Column } from "typeorm";
import { CreateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("users")
class User{
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export { User };
