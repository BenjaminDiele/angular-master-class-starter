import { ContactsListComponent } from './contacts-list/contacts-list.component';

export const APP_ROUTES = 
[
    { path: 'list', component: ContactsListComponent},
    { path: '', redirectTo: '/list', pathMatch: 'full' }
]