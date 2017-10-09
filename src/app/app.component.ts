import { OnInit, Component } from '@angular/core';

import { Contact } from './models/contact';
import { CONTACT_DATA as CONTACTS } from './data/contact-data';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent implements OnInit {
  contactsService: ContactsService;
  contacts : Contact[] = CONTACTS;

  constructor(contactsService: ContactsService)
  {
    this.contactsService = contactsService;
  }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

  trackByContactId(index, contact: Contact)
  {
    return contact.id;
  }
}