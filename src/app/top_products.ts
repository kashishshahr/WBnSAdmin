export class TopProducts {
  public constructor(
    public fk_product_id: number,
    public product_name: string,
    public total: number
  ) {

  }
}
