import { Controller, Get, Post, Body } from '@nestjs/common';
import { Product } from 'src/schemas/product.schema';
import { ProductService } from './product.service';
import CreateProductDto from './dto/createProduct.dto';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) {}

    @Post()
    create(@Body() CreateProductDto: CreateProductDto) {
      this.productService.create(CreateProductDto)
    }
  
    @Get()
    async findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }
}
