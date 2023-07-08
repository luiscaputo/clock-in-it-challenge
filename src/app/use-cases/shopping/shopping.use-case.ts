import {
  IClientRepository,
  IProductRepository,
  IShoppingRepository,
} from 'src/app/abstracts';
import { Injectable } from '@nestjs/common';
import { HTTPError } from '@helpers/httpError';
import { messages } from '@helpers/errorsMessages';
import { Shopping } from 'src/app/entities/shopping.entity';
import { CreateShoppingDto } from '@infra/http/dtos';

@Injectable()
export class ShoppingUseCases {
  constructor(
    private shoppingRepository: IShoppingRepository,
    private clientRepository: IClientRepository,
    private productRepository: IProductRepository,
  ) {}

  async getAllShoppings(): Promise<Shopping[]> {
    const shoppings = await this.shoppingRepository.getAll();
    if (!shoppings) {
      throw new HTTPError(messages.noShoppingFounded, 400);
    }
    return shoppings;
  }

  getShoppingById(id: string): Promise<Shopping> {
    return this.shoppingRepository.get(id);
  }

  async createShopping(
    createNewShoppingDto: CreateShoppingDto,
  ): Promise<Shopping> {
    const client = await this.clientRepository.get({
      id: createNewShoppingDto.clientId,
    });
    if (!client) {
      throw new HTTPError(messages.noClientsWasFound, 400);
    }

    const product = await this.productRepository.get({
      id: createNewShoppingDto.productId,
    });
    if (!product || product.stockQuantity < createNewShoppingDto.quantity) {
      throw new HTTPError(messages.indisponibleProduct, 400);
    }

    // await this.productRepository.update(id: product.id, new Product({ stockQuantity: product.stockQuantity - createNewShoppingDto.quantity }))

    const newShopping = new Shopping({
      clientId: client,
      productId: product,
      quantity: createNewShoppingDto.quantity,
      total: product.price * createNewShoppingDto.quantity,
    });

    return this.shoppingRepository.create(newShopping);
  }

  allShoppingsByClient(
    clientId: string,
    createdAt?: Date,
    name?: string,
    price?: number,
  ): Promise<any> {
    return this.shoppingRepository.shoppingsByClient(
      clientId,
      createdAt,
      name,
      price,
    );
  }
}
