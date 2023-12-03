// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem('user')) {
      // El usuario esta verificado, permitir el acceso
      return true;
    } else {
      // El usuario no esta verificado, redirigir a la página de inicio de sesion
      this.router.navigate(['/login']);
      return false;
    }
  }
}
