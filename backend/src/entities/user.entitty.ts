import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Property } from "./property/property.entity";

export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest',
}

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string

    @Column()
    email: string

    @Column()
    name: string

    @Column()
    password: string

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER,
    })
    role: UserRole;

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(() => Property, (property) => property.user)
    property: Property
}
