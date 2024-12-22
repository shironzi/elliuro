import { ApiProperty } from "@nestjs/swagger";
import { Property_type } from "@prisma/client";
import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";

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