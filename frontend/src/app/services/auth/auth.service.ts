import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  loginUser(data: { email: string; password: string }) {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  registerUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
}
