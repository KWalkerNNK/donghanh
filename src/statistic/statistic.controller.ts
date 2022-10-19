import { ConfirmedDto } from './dto/dto.confirmed';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Role } from '../enums/enum.role';
import { Roles } from '../auth/decorators/decorator.role';
import { JwtGuard } from '../auth/guard/guard.index';
import { StatisticService } from './statistic.service';

@UseGuards(JwtGuard)
@Roles(Role.Admin)
@Controller('statistic')
export class StatisticController {
  constructor(private readonly statisticService: StatisticService) {}

  @Get('cart')
  async cartSearch(@Query('id', ParseIntPipe) id: number): Promise<{}> {
    return await this.statisticService.cartSearch(id);
  }

  @Delete('delete-all')
  async deleteAllCarts(): Promise<{}> {
    return this.statisticService.deleteAllCarts();
  }

  @Delete(':id')
  async deleteCartById(@Param('id', ParseIntPipe) id: number) {
    return this.statisticService.deleteCartById(id);
  }

  @Get()
  async getStatistic(): Promise<{}> {
    return this.statisticService.getStatistic();
  }

  @Patch(':id')
  async cartConfirmation(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: ConfirmedDto,
  ): Promise<{}> {
    return this.statisticService.cartConfirmation(id, dto);
  }
}
