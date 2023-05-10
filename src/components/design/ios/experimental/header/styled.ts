import styled from "styled-components/native";

import { TextWithFont } from "../../../common/styled";

export const TopSafeView = styled.View`
  background-color: ${(props) => props.theme.header.backgroundColor};
  position: absolute;
  margin-right: 2%;
  margin-left: 2%;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export const HeaderDetailsView = styled.SafeAreaView`
  background-color: ${(props) => props.theme.header.backgroundColor};
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  border-radius: 30px;
  position: absolute;
  margin-right: 2%;
  margin-left: 2%;
  height: 100px;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export const PageTitleText = styled(TextWithFont)`
  color: ${(props) => props.theme.header.titleColor};
  margin-bottom: 3%;
  margin-left: 6%;
`;

export const IconsView = styled.View`
  justify-content: space-evenly;
  flex-direction: row;
  margin-bottom: 4%;
  margin-right: 5%;
  gap: 15px;
`;
