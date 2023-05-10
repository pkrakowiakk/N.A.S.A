import axios, { AxiosInstance } from "axios";

export class HttpServiceImplementation {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create();
  }

  get(url: string): Promise<any> {
    return this.api.get(url);
  }
}
