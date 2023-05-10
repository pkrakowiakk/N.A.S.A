import { MediaType } from "constants/mediaTypes";
import { MediaDetails } from "types/media";

export interface MediaResponse {
  collection: Collection;
}

export interface Collection {
  items: Array<MediaResponseItem>;
  links: Array<CollectionLink>;
  metadata: number;
  version: string;
  href: string;
}

export interface MediaResponseItem {
  data: Array<MediaDetails>;
  links: Array<SourceUrls>;
  href: string;
}

export interface ImageDetails {
  description_508?: string;
  keywords?: Array<string>;
  album?: Array<string>;
  media_type: MediaType;
  photographer?: string;
  description?: string;
  date_created: string;
  location?: string;
  nasa_id: string;
  center: string;
  title: string;
}

export interface VideoDetails {
  keywords: Array<string>;
  media_type: MediaType;
  photographer?: string;
  date_created: string;
  description: string;
  location?: string;
  nasa_id: string;
  center: string;
  title: string;
}

export interface AudioDetails {
  description_508?: string;
  keywords?: Array<string>;
  album?: Array<string>;
  photographer?: string;
  media_type: MediaType;
  date_created: string;
  description: string;
  location?: string;
  nasa_id: string;
  center: string;
  title: string;
}

export interface SourceUrls {
  render?: string;
  href: string;
  rel: string;
}

export interface CollectionLink {
  prompt: string;
  href: string;
  rel: string;
}
