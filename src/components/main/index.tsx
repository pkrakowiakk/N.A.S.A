import NoConnection from "screens/noConnection";
import Navbar from "components/navbar";
import About from "./components/about";

import { useNetwork } from "hooks/useNetwork";
import { useModal } from "hooks/useModal";
import { Modal } from "native-base";

const Main = (): JSX.Element => {
  const { canDisplayAboutModal, handleCloseAboutModal } = useModal();
  const { isInternetConnection } = useNetwork();

  if (!isInternetConnection) {
    return <NoConnection />;
  }

  return (
    <>
      <Navbar />
      <Modal
        onClose={handleCloseAboutModal}
        isOpen={canDisplayAboutModal}
        animationPreset="slide"
        size="xl"
      >
        <About />
      </Modal>
    </>
  );
};

export default Main;
