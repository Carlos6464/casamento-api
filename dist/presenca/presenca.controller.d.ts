import { PresencaService } from './presenca.service';
import { CreatePresenteDto } from '../presenca/dto/create-presenca.dto';
import { PdfService } from './pdf.service';
import { Response } from 'express';
export declare class PresencaController {
    private readonly presencaService;
    private readonly pdfService;
    constructor(presencaService: PresencaService, pdfService: PdfService);
    create(CreatePresenteDto: CreatePresenteDto): import(".prisma/client").Prisma.Prisma__PresencaClient<{
        nome: string;
        email: string;
        telefone: string;
        qt_pessoas: number;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Promise<{
        nome: string;
        email: string;
        telefone: string;
        qt_pessoas: number;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
    generateReport(res: Response): Promise<void>;
}
