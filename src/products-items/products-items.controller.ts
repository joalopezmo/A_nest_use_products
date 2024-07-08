import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Patch,
} from '@nestjs/common';
import { ProductsItemsService } from './products-items.service';
import { CreateProductsItemDto } from './dto/create-products-item.dto';
import { UpdateProductsItemDto } from './dto/update-products-item.dto';
// import { UpdateProductsItemDto } from './dto/update-products-item.dto';

@Controller('products')
export class ProductsItemsController {
  constructor(private readonly productsItemsService: ProductsItemsService) {}

  @Post()
  create(@Body() createProductsItemDto: CreateProductsItemDto) {
    return this.productsItemsService.create(createProductsItemDto);
    // return createProductsItemDto;
  }

  @Get()
  findAll() {
    return this.productsItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsItemsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateProductsItemDto: UpdateProductsItemDto,
  ) {
    return this.productsItemsService.update(id, updateProductsItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsItemsService.remove(id);
  }
}
