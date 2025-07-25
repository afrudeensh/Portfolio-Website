import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  sendMessage(contactData: any) {
    return this.http.post(`${this.apiUrl}/api/contact/send`, contactData, {
      responseType: 'text'
    });
  }
}
