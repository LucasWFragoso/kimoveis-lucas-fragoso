import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities"

const ListRealEstateByCategoryService = async (idCategory: number) => {
    const list = await AppDataSource.createQueryBuilder(RealEstate, 'real_estate').
    innerJoinAndSelect('real_estate.category', 'categories').
    innerJoinAndSelect('real_estate.address', 'addresses').
    where('real_estate.category = :idCategory', {idCategory}).
    getMany()

    return list
}
export default ListRealEstateByCategoryService