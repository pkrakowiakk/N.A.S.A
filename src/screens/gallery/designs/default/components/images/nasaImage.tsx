import { MediaData } from "screens/gallery/interfaces";
import { NasaImageView } from "./styled";

const NasaImage = ({
  imageDetails,
}: {
  imageDetails: MediaData;
}): JSX.Element => {
  return (
    <NasaImageView
      source={imageDetails.url}
      contentFit="cover"
      transition={1000}
    />
  );
};

export default NasaImage;
