import { API_VERSION } from '@configuration/versions';
import { CreateCategoryDto } from '@core/dtos';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryUseCases } from '@use-cases/category/category.use-case';

@ApiTags('Category')
@Controller(`api/${API_VERSION.v1}/category`)
export class CategoryController {
  constructor(private categoryUseCase: CategoryUseCases) {}

  @Get()
  async getAll() {
    return this.categoryUseCase.gelAllCategories();
  }

  @Post()
  createCategory(@Body() categoryDto: CreateCategoryDto) {
    return this.categoryUseCase.createCategory(categoryDto);
  }
}
