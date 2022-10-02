import { AdminService } from './admin.service';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/decorators/decorator.role';
import { Role } from 'src/enums/enum.role';

@Roles(Role.Admin)
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @Get('/dashboard')
  async dashboard(): Promise<string> {
    return this.adminService.dashboard();
  }
}
