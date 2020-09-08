export interface ResultApi<T> {
  page: number;
  results: Array<T>;
  total_pages: number;
  total_restults: number;
}
