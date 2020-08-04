import { Injectable, HttpService } from '@nestjs/common';
import { TookanResponse } from './dto/tookan_response';
import { AxiosResponse } from 'axios';
import { TookanRequest } from './dto/tookan_request';
import { OrderDto } from './dto/order.dto';
import { OrderStatus } from './enums/order_status';
import { TookanStatus } from './enums/tookan_status';
import { DeliveryParam } from './classes/delivery_param';
import { ShippingLineMehtod } from './enums/shipping_line_method';

@Injectable()
export class DeliveryService {
  constructor(private httpService: HttpService) {
  }

  async delivery(order: OrderDto, query: DeliveryParam): Promise<TookanResponse> {
    console.log(order.status);
    let response = new TookanResponse();
    let localShipping = true;
    if (order.shipping_lines && order.shipping_lines.length > 0) {
      console.log(order.shipping_lines[0].method_title);
      localShipping = order.shipping_lines[0].method_title == ShippingLineMehtod.LOCAL_PICK_UP;
    }
    if (order.status == OrderStatus.COMPLETED && !localShipping) {
      const date = new Date();
      date.setMinutes((date.getMinutes() - (240 - Number(query.complete_before))));
      const deliveryTime = date.toISOString();
      const requestTookan = new TookanRequest();
      requestTookan.api_key = query.key;
      requestTookan.order_id = `${order.id}`;
      requestTookan.job_description = this.buildDescription(order);
      requestTookan.customer_email = order.billing.email;
      requestTookan.customer_username = `${order.billing.first_name} ${order.billing.last_name}`;
      requestTookan.customer_phone = order.billing.phone;
      requestTookan.customer_address = `${order.id}`;
      requestTookan.latitude = order.billing.address_2;
      requestTookan.longitude = order.billing.company;
      requestTookan.job_delivery_datetime = deliveryTime;
      console.log(requestTookan.job_delivery_datetime);
      
      requestTookan.team_id = query.team;
      requestTookan.auto_assignment = query.auto_assign;
      requestTookan.has_pickup = "0";
      requestTookan.has_delivery = "1";
      requestTookan.layout_type = "0";
      requestTookan.tracking_link = query.tracking_link;
      requestTookan.timezone = "240";
      requestTookan.geofence = query.geofence;
      await this.deliveryTookan(requestTookan).then(value => {
          response = value.data;
        }).catch(reason => {
          response.status = 500;
          response.message = reason.message;
      });
      console.log(response);
      if (response.status != TookanStatus.ACTION_COMPLETE) {
        throw new Error(response.message);
      }
      return response;
    } else {
      return response;
    }
  }

  private buildDescription(order: OrderDto) {
    const items = order.line_items.map(value => `${value.quantity}     ${value.name}     ${value.subtotal}`);
    let rows = '';
    items.forEach((value, index) => {
      if (index == 0) {
        rows = rows + value + '\n';
      } else {
        rows = rows + '\t'+ value + '\n';
      }
    });
    return `
    CLIENTE: ${order.billing.first_name} ${order.billing.last_name}
    TELEFONO CONTANTO: ${order.billing.phone} 
    DIRECCION: ${order.billing.address_1}, ${order.billing.city} 
    PRODUCTOS A ENTREGAR:
        ${rows}
    COSTO DE ENVIO Bs. ${order.shipping_total}
    TOTAL Bs. ${order.total}`;

  }

  deliveryTookan(tookanRequest: TookanRequest): Promise<AxiosResponse<TookanResponse>> {
    return this.httpService.post('https://api.tookanapp.com/v2/create_task', tookanRequest).toPromise();
  }
}
