import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers : [MessageService]
})
export class AppComponent implements OnInit {

    constructor(private messageService: MessageService) {

    }
    ngOnInit() {}

    displayToast(event) {
      event.preventDefault();
      event.stopPropagation();
      console.log('displayToast');
      this.messageService.add({severity: 'success', summary: 'Service Message1', detail: 'Via MessageService1'});
      this.messageService.add({severity: 'error', summary: 'Service Message1', detail: 'Via MessageService2'});
      this.messageService.add({severity: 'warning', summary: 'Service Message1', detail: 'Via MessageService3'});
      this.messageService.add({severity: 'info', summary: 'Service Message1', detail: 'Via MessageService3'});

    }

}
