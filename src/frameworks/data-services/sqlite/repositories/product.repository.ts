import { IProductRepository } from '@core/abstracts';
import { Products } from '@frameworks/data-services/models/Products';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data.source';
import { TypeOrmProductMapper } from '../mappers';
import { Product } from '@core/entities/product.entity';

@Injectable()
export class ProductRepositoryImpl implements IProductRepository {
  private repository: Repository<Products>;
  constructor() {
    this.repository = AppDataSource.getRepository(Products);
  }
  async get({ id }: { id: string }): Promise<any | null> {
    const product = await this.repository.findOne({ where: { id } });
    if (!product) {
      return null;
    }
    // return TypeOrmProductMapper.toDomain(product);
    return product;
  }
  async getAll(): Promise<any[]> {
    return await this.repository.find({ relations: ['category'] });
    // return products.map((product) => TypeOrmProductMapper.toDomain(product));
  }
  async create(item: Product): Promise<any> {
    const raw = TypeOrmProductMapper.toTypeorm(item);
    const createProduct = this.repository.create(raw);
    return await this.repository.save(createProduct);
    // return TypeOrmProductMapper.toDomain(product);
  }
  async update(id: string, item: Product): Promise<any | null> {
    const product = await this.repository.findOne({ where: { id } });

    if (!product) {
      return null;
    }

    await this.repository
      .createQueryBuilder()
      .update()
      .set({
        name: item.name,
        price: item.price,
        category() {
          return item.categoryId;
        },
        stockQuantity: item.stockQuantity,
      })
      .where('id = :id', { id })
      .execute();

    return product;

    // return TypeOrmProductMapper.toDomain(product);
  }
  async delete({ id }: { id: string }): Promise<void> {
    this.repository.delete({ id });
    return;
  }
}
