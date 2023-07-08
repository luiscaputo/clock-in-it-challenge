import { IClientRepository } from '@core/abstracts';
import { Clients } from '@frameworks/data-services/models/Clients';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data.source';
import { TypeOrmClientMapper } from '../mappers';
import { Client } from '@core/entities/client.entity';

@Injectable()
export class ClientRepositoryImpl implements IClientRepository {
  private repository: Repository<Clients>;
  constructor() {
    this.repository = AppDataSource.getRepository(Clients);
  }
  async get({ id }: { id: string }): Promise<Clients | null> {
    const client = await this.repository.findOne({ where: { id } });
    if (!client) {
      return null;
    }
    return client;
  }
  async getAll(): Promise<Client[]> {
    const clients = await this.repository.find();
    return clients.map((client) => TypeOrmClientMapper.toDomain(client));
  }
  async create(item: Client): Promise<Client> {
    const raw = TypeOrmClientMapper.toTypeorm(item);
    const client = await this.repository.save(raw);
    return TypeOrmClientMapper.toDomain(client);
  }
  async update(id: string, item: Client): Promise<Client | null> {
    const client = await this.repository.findOne({ where: { id } });
    if (!client) {
      return null;
    }

    await this.repository
      .createQueryBuilder()
      .update()
      .set({
        email: item.email,
        name: item.name,
      })
      .where('id = :id', { id })
      .execute();

    return TypeOrmClientMapper.toDomain(client);
  }
  async delete({ id }: { id: string }): Promise<void> {
    await this.repository.delete(id);
    return;
  }
}
