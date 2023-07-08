import { Client } from '@app/entities/client.entity';

export class clientViewModel {
  static toHTTP(client: Client) {
    return {
      id: client.id,
      name: client.name,
      email: client.email,
      createdAt: client.createdAt,
    };
  }
}
