/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
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

  async create(createRecadoDto: CreatePresenteDto) {
    // Busca o presente pelo ID
    const convidado = await this.prismaService.presenca.findFirst({
      where: { nome: createRecadoDto.nome },
    });

    // Verifica se o status já está `true`
    if (convidado && convidado.status === true) {
      throw new BadRequestException(
        `O convidado ${convidado.nome} já confirmou sua presenca.`,
      );
    }
    const createPresenca = this.prismaService.presenca.create({
      data: createRecadoDto,
    });

    return createPresenca;
  }
}
