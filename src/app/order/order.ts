import { orderDeliveryClass } from '../orderdelivery/orderdelivery';
import { orderDetailClass } from '../orderdetail/orderdetail';

export class orderClass {
  constructor(
    public order_id: number,
    public order_amount: number,
    public order_date: Date,
    public order_status: string,
    public customer_name?: string,
    public customer_mobileno?: number,
    public customer_address?: string,
    public fk_customer_id?: number,
    public fk_user_email?: string,
    // public delivery_date: Date,
    public orderdel?: orderDeliveryClass,
    public orderdet?: orderDetailClass
  ) { }
}
