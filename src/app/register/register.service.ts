import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly registerUrl: string;

  constructor(private http: HttpClient) {
    this.registerUrl = '/api/user/register';
  }
}
