import { Property_type } from "@prisma/client";
import { Transform, Type } from "class-transformer";
import { IsEnum, IsInt, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

export class PropertyDetailsDto {
    @IsOptional()
    @IsString()
    title?: string

    @Transform(({ value }) => {
        const upperValue = value.toUpperCase();
        return Property_type[upperValue as keyof typeof Property_type];
    })
    @IsEnum(Property_type)
    type: Property_type;

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