import { mockMediaData } from "./mediaDataMock";
import {
  UseMediaDetails,
  UseGallery,
  UseAudios,
  UseImages,
  UseVideos,
  MediaData,
} from "screens/gallery/interfaces";

export const mockMediaDetails: UseMediaDetails = {
  handleCloseAsteroidDetails: jest.fn(),
  handleOpenAsteroidDetails: jest.fn(),
  canDisplayMediaDetails: false,
  mediaDetails: mockMediaData,
};

export const mockGallery: UseGallery = {
  getMediaTypeLabelColor: jest.fn(),
  handleMediaTypeChange: jest.fn(),
  isSelectedMediaType: jest.fn(),
  handleSearchChange: jest.fn(),
  handleSearch: jest.fn(),
  selectedMediaType: "",
  searchKeyword: "",
};

export const mockImages: UseImages = {
  imagesData: new Array<MediaData>(),
  handleNasaImagesFetch: jest.fn(),
  handleLoadMoreImages: jest.fn(),
  canDisplayImages: false,
  isFetching: false,
};

export const mockVideos: UseVideos = {
  videosData: new Array<MediaData>(),
  handleNasaVideosFetch: jest.fn(),
  handleLoadMoreVideos: jest.fn(),
  canDisplayVideos: false,
  isFetching: false,
};

export const mockAudios: UseAudios = {
  audiosData: new Array<MediaData>(),
  handleNasaAudiosFetch: jest.fn(),
  handleLoadMoreAudios: jest.fn(),
  canDisplayAudios: false,
  isFetching: false,
};
