import { Module } from '@nestjs/common';
import { ProductsItemsModule } from './products-items/products-items.module';

@Module({
  imports: [ProductsItemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
