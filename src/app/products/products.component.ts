import {Component, OnInit} from '@angular/core';
import {RubbersService} from "./rubbers/rubbers.service";
import {ProductService} from "./product.service";
import {LiquidsService} from "./liquids/liquids.service";
import {ProductModel} from "../models/product.model";
import {Category} from "../models/category";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  private servicesDictionary: { [type: string]: ProductService } = {};
  private categories: Category[];

  constructor(private rubbersService: RubbersService,
              private liquidsService: LiquidsService) {
    this.servicesDictionary['Резинка'] = this.rubbersService;
    this.servicesDictionary['Жижка'] = this.liquidsService;
  }

  ngOnInit(): void {
  }

  public getProductByCategory(category: string) {
    this.servicesDictionary[category].getAll().subscribe((response: ProductModel[]) => console.log(response));
  }
}
