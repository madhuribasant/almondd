import Image from "next/image";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <main
        className={` h-full text-white/80 font-poppins bg-img bg-no-repeat bg-fixed  bg-cover`}
      >
        {/* <Image /> */}
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default Layout;
