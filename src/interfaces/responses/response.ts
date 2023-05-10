import { NasaHeader } from "./header";

export interface Response<T> {
  statusText: string;
  headers: NasaHeader;
  request: object;
  status: number;
  config: string;
  data: T;
}
