import { IClientRepository } from 'src/app/abstracts';
import { Injectable } from '@nestjs/common';
import { HTTPError } from '@helpers/httpError';
import { messages } from '@helpers/errorsMessages';
import { Client } from 'src/app/entities/client.entity';
import { EmailValidator } from '@helpers/emailValidator';
import { CreateClientDto, UpdateClientDto } from '@infra/http/dtos';

@Injectable()
export class ClientUseCases {
  constructor(private repository: IClientRepository) {}
  async gelAllClients(): Promise<Client[]> {
    const clients = await this.repository.getAll();
    if (!clients) {
      throw new HTTPError(messages.noClientsWasFound, 400);
    }
    return clients;
  }

  getClientById(id: string): Promise<any> {
    return this.repository.get({ id });
  }

  async createClient(createClientDto: CreateClientDto): Promise<Client> {
    if (!EmailValidator(createClientDto.email)) {
      throw new HTTPError(messages.invalidEmail, 400);
    }
    const newClient = new Client({
      email: createClientDto.email,
      name: createClientDto.name,
    });
    return this.repository.create(newClient);
  }

  updateClient(id: string, updateClientDto: UpdateClientDto): Promise<any> {
    const updateClient = new Client({
      email: updateClientDto.name,
      name: updateClientDto.name,
    });
    return this.repository.update(id, updateClient);
  }

  deleteClient(id: string): Promise<void> {
    return this.repository.delete({ id });
  }
}
