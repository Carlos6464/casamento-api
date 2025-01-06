/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UpdatePresenteDto } from './dto/update-presente.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PresenteService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    const presentes = this.prismaService.presente.findMany({
      where: {
        status: false,
      },
      orderBy: { id: 'asc' },
    });
    return presentes;
  }

  async findAllConfirm(searchTerm?: string) {
    if (!searchTerm) {
      return []; // Se não houver termo de busca, retorna uma lista vazia
    }

    const presentes = await this.prismaService.presente.findMany({
      where: {
        // Verifica se o termo de busca é um CPF válido e aplica o filtro no CPF
        OR: [
          {
            nome_user: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          },
          {
            email_user: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          },
          {
            cpf_user: searchTerm, // Busca exata para CPF
          },
        ],
      },
      orderBy: {
        id: 'asc', // Ordena os presentes por ID de forma crescente
      },
    });

    return presentes; // Retorna os presentes encontrados
  }

  update(id: number, updatePresenteDto: UpdatePresenteDto) {
    updatePresenteDto.status = true;
    const presente = this.prismaService.presente.update({
      data: {
        nome_user: updatePresenteDto.nome_user,
        email_user: updatePresenteDto.email_user,
        cpf_user: updatePresenteDto.cpf_user,
        status: updatePresenteDto.status,
      },
      where: {
        id: id,
      },
    });

    return presente;
  }

  async findConfirmedGifts() {
    return this.prismaService.presente.findMany({
      where: { status: true },
      select: {
        nome: true,
        nome_user: true,
        email_user: true,
        createdAt: true,
      },
    });
  }
}
