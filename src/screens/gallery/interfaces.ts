import { MediaType } from "constants/mediaTypes";

export interface MediaData {
  mediaType: MediaType;
  description?: string;
  title: string;
  date: string;
  url: string;
}

export interface PageStatus {
  image: number;
  video: number;
  audio: number;
}

export interface UseMediaLoad {
  handleGalleryMediaFetch: () => void;
  isGalleryMediaFetching: boolean;
}

export interface UseGallery {
  handleMediaTypeChange: (selectedMediaType: string) => void;
  getMediaTypeLabelColor: (mediaType: string) => string;
  isSelectedMediaType: (mediaType: string) => boolean;
  handleSearchChange: (text: string) => void;
  selectedMediaType: string;
  handleSearch: () => void;
  searchKeyword: string;
}

export interface UseImages {
  handleLoadMoreImages: (imageNumber: number) => void;
  handleNasaImagesFetch: () => void;
  imagesData: Array<MediaData>;
  canDisplayImages: boolean;
  isFetching: boolean;
}

export interface UseAudios {
  handleLoadMoreAudios: (audioNumber: number) => void;
  handleNasaAudiosFetch: () => void;
  audiosData: Array<MediaData>;
  canDisplayAudios: boolean;
  isFetching: boolean;
}

export interface UseVideos {
  handleLoadMoreVideos: (videoNumber: number) => void;
  handleNasaVideosFetch: () => void;
  videosData: Array<MediaData>;
  canDisplayVideos: boolean;
  isFetching: boolean;
}

export interface UseMediaDetails {
  handleOpenAsteroidDetails: (details: MediaData) => void;
  handleCloseAsteroidDetails: () => void;
  canDisplayMediaDetails: boolean;
  mediaDetails: MediaData;
}
