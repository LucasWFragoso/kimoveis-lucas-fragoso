import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule } from "../../entities"
import { AppError } from "../../errors"
import { listSchedulesByRealEstateSchema } from "../../schemas/schedules.schema"

const listSchedulesByRealEstateService = async (isAdmin: boolean, realEstateId: number)  => {
    if(!isAdmin){
        throw new AppError('Insufficient permission', 403)
    }

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const ensureRealEstateExist = await realEstateRepository.findOneBy({
        id: realEstateId
    })

    if(!ensureRealEstateExist){
        throw new AppError('RealEstate not found', 404)
    }

    const listSchedulesByRealEstate = await realEstateRepository
    .createQueryBuilder('realEstate')
    .innerJoinAndSelect('realEstate.address','addresses')
    .innerJoinAndSelect('realEstate.category', 'categories')
    .innerJoinAndSelect('realEstate.schedules', 'schedules')
    .innerJoinAndSelect('schedules.user','user')
    .where('realEstate.id = :id', { id: realEstateId } )
    .getOne()
    
    
    return listSchedulesByRealEstate
}

export default listSchedulesByRealEstateService