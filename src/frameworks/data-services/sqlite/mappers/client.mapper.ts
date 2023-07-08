import { Client } from '@core/entities/client.entity';
import { Clients } from '@frameworks/data-services/models/Clients';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeOrmClientMapper {
  static toTypeorm(client: Client) {
    return {
      id: client.id,
      name: client.name,
      email: client.email,
      createdAt: client.createdAt,
    };
  }

  static toDomain(raw: Clients): Client {
    return new Client(
      {
        name: raw.name,
        email: raw.email,
      },
      raw.id,
    );
  }
}
