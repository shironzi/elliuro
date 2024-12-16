import { Type } from "class-transformer";
import { IsEnum, IsInt, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

enum PropertyType {
    HOUSE = 'HOUSE',
    APARTMENT = 'APARTMENT',
    HOTEL = 'HOTEL',
    CONDOMINIUM = 'CONDOMINIUM',
    PRIVATE = 'PRIVATE',
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

export class PropertyImageDto {
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

    @IsOptional()
    @IsString()
    updated_at?: string
}

export class PropertyAmenityDto {
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