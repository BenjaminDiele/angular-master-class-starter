import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACT_DATA as CONTACTS } from './data/contact-data';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent {
  title = 'Angular Master Class setup works!';
  contacts : Contact[] = CONTACTS;
}