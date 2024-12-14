import { Type } from "class-transformer";
import { IsArray, IsDate, IsEnum, isInt, IsInt, IsJSON, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

/**
 * Enum representing different types of properties.
 * 
 * @enum {string}
 * @property {string} House - Represents a house property.
 * @property {string} Apartment - Represents an apartment property.
 * @property {string} Hotel - Represents a hotel property.
 * @property {string} Condominium - Represents a condominium property.
 * @property {string} Private - Represents a private property.
 */
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

class AmenityDto {
    @IsOptional()
    @IsInt()
    id: number

    @IsString()
    name: string;

    @IsNumber()
    value: number;
}

class ImageDto {
    @IsOptional()
    @IsInt()
    id: number

    imageFile: File;

    @IsString()
    added_at: Date;
}

class DetailsDto {
    @IsOptional()
    @IsInt()
    id: number

    @IsOptional()
    @IsString()
    title: string;

    @IsOptional()
    @IsEnum(PropertyType)
    type: PropertyType;

    @IsOptional()
    @IsString()
    location: string;

    @IsOptional()
    @IsInt()
    price: number;

    @IsOptional()
    @IsString()
    description: string;
}

class StatusDto {
    @IsOptional()
    @IsInt()
    id: number

    @IsEnum(StatusType)
    status: StatusType
}

export class Property_Draft {

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => DetailsDto)
    details: DetailsDto;

    @ValidateNested({ each: true })
    @Type(() => StatusDto)
    status: StatusDto

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => AmenityDto)
    amenities: AmenityDto[];

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => ImageDto)
    images: ImageDto[];
}