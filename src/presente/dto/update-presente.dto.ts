/* eslint-disable prettier/prettier */
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsDecimal,
  IsEmail,
} from 'class-validator';

export class UpdatePresenteDto {
  @IsOptional()
  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  link: string;

  @IsOptional()
  @IsDecimal()
  preco: string;

  @IsString()
  nome_user?: string;

  @IsEmail()
  email_user?: string;

  @IsOptional()
  @IsBoolean()
  status?: boolean;
}
