import { useInjection } from "hooks/useInjection";
import { Color } from "types/color";

const AsteroidsScreenIcon = ({ color }: { color: Color }): JSX.Element => {
  const { navbarDesignService } = useInjection();

  const AsteroidsIcon = navbarDesignService.getAsteroidsIcon();

  return <AsteroidsIcon color={color} />;
};

export default AsteroidsScreenIcon;
