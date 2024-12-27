import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Property } from "./property.entity"

enum PropertyType {
    HOUSE = "house",
    APARTMENT = "apartment",
    HOTEL = "hotel",
    CONDOMINIUM = "condominium",
    RESORT = "resort",
}

@Entity()
export class PropertyDetails {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column({
        type: 'enum',
        enum: PropertyType,
        default: PropertyType.HOUSE
    })
    type: PropertyType

    @Column()
    location: string

    @Column()
    price: number

    @Column({ type: 'text' })
    description: string

    @OneToOne(() => Property, (property) => property.details)
    property: Property
}