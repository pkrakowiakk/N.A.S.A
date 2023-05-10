import { ChildrenProp } from "../../other/childrenProp";

export interface ScreenLayoutDesign {
  design: ({ children }: ChildrenProp) => JSX.Element;
}
