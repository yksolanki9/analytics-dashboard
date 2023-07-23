import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardConfigService {
  ROOT_URL: string;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'https://my-json-server.typicode.com/yksolanki9/mock-api';
  }

  getConfig(): Observable<any> {
    return this.http.get(`${this.ROOT_URL}/data`);
  }
}