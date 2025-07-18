import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class StudentService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/student`);
  }

  createStudent(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/student`, data);
  }

  updateStudent(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/student/edit/${id}`, data);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/student/delete/${id}`);
  }
}
