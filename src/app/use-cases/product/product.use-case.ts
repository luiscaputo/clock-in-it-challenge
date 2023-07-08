import { IProductRepository } from 'src/app/abstracts';
import { Injectable } from '@nestjs/common';
import { HTTPError } from '@helpers/httpError';
import { messages } from '@helpers/errorsMessages';
import { Product } from 'src/app/entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '@infra/http/dtos';

@Injectable()
export class ProductUseCases {
  constructor(private repository: IProductRepository) {}

  async getAllProducts(): Promise<Product[]> {
    const products = await this.repository.getAll();
    if (!products) {
      throw new HTTPError(messages.noProductsFound, 400);
    }
    return products;
  }

  getProductById(id: string): Promise<any> {
    return this.repository.get({ id });
  }

  async createProduct(createProductDto: CreateProductDto): Promise<any> {
    if (createProductDto.price < 0) {
      throw new HTTPError(messages.invalidProductPrice, 400);
    }

    const newProduct = new Product({
      categoryId: createProductDto.categoryId,
      price: createProductDto.price,
      name: createProductDto.name,
      stockQuantity: createProductDto.stockQuantity,
    });
    return this.repository.create(newProduct);
  }

  updateProduct(id: string, updateProductDto: UpdateProductDto): Promise<any> {
    const updateProduct = new Product({
      categoryId: updateProductDto.name,
      price: updateProductDto.price,
      name: updateProductDto.name,
      stockQuantity: updateProductDto.stockQuantity,
    });
    return this.repository.update(id, updateProduct);
  }

  deleteProduct(id: string): Promise<void> {
    return this.repository.delete({ id });
  }
}
