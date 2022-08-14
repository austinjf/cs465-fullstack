import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { BROWSER_STORAGE } from '../storage';
import { Trip } from '../models/trip';

@Injectable()
export class TripDataService {
  
  constructor(
    private http: Http,
    @Inject(BROWSER_STORAGE) private storage: Storage
    ) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips/`;

  public addTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#addTrip');

    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("travlr-token")}`,
    });

    return this.http
      .post(this.tripUrl, formData, { headers: headers })
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.http
      .get(this.tripUrl + tripCode)
      .toPromise()
      .then(response => response.json() as Trip)
      .catch(this.handleError);
  }

  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.http
      .get(this.tripUrl)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#updateTrip');
    console.log(formData);

    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("travlr-token")}`,
    });

    return this.http
      .put(this.tripUrl + formData.code, formData, { headers: headers })
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone terribly wrong', error);
    return Promise.reject(error.message || error);
  }
}
