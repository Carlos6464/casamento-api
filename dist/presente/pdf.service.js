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
const presente_service_1 = require("./presente.service");
const pdfkit_1 = require("pdfkit");
let PdfService = class PdfService {
    constructor(presenteService) {
        this.presenteService = presenteService;
    }
    async generateConfirmedGiftsReport() {
        console.log('Iniciando geração do relatório');
        const presentes = await this.presenteService.findConfirmedGifts();
        const filePath = path.join('/tmp', `presentes-confirmados-${Date.now()}.pdf`);
        console.log('Caminho do arquivo temporário:', filePath);
        const doc = new pdfkit_1.default({ margin: 50 });
        const writeStream = fs.createWriteStream(filePath);
        doc.pipe(writeStream);
        doc
            .fontSize(18)
            .text('Relatório de Presentes Confirmados', { align: 'center' })
            .moveDown(1.5);
        presentes.forEach((presente, index) => {
            doc
                .fontSize(12)
                .text(`${index + 1}. Produto: ${presente.nome}`)
                .text(`Convidado: ${presente.nome_user || '---'}`)
                .text(`E-mail: ${presente.email_user || '---'}`)
                .text(`Data da Confirmação: ${presente.updatedAt.toLocaleDateString('pt-BR')}`)
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
};
exports.PdfService = PdfService;
exports.PdfService = PdfService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [presente_service_1.PresenteService])
], PdfService);
//# sourceMappingURL=pdf.service.js.map