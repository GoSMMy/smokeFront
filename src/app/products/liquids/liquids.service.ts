import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductService} from "../product.service";
import {ProductModel} from "../../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class LiquidsService implements ProductService {

  private readonly liquidUrl: string;

  constructor(private http: HttpClient) {
    this.liquidUrl = '/api/products/liquids';
  }

  getAll(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.liquidUrl);
  }
}
