import { useInjection } from "hooks/useInjection";
import { Color } from "types/color";

const PictureOfTheDayScreenIcon = ({
  color,
}: {
  color: Color;
}): JSX.Element => {
  const { navbarDesignService } = useInjection();

  const PictureOfTheDayIcon = navbarDesignService.getPictureOfTheDayIcon();

  return <PictureOfTheDayIcon color={color} />;
};

export default PictureOfTheDayScreenIcon;
