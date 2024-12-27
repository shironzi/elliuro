import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Property } from "./property.entity"

@Entity()
export class PropertyAmenities {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    amenityName: string

    @Column()
    amenityQuantity: number

    @ManyToOne(() => Property, (property) => property.amenities)
    property: Property
}