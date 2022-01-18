import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  url: string = 'https://ekstrapoint.com/api/v2/achievement?limit=50&ids=2266,2268,2267,2059,2060,2061&language=en&country=INT';

  constructor(private http: HttpClient) {}

  getOffers() {
    return this.http.get<any>(this.url);
  }
}