import { Injectable } from '@nestjs/common';
import { InterestRateStrategy } from '../interfaces/interest-rate.strategy';
import { IUser } from 'src/modules/user/interfaces/user.interface';

@Injectable()
export class StandardInterestRateStrategy implements InterestRateStrategy {
  calculate(user: IUser): number {
    return user.creditScore > 700 ? 5 : 15;
  }
}
