import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'app/models/contact';
import { ContactsService } from 'app/contacts.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  contact$ : Observable<Contact>;

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router) {
      
    }

    ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contact$ = this.contactsService.getContact(id);
  }

  navigateToEditor(contact : Contact)
  {
    this.router.navigate(['edit'], {
      relativeTo: this.route
    });
  }

  navigateToList()
  {
    this.router.navigate(['../'], {
      relativeTo: this.route
    });
  }
}
