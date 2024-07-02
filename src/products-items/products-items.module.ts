import { Module } from '@nestjs/common';
import { ProductsItemsService } from './products-items.service';
import { ProductsItemsController } from './products-items.controller';

@Module({
  controllers: [ProductsItemsController],
  providers: [ProductsItemsService],
})
export class ProductsItemsModule {}
