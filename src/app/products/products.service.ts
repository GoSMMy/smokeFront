import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly categoriesUrl;

  constructor(private http: HttpClient) {
    this.categoriesUrl = '/api/categories';
  }

  getCategories(): Observable<any> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }
}
