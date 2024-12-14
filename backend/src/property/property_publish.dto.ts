import { Type } from "class-transformer";
import { IsArray, IsDate, IsEnum, IsInt, IsNumber, IsString, ValidateNested } from "class-validator";

enum PropertyType {
    House = 'house',
    Apartment = 'apartment',
    Hotel = 'hotel',
    Condominium = 'condominium',
    Private = 'private',
}

class AmenityDto {
    @IsInt()
    id: number

    @IsString()
    name: string;

    @IsNumber()
    value: number;
}

class ImageDto {
    @IsInt()
    id: number

    @IsString()
    path: string;

    @IsDate()
    added_at: Date;
}

class DetailsDto {
    @IsInt()
    id: number

    @IsString()
    title: string;

    @IsEnum(PropertyType)
    type: PropertyType;

    @IsString()
    location: string;

    @IsString()
    price: string;

    @IsString()
    description: string;

}


export class Property_Publish {
    @IsInt()
    statusId: number

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DetailsDto)
    details: DetailsDto[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AmenityDto)
    amenities_list: AmenityDto[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImageDto)
    images: ImageDto[];

}