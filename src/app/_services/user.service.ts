import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
 
import { AuthenticationService } from '../_services/authentication.service';
import { User } from '../_models/user';

@Injectable()
export class UserService {
    users: Observable<User[]>;
    responseData: Observable<ResponseData>;
    response: Observable<any[]>;
    user: Observable<User>;
    
    constructor( private http: Http, private authenticationService: AuthenticationService ) { }

    getUsers(): Observable<User> {
            // add authentication header with jwt token
            let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
            let options = new RequestOptions({ headers: headers });

            //get user from api
            // return this.http.get('/api/users', options).map((response: Response) => response.json());
             this.user = this.http.get('/api/users', options)
                .map(res => this.extractData<User>(res));

             return this.user
        }

    private extractData<T>(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.text() ? res.json() : null;
        return <T>(body || []);
    }
}

export class ResponseData {
    body: any[];
    count: string;
  }

