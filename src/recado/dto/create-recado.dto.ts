/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateRecadoDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  nome: string;

  @IsEmail({}, { message: 'O e-mail deve ser válido.' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório.' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'O recado é obrigatório.' })
  @MaxLength(200, { message: 'O recado não pode ter mais de 200 caracteres.' })
  recado: string;
}
