
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { MicrocreditModule } from './modules/microcredit/microcredit.module';
import { User } from './modules/user/entities/user.entity';
import { Microcredit } from './modules/microcredit/entities/microcredit.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Cambia esto según tu base de datos
      host: '127.0.0.1',
      port: 3306, // Cambia esto según el puerto de tu base de datos
      username: 'root',
      password: '1234',
      database: 'fintech',
      entities: [User, Microcredit],
      synchronize: true, // En producción, se recomienda desactivar esto
    }),
    UserModule,
    MicrocreditModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
