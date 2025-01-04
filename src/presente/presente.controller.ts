/* eslint-disable prettier/prettier */
import { Controller, Get, Body, Patch, Param, Res } from '@nestjs/common';
import { PresenteService } from './presente.service';
import { PdfService } from './pdf.service';
import { UpdatePresenteDto } from './dto/update-presente.dto';
import { Response } from 'express';

@Controller('presente')
export class PresenteController {
  constructor(
    private readonly presenteService: PresenteService,
    private readonly pdfService: PdfService,
  ) {}

  @Get()
  findAll() {
    return this.presenteService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePresenteDto: UpdatePresenteDto,
  ) {
    return this.presenteService.update(+id, updatePresenteDto);
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
