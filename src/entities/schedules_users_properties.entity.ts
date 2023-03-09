import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @ManyToOne(() => RealEstate, real_estate => real_estate.schedules )
    @JoinColumn()
    realEstate: RealEstate

    @ManyToOne(() => User, users => users.schedules)
    @JoinColumn()
    user: User
}

export {
    Schedule
} 