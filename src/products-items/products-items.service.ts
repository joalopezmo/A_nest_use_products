import { Injectable } from '@nestjs/common';
import { v4 as UuidV4 } from 'uuid';
import { CreateProductsItemDto } from './dto/create-products-item.dto';
import { ProductsItem } from './entities/products-item.entity';
// import { UpdateProductsItemDto } from './dto/update-products-item.dto';

@Injectable()
export class ProductsItemsService {
  private products: ProductsItem[] = [];

  create(createProductsItemDto: CreateProductsItemDto) {
    const { name, description, price } = createProductsItemDto;
    const newProduct = new ProductsItem(UuidV4(), name, description, price);
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return `This action returns all productsItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productsItem`;
  }

  // update(id: number, updateProductsItemDto: UpdateProductsItemDto) {
  //   return `This action updates a #${id} productsItem`;
  // }

  remove(id: number) {
    return `This action removes a #${id} productsItem`;
  }
}
