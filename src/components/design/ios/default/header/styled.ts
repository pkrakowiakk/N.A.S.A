import styled from "styled-components/native";

import { TextWithFont } from "../../../common/styled";

export const TopSafeView = styled.View`
  background-color: ${(props) => props.theme.header.backgroundColor};
  width: 100%;
`;

export const HeaderDetailsView = styled.SafeAreaView`
  background-color: ${(props) => props.theme.header.backgroundColor};
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
`;

export const PageTitleText = styled(TextWithFont)`
  color: ${(props) => props.theme.header.titleColor};
  margin-bottom: 4%;
  font-size: 25px;
  margin-top: 2%;
`;

export const LeftIconView = styled.View`
  margin-bottom: 4%;
  margin-left: 6%;
  margin-top: 2%;
`;

export const RightIconView = styled.View`
  margin-bottom: 4%;
  margin-right: 6%;
  margin-top: 2%;
`;
