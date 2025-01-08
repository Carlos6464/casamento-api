import { CreateRecadoDto } from './dto/create-recado.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class RecadoService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
}
