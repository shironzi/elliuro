import { Column, Entity PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PropertyImages {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  imageName: string

  @Column({ type: 'bytea' })
  imageFile: Buffer;
}