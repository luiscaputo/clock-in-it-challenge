import { CreateShoppingDto } from '@core/dtos';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ShoppingUseCases } from '@use-cases/shopping/shopping.use-case';

type IQueriesParams = {
  createdAt?: Date;
  name?: string;
  price?: number;
};

@ApiTags('Shopping')
@Controller('api/shopping')
export class ShoppingController {
  constructor(private shoppingUseCases: ShoppingUseCases) {}

  @Get('/products')
  async getAll() {
    return this.shoppingUseCases.getAllShoppings();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.shoppingUseCases.getShoppingById(id);
  }

  @Post()
  async createShopping(@Body() createShoppingDto: CreateShoppingDto) {
    return this.shoppingUseCases.createShopping(createShoppingDto);
  }

  @Get('/client/:clientId')
  async getAllByClient(
    @Param('clientId') clientId: string,
    @Query() { createdAt, name, price }: IQueriesParams,
  ) {
    return this.shoppingUseCases.allShoppingsByClient(
      clientId,
      createdAt,
      name,
      price,
    );
  }
}
