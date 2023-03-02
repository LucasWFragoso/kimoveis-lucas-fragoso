import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {RealEstate} from "./real_estate.entity";
import {User} from "./users.entity";

@Entity('schedules_users_properties')
class Schedule {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: Date})
    date: Date

    @Column('time')
    hour: Date;

    @ManyToOne(() => RealEstate)
    realEstate: number

    @ManyToOne(() => User)
    user: number
}

export {
    Schedule
} 