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
exports.PresenteService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PresenteService = class PresenteService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll() {
        const presentes = this.prismaService.presente.findMany({
            where: {
                status: false,
            },
            orderBy: { id: 'asc' },
        });
        return presentes;
    }
    async findAllConfirm(searchTerm) {
        if (!searchTerm) {
            return [];
        }
        const presentes = await this.prismaService.presente.findMany({
            where: {
                OR: [
                    {
                        nome_user: {
                            contains: searchTerm,
                            mode: 'insensitive',
                        },
                    },
                    {
                        email_user: {
                            contains: searchTerm,
                            mode: 'insensitive',
                        },
                    },
                    {
                        cpf_user: searchTerm,
                    },
                ],
            },
            orderBy: {
                id: 'asc',
            },
        });
        return presentes;
    }
    async update(id, updatePresenteDto) {
        const presenteAtual = await this.prismaService.presente.findUnique({
            where: { id },
        });
        if (presenteAtual && presenteAtual.status === true) {
            throw new common_1.BadRequestException('O presente já foi selecionado por um convidado, por favor selecione outro presente.');
        }
        updatePresenteDto.status = true;
        const presenteAtualizado = await this.prismaService.presente.update({
            data: {
                nome_user: updatePresenteDto.nome_user,
                email_user: updatePresenteDto.email_user,
                cpf_user: updatePresenteDto.cpf_user,
                status: updatePresenteDto.status,
            },
            where: {
                id: id,
            },
        });
        return presenteAtualizado;
    }
    async findConfirmedGifts() {
        return this.prismaService.presente.findMany({
            where: { status: true },
            select: {
                nome: true,
                nome_user: true,
                email_user: true,
                createdAt: true,
            },
        });
    }
};
exports.PresenteService = PresenteService;
exports.PresenteService = PresenteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PresenteService);
//# sourceMappingURL=presente.service.js.map