import { Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user.entitty";
import { PropertyStatus } from "./propertyStatus.entity";
import { PropertyDetails } from "./propertyDetails.entity";
import { PropertyAmenities } from "./propertyAmenities.entity";

@Entity()
export class Property {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @OneToOne(() => PropertyDetails, (propertyDetails) => propertyDetails.property)
    details: PropertyDetails

    @OneToOne(() => PropertyStatus, (propertyStatus) => propertyStatus.property)
    status: PropertyStatus

    @ManyToOne(() => User, (user) => user.id)
    user: User

    @OneToMany(() => PropertyAmenities, (amenity) => amenity.property)
    amenities: PropertyAmenities[]
}