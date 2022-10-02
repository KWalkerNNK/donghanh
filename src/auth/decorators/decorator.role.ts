import { Role } from '../../enums/enum.role';
import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles-nnk';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
