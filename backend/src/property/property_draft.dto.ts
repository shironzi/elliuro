import { ApiProperty } from "@nestjs/swagger";
import { Property_type } from "@prisma/client";
import { Transform, Type } from "class-transformer";
import { IsArray, IsEnum, IsInt, IsJSON, IsNumber, IsOptional, IsString, Matches, ValidateNested } from "class-validator";

export class PropertyDetailsDto {
    @IsOptional()
    @IsString()
    title?: string

    @IsEnum(Property_type)
    type: Property_type

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

export class FilesUploadDto {
    @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
    files: any[];
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