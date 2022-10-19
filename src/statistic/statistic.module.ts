import { StatisticController } from './statistic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Statistic } from '../database/entity/entity.statistic';
import { StatisticService } from './statistic.service';

@Module({
  imports: [TypeOrmModule.forFeature([Statistic])],
  controllers: [StatisticController],
  providers: [StatisticService],
})
export class StatisticModule {}
