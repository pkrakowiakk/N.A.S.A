import styled from "styled-components/native";

import { Shadow } from "react-native-shadow-2";
import { Box, Center } from "native-base";

export const BoxShadow = styled(Shadow)`
  border-radius: 30px;
`;

export const CenterView = styled(Center)`
  margin-bottom: 2%;
  display: flex;
  height: 120px;
  width: 90%;
`;

export const BoxView = styled(Box)`
  border-radius: 25px;
  flex-direction: row;
  padding-right: 5%;
  padding-left: 5%;
  display: flex;
  height: 100%;
  width: 100%;
`;

export const IconView = styled.View`
  justify-content: center;
  flex: 1;
`;

export const DetailsView = styled.View`
  justify-content: center;
  margin-right: 2%;
  margin-left: 2%;
  flex: 4.5;
`;

export const ExploreView = styled.View`
  justify-content: center;
  align-items: flex-end;
  flex: 1;
`;
