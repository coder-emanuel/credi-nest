import { Inject, Injectable } from '@nestjs/common';
import { IUser } from 'src/modules/user/interfaces/user.interface';
import { InterestRateStrategy } from '../interfaces/interest-rate.strategy';

@Injectable()
export class CreditCalculationService {
  constructor(@Inject('InterestRateStrategy') private readonly strategy: InterestRateStrategy) {}

  calculateInterestRate(user: IUser): number {
    return this.strategy.calculate(user);
  }
}
