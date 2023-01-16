import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments';
import { Parcel } from '../models/parcel';
import { Search } from '../models/search';
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

  create(parcel: Parcel): Observable<ParcelsResponse> {
    return this.http.post<ParcelsResponse>(this.#baseUrl, parcel);
  }

  search(search: Search): Observable<ParcelsResponse> {
    return this.http.post<ParcelsResponse>(`${this.#baseUrl}/search`, search);
  }
}
