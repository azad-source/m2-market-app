export class RoutePath {
  /** Product list path */
  public static readonly products = "/products";

  /** Product detail page path */
  public static readonly product = `${RoutePath.products}/:productId`;
}
