export class purchase {
  public constructor(
    public purchase_id: number,
    public quantity: number,
    public purchase_price: number,
    public purchase_date: Date,
    public fk_product_id?: number,
    public fk_supplier_id?: number
  ) { }
}
