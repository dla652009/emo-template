export interface Options {
  label: string;
  value: any;
}
export interface SearchMap {
  prop: string;
  label: string;
  type?: string;
  options?: Array<Options>;
}
export interface SearchData {
  [key: string]: string | number;
}
