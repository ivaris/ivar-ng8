import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = [];
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.data = data;
      console.log("products loaded");
      console.log(this.data);
    })
  }

}
