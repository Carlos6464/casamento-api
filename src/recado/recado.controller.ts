/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { RecadoService } from './recado.service';
import { CreateRecadoDto } from './dto/create-recado.dto';

@Controller('recado')
export class RecadoController {
  constructor(private readonly recadoService: RecadoService) {}

  @Post()
  create(@Body() createRecadoDto: CreateRecadoDto) {
    return this.recadoService.create(createRecadoDto);
  }

  @Get()
  findAll() {
    return this.recadoService.findAll();
  }
}
