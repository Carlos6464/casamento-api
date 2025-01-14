"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
const presenca_service_1 = require("./presenca.service");
const pdfkit_1 = require("pdfkit");
let PdfService = class PdfService {
    constructor(presncaService) {
        this.presncaService = presncaService;
    }
    async generateConfirmedGiftsReport() {
        console.log('Iniciando geração do relatório');
        const presencas = await this.presncaService.findAll();
        const filePath = path.join('/tmp', `presencas-${Date.now()}.pdf`);
        console.log('Caminho do arquivo temporário:', filePath);
        const doc = new pdfkit_1.default({ margin: 50 });
        const writeStream = fs.createWriteStream(filePath);
        doc.pipe(writeStream);
        doc
            .fontSize(18)
            .text('Presenças confirmadas', { align: 'center' })
            .moveDown(1.5);
        presencas.forEach((presenca) => {
            doc
                .fontSize(12)
                .text(`Convidado: ${presenca.nome}`)
                .text(`E-mail: ${presenca.email || '---'}`)
                .text(`Telefone: ${this.formatTelefone(presenca.telefone) || '---'}`)
                .text(`Quantidade de pessoas: ${presenca.qt_pessoas}`)
                .text(`Data da Confirmação: ${presenca.createdAt.toLocaleDateString('pt-BR')}`)
                .moveDown(1);
        });
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
    formatTelefone(telefone) {
        if (!telefone)
            return '---';
        const cleaned = telefone.replace(/\D/g, '');
        if (cleaned.length === 11) {
            return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
        }
        else if (cleaned.length === 10) {
            return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
        }
        return telefone;
    }
};
exports.PdfService = PdfService;
exports.PdfService = PdfService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [presenca_service_1.PresencaService])
], PdfService);
//# sourceMappingURL=pdf.service.js.map