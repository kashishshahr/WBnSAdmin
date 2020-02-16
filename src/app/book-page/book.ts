export class bookClass{
  public constructor(
   public book_id:number,
   public book_name:string,
   public book_price:number,
   public book_qty:number,
   public book_img:string,
   public book_publication:string,
   public standard:string,
   public book_description:string,
   public category_id?: number,
   public category_name?: string,
   public fk_cat_id?: number
   ){
   }
 }
