import styled from "styled-components/native";

import { TextWithFont } from "components/design/common/styled";
import { Image } from "expo-image";

export const ImagesSliderView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ImageCarouselElement = styled.View`
  height: 95%;
`;

export const NasaImageView = styled(Image)`
  border-radius: 30px;
  width: 100%;
  height: 85%;
`;

export const ImageTitle = styled(TextWithFont)`
  text-align: center;
  margin: 2%;
`;

export const SpinnerSpacing = styled.View`
  justify-content: center;
  padding-bottom: 30%;
  height: 100%;
  width: 100%;
`;
