import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Message} from './message';

@Injectable()
export class MessageService {

    private apiUrl = "http://10.134.189.235:8000/message";
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getMessages(): Promise<Message[]> {
        return this.http.get(this.apiUrl)
                    .toPromise()
                    .then(response => response.json() as Message[])
                    .catch(this.handleError);
    }

    sendMessage(username: string, message: string): Promise<void> {
        var payload = {
            username: username,
            message: message
        }
        return this.http.post(this.apiUrl, JSON.stringify(payload), {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
