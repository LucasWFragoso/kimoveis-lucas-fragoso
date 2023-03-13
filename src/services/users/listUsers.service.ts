import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { IListUser } from "../../interfaces/users.interfaces";
import { listUsersSchema } from "../../schemas/users.schema";

const listUsersService = async (isAdmin: boolean): Promise<IListUser> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    if(isAdmin === true){
        const listUsers: Array<User> = await userRepository.find()
        
        const returnListUsers = listUsersSchema.parse(listUsers)
        
        return returnListUsers
    }else{
        throw new AppError('Insufficient permission', 403)
    }
    
}

export default listUsersService