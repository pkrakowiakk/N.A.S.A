import { useTheme } from "hooks/useTheme";
import Header from "../header";

import { Tab } from "configuration/providers/navigation";
import { NavbarProps } from "interfaces/design/navbar/navbarProps";

const DefaultIosNavbar = (props: NavbarProps): JSX.Element => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: true,
        header: (props) => <Header title={props.route.name}/>,
        tabBarStyle: {
          backgroundColor: theme.navbar.backgroundColor,
          justifyContent: "space-evenly",
          borderTopColor: "transparent",
          alignItems: "center",
          position: "absolute",
          marginRight: "2%",
          borderRadius: 30,
          marginBottom: 25,
          paddingBottom: 0,
          marginLeft: "2%",
          display: "flex",
          height: 80,
        },
        ...props,
      }}
    >
      {props.children}
    </Tab.Navigator>
  );
};

export default DefaultIosNavbar;
