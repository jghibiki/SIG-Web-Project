import { Component } from '@angular/core';

declare var io: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
})
export class AppComponent { 
    socket: any  = null; 
    tweets: any = [];
    max_tweets: number = 10;

    constructor(){
        this.socket = io('http://localhost:8000');
        this.socket.on('tweet', (tweet: any) => {
            this.tweets.push(tweet);
            if(this.tweets.length > this.max_tweets){
                this.tweets.shift();
            }
        });
    }
}
