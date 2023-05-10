import { HeaderDesignService } from "interfaces/services/design/headerDesignService";
import { HeaderDesign } from "interfaces/design/header/headerDesign";

export class HeaderDesignServiceImplementation implements HeaderDesignService {
  private readonly headerDesign: HeaderDesign;

  constructor(deviceBasedHeaderDesign: HeaderDesign) {
    this.headerDesign = deviceBasedHeaderDesign;
  }

  getHeaderDesign(): ({ title }: { title: string | undefined }) => JSX.Element {
    return this.headerDesign.design;
  }

  getLightThemeIcon(): () => JSX.Element {
    return this.headerDesign.icons.lightTheme;
  }

  getDarkThemeIcon(): () => JSX.Element {
    return this.headerDesign.icons.darkTheme;
  }

  getAboutIcon(): () => JSX.Element {
    return this.headerDesign.icons.about;
  }
}
