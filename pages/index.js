import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import EdinaHorizontal from "../components/pages/home-horizontal";

const index = () => {
  return (
    <>
      <Seo pageTitle="Tanakhom" />
      <EdinaHorizontal />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
