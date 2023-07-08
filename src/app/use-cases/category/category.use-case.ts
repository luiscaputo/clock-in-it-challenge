import { ICategoryRepository } from 'src/app/abstracts';
import { Injectable } from '@nestjs/common';
import { HTTPError } from '@helpers/httpError';
import { messages } from '@helpers/errorsMessages';
import { Category } from 'src/app/entities/category.entity';
import { CreateCategoryDto } from '@infra/http/dtos';

@Injectable()
export class CategoryUseCases {
  constructor(private repository: ICategoryRepository) {}
  async gelAllCategories(): Promise<Category[]> {
    const categories = await this.repository.getAll();
    if (!categories) {
      throw new HTTPError(messages.noCategoriesWasFound, 400);
    }
    return categories;
  }

  async createCategory(
    createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    const c = new Category({
      name: createCategoryDto.name,
    });
    const category = this.repository.create(c);
    if (!category) {
      throw new HTTPError(messages.invalidCategoryDesignation, 400);
    }
    return category;
  }
}
