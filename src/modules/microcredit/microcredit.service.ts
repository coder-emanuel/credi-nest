import { Injectable} from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { Microcredit } from './entities/microcredit.entity';
import { CreditCalculationService } from './services/credit-calculation.service';
import { MicrocreditRegistryService } from './services/microcredit-registry.service';

@Injectable()
export class MicrocreditService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly creditCalculationService: CreditCalculationService,
    private readonly microcreditRegistryService: MicrocreditRegistryService,
  ) {}

  async applyForMicrocredit(userId: string, amount: number): Promise<Microcredit> {
    const user = await this.userRepository.findById(userId);
    const interestRate = this.creditCalculationService.calculateInterestRate(user);
    const microcredit = new Microcredit();
    microcredit.userId = userId;
    microcredit.amount = amount;
    microcredit.interestRate = interestRate;
    microcredit.status = 'PENDING';
    await this.microcreditRegistryService.saveMicrocredit(microcredit);
    return microcredit;
  }
}
