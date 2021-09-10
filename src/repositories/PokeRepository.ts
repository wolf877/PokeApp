import { EntityRepository, Repository} from "typeorm";
import { Poke } from "../entitys/Poke";

@EntityRepository(Poke)
class PokeRepository extends Repository<Poke>{}

export{ PokeRepository}