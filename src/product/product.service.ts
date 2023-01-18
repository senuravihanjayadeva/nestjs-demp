import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from '../schemas/product.schema';
import createProduct from './dto/createProduct.dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

    async create(createProduct: createProduct): Promise<Product> {
      const createdCat = new this.productModel(createProduct);
      return createdCat.save();
    }
  
    async findAll(): Promise<Product[]> {
      return this.productModel.find().exec();
    }
}
