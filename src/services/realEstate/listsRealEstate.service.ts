import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Address, RealEstate } from "../../entities"
import { IRealEstateList } from "../../interfaces/reaEstate.interface"
import { realEstateListSchema } from "../../schemas/realEstate.schemas"

const listRealEstateService = async (): Promise<IRealEstateList> => {
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const list: Array<RealEstate> = await realEstateRepository.find({
        relations: {
            address: true,
        }
    })

    return list

}
export default listRealEstateService