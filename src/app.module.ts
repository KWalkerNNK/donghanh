import { MailModule } from './mail/mail.module';
import { CartModule } from './cart/cart.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './database/dtb.index';
import { UserModule } from './user/user.module';
import { ProductModule } from './products/product.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ProductModule,
    CartModule,
    MailModule,
    AdminModule,

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
