import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { IListUser } from "../../interfaces/users.interfaces";
import { listUsersSchema } from "../../schemas/users.schema";

const listUsersService = async (isAdmin: boolean): Promise<IListUser> => {
    
    if(!isAdmin){
        throw new AppError('User not admin', 403)
    }
    
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const listUsers: Array<User> = await userRepository.find()

    const returnListUsers = listUsersSchema.parse(listUsers)

    return returnListUsers
}

export default listUsersService