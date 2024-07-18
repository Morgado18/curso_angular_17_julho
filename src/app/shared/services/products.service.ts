import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    httpCliente = inject(HttpClient)

    getAll(){
      return this.httpCliente.get<Product[]>('/api/products')
    }

}
