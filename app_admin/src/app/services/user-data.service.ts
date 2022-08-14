import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthResponse } from '../models/authresponse';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private http: Http
  ) { }

  private apiBaseUrl = 'http://localhost:3000/api/';

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response.json() as AuthResponse)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone terribly wrong', error);
    return Promise.reject(error.message || error);
  }
}
