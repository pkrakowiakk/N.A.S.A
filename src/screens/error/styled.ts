import styled from "styled-components/native";

import { Button } from "native-base";

export const ErrorView = styled.View`
  justify-content: center;
  height: 100%;
`;

export const RetryButton = styled(Button)`
  background-color: ${({ theme }) => theme.buttonColor};
  border-radius: 15px;
  margin-top: 35px;
  width: 50%;
`;
