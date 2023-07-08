import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ required: true })
  @IsUUID()
  @IsNotEmpty()
  categoryId: string;

  @ApiProperty({ required: true })
  @IsNumber()
  @IsNotEmpty()
  stockQuantity: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
