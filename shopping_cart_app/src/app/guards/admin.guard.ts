import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { AdminService } from '../services/admin.service';

export const adminGuard: CanActivateChildFn = (childRoute, state) => {
  // return true;
  return inject(AdminService).canActivateChild();
};
