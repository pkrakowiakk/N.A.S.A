import { NavigationContainer } from "@react-navigation/native";
import { ChildrenProp } from "interfaces/other/childrenProp";

const NavigationProvider = ({ children }: ChildrenProp): JSX.Element => (
  <NavigationContainer>{children}</NavigationContainer>
);
export default NavigationProvider;
