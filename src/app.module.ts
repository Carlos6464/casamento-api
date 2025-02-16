/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PresenteModule } from './presente/presente.module';
import { RecadoModule } from './recado/recado.module';
import { PresencaModule } from './presenca/presenca.module';

@Module({
  imports: [PresenteModule, RecadoModule, PresencaModule],
  controllers: [AppController],
  providers: [AppService],
})
// eslint-disable-next-line prettier/prettier
export class AppModule {}
