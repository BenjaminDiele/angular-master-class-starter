import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  private contact: Contact;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService : ContactsService
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

}
