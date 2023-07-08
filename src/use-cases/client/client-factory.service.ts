import { Category } from '@core/entities/category.entity';
import { Client } from '@core/entities/client.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientFactoryService {
  createNewClient(createNewClient: Client) {
    return new Category(createNewClient);
  }

  updateClient(id: string, updateClient: Client) {
    return new Client({
      email: updateClient.email,
      name: updateClient.name,
    });
  }
}
