import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  async dashboard(): Promise<string> {
    return 'dashboard';
  }
}
