/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreatePresenteDto } from './dto/create-presenca.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PresencaService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    const presencas = this.prismaService.presenca.findMany({
      where: {
        status: true,
      },
      orderBy: { id: 'asc' },
    });
    return presencas;
  }

  create(createRecadoDto: CreatePresenteDto) {
    const createPresenca = this.prismaService.presenca.create({
      data: createRecadoDto,
    });

    return createPresenca;
  }
}
