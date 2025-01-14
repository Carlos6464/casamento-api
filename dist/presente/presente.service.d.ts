import { UpdatePresenteDto } from './dto/update-presente.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class PresenteService {
    private prismaService;
    constructor(prismaService: PrismaService);
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
    findAllConfirm(searchTerm?: string): Promise<{
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
    update(id: number, updatePresenteDto: UpdatePresenteDto): Promise<{
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
    findConfirmedGifts(): Promise<{
        nome: string;
        nome_user: string;
        email_user: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
