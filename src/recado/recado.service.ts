/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RecadoService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createRecadoDto: CreateRecadoDto) {
    const createRecado = this.prismaService.recado.create({
      data: createRecadoDto,
    });

    return createRecado;
  }

  findAll() {
    const listRecados = this.prismaService.recado.findMany();
    return listRecados;
  }
}
