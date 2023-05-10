export interface HeaderDesignService {
  getHeaderDesign(): ({ title }: { title: string | undefined }) => JSX.Element;
  getLightThemeIcon(): () => JSX.Element;
  getDarkThemeIcon(): () => JSX.Element;
  getAboutIcon(): () => JSX.Element;
}
