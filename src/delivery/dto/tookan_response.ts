export class TookanResponse {
    message: string;
    status: number;
    data: TookanOk;
}

export class TookanOk {
    job_id: number;
    job_hash: string;
    customer_name: string;
    customer_address: string;
    job_token: string
    tracking_link: string;
    order_id: string;
    deliveryOrderId: string;
    pickupAddressNotFound: string;
    deliveryAddressNotFound: string;
  }