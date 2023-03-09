import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import {Address} from './addresses.entity'
import {Category} from './categories.entity';
import { Schedule } from './schedules_users_properties.entity';

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

    @CreateDateColumn({type:"date"})
    createdAt: string

    @UpdateDateColumn({type:"date"})
    updatedAt: string

    @OneToOne( () => Address)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category, categories => categories.name)
    @JoinColumn()
    category: Category

    @OneToMany(() => Schedule, schedule => schedule.realEstate)
    schedules: Schedule[]
}

export {
    RealEstate
} 