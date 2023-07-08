import { API_VERSION } from '@configuration/versions';
import { CreateClientDto, UpdateClientDto } from '@core/dtos';
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
import { ClientUseCases } from '@use-cases/client/client.use-case';

@ApiTags('Client')
@Controller(`api/${API_VERSION.v1}/client`)
export class ClientController {
  constructor(private clientUseCase: ClientUseCases) {}

  @Get()
  async getAll() {
    return this.clientUseCase.gelAllClients();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.clientUseCase.getClientById(id);
  }

  @Post()
  createClient(@Body() clientDto: CreateClientDto) {
    return this.clientUseCase.createClient(clientDto);
  }

  @Put(':id')
  updateClient(
    @Param('id') id: string,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    return this.clientUseCase.updateClient(id, updateClientDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.clientUseCase.deleteClient(id);
  }
}
