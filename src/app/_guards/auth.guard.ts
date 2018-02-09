import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(){
        if(localStorage.getItem('currentUser')) {
            return true;
        };

        // redirect to login page if not logged in
        this.router.navigate(['/login']);
        return false;
    }
}