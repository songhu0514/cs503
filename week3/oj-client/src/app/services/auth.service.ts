// app/auth.service.ts

import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  // Configure Auth0
  clientId = 'JWzeB7Xo6CCeHeLCeMBwY39BM3xSGFyi';
  domain = 'songhu.auth0.com'
  lock = new Auth0Lock(this.clientId, this.domain, {});

  constructor() {
  }

  public login(): Promise<Object> {
    return new Promise((resolve, reject) => {
      // Call the show method to display the widget.
      this.lock.show((error: string, profile: Object, id_token: string) => {
        if (error) {
          reject(error);
        } else {
          localStorage.setItem('profile', JSON.stringify(profile));
          localStorage.setItem('id_token', id_token);
          resolve(profile);
        }
      });
    })
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }

  public getProfile(): Object {
    return JSON.parse(localStorage.getItem('profile'));
  }

  public resetPassword() {

  }


}
