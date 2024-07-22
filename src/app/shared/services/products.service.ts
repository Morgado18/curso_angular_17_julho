import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductPayLoad } from '../interfaces/payload-product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    httpCliente = inject(HttpClient)

    getAll(){
      return this.httpCliente.get<Product[]>('api/products')
    }

    post(payload: ProductPayLoad){
      return this.httpCliente.post('api/products', payload)
    }

    put(payload: ProductPayLoad, id: string){
      return this.httpCliente.put(`api/products/${id}`, payload)
    }

}
