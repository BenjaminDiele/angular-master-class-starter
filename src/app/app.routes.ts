import { Routes } from '@angular/router';

import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

export const APP_ROUTES : Routes =
[
    { path: 'detail/:id', component: ContactDetailComponent},
    { path: 'list', component: ContactsListComponent},
    { path: '', redirectTo: 'list', pathMatch: 'full' }
]