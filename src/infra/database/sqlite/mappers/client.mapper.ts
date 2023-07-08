import { Client } from 'src/app/entities/client.entity';
import { Injectable } from '@nestjs/common';
import { Clients } from '@infra/database/models/Clients';

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
