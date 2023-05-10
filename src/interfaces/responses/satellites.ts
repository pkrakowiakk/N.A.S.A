export interface SatellitesResponse {
  member: Array<SatelliteDetails>;
  parameters: Parameters;
  totalItems: number;
  "@context": string;
  "@type": string;
  "@id": string;
  view: View;
}

export interface SatelliteDetails {
  satelliteId: number;
  "@type": string;
  "@id": string;
  line2: string;
  line1: string;
  name: string;
  date: Date;
}

interface Parameters {
  "page-size": number;
  "sort-dir": string;
  search: string;
  sort: string;
  page: number;
}

interface View {
  "@type": string;
  "@id": string;
  first: string;
  next: string;
  last: string;
}
