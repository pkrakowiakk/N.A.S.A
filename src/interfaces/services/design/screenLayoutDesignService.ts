import { ChildrenProp } from "../../other/childrenProp";

export interface ScreenLayoutDesignService {
  getScreenLayoutDesign(): ({ children }: ChildrenProp) => JSX.Element;
}
