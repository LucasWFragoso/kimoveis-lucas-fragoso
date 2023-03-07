import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('addresses')
class Address{

    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 45})
    street: string

    @Column({length: 8})
    zipCode: string

    @Column({ type: String , length: 7, nullable: true})
    number: string | null 

    @Column({length: 20})
    city: string

    @Column({length: 2})
    state: string

}

export {
    Address
} 