export class RoutePath {
  /** Base url */
  public static readonly baseUrl = "/";

  /** Product list path */
  public static readonly products = "/products";

  /** Product details page path */
  public static readonly product = `${RoutePath.products}/:productId`;

  /** Get product details page path by id */
  public static getProductDetailsPath(id: string) {
    return `${RoutePath.products}/${id}`;
  }
}
