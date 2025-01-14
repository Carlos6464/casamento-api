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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresencaController = void 0;
const common_1 = require("@nestjs/common");
const presenca_service_1 = require("./presenca.service");
const create_presenca_dto_1 = require("../presenca/dto/create-presenca.dto");
const pdf_service_1 = require("./pdf.service");
let PresencaController = class PresencaController {
    constructor(presencaService, pdfService) {
        this.presencaService = presencaService;
        this.pdfService = pdfService;
    }
    create(CreatePresenteDto) {
        return this.presencaService.create(CreatePresenteDto);
    }
    findAll() {
        return this.presencaService.findAll();
    }
    async generateReport(res) {
        try {
            const filePath = await this.pdfService.generateConfirmedGiftsReport();
            res.download(filePath, (err) => {
                if (err) {
                    console.error('Erro ao fazer download do arquivo:', err);
                    res.status(500).send('Erro ao gerar relatório');
                }
            });
        }
        catch (error) {
            console.error('Erro ao gerar relatório:', error);
            res.status(500).send('Erro ao gerar relatório');
        }
    }
};
exports.PresencaController = PresencaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_presenca_dto_1.CreatePresenteDto]),
    __metadata("design:returntype", void 0)
], PresencaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PresencaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('relatorio'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PresencaController.prototype, "generateReport", null);
exports.PresencaController = PresencaController = __decorate([
    (0, common_1.Controller)('presenca'),
    __metadata("design:paramtypes", [presenca_service_1.PresencaService,
        pdf_service_1.PdfService])
], PresencaController);
//# sourceMappingURL=presenca.controller.js.map