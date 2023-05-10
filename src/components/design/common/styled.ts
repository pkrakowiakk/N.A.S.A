import styled from "styled-components/native";

import { Text } from "native-base";

export const TextWithFont = styled(Text)`
  color: ${(props) => props.theme.textColor};
  font-family: "Montserrat_500Medium";
`;

export const ButtonTextWithFont = styled(Text)`
  color: ${(props) => props.theme.buttonTextColor};
  font-family: "Montserrat_500Medium";
`;
