import { ObjectId } from "mongoose";
import { Column, Entity, ManyToOne, ObjectIdColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entitty";

enum Status {
    DRAFT = "draft",
    ACTIVE = "active",
    RENTED = 'rented'
}

enum PropertyType {
    HOUSE = "house",
    APARTMENT = "apartment",
    HOTEL = "hotel",
    CONDOMINIUM = "condominium",
    RESORT = "resort",
}

@Entity()
export class Property {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    detailsId: string

    @OneToOne(() => PropertyStatus, (propertyStatus) => propertyStatus.property)
    status: PropertyStatus

    @ManyToOne(() => User, (user) => user.id)
    user: string

    @OneToMany(() => PropertyAmenities, (amenity) => amenity)
    amenities: PropertyAmenities[]

    @OneToMany(() => PropertyImages, (images) => images)
    images: PropertyImages[]
}

@Entity()
export class PropertyStatus {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: 'enum',
        enum: Status,
        default: Status.DRAFT
    })
    status: Status

    @OneToOne(() => Property, (property) => property.status)
    property: Property
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

    @Column()
    description: Text
}