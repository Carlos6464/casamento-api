import { RecadoService } from './recado.service';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { PdfService } from './pdf.service';
import { Response } from 'express';
export declare class RecadoController {
    private readonly recadoService;
    private readonly pdfService;
    constructor(recadoService: RecadoService, pdfService: PdfService);
    create(createRecadoDto: CreateRecadoDto): import(".prisma/client").Prisma.Prisma__RecadoClient<{
        nome: string;
        recado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        nome: string;
        recado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
    }[]>;
    generateReport(res: Response): Promise<void>;
}
