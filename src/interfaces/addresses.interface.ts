import { z } from 'zod';
import { addressDataSchema, addressReturnSchema } from '../schemas/addresses.schemas';

type IAddressData = z.infer<typeof addressDataSchema>
type IAddressReturn = z.infer<typeof addressReturnSchema>

export {
    IAddressData,
    IAddressReturn
}
