import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./real_estate.entity";

@Entity('categories')
class Category{

    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 45, unique: true})
    name: string

    @OneToMany(() => RealEstate, (real_estate) => real_estate.category)
    @JoinColumn()
    realEstate: RealEstate
}

export {
    Category
} 