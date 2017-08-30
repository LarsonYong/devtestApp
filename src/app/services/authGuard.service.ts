/**
 * Created by jack on 8/5/17.
 */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { isloggedin } from './authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(
        private router: Router,
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): boolean | Observable<boolean> | Promise<boolean> {
        if (isloggedin()) {
            return true;
        }
        this.router.navigate(['/login']);
        return;
            }

}
