import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule, User } from "../../entities"
import { AppError } from "../../errors"
import { IScheduleData } from "../../interfaces/schedules.interface"

const createScheduleService = async (idUser: number, isAdmin: boolean, dataBody: IScheduleData): Promise<string> => {
    const dayOfWeek: Date = new Date(dataBody.date);
    const hours: number = parseInt(((dataBody.hour).split(':', 1))[0]);

    if(dayOfWeek.getDay() === 1 || dayOfWeek.getDay() === 6){
        throw new AppError('Invalid date, work days are monday to friday', 400)
    }

    if(hours < 8 || hours >= 18){
        throw new AppError('Invalid hour, available times are 8AM to 18PM', 400)
    }

    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const findUser: User | null = await userRepository.findOneBy({
        id: idUser
    })

    const findRealEstate: RealEstate | null = await realEstateRepository.findOneBy({
        id: dataBody.realEstateId
    })
    if(!findRealEstate){
        throw new AppError('RealEstate not found', 404)
    }
    
    const verifyScheduleRealEstateExist = await scheduleRepository
    .createQueryBuilder('schedules')
    .where('schedules.date = :date', { date: dataBody.date})
    .andWhere('schedules.hour = :hour', { hour: dataBody.hour})
    .andWhere('schedules.realEstateId = :realEstate', { realEstate: dataBody.realEstateId})
    .getOne()

    if(verifyScheduleRealEstateExist){
        throw new AppError('Schedule to this real estate at this date and time already exists', 409)
    }

    const verifyScheduleUserExist = await scheduleRepository
    .createQueryBuilder('schedules')
    .where('schedules.date = :date', { date: dataBody.date})
    .andWhere('schedules.hour = :hour', { hour: dataBody.hour})
    .getOne()

    if(verifyScheduleUserExist){
        throw new AppError('User schedule to this real estate at this date and time already exists', 409)
    }

    const newSchedule: Schedule = scheduleRepository.create({
        ...dataBody,
        user: findUser!,
        realEstate: findRealEstate!
    })
   
    await scheduleRepository.save(newSchedule)

    return('Schedule created')
}

export default createScheduleService