import { Injectable } from '@nestjs/common';
import { CreateProductsItemDto } from './dto/create-products-item.dto';
// import { UpdateProductsItemDto } from './dto/update-products-item.dto';

@Injectable()
export class ProductsItemsService {
  create(createProductsItemDto: CreateProductsItemDto) {
    return 'This action adds a new productsItem';
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
