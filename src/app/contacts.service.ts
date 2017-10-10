import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Contact } from './models/contact';
import { CONTACT_DATA as CONTACTS } from './data/contact-data';

interface ContactResponse { item : Contact }
interface ContactsResponse { items: Contact[] }


@Injectable()
export class ContactsService {
  private API_ENDPOINT = "http://localhost:4201";
  private contacts: Array<Contact>;
  
  constructor(private http : HttpClient) {
    
  }


  getContacts() : Observable<Array<Contact>>
  {
    let url = this.API_ENDPOINT + "/api/contacts";
    return this.http.get<ContactsResponse>(url)
      .map((data) => data.items)
  }

  getContact(id: string): Observable<Contact>
  {
    let params = new HttpParams();
    params.append("id", id);

    let url = this.API_ENDPOINT + "/api/contact/";
    return this.http.get<ContactResponse>(url, {
      params: params
    }).map((data) => data.item);
  }
}
