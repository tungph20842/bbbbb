import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/@types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private uri = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:8080/api/products');
  }

  getProductById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>('http://localhost:8080/api/products' + id);
  }

  addProduct(data: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>('http://localhost:8080/api/products', data);
  }
  updateProduct(data: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>('http://localhost:8080/api/products' + data.id, data);
  }

  deleteProduct(id: string): Observable<IProduct> {
    return this.http.delete<IProduct>('http://localhost:8080/api/products' + id);
  }
}
