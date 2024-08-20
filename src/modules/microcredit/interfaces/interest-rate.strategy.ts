import { IUser } from "src/modules/user/interfaces/user.interface";

export interface InterestRateStrategy {
    calculate(user: IUser): number;
  }
  