export class purchase {
  public constructor(
    public purchase_id: number,
    public quantity: number,
    public purchase_price: number,
    public purchase_date: Date,
    public fk_product_id?: number,
    public fk_supplier_id?: number,
    public supplier_name?: string,
    public supplier_mobile?: number,
    public supplier_address?: string,
    public supplier_desc?: string,
    public product_name?: string,
    public product_price?: number,
    public product_qty?: number,
    public product_mfg?: string,
    public product_desc?: Text,
    public product_img?: string
  ) { }
}
