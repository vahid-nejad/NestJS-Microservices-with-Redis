import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  @MessagePattern('get_product')
  getProduct(id: number) {
    return { id, name: 'Laptop', price: 1000 };
  }

  @EventPattern('order.created')
  async updateStock(order: { id: number; productId: number }) {
    console.log('Checking stock for the product: ', order.productId);

    console.log('Stock Updated');
  }
}
