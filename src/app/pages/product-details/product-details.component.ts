import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/@types';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(products => {
      this.products = products;
    });
  }

  goToProductDetail(productId: string) {
    this.router.navigate(['/product', productId]);
  }
}
