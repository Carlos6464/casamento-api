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
exports.PresenteController = void 0;
const common_1 = require("@nestjs/common");
const presente_service_1 = require("./presente.service");
const pdf_service_1 = require("./pdf.service");
const update_presente_dto_1 = require("./dto/update-presente.dto");
let PresenteController = class PresenteController {
    constructor(presenteService, pdfService) {
        this.presenteService = presenteService;
        this.pdfService = pdfService;
    }
    findAll() {
        return this.presenteService.findAll();
    }
    update(id, updatePresenteDto) {
        return this.presenteService.update(+id, updatePresenteDto);
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
    async findAllConfirm(search) {
        return this.presenteService.findAllConfirm(search);
    }
};
exports.PresenteController = PresenteController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PresenteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_presente_dto_1.UpdatePresenteDto]),
    __metadata("design:returntype", void 0)
], PresenteController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('relatorio'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PresenteController.prototype, "generateReport", null);
__decorate([
    (0, common_1.Get)('confirm'),
    __param(0, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PresenteController.prototype, "findAllConfirm", null);
exports.PresenteController = PresenteController = __decorate([
    (0, common_1.Controller)('presente'),
    __metadata("design:paramtypes", [presente_service_1.PresenteService,
        pdf_service_1.PdfService])
], PresenteController);
//# sourceMappingURL=presente.controller.js.map