import { HeaderIcons } from "./headerIcons";

export interface HeaderDesign {
  design: ({ title }: { title: string | undefined }) => JSX.Element;
  icons: HeaderIcons;
}
