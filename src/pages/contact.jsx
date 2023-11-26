import { HeadComponent } from "@/components/core/Head";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import {MdLocationPin} from 'react-icons/md'

const Contact = () => {
  return (
    <>
      <HeadComponent title="Contact" />
      <section className="flex md:flex-row flex-col justify-center mb-15">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3500.5049694988793!2d77.12592668012603!3d28.67453748240114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s7JWVM4FH%2BRH9!5e0!3m2!1sen!2sin!4v1678474326205!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        
      </section>
      <section className="flex md:flex-row flex-col justify-center  md:gap-44 gap-14 h-[75vh] ">
      <div className="flex flex-col justify-center items-center gap-2">
          <div className="glass 2xl:p-5 p-3">
            <BsFillTelephoneFill className="2xl:text-8xl" />
          </div>
          <a href="tel:+91 9155121559" className=" md:hidden visible text-sm p-2">+91-9155121559</a>
          <h1 className="  text-lg p-2 md:opacity-100 opacity-0">+91-9155121559</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="glass 2xl:p-5 p-3">
            <AiFillMail className="2xl:text-8xl" />
          </div>
          <a href="mailto:info@almondd.co.in" className=" md:hidden visible text-lg p-2">info@almondd.co.in</a>
          <h1 className=" md:opacity-100 opacity-0 text-lg p-2">info@almondd.co.in</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="glass 2xl:p-5 p-3">
            <MdLocationPin className="2xl:text-8xl " />
          </div>
          <h1 className=" text-lg p-2 capitalize">Paschim vihar, new delhi</h1>
         </div>
      </section>
    </>
  );
};

export default Contact;
