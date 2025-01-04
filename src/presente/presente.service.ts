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

  update(id: number, updatePresenteDto: UpdatePresenteDto) {
    updatePresenteDto.status = true;
    const presente = this.prismaService.presente.update({
      data: {
        nome_user: updatePresenteDto.nome_user,
        email_user: updatePresenteDto.email_user,
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
