export class orderDetailClass {
  public constructor(
    public order_detail_id: number,
    public fk_order_id: number,
    public fk_product_id: number,
    public quantity: number,
    public order_amount?: number,
    public order_date?: string,
    public order_status?: string,
    public fk_customer_id?: number,
    public customer_name?: string,
    public customer_mobileno?: number,
    public customer_address?: string,
    public product_name?: string,
    public product_price?: number,
    public product_qty?: number,
    public product_mfg?: string,
    public product_desc?: Text,
    public product_img?: string,
    public order_delivery_id?: number,
    public fk_employee_id?: number,
    public delivery_date?: Date,
    public comment?: string,
    public employee_name?: string,
    public employee_gender?: string,
    public employee_mobileno?: number,
    public employee_salary?: number
  ) { }
}


