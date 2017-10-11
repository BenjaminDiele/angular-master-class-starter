import { ContactsService } from 'app/services/contacts.service';
import { Observable } from 'rxjs/Rx';
import { Error } from 'tslint/lib/error';
import { Injectable } from '@angular/core';
import { Contact } from 'app/models/contact';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ContactsResolver implements Resolve<Contact> {

    constructor(private contactsService: ContactsService) { }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact> {
        let id = route.params['id'];

        return this.contactsService.getContact(id);
    }
}