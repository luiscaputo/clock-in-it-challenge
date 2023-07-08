import { UpdateProductDto } from '@core/dtos';
import { Category } from '@core/entities/category.entity';
import { Product } from '@core/entities/product.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductFactoryService {
  createNewProduct(createNewProduct: Product) {
    return new Category(createNewProduct);
  }

  updateProduct(id: string, updateProduct: UpdateProductDto) {
    return new Product({
      categoryId: updateProduct.categoryId,
      name: updateProduct.name,
      price: updateProduct.price,
      stockQuantity: updateProduct.stockQuantity,
    });
  }
}
