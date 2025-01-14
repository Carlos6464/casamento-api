/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PresencaService } from './presenca.service';
import { PresencaController } from './presenca.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PdfService } from './pdf.service';

@Module({
  imports: [PrismaModule],
  controllers: [PresencaController],
  providers: [PresencaService, PdfService],
})
export class PresencaModule {}
