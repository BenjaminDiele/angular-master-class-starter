import { Component, OnInit } from '@angular/core';

import { Contact } from '../models/contact';
import { ContactsService } from 'app/services/contacts.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import { EventBusService } from 'app/services/eventbus.service';


@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  private contacts$ : Observable<Array<Contact>>;
  private searchTerm$ : Subject<string> = new Subject<string>();

  constructor(
    private contactsService: ContactsService,
    eventBusService: EventBusService
  ) {
    this.contacts$ = contactsService.getContacts();

    eventBusService.emit('appTitleChange', 'Contacts');
  }
  
  ngOnInit(): void {
    this.searchTerm$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(x => x);
  }

  trackByContactId(index, contact: Contact)
  {
    return contact.id;
  }

  search(term: string)
  {
    this.contacts$ = this.contactsService.search(term);
  }

}
