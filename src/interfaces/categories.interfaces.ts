import { z } from 'zod';
import { categoriesDataSchema, categoriesReturnSchema} from '../schemas/categories.schemas'


type ICategoriesData = z.infer<typeof categoriesDataSchema>
type ICategoriesReturn = z.infer<typeof categoriesReturnSchema>

export {
    ICategoriesData,
    ICategoriesReturn
}