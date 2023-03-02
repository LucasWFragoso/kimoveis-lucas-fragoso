import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 45})
    name: string

    @Column({length: 45,  unique: true })
    email: string

    @Column()
    admin: boolean

    @Column({length: 120})
    password: string

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @DeleteDateColumn()
    deletedAt: string
}

export {
    User
} 