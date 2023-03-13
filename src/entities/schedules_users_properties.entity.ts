import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {RealEstate} from "./real_estate.entity";
import {User} from "./users.entity";

@Entity('schedules_users_properties')
class Schedule {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'date'})
    date: string

    @Column({type: 'time'})
    hour: string;

    @ManyToOne(() => RealEstate, real_estate => real_estate.schedules )
    realEstate: RealEstate

    @ManyToOne(() => User, users => users.schedules)
    user: User
}

export {
    Schedule
} 