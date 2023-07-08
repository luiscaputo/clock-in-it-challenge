import { API_VERSION } from '@configuration/versions';
import { CreateProductDto, UpdateProductDto } from '@core/dtos';
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
import { ProductUseCases } from '@use-cases/product/product.use-case';

@ApiTags('Product')
@Controller(`api/${API_VERSION.v1}/product`)
export class ProductController {
  constructor(private productUseCase: ProductUseCases) {}

  @Get()
  async getAll() {
    return this.productUseCase.getAllProducts();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.productUseCase.getProductById(id);
  }

  @Post()
  createProduct(@Body() productDto: CreateProductDto) {
    return this.productUseCase.createProduct(productDto);
  }

  @Put(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productUseCase.updateProduct(id, updateProductDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.productUseCase.deleteProduct(id);
  }
}
