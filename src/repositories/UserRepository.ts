import { EntityRepository, Repository } from "typeorm";
import { User } from "../entitys/User";

@EntityRepository(User)
class UsersRepository extends Repository<User>{}

export{ UsersRepository };