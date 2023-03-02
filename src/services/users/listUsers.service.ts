import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IListUser } from "../../interfaces/users.interfaces";
import { listUsersSchema } from "../../schemas/users.schema";

const listUsersService = async (): Promise<IListUser> => {
    
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const listUsers: Array<User> = await userRepository.find()

    const returnListUsers = listUsersSchema.parse(listUsers)

    return returnListUsers
}

export default listUsersService