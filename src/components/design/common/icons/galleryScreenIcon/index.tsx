import { useInjection } from "hooks/useInjection";
import { Color } from "types/color";

const GalleryScreenIcon = ({ color }: { color: Color }): JSX.Element => {
  const { navbarDesignService } = useInjection();

  const GalleryIcon = navbarDesignService.getGalleryIcon();

  return <GalleryIcon color={color} />;
};

export default GalleryScreenIcon;
