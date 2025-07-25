import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) { }
  sendMessage(contactData: any) {
    return this.http.post(`${this.apiUrl}/api/contact/send`, contactData, {
      responseType: 'text'
    });
  }
}
