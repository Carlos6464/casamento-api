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
exports.RecadoController = void 0;
const common_1 = require("@nestjs/common");
const recado_service_1 = require("./recado.service");
const create_recado_dto_1 = require("./dto/create-recado.dto");
const pdf_service_1 = require("./pdf.service");
let RecadoController = class RecadoController {
    constructor(recadoService, pdfService) {
        this.recadoService = recadoService;
        this.pdfService = pdfService;
    }
    create(createRecadoDto) {
        return this.recadoService.create(createRecadoDto);
    }
    findAll() {
        return this.recadoService.findAll();
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
exports.RecadoController = RecadoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_recado_dto_1.CreateRecadoDto]),
    __metadata("design:returntype", void 0)
], RecadoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecadoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('relatorio'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecadoController.prototype, "generateReport", null);
exports.RecadoController = RecadoController = __decorate([
    (0, common_1.Controller)('recado'),
    __metadata("design:paramtypes", [recado_service_1.RecadoService,
        pdf_service_1.PdfService])
], RecadoController);
//# sourceMappingURL=recado.controller.js.map