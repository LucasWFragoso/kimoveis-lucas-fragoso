import { z } from 'zod';
import { categoriesDataSchema, categoriesReturnSchema, categoriesList} from '../schemas/categories.schemas'


type ICategoriesData = z.infer<typeof categoriesDataSchema>
type ICategoriesReturn = z.infer<typeof categoriesReturnSchema>
type IListCategories = z.infer<typeof categoriesList>

export {
    ICategoriesData,
    ICategoriesReturn,
    IListCategories
}