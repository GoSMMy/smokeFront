import {ProductModel} from "../models/product.model";
import {Observable} from "rxjs";

export interface ProductService {
  getAll(): Observable<ProductModel[]>;
}
