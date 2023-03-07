import { z } from 'zod';
import { realEstateDataSchema, realEstateListSchema, realEstateReturnSchema } from '../schemas/realEstate.schemas';

type IRealEstateData = z.infer<typeof realEstateDataSchema>
type IRealEstateReturn = z.infer<typeof realEstateReturnSchema>
type IRealEstateList = z.infer<typeof realEstateListSchema>

export { 
    IRealEstateData,
    IRealEstateReturn,
    IRealEstateList
}