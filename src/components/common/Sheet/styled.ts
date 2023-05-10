import { TextWithFont } from "components/design/common/styled";
import styled from "styled-components/native";

export const TitleView = styled.View`
  text-align: justify;
  margin-bottom: 5px;
`;

export const ContentView = styled.ScrollView`
  border-radius: 30px;
  margin: 10px;
`;

export const ContentText = styled(TextWithFont)`
  text-align: justify;
  padding-top: 5px;
  margin: 10px;
`;
