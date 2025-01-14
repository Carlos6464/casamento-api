/* eslint-disable prettier/prettier */
import {
  IsString,
  IsEmail,
  IsInt,
  Min,
  IsOptional,
  IsBoolean,
} from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreatePresenteDto {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  telefone: string;

  @IsInt()
  @Min(1) // Garantir que pelo menos 1 pessoa seja indicada
  qt_pessoas: number;

  @IsOptional()
  @IsBoolean()
  status?: boolean = false; // Default: false
}
