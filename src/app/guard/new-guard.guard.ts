import { CanActivateFn } from '@angular/router';

export const newGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
