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
    
    const reaEstateCreated: RealEstate = realEstateRepository.create(dataBody)
    await realEstateRepository.save(reaEstateCreated)
    
    const category: Category | null = await categoryRepository.findOneBy({
        id: dataBody.categoryId
    })

    const newRealEstate: IRealEstateReturn = {
        ...reaEstateCreated,
        address: addressCreated,
        category: category!
    }

    const newRealEstateValidated = realEstateReturnSchema.parse(newRealEstate)

    return newRealEstateValidated

}

export default createRealEstateService