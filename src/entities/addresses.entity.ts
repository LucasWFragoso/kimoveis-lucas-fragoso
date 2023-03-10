import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RealEstate } from './real_estate.entity';

@Entity('addresses')
class Address{

    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 45})
    street: string

    @Column({length: 8})
    zipCode: string

    @Column({ type: String , length: 7, nullable: true})
    number?: string | null | undefined

    @Column({length: 20})
    city: string

    @Column({length: 2})
    state: string

    @OneToOne(() => RealEstate, real_estate => real_estate.address)
    @JoinColumn()
    realEstate: RealEstate
}

export {
    Address
} 