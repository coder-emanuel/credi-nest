import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { IUser } from './interfaces/user.interface';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findById(id: string): Promise<IUser> {
    const user = await this.userRepository.findById(id);
    return this.mapToUserInterface(user);
  }

  private mapToUserInterface(user: User): IUser {
    return {
      id: user.id,
      name: user.name,
      creditScore: user.creditScore,
      financialHistory: user.financialHistory
    };
  }
}
