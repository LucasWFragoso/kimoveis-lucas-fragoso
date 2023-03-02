import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import {Address} from './addresses.entity'
import {Category} from './categories.entity';

@Entity('real_estate')
class RealEstate{

    @PrimaryGeneratedColumn()
    id: number

    @Column({default: false})
    sold: boolean

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    value: number | string;

    @Column({type: 'integer'})
    size: number

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @OneToOne( () => Address)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category, categories => categories.name)
    category: Category[]
}

export {
    RealEstate
} 