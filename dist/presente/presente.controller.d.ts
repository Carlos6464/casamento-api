import { PresenteService } from './presente.service';
import { PdfService } from './pdf.service';
import { UpdatePresenteDto } from './dto/update-presente.dto';
import { Response } from 'express';
export declare class PresenteController {
    private readonly presenteService;
    private readonly pdfService;
    constructor(presenteService: PresenteService, pdfService: PdfService);
    findAll(): Promise<{
        id: number;
        nome: string;
        link: string;
        preco: import("@prisma/client/runtime/library").Decimal;
        nome_user: string | null;
        email_user: string | null;
        cpf_user: string | null;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    update(id: string, updatePresenteDto: UpdatePresenteDto): Promise<{
        id: number;
        nome: string;
        link: string;
        preco: import("@prisma/client/runtime/library").Decimal;
        nome_user: string | null;
        email_user: string | null;
        cpf_user: string | null;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    generateReport(res: Response): Promise<void>;
    findAllConfirm(search?: string): Promise<{
        id: number;
        nome: string;
        link: string;
        preco: import("@prisma/client/runtime/library").Decimal;
        nome_user: string | null;
        email_user: string | null;
        cpf_user: string | null;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
