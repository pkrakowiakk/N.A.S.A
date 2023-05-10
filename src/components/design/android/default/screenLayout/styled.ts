import styled from "styled-components/native";

export const BackgroundView = styled.SafeAreaView`
  background-color: ${(props) => props.theme.screen.backgroundColor};
  height: 100%;
`;

export const MainView = styled.View`
  background-color: "transparent";
  justify-content: flex-start;
  position: absolute;
  margin: 4% 2% 4% 2%;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;
