import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category, RealEstate } from "../../entities"
import { AppError } from "../../errors"
import { categoriesRealStateList } from "../../schemas/categories.schemas"

const ListRealEstateByCategoryService = async (idCategory: number) => {
    const categoriesRepository: Repository<Category> = AppDataSource.getRepository(Category)
    const categoriesQueryBuilder = categoriesRepository.createQueryBuilder('categories')
    const list = await categoriesQueryBuilder.
    leftJoinAndSelect('categories.realEstate', 'real_estate')
    .where('categories.id = :id', {id: idCategory})
    .getOne()

    if(list === null ){
        throw new AppError('Category not found', 404)
    }
    
    return list
}
export default ListRealEstateByCategoryService