import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, RequestMethod} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Agent} from "../../objects/agent";

@Injectable()
export class AgentService {

  private apiUrl = 'http://server-nodejs.dev/get-list';  // URL to web API

  constructor (private http: Http) {
  }

  getListAgent(): Observable<Agent[]> {
    return this.http.get(this.apiUrl)
        .map(this.extractData)
        .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);

    return Observable.throw(errMsg);
  }

}
