import styled from "styled-components/native";

import { Box, Button } from "native-base";

export const Spacing = styled(Box)`
  margin-bottom: 5%;
  margin-top: 5%;
  width: 100%;
`;

export const SearchButton = styled(Button)`
  border-radius: 15px;
  background-color: ${({ theme }) => theme.buttonColor};
`;
