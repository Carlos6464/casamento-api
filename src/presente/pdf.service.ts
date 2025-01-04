/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
import { PresenteService } from './presente.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PdfService {
  constructor(private readonly presenteService: PresenteService) {}

  async generateConfirmedGiftsReport(): Promise<string> {
    const presentes = await this.presenteService.findConfirmedGifts();

    // Caminho do diretório e do arquivo
    const directoryPath = path.join(__dirname, '..', 'relatorios');
    const filePath = path.join(
      directoryPath,
      `presentes-confirmados-${Date.now()}.pdf`,
    );

    // Verifique se o diretório existe, senão crie-o
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
    }

    // Criação do PDF
    const doc = new PDFDocument({ margin: 50 });
    const writeStream = fs.createWriteStream(filePath);

    doc.pipe(writeStream);

    // Cabeçalho
    doc
      .fontSize(18)
      .text('Relatório de Presentes Confirmados', { align: 'center' })
      .moveDown(1.5);

    // Adicionar Dados como Lista
    presentes.forEach((presente, index) => {
      doc
        .fontSize(12)
        .text(`${index + 1}. Produto: ${presente.nome}`)
        .text(`Convidado: ${presente.nome_user || '---'}`)
        .text(`E-mail: ${presente.email_user || '---'}`)
        .text(
          `Data da Confirmação: ${presente.createdAt.toLocaleDateString('pt-BR')}`,
        )
        .moveDown(1); // Espaçamento entre os itens da lista
    });

    // Finaliza o documento
    doc.end();

    return new Promise((resolve, reject) => {
      writeStream.on('finish', () => resolve(filePath));
      writeStream.on('error', (err) => reject(err));
    });
  }
}
