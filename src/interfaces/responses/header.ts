export interface NasaHeader {
  "access-control-allow-headers": string;
  "access-control-allow-methods": string;
  "access-control-allow-origin": string;
  "strict-transport-security": string;
  "access-control-max-age": number;
  "x-content-type-options": string;
  "x-ratelimit-remaining": number;
  "x-ratelimit-limit": number;
  "x-vcap-request-id": string;
  "content-encoding": string;
  "x-xss-protection": string;
  "x-frame-options": string;
  "content-type": string;
  "x-cache": string;
  vary: string;
  age: number;
  via: string;
  date: Date;
}
