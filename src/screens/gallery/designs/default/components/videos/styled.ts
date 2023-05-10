import styled from "styled-components/native";

import { Video } from "expo-av";

export const VideoSliderView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const VideoCarouselElement = styled.View`
  height: 95%;
`;

export const VideoShadow = styled.View`
  border-radius: 30px;
`;

export const NasaVideoView = styled(Video)`
  border-radius: 30px;
  height: 85%;
`;

export const SpinnerSpacing = styled.View`
  justify-content: center;
  padding-bottom: 30%;
  height: 100%;
  width: 100%;
`;
