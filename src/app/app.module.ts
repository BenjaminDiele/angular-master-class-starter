import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactsAppComponent } from './app.component';

import { ContactsService } from './contacts.service';

@NgModule({
  declarations: [ContactsAppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  bootstrap: [ContactsAppComponent],
  providers: [
      ContactsService
  ]
})
export class ContactsModule {

}
