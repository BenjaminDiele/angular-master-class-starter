import { AboutComponent } from './about/about.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { Routes } from '@angular/router';

import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactsDetailViewComponent } from 'app/contacts-detail-view/contacts-detail-view.component';
import { ContactsResolver } from 'app/shared/contacts.resolver';

export const APP_ROUTES: Routes =
    [
        {
            path: '', component: ContactsDashboardComponent, children: [
                { path: '', redirectTo: 'detail/0', pathMatch: 'full' },
                {
                    path: 'detail/:id',
                    component: ContactsDetailViewComponent,
                    resolve: {
                        contact: ContactsResolver
                    }
                },
                {
                    path: 'detail/:id/edit',
                    component: ContactsEditorComponent,
                    resolve: {
                        contact: ContactsResolver
                    },
                    canDeactivate: ['ConfirmNavigationGuard']
                }
            ]
        },
        { path: 'about', component: AboutComponent },
        { path: '**', redirectTo: 'list' }
    ]