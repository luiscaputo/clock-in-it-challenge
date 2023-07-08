import { IShoppingRepository } from 'src/app/abstracts';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data.source';
import { TypeOrmShoppingMapper } from '../mappers';
import { Shopping } from 'src/app/entities/shopping.entity';
import { Shoppings } from '@infra/database/models/Shoppings';

@Injectable()
export class ShoppingRepositoryImpl implements IShoppingRepository {
  private repository: Repository<Shoppings>;
  constructor() {
    this.repository = AppDataSource.getRepository(Shoppings);
  }
  async create(item: Shopping): Promise<Shopping> {
    const shopping = new Shoppings();
    shopping.client = item.clientId;
    shopping.product = item.productId;
    shopping.quantity = item.quantity;
    shopping.total = item.total;
    await this.repository.save(shopping);
    return TypeOrmShoppingMapper.toDomain(shopping);
  }
  async getAll(): Promise<Shopping[]> {
    const shoppings = await this.repository.find({
      relations: { product: true, client: true },
    });
    return shoppings.map((shopping) =>
      TypeOrmShoppingMapper.toDomain(shopping),
    );
  }
  async get(id: string): Promise<Shopping | null> {
    const shopping = await this.repository.findOne({ where: { id } });
    if (!shopping) {
      return null;
    }
    return TypeOrmShoppingMapper.toDomain(shopping);
  }
  async shoppingsByClient(
    clientId: string,
    createdAt?: Date,
    name?: string,
    price?: number,
  ): Promise<any> {
    const queryBuilder = this.repository
      .createQueryBuilder('shopping')
      .where('shopping.client = :clientId', { clientId })
      .leftJoinAndSelect('shopping.product', 'product');

    if (createdAt) {
      queryBuilder.andWhere('product.createdAt = :createdAt', { createdAt });
    }

    if (name) {
      queryBuilder.andWhere('product.name = :name', { name });
    }

    if (price) {
      queryBuilder.andWhere('product.price = :price', { price });
    }

    const [qtdShopping, shoppings] = await queryBuilder.getManyAndCount();
    return [qtdShopping, shoppings];
  }
}
