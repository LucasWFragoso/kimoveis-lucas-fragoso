import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";
import { ICategoriesData, ICategoriesReturn } from "../../interfaces/categories.interfaces";
import { categoriesReturnSchema } from "../../schemas/categories.schemas";

const createCategoriesService = async (isAdmin: boolean, categoriesData: ICategoriesData): Promise< ICategoriesReturn > => {
    
    if(!isAdmin){
        throw new AppError('User not admin', 403)
    }
    
    const categoriesRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const findCategory = await categoriesRepository.find({
        where: {
            name: categoriesData.name
        }
    })

    if(findCategory.length > 0){
        throw new AppError('Category already exists', 409)
    }

    const newCategory = categoriesRepository.create(categoriesData)

    await categoriesRepository.save(newCategory)

    const categoriesReturn = categoriesReturnSchema.parse(newCategory)

    return categoriesReturn
}

export default createCategoriesService