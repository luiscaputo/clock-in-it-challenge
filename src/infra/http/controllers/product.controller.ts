import { API_VERSION } from '@helpers/versions';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductUseCases } from 'src/app/use-cases/product/product.use-case';
import { CreateProductDto, UpdateProductDto } from '../dtos';
import { ProductViewModel } from '../view-models/product.view-models';

@ApiTags('Product')
@Controller(`api/${API_VERSION.v1}/product`)
export class ProductController {
  constructor(private productUseCase: ProductUseCases) {}

  @Get()
  async getAll() {
    return {
      success: true,
      data: (await this.productUseCase.getAllProducts()).map((product) => {
        return ProductViewModel.toHTTP(product);
      }),
    };
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const product = await this.productUseCase.getProductById(id);
    return { success: true, data: ProductViewModel.toHTTP(product) };
  }

  @Post()
  async createProduct(@Body() productDto: CreateProductDto) {
    const product = await this.productUseCase.createProduct(productDto);
    return { success: true, data: ProductViewModel.toHTTP(product) };
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    const update = await this.productUseCase.updateProduct(
      id,
      updateProductDto,
    );
    return { success: true, data: ProductViewModel.toHTTP(update) };
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.productUseCase.deleteProduct(id);
  }
}
