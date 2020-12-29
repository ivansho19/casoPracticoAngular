import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {

  user: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    const user = JSON.parse(localStorage.getItem('user'));
		if (!user) {
			this.router.navigateByUrl('/login');
			return;
		}

   
    return true;

  }

}


