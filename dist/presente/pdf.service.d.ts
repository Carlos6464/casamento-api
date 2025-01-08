import { PresenteService } from './presente.service';
export declare class PdfService {
    private readonly presenteService;
    constructor(presenteService: PresenteService);
    generateConfirmedGiftsReport(): Promise<string>;
}
