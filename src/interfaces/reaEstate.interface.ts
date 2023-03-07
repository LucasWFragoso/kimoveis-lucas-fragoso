import { z } from 'zod';
import { realEstateDataSchema, realEstateReturnSchema } from '../schemas/realEstate.schemas';

type IRealEstateData = z.infer<typeof realEstateDataSchema>
type IRealEstateReturn = z.infer<typeof realEstateReturnSchema>

export { 
    IRealEstateData,
    IRealEstateReturn
}