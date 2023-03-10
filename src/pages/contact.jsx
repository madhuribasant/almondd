import { HeadComponent } from "@/components/core/Head";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import {MdLocationPin} from 'react-icons/md'

const Contact = () => {
  return (
    <>
      <HeadComponent title="Contact" />

      <section className="flex md:flex-row flex-col justify-center   md:gap-4 gap-14 h-[80vh] ">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="glass p-3">
            <BsFillTelephoneFill />
          </div>
          <a href="tel:+91 9931113032" className="outline_btn md:hidden visible text-sm p-2">+91-9931113032</a>
          <h1 className="outline_btn  text-sm p-2 md:opacity-100 opacity-0">+91-9931113032</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="glass p-3">
            <AiFillMail />
          </div>
          <a href="mailto:madhuridesign01@gmail.com" className="outline_btn md:hidden visible text-sm p-2">madhuridesign01@gmail.com</a>
          <h1 className="outline_btn md:opacity-100 opacity-0 text-sm p-2">madhuridesign01@gmail.com</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="glass p-3">
            <MdLocationPin/>
          </div>
          <h1 className="outline_btn text-sm p-2 capitalize">Paschim vihar, new delhi</h1>
        </div>
      </section>
    </>
  );
};

export default Contact;
