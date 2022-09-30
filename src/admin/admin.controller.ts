import { AdminService } from './admin.service';
import { Controller, Get } from '@nestjs/common';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @Get('/dashboard')
  async dashboard(): Promise<string> {
    return this.adminService.dashboard();
  }
}
