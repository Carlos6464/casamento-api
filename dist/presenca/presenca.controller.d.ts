import { PresencaService } from './presenca.service';
import { CreatePresenteDto } from '../presenca/dto/create-presenca.dto';
import { PdfService } from './pdf.service';
import { Response } from 'express';
export declare class PresencaController {
    private readonly presencaService;
    private readonly pdfService;
    constructor(presencaService: PresencaService, pdfService: PdfService);
    create(CreatePresenteDto: CreatePresenteDto): Promise<{
        id: number;
        nome: string;
        email: string;
        telefone: string;
        qt_pessoas: number;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        nome: string;
        email: string;
        telefone: string;
        qt_pessoas: number;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    generateReport(res: Response): Promise<void>;
}
