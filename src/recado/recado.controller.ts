/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { RecadoService } from './recado.service';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { PdfService } from './pdf.service';
import { Response } from 'express';

@Controller('recado')
export class RecadoController {
  constructor(
    private readonly recadoService: RecadoService,
    private readonly pdfService: PdfService,
  ) {}

  @Post()
  create(@Body() createRecadoDto: CreateRecadoDto) {
    return this.recadoService.create(createRecadoDto);
  }

  @Get()
  findAll() {
    return this.recadoService.findAll();
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
