import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { IPatchUser, IUserReturn } from "../../interfaces/users.interfaces";
import { userSchemaReturn } from "../../schemas/users.schema";

const patchUserService = async (idUser: number, isAdmin: boolean, dataPatch: IPatchUser, idPatch:number): Promise<IUserReturn> => {
    
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const userForPatch: any = await userRepository.findOneBy({
        id: idPatch
    })

    if(!userForPatch){
        throw new AppError('User not found', 404)
    }

    if(isAdmin === true){
        const userUpdated = userRepository.create({
            ...userForPatch,
            ...dataPatch
        })

        await userRepository.save(userUpdated)

        const returnUpdatedUser = userSchemaReturn.parse(userUpdated)

        return returnUpdatedUser
    }else if(idPatch === idUser){
        const userUpdated = userRepository.create({
            ...userForPatch,
            ...dataPatch
        })

        await userRepository.save(userUpdated)

        const returnUpdatedUser = userSchemaReturn.parse(userUpdated)

        return returnUpdatedUser
    }else{
        throw new AppError('Insufficient permission', 403)
    }

}

export default patchUserService