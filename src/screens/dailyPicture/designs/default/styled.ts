import styled from "styled-components/native";

import { TextWithFont } from "components/design/common/styled";
import { Image } from "expo-image";

export const ImageTitle = styled(TextWithFont)`
  margin-bottom: 15px;
  text-align: center;
`;

export const ImageDescription = styled(TextWithFont)`
  text-align: justify;
  margin-bottom: 15px;
  padding-top: 10px;
  margin: 10px;
`;

export const DetailsView = styled.ScrollView`
  border-radius: 30px;
`;

export const ImageTitleView = styled.View`
  justify-content: center;
  width: 100%;
  flex: 1.25;
`;

export const ImageContainer = styled.View`
  height: 100%;
  width: 100%;
  flex: 8;
`;

export const StyledImage = styled(Image)`
  border-radius: 30px;
  height: 100%;
  width: 100%;
`;
