import styled from "styled-components/native";

import { TextWithFont } from "components/design/common/styled";

export const DetailsView = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 1%;
  margin-right: 5%;
  margin-left: 5%;
  margin-top: 1%;
`;

export const Detail = styled(TextWithFont)`
  display: flex;
`;

export const CardsView = styled.ScrollView`
  border-radius: 30px;
  padding-top: 3%;
  margin-top: 5%;
`;
