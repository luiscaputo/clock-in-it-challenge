import { Shopping } from '@core/entities/shopping.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ShoppingFactoryService {
  createNewShopping(createNewShopping: Shopping) {
    return new Shopping(createNewShopping);
  }
}
