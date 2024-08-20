import { Injectable } from '@nestjs/common';
import { Microcredit } from '../entities/microcredit.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MicrocreditRegistryService {
  constructor(
    @InjectRepository(Microcredit)
    private readonly microcreditRepository: Repository<Microcredit>,
  ) {}

  async saveMicrocredit(microcredit: Microcredit): Promise<void> {
    await this.microcreditRepository.save(microcredit);
  }
}
