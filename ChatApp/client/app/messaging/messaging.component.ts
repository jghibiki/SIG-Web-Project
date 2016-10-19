import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { Message } from './message';
import { MessageService } from './message.service';

@Component({
    selector: 'messaging',
    templateUrl: 'app/messaging/messaging.component.html',
    providers: [MessageService]
})
export class MessagingComponent implements OnInit {

    private user: string = "";
    private message: string = "";

    private messages: Message[] = [];

    constructor(private messageService: MessageService) { }

    getMessages(): void {
        this.messageService.getMessages()
            .then( messages => this.messages = messages);
    }

    sendMessage(): void {
        this.messageService.sendMessage(this.user, this.message)
            .then( () => {
                this.message = "";
                this.getMessages(); 
            });
    }

    ngOnInit(): void {
        this.getMessages();

        setInterval(() => this.getMessages(), 5000);
    }
}
