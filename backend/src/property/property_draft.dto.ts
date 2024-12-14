import { Type } from "class-transformer";
import { IsArray, IsDate, IsEnum, IsInt, IsJSON, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

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
    House = 'house',
    Apartment = 'apartment',
    Hotel = 'hotel',
    Condominium = 'condominium',
    Private = 'private',
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

    @IsString()
    path: string;

    @IsDate()
    added_at: Date;
}

class DetailsDto {
    @IsOptional()
    @IsInt()
    id: number

    /**
     * The title of the property.
     * @example "Cozy Cottage"
     */
    @IsOptional()
    @IsString()
    title: string;

    /**
     * The type of the property.
     * Must be one of the values defined in the PropertyType enum.
     */
    @IsOptional()
    @IsEnum(PropertyType)
    type: PropertyType;

    /**
     * The location of the property.
     * @example "123 Main St, Springfield"
     */
    @IsOptional()
    @IsString()
    location: string;

    /**
     * The price of the property.
     * @example "250000"
     */
    @IsOptional()
    @IsString()
    price: string;

    /**
     * A description of the property.
     * @example "A beautiful 3-bedroom cottage with a spacious garden."
     */
    @IsOptional()
    @IsString()
    description: string;

}

/**
 * Data Transfer Object (DTO) for creating a draft property.
 * This class is used to validate the data for a draft property.
 */
export class Property_Draft {

    // For the description Form

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DetailsDto)
    details: DetailsDto[];

    // Amenities Form

    /**
   * List of amenities with their counts.
   * @example [{ "name": "bedrooms", "value": 3 }]
   */
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AmenityDto)
    amenities_list: AmenityDto[];
    // Images Form

    /**
   * List of images with paths and timestamps.
   * @example [{ "path": "images/property-image.jpg", "added_at": "2024-12-13T00:00:00Z" }]
   */
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImageDto)
    images: ImageDto[];
}