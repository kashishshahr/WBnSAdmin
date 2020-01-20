export class orderDetailClass{
  public constructor(
   public order_detail_id:number,
   public fk_order_id:number,
   public fk_product_id:number,
   public quantity:number
   ){
   }
 }


