import styled from "styled-components/native";

import { TextWithFont } from "../../../common/styled";

export const TopSafeView = styled.View`
  background-color: ${(props) => props.theme.header.backgroundColor};
  width: 100%;
`;

export const HeaderView = styled.SafeAreaView`
  background-color: ${(props) => props.theme.header.backgroundColor};
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  padding-bottom: 2%;
  height: 50px;
  width: 100%;
`;

export const PageTitleText = styled(TextWithFont)`
  color: ${(props) => props.theme.header.titleColor};
  margin-left: 5%;
`;

export const IconsView = styled.View`
  justify-content: space-evenly;
  flex-direction: row;
  margin-right: 3%;
  gap: 20px;
`;
