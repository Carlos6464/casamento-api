/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RecadoService } from './recado.service';
import { RecadoController } from './recado.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PdfService } from './pdf.service';

@Module({
  imports: [PrismaModule],
  controllers: [RecadoController],
  providers: [RecadoService, PdfService],
})
export class RecadoModule {}
