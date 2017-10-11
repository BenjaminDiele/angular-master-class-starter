import { Component, OnInit } from '@angular/core';

import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  private contacts$ : Observable<Array<Contact>>;
  private searchTerm$ : Subject<string> = new Subject<string>();

  constructor(private contactsService: ContactsService)
  {
    this.contacts$ = contactsService.getContacts();
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
