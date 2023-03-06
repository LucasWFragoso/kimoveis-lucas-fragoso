import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { IUserReturn, IUserData } from "../../interfaces/users.interfaces"
import { userSchemaReturn } from "../../schemas/users.schema"

const createUserService = async (userData: IUserData): Promise<IUserReturn> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User = userRepository.create(userData)

    await userRepository.save(user)

    const userCreate = userSchemaReturn.parse(user)

    return userCreate
}
export default createUserService