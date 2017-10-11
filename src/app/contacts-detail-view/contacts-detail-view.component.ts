import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'app/models/contact';
import { ContactsService } from 'app/services/contacts.service';
import { Observable } from 'rxjs/Observable';
import { EventBusService } from 'app/services/eventbus.service';

import 'rxjs/add/operator/do';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  contact : Contact;

  constructor(
    private eventBusService: EventBusService,
    private route: ActivatedRoute,
    private router: Router) {
      
    }

    ngOnInit() {
      this.route.data
        .map(data => data['contact'])
        .subscribe(contact => {
          this.contact = contact;
          this.eventBusService.emit('appTitleChange', contact.name)
        });
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
