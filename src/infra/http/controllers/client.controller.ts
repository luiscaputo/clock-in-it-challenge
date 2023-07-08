import { API_VERSION } from '@helpers/versions';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClientUseCases } from 'src/app/use-cases/client/client.use-case';
import { CreateClientDto, UpdateClientDto } from '../dtos';
import { clientViewModel } from '../view-models/client.view-models';

@ApiTags('Client')
@Controller(`api/${API_VERSION.v1}/client`)
export class ClientController {
  constructor(private clientUseCase: ClientUseCases) {}

  @Get()
  async getAll() {
    return {
      success: true,
      data: (await this.clientUseCase.gelAllClients()).map((client) => {
        return clientViewModel.toHTTP(client);
      }),
    };
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const client = await this.clientUseCase.getClientById(id);
    return { success: true, data: clientViewModel.toHTTP(client) };
  }

  @Post()
  async createClient(@Body() clientDto: CreateClientDto) {
    const client = await this.clientUseCase.createClient(clientDto);
    return { success: true, data: clientViewModel.toHTTP(client) };
  }

  @Put(':id')
  async updateClient(
    @Param('id') id: string,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    const update = await this.clientUseCase.updateClient(id, updateClientDto);
    return { success: true, data: clientViewModel.toHTTP(update) };
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.clientUseCase.deleteClient(id);
  }
}
