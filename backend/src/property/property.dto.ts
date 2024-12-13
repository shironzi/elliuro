import { IsArray, IsEnum, IsJSON, IsString } from "class-validator";

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

/**
 * Data Transfer Object (DTO) for creating a draft property.
 * This class is used to validate the data for a draft property.
 */
export class draftPropertyDto {

    // For the description Form

    /**
     * The title of the property.
     * @example "Cozy Cottage"
     */
    @IsString()
    title: string;

    /**
     * The type of the property.
     * Must be one of the values defined in the PropertyType enum.
     */
    @IsEnum(PropertyType)
    type: PropertyType;

    /**
     * The location of the property.
     * @example "123 Main St, Springfield"
     */
    @IsString()
    location: string;

    /**
     * The price of the property.
     * @example "250000"
     */
    @IsString()
    price: string;

    /**
     * A description of the property.
     * @example "A beautiful 3-bedroom cottage with a spacious garden."
     */
    @IsString()
    description: string;

    // Amenities Form

    /**
   * List of amenities with their counts.
   * @example [{ "name": "bedrooms", "value": 3 }]
   */

    @IsArray()
    @IsJSON({ each: true })
    amenities_list: { name: string, value: number }[]
    // Images Form

    /**
   * List of images with paths and timestamps.
   * @example [{ "path": "images/property-image.jpg", "added_at": "2024-12-13T00:00:00Z" }]
   */

    @IsArray()
    image: { path: string; added_at: Date }[];
}