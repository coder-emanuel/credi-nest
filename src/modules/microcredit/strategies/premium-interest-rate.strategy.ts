import { Injectable } from '@nestjs/common';
import { InterestRateStrategy } from '../interfaces/interest-rate.strategy';
import { IUser } from 'src/modules/user/interfaces/user.interface';

@Injectable()
export class PremiumInterestRateStrategy implements InterestRateStrategy {
  calculate(user: IUser): number {
    return user.creditScore > 700 ? 3 : 10;
  }
}
