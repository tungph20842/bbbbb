import { Component } from '@angular/core';
import { IProduct } from 'src/@types';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss'],
})
export class ProductListPageComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService
      .getAllProduct()
      .subscribe((data) => (this.products = data));
  }

  handleRemove(id: string) {
    const resultConfirm = confirm('Xóa chứ !!');
    if (resultConfirm) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.productService
          .getAllProduct()
          .subscribe((data) => (this.products = data));
      });
    }
  }
}
