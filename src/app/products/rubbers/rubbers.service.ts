import { Injectable } from '@angular/core';
import {ProductService} from "../product.service";
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class RubbersService implements ProductService {

  constructor() { }

  getAll(): Observable<ProductModel[]> {
    return undefined;
  }
}
