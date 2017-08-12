import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Member } from './member.model';

@Injectable()
export class MemberService {

  private baseUrl: string = '/api';

  constructor(private http: Http) {
  }

  findAll(): Observable<Member[]> {
    return this.http.get(`${this.baseUrl}/member`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}