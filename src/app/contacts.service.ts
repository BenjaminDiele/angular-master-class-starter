import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACT_DATA as CONTACTS } from './data/contact-data';

@Injectable()
export class ContactsService {

  private contacts: Array<Contact>;

  constructor() {
    this.contacts = CONTACTS;
  }

  getContacts() : Array<Contact>
  {
    return this.contacts;
  }

  getContact(id: string): Contact
  {
    return this.contacts.find(c => c.id.toString() === id );
  }
}
