/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PresenteService } from './presente.service';
import { PresenteController } from './presente.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PdfService } from './pdf.service';

@Module({
  imports: [PrismaModule],
  controllers: [PresenteController],
  providers: [PresenteService, PdfService],
})
export class PresenteModule {}
