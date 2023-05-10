import styled from "styled-components/native";

export const BackgroundView = styled.SafeAreaView`
  background-color: ${(props) => props.theme.screen.backgroundColor};
  height: 100%;
`;

export const MainView = styled.SafeAreaView`
  background-color: "transparent";
  justify-content: flex-start;
  margin-bottom: 115px;
  position: absolute;
  margin-top: 110px;
  margin-right: 2%;
  margin-left: 2%;
  display: flex;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;
