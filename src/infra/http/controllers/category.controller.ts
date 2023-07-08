import { API_VERSION } from '@helpers/versions';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryUseCases } from 'src/app/use-cases/category/category.use-case';
import { CreateCategoryDto } from '../dtos';
import { CategoryViewModel } from '../view-models/category.view-models';

@ApiTags('Category')
@Controller(`api/${API_VERSION.v1}/category`)
export class CategoryController {
  constructor(private categoryUseCase: CategoryUseCases) {}

  @Get()
  async getAll() {
    return {
      success: true,
      data: (await this.categoryUseCase.gelAllCategories()).map((category) => {
        return CategoryViewModel.toHTTP(category);
      }),
    };
  }

  @Post()
  async createCategory(@Body() categoryDto: CreateCategoryDto) {
    const category = await this.categoryUseCase.createCategory(categoryDto);
    return { success: true, data: CategoryViewModel.toHTTP(category) };
  }
}
