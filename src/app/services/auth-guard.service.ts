import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthentificationService} from './authentification.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthentificationService) { }

  canActivate(){
    return this.auth.isAuthenticated();
  }
}
