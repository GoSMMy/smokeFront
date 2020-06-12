import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly loginUrl: string;

  constructor(private http: HttpClient) {
    this.loginUrl = '/api/user/login';
  }
}
