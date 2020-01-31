export class orderDeliveryClass{
  public constructor(
   public order_delivery_id:number,
   public fk_order_id:number,
   public fk_employee_id:number,
   public delivery_date:string,
   public comment:string,
   ){
   }
 }
