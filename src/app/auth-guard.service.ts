// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { storageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private storage: storageService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.storage.getDataItem('user')) {
      // El usuario esta verificado, permitir el acceso
      return true;
    } else {
      // El usuario no esta verificado, redirigir a la página de inicio de sesion
      this.router.navigate(['/login']);
      return false;
    }
  }
}
