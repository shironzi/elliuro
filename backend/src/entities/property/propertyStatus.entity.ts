import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Property } from "./property.entity"

enum Status {
    DRAFT = "draft",
    ACTIVE = "active",
    RENTED = "rented"
}

@Entity()
export class PropertyStatus {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: 'enum',
        enum: status,
        default: Status.DRAFT
    })
    status: Status

    @OneToOne(() => Property, (property) => property.status)
    property: Property
}