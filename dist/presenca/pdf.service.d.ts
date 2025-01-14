import { PresencaService } from './presenca.service';
export declare class PdfService {
    private readonly presncaService;
    constructor(presncaService: PresencaService);
    generateConfirmedGiftsReport(): Promise<string>;
    formatTelefone(telefone: string): string;
}
