import { Controller, Post, Body } from '@nestjs/common';
import { MicrocreditService } from './microcredit.service';
import { IMicrocredit } from './interfaces/microcredit.interface';

@Controller('microcredits')
export class MicrocreditController {
  constructor(private readonly microcreditService: MicrocreditService) {}

  @Post()
  async applyForMicrocredit(@Body() createMicrocreditDto: { userId: string; amount: number }): Promise<IMicrocredit> {
    const { userId, amount } = createMicrocreditDto;
    return this.microcreditService.applyForMicrocredit(userId, amount);
  }
}
