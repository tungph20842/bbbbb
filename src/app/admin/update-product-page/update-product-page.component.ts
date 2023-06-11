import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/@types';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product-page',
  templateUrl: './update-product-page.component.html',
  styleUrls: ['./update-product-page.component.scss'],
})
export class UpdateProductPageComponent {
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      this.productService.getProductById(id as string).subscribe((data) => {
        this.productForm.patchValue(data);
      });
    });
  }

  productForm = this.formBuilder.group({
    id: [''],
    name: ['', [Validators.required]],
    avatar: ['', [Validators.required]],
    price: [0, [Validators.required]],
  });

  handleEditProduct() {
    if (this.productForm.valid) {
      const product = this.productForm.value as IProduct;
      this.productService.updateProduct(product).subscribe(() => {
        this.router.navigate(['/admin']);
      });
    }
  }
}
