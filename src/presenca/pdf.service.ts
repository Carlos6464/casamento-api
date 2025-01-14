/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { PresencaService } from './presenca.service';

// Utilize require ao invés de import
import PDFDocument from 'pdfkit';

@Injectable()
export class PdfService {
  constructor(private readonly presncaService: PresencaService) {}

  async generateConfirmedGiftsReport(): Promise<string> {
    console.log('Iniciando geração do relatório');

    const presencas = await this.presncaService.findAll();

    // Caminho do arquivo temporário (utilizando /tmp em Vercel)
    const filePath = path.join('/tmp', `presencas-${Date.now()}.pdf`);
    console.log('Caminho do arquivo temporário:', filePath);

    // Criação do PDF
    const doc = new PDFDocument({ margin: 50 });
    const writeStream = fs.createWriteStream(filePath);
    doc.pipe(writeStream);

    // Cabeçalho
    doc
      .fontSize(18)
      .text('Presenças confirmadas', { align: 'center' })
      .moveDown(1.5);

    // Adicionar Dados como Lista
    presencas.forEach((presenca) => {
      doc
        .fontSize(12)
        .text(`Convidado: ${presenca.nome}`)
        .text(`E-mail: ${presenca.email || '---'}`)
        .text(`Telefone: ${this.formatTelefone(presenca.telefone) || '---'}`)
        .text(`Quantidade de pessoas: ${presenca.qt_pessoas}`)
        .text(
          `Data da Confirmação: ${presenca.createdAt.toLocaleDateString('pt-BR')}`,
        )
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

  formatTelefone(telefone: string): string {
    if (!telefone) return '---'; // Caso não exista telefone

    // Remover qualquer caractere não numérico
    const cleaned = telefone.replace(/\D/g, '');

    // Formatar para (xx) xxxxx-xxxx ou (xx) xxxx-xxxx
    if (cleaned.length === 11) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
    } else if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
    }

    // Retornar o telefone original se não tiver o formato esperado
    return telefone;
  }
}
