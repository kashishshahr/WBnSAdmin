export class orderClass{
  constructor(
    public order_id:number,
    public order_amount:number,
    public order_date:Date,
    public order_status:string
  ){}
}
