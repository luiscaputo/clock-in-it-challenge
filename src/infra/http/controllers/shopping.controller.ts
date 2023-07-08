import { API_VERSION } from '@helpers/versions';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ShoppingUseCases } from 'src/app/use-cases/shopping/shopping.use-case';
import { CreateShoppingDto } from '../dtos';
import { ShoppingViewModel } from '../view-models/shopping.view-model';

type IQueriesParams = {
  createdAt?: Date;
  name?: string;
  price?: number;
};

@ApiTags('Shopping')
@Controller(`api/${API_VERSION.v1}/shopping`)
export class ShoppingController {
  constructor(private shoppingUseCases: ShoppingUseCases) {}

  @Get('/products')
  async getAll() {
    return {
      success: true,
      data: (await this.shoppingUseCases.getAllShoppings()).map((product) => {
        return ShoppingViewModel.toHTTP(product);
      }),
    };
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const shopping = await this.shoppingUseCases.getShoppingById(id);
    return { success: true, data: ShoppingViewModel.toHTTP(shopping) };
  }

  @Post()
  async createShopping(@Body() createShoppingDto: CreateShoppingDto) {
    const shopping = await this.shoppingUseCases.createShopping(
      createShoppingDto,
    );
    return { success: true, data: ShoppingViewModel.toHTTP(shopping) };
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
