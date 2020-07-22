import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
  providers: [NgbCarouselConfig]
})
export class PreviewComponent implements OnInit {

  @Input() product: any[];
  productImages = [];
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    this.productImages = this.product.map(productVariant => {
      let productImage = {
        colorDescription : "",
        image:""
      };
      //console.log(productVariant.colorDescription);
      productImage.colorDescription = productVariant.colorDescription;
      productImage.image = "https://images2.nike.net/is/image/DPILS/" + productVariant.id + "-PV?fmt=jpeg&resMode=sharp2&wid=160&hei=400&cb=123";
      return productImage;
    });
  }

}
