/* eslint-disable prettier/prettier */
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsEmail,
  IsInt,
  Min,
} from 'class-validator';

export class UpdatePresencaDto {
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
