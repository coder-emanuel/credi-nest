import { Module } from "@nestjs/common";
import { StandardInterestRateStrategy } from "./standard-interest-rate.strategy";
import { PremiumInterestRateStrategy } from "./premium-interest-rate.strategy";
import { CreditCalculationService } from "../services/credit-calculation.service";

@Module({
    providers: [
        StandardInterestRateStrategy,
        PremiumInterestRateStrategy,
        {
            provide: 'InterestRateStrategy',
            useClass: StandardInterestRateStrategy,
        },
        CreditCalculationService
    ],

    exports: [
        'InterestRateStrategy',
        CreditCalculationService,
        StandardInterestRateStrategy,
        PremiumInterestRateStrategy,
    ]
})
export class strategiesModule{}