import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Microcredit } from './entities/microcredit.entity';
import { UserModule } from '../user/user.module'; // Importar UserModule
import { CreditCalculationService } from './services/credit-calculation.service';
import { MicrocreditRegistryService } from './services/microcredit-registry.service';
import { MicrocreditService } from './microcredit.service';
import { MicrocreditController } from './microcredit.controller';
import { strategiesModule } from './strategies/strategies.module';

@Module({
  imports: [TypeOrmModule.forFeature([Microcredit]), UserModule, strategiesModule], // Importar UserModule
  providers: [
    CreditCalculationService,
    MicrocreditRegistryService,
    MicrocreditService,
  ],
  controllers: [MicrocreditController],
})
export class MicrocreditModule {}
