import styled from "styled-components/native";

import { TextWithFont } from "components/design/common/styled";

export const GalleryView = styled.View`
  border-radius: 30px;
  height: 100%;
`;

export const MediaTypeView = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 5%;
`;

export const MediaTypeText = styled(TextWithFont)`
  font-size: 20px;
`;

export const SearchView = styled.View`
  margin: 1% 4% 1% 4%;
`;

export const SliderView = styled.View`
  margin-bottom: 5%;
  margin-top: 5%;
`;

export const SearchIconSpacing = styled.TouchableOpacity`
  margin-right: 15px;
`;
