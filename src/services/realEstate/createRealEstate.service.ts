import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { IRealEstateData, IRealEstateReturn } from "../../interfaces/reaEstate.interface";
import { realEstateReturnSchema } from "../../schemas/realEstate.schemas";

const createRealEstateService = async (isAdmin: boolean, dataBody: IRealEstateData): Promise<IRealEstateReturn> => {
    if(!isAdmin){
        throw new AppError('Insufficient permission', 403)
    }

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const addressCreated: Address = addressRepository.create(dataBody.address)
    await addressRepository.save(addressCreated)
    
    const category: any = await categoryRepository.findOneBy({
        id: dataBody.categoryId
    })

    const reaEstateCreated: RealEstate = realEstateRepository.create({
        ...dataBody,
        address: addressCreated,
        category: category
    })
    await realEstateRepository.save(reaEstateCreated)
    
    const newRealEstateValidated = realEstateReturnSchema.parse(reaEstateCreated)

    return newRealEstateValidated

}

export default createRealEstateService