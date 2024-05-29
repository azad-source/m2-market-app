export class RoutePath {
  /** Base url */
  public static readonly baseUrl = "/";

  /** Currency list path */
  public static readonly currencies = "/currencies";

  /** Currency details page path */
  public static readonly currency = `${RoutePath.currencies}/:currencyId`;

  /** Get currency details page path by id */
  public static getCurrencyDetailsPath(id: string) {
    return `${RoutePath.currencies}/${id}`;
  }
}
