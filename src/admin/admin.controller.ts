import { JwtGuard } from './../auth/guard/guard.jwt';
import { AdminService } from './admin.service';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from '.././auth/decorators/decorator.role';
import { Role } from '.././enums/enum.role';
import { GetUser } from 'src/auth/decorators/decorator.index';

@UseGuards(JwtGuard)
@Roles(Role.Admin)
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @Get('/dashboard')
  async dashboard(@GetUser('id') userId: number): Promise<string> {
    return this.adminService.dashboard(userId);
  }
}
