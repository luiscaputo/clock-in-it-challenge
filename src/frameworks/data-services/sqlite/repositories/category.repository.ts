import { ICategoryRepository } from '@core/abstracts';
import { Categories } from '@frameworks/data-services/models/Categories';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data.source';
import { Injectable } from '@nestjs/common';
import { TypeOrmCategoryMapper } from '../mappers';
import { Category } from '@core/entities/category.entity';

@Injectable()
export class CategoryRepositoryImpl implements ICategoryRepository {
  private repository: Repository<Categories>;
  constructor() {
    this.repository = AppDataSource.getRepository(Categories);
  }
  async create(item: Category): Promise<Category> {
    const raw = TypeOrmCategoryMapper.toTypeorm(item);
    const c = this.repository.create(raw);
    const category = await this.repository.save(c);
    return TypeOrmCategoryMapper.toDomain(category);
  }
  async getAll(): Promise<Category[]> {
    const categories = await this.repository.find();
    return (
      categories.map((category) => TypeOrmCategoryMapper.toDomain(category)) ??
      []
    );
  }
}
