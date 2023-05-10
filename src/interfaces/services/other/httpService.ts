export interface HttpService {
  get(url: string): Promise<any>;
}
