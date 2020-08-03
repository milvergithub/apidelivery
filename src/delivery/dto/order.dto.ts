import { ApiProperty } from '@nestjs/swagger';

export class OrderDto {

  @ApiProperty()
  id: number;

  @ApiProperty()
  parent_id: number;

  @ApiProperty()
  number: number;

  @ApiProperty()
  order_key: string;

  @ApiProperty()
  created_via: string;

  @ApiProperty()
  version: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  currency: string;

  @ApiProperty()
  date_created: string;

  @ApiProperty()
  date_created_gmt: string;

  @ApiProperty()
  date_modified: string;

  @ApiProperty()
  date_modified_gmt: string;

  @ApiProperty()
  discount_total: string;

  @ApiProperty()
  discount_tax: string;

  @ApiProperty()
  shipping_total: string;

  @ApiProperty()
  shipping_tax: string;

  @ApiProperty()
  cart_tax: string;

  @ApiProperty()
  total: string;

  @ApiProperty()
  total_tax: string;

  @ApiProperty()
  prices_include_tax: boolean;

  @ApiProperty()
  customer_id: number;

  @ApiProperty()
  customer_ip_address: string;

  @ApiProperty()
  customer_user_agent: string;

  @ApiProperty()
  customer_note: string;

  billing: Billing;

  shipping: Shipping;

  @ApiProperty()
  payment_method: string;

  @ApiProperty()
  payment_method_title: string;

  @ApiProperty()
  transaction_id: string;

  @ApiProperty()
  date_paid: string;

  @ApiProperty()
  date_paid_gmt: string;

  @ApiProperty()
  date_completed: string;

  @ApiProperty()
  date_completed_gmt: string;

  @ApiProperty()
  cart_hash: string;

  @ApiProperty()
  line_items: LineItems[];

  @ApiProperty()
  tax_lines: any[];

  shipping_lines: ShippingLine[];

  @ApiProperty()
  fee_lines: any[];

  @ApiProperty()
  coupon_lines: any[];

  @ApiProperty()
  refunds: any[];

  @ApiProperty()
  currency_symbol: string;
}

export class Billing {

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  company: string;

  @ApiProperty()
  address_1: string;

  @ApiProperty()
  address_2: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  postcode: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;
}

export class Shipping {

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  company: string;

  @ApiProperty()
  address_1: string;

  @ApiProperty()
  address_2: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  postcode: string;

  @ApiProperty()
  country: string;
}

export class ShippingLine {
  method_title: string;
  method_id: string;
}

export class LineItems {

  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  product_id: number;

  @ApiProperty()
  variation_id: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  tax_class: string;

  @ApiProperty()
  subtotal: string;

  @ApiProperty()
  subtotal_tax: string;

  @ApiProperty()
  total: string;

  @ApiProperty()
  total_tax: string;

  @ApiProperty()
  taxes: any[];

  @ApiProperty()
  meta_data: any[];

  @ApiProperty()
  sku: string;

  @ApiProperty()
  price: number;
}
