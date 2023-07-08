import { Client } from '@core/entities/client.entity';
import { Clients } from '@frameworks/data-services/models/Clients';

export abstract class IClientRepository {
  abstract get({ id }: { id: string }): Promise<Clients | null>;
  abstract getAll(): Promise<Client[]>;
  abstract create(item: Client): Promise<Client>;
  abstract update(id: string, item: Client): Promise<Client | null>;
  abstract delete({ id }: { id: string }): Promise<void>;
}
