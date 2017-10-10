import {HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
  contact: Contact;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService : ContactsService,
    private http: HttpClient
  ) {
    this.contact = <Contact>{ image:'', address: {}};
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactsService.getContact(id)
    .subscribe(contact => {
      this.contact = contact
    });
  }

  public save(contact: Contact)
  {
    this.contactsService.updateContact(contact)
      .subscribe(() => this.goToDetails());
  }

  public cancel()
  {
    this.goToDetails();
  }

  private goToDetails()
  {
    this.router.navigate(['../'], {
      relativeTo: this.route
    });
  }

}
