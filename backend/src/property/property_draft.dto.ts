import { Type } from "class-transformer";
import { IsEnum, IsInt, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

enum PropertyType {
    HOUSE = 'HOUSE',
    Apartment = 'apartment',
    Hotel = 'hotel',
    Condominium = 'condominium',
    Private = 'private',
}

enum StatusType {
    Draft = "draft",
    Published = "published",
    Sold = "sold",
    Active = "active"
}

class StatusDto {
    @IsEnum(StatusType)
    status: StatusType
}

export class PropertyDetailsDto {
    @IsOptional()
    @IsString()
    title?: string

    @IsEnum(PropertyType)
    type: PropertyType

    @IsOptional()
    @IsString()
    location?: string

    @IsOptional()
    @IsNumber()
    price?: number;

    @IsOptional()
    @IsString()
    description?: string
}

class ImageDto {
    @IsOptional()
    @IsNumber()
    id: number

    @IsOptional()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    image?: string

    @IsOptional()
    @IsString()
    added_at?: string
}

class AmenityDto {
    @IsOptional()
    @IsNumber()
    id: number

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsNumber()
    value: number
}

export class PropertyDraftDto {
    @ValidateNested()
    @Type(() => StatusDto)
    status: StatusDto;

    @ValidateNested()
    @Type(() => PropertyDetailsDto)
    details: PropertyDetailsDto;

    @ValidateNested({ each: true })
    @Type(() => ImageDto)
    images: ImageDto[];

    @ValidateNested({ each: true })
    @Type(() => AmenityDto)
    amenities: AmenityDto[];
}