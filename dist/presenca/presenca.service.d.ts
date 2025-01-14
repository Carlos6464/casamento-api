import { CreatePresenteDto } from './dto/create-presenca.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class PresencaService {
    private prismaService;
    constructor(prismaService: PrismaService);
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
    create(createRecadoDto: CreatePresenteDto): import(".prisma/client").Prisma.Prisma__PresencaClient<{
        id: number;
        nome: string;
        email: string;
        telefone: string;
        qt_pessoas: number;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
