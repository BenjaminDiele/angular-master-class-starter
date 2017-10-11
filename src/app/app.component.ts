import { EventBusService } from './services/eventbus.service';
import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent implements OnInit {
  
  title: string;

    constructor(private eventBusService : EventBusService) { }

    public ngOnInit(): void {
        this.eventBusService.observe('appTitleChange')
          .subscribe(title => this.title = title);
    }
}