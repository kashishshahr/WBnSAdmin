export class orderDeliveryClass {
  public constructor(
    public order_delivery_id: number,
    public fk_order_id: number,
    public fk_employee_id: number,
    public delivery_date: Date,
    public comment: string,
    public order_amount?: number,
    public order_date?: Date,
    public order_status?: string,
    public employee_name?: string,
    public employee_gender?: string,
    public employee_mobileno?: number,
    public employee_salary?: number,
    public customer_name?: string,
    public customer_mobileno?: number,
    public customer_address?: string,
  ) { }
}
