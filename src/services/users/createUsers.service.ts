import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { IUser, IUserData } from "../../interfaces/users.interfaces"
import { userSchema } from "../../schemas/users.schema"

const createUserService = async (userData: IUserData): Promise<IUser> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User = userRepository.create(userData)

    await userRepository.save(user)

    const userCreate = userSchema.parse(user)

    return userCreate
}
export default createUserService