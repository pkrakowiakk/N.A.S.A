import ScreenLayout from "components/design/common/screenLayout";

import { useInjection } from "hooks/useInjection";

const GalleryScreen = (): JSX.Element => {
  const { screensDesignService } = useInjection();

  const Gallery = screensDesignService.getGalleryScreenDesign();

  return (
    <ScreenLayout>
      <Gallery />
    </ScreenLayout>
  );
};

export default GalleryScreen;
