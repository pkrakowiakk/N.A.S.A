import { ScreenLayoutDesignService } from "interfaces/services/design/screenLayoutDesignService";
import { ScreenLayoutDesign } from "interfaces/design/screen/screenLayoutDesign";
import { ChildrenProp } from "interfaces/other/childrenProp";

export class ScreenLayoutDesignServiceImplementation
  implements ScreenLayoutDesignService
{
  private readonly screenLayoutDesign: ScreenLayoutDesign;

  constructor(deviceBasedScreenDesign: ScreenLayoutDesign) {
    this.screenLayoutDesign = deviceBasedScreenDesign;
  }

  getScreenLayoutDesign(): ({ children }: ChildrenProp) => JSX.Element {
    return this.screenLayoutDesign.design;
  }
}
