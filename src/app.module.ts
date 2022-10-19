import { RecoverModule } from './recover/recover.module';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './database/dtb.index';
import { UserModule } from './user/user.module';
import { ProductModule } from './products/product.module';
import { StatisticModule } from './statistic/statistic.module';

@Module({
  imports: [
    AuthModule,
    RecoverModule,
    UserModule,
    ProductModule,
    CartModule,
    StatisticModule,

    //Connect to SQL
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1029384756',
      database: 'donghanh',
      entities,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
