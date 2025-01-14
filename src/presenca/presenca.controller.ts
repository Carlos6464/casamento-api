/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { PresencaService } from './presenca.service';
import { CreatePresenteDto } from '../presenca/dto/create-presenca.dto';
import { PdfService } from './pdf.service';
import { Response } from 'express';

@Controller('presenca')
export class PresencaController {
  constructor(
    private readonly presencaService: PresencaService,
    private readonly pdfService: PdfService,
  ) {}

  @Post()
  create(@Body() CreatePresenteDto: CreatePresenteDto) {
    return this.presencaService.create(CreatePresenteDto);
  }

  @Get()
  findAll() {
    return this.presencaService.findAll();
  }

  @Get('relatorio')
  async generateReport(@Res() res: Response) {
    try {
      const filePath = await this.pdfService.generateConfirmedGiftsReport();

      // Retorna o PDF como resposta
      res.download(filePath, (err) => {
        if (err) {
          console.error('Erro ao fazer download do arquivo:', err);
          res.status(500).send('Erro ao gerar relatório');
        }
      });
    } catch (error) {
      console.error('Erro ao gerar relatório:', error);
      res.status(500).send('Erro ao gerar relatório');
    }
  }
}
