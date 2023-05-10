import { UseMediaLoad } from "../interfaces";
import { useEffect, useState } from "react";
import { useImages } from "./useImages";
import { useVideos } from "./useVideos";
import { useAudios } from "./useAudios";

export const useMediaLoad = (): UseMediaLoad => {
  const { isFetching: areImagesLoading, handleNasaImagesFetch } = useImages();
  const { isFetching: areAudiosLoading, handleNasaAudiosFetch } = useAudios();
  const { isFetching: areVideoLoading, handleNasaVideosFetch } = useVideos();

  const [isGalleryMediaFetching, setIsGalleryMediaFetching] =
    useState<boolean>(false);

  const handleGalleryMediaFetch = (): void => {
    setIsGalleryMediaFetching(true);
    handleNasaImagesFetch();
    handleNasaVideosFetch();
    handleNasaAudiosFetch();
  };

  useEffect(() => {
    if (areImagesLoading || areVideoLoading || areAudiosLoading) {
      return;
    }

    setIsGalleryMediaFetching(false);
  }, [areImagesLoading, areVideoLoading, areAudiosLoading]);

  return {
    handleGalleryMediaFetch,
    isGalleryMediaFetching,
  };
};
