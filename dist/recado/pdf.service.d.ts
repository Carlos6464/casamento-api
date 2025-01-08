import { RecadoService } from './recado.service';
export declare class PdfService {
    private readonly recadoService;
    constructor(recadoService: RecadoService);
    generateConfirmedGiftsReport(): Promise<string>;
}
