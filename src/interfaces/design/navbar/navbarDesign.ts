import { NavbarIcons } from "./navbarIcons";
import { NavbarProps } from "./navbarProps";

export interface NavbarDesign {
  design: (props: NavbarProps) => JSX.Element;
  icons: NavbarIcons;
}
