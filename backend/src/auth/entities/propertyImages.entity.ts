
@Entity()
export class PropertyImages {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    amenityName: string

    @Column()
    amenityQuantity: number

    @ManyToOne(() => Property, (property) => property.amenities)
    property: Propert
}