import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  //backend service to check user is authenticated
  constructor (private _backendService: BackendService, private _router: Router) { } //what if user not signed in move it to smoe other route
  async canActivate(): Promise<boolean> {
      const authenticatedUser = await this._backendService.getUser();
      const authenticated = !!authenticatedUser;
      if (!authenticated) {   //user not authenticated take him back to login page
        this._router.navigate(['/login']);
      }
      return authenticated;
    }
}