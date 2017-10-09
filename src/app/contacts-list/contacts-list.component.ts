import { Component, OnInit } from '@angular/core';

import { Contact } from '../models/contact';
import { CONTACT_DATA as CONTACTS } from '../data/contact-data';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts : Contact[] = CONTACTS;

  constructor(private contactsService: ContactsService)
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
