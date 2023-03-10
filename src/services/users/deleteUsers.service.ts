import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors"

const deleteUserService = async (isAdmin: boolean, idPatch: number): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    
    const userToDelete = await userRepository.findOne({
        where: {
            id: idPatch
        }
    })

    if(isAdmin === false){
        if(!userToDelete){
            throw new AppError('User not found', 404)
        }else if(userToDelete?.admin == true){
            throw new AppError('Insufficient permission', 403)
        }


    }else{
        if(!userToDelete){
            throw new AppError('User not found', 404)
        }
    
        await userRepository.softRemove(userToDelete!)
    }

}

export default deleteUserService