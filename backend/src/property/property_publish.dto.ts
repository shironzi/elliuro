import { Type } from "class-transformer";
import { IsEnum, IsNumber, IsString, ValidateNested } from "class-validator";

enum PropertyType {
    HOUSE = 'HOUSE',
    Apartment = 'apartment',
    Hotel = 'hotel',
    Condominium = 'condominium',
    Private = 'private',
}

enum StatusType {
    DRAFT = "DRAFT",
    PUBLISH = "PUBLISH",
    SOLD = "SOLD",
    ACTIVE = "ACTIVE"
}

class StatusDto {
    @IsEnum(StatusType)
    status: StatusType
}

class DetailsDto {
    @IsString()
    title?: string

    @IsEnum(PropertyType)
    type: PropertyType

    @IsString()
    location?: string

    @IsNumber()
    price?: number;

    @IsString()
    description?: string
}

class ImageDto {

    @IsNumber()
    id: number

    @IsString()
    name: string

    @IsString()
    image?: string

    @IsString()
    added_at?: string
}

class AmenityDto {
    @IsNumber()
    id: number

    @IsString()
    name: string;

    @IsNumber()
    value: number
}

export class PropertyPublishDto {
    @ValidateNested()
    @Type(() => StatusDto)
    status: StatusDto;

    @ValidateNested()
    @Type(() => DetailsDto)
    details: DetailsDto;

    @ValidateNested({ each: true })
    @Type(() => ImageDto)
    images: ImageDto[];

    @ValidateNested({ each: true })
    @Type(() => AmenityDto)
    amenities: AmenityDto[];
}