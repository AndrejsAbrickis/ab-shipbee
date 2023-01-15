import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments';
import { ParcelsResponse } from './parcels.response';

@Injectable({
  providedIn: 'root',
})
export class ParcelsHttpService {
  #baseUrl = `${environment.apiUrl}/parcels`;
  constructor(private http: HttpClient) {}

  get(): Observable<ParcelsResponse> {
    return this.http.get<ParcelsResponse>(this.#baseUrl);
  }
}
