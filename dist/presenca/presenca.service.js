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
exports.PresencaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PresencaService = class PresencaService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll() {
        const presencas = this.prismaService.presenca.findMany({
            where: {
                status: true,
            },
            orderBy: { id: 'asc' },
        });
        return presencas;
    }
    async create(createRecadoDto) {
        const convidado = await this.prismaService.presenca.findFirst({
            where: { nome: createRecadoDto.nome },
        });
        if (convidado && convidado.status === true) {
            throw new common_1.BadRequestException(`O convidado ${convidado.nome} já confirmou sua presenca.`);
        }
        const createPresenca = this.prismaService.presenca.create({
            data: createRecadoDto,
        });
        return createPresenca;
    }
};
exports.PresencaService = PresencaService;
exports.PresencaService = PresencaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PresencaService);
//# sourceMappingURL=presenca.service.js.map