import { Entity, PrimaryColumn, Column } from "typeorm";
import { CreateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("Pokes")
class Poke{
    @PrimaryColumn()
    readonly Id: number;

    @Column()
    readonly Name: string;

    @Column()
    hp: number;

    @Column()
    Type: string;

    @Column()
    Secundary_type: string;

}

export { Poke }