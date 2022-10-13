import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  async dashboard(id): Promise<string> {
    return id;
  }
}
