import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACT_DATA as CONTACTS } from './data/contact-data';

@Injectable()
export class ContactsService {

  getContacts() : Array<Contact>
  {
    return CONTACTS;
  }
}
