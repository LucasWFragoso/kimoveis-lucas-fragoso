import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { ICategoriesData, IListCategories } from "../../interfaces/categories.interfaces";
import { categoriesList } from "../../schemas/categories.schemas";

const listCategoriesService = async (): Promise<IListCategories> => {

    const categoriesRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const listCategories: Array<ICategoriesData> = await categoriesRepository.find()

    const listCategoriesReturn = categoriesList.parse(listCategories)

    return listCategoriesReturn
}

export default listCategoriesService