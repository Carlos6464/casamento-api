/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { RecadoService } from './recado.service';

// Utilize require ao invés de import
import PDFDocument from 'pdfkit';

@Injectable()
export class PdfService {
  constructor(private readonly recadoService: RecadoService) {}

  async generateConfirmedGiftsReport(): Promise<string> {
    console.log('Iniciando geração do relatório');

    const recados = await this.recadoService.findAll();

    // Caminho do arquivo temporário (utilizando /tmp em Vercel)
    const filePath = path.join('/tmp', `recados-${Date.now()}.pdf`);
    console.log('Caminho do arquivo temporário:', filePath);

    // Criação do PDF
    const doc = new PDFDocument({ margin: 50 });
    const writeStream = fs.createWriteStream(filePath);
    doc.pipe(writeStream);

    // Cabeçalho
    doc.fontSize(18).text('Recados', { align: 'center' }).moveDown(1.5);

    // Adicionar Dados como Lista
    recados.forEach((recado) => {
      doc
        .fontSize(12)
        .text(`Convidado: ${recado.nome}`)
        .text(`E-mail: ${recado.email || '---'}`)
        .text(
          `Data da Confirmação: ${recado.createdAt.toLocaleDateString('pt-BR')}`,
        )
        .text(`Mensagem: ${recado.recado || '---'}`)
        .moveDown(1); // Espaçamento entre os itens da lista
    });

    // Finaliza o documento
    doc.end();

    return new Promise((resolve, reject) => {
      writeStream.on('finish', () => {
        console.log('Relatório gerado com sucesso:', filePath);
        resolve(filePath);
      });
      writeStream.on('error', (err) => {
        console.error('Erro ao gerar relatório:', err);
        reject(err);
      });
    });
  }
}
