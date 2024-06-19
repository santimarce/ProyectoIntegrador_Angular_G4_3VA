import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { UserService } from "./auth.service";
import { CanActivate } from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {

    constructor(private authService: UserService, private router: Router) { }

    canActivate(): boolean {
        const rol = this.authService.getUserFromLocalStorage();
        if (rol === '1') {
            // El usuario tiene el rol 'admin', permitir acceso a la ruta
            return true;
        } else {
            // El usuario no tiene el rol 'admin', redirigir a otra ruta
            this.router.navigate(['']); // Redirige a la ruta por defecto o a donde desees
            return false;
        }
    }
}
