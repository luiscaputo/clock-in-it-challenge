import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreateShoppingDto {
  @ApiProperty({ required: true })
  @IsUUID()
  @IsNotEmpty()
  clientId: string;

  @ApiProperty({ required: true })
  @IsUUID()
  @IsNotEmpty()
  productId: string;

  @ApiProperty({ required: true })
  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}
