import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsItemDto } from './create-products-item.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateProductsItemDto extends PartialType(CreateProductsItemDto) {
  @IsString()
  @IsUUID()
  @IsOptional()
  id?: string;
}

// export class UpdateProductsItemDto {}
