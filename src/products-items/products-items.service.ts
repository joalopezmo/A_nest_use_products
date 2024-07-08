import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as UuidV4 } from 'uuid';
import { CreateProductsItemDto } from './dto/create-products-item.dto';
import { ProductsItem } from './entities/products-item.entity';
import { UpdateProductsItemDto } from './dto/update-products-item.dto';
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
    return this.products;
  }

  findOne(id: string): ProductsItem {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found.`);
    }
    return product;
  }

  update(id: string, updateProductsItemDto: UpdateProductsItemDto) {
    const { id: __, name, description, price } = updateProductsItemDto;
    const product = this.findOne(id);

    product.updateWith({ name, description, price });

    return product;
  }

  remove(id: string) {
    // return `This action removes a #${id} productsItem`;
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    if (productIndex === -1) {
      throw new NotFoundException(`Product with ID ${id} not found.`);
    }
    this.products.splice(productIndex, 1);
    return id;
  }
}
