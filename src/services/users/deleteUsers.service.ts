import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors"

const deleteUserService = async (isAdmin: boolean, idPatch: number): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    if(!isAdmin){
        throw new AppError('Insufficient permission', 403)
    }

    const userToDelete = await userRepository.findOne({
        where: {
            id: idPatch
        }
    })

    if(!userToDelete){
        throw new AppError('User not found or already deleted', 404)
    }

    await userRepository.softRemove(userToDelete!)
}

export default deleteUserService