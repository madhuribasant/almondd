import { HeadComponent } from "@/components/core/Head";
import { AiFillInstagram} from "react-icons/ai";
import Link from "next/link";
import Image from "next/legacy/image";
import React from "react";
// import AliceCarousel from "react-alice-carousel";
// import "../../node_modules/react-alice-carousel/lib/alice-carousel.css";

import {GrLinkedinOption} from 'react-icons/gr'
import { BsFacebook } from "react-icons/bs";

export default function Home() {
  const services = [
    "S&M posts",
    "Video editing",
    "logo design",
    "S&M ads",
    "Branding",
    "Web development",
    "UI/UX",
    "Print work",
  ];

  return (
    <>
      <HeadComponent />
      <section className=" flex justify-center items-center md:h-96 h-64 md:mt-0 mt-14">
        <div className=" flex flex-col gap-2 items-center">
          <h1 className="text-center">Affordable design solutions</h1>
          <h4 className="text-sm md:text-lg font-light ">
            {" "}
           for businesses of all sizes and industries.
          </h4>
          <div className="mt-10  flex md:flex-row flex-col justify-center gap-6">
            <Link
              className="glass flex justify-center hover:-translate-y-1 transition-all ease-in-out"
              href="https://madhuribasant.netlify.app/"
              target="_blank"
            >
              Our Portfolio
            </Link>

            <Link
              href="/discuss"
              className="glass hover:-translate-y-1 transition-all ease-in-out "
            >
              Discuss Project
            </Link>
          </div>
        </div>
      </section>

      <section className="h-[100vh] gap-3 flex flex-col justify-center items-center  ">
        <h1>What we offer?</h1>
        <p className=" md:w-1/2 w-full px-6">
          At our creative agency, we pride ourselves on delivering high-quality,
          innovative solutions that meet our clients unique needs and exceed
          their expectations.
        </p>

        <div className="md:w-1/2 w-full mt-5 flex flex-wrap gap-3 justify-center items-center">
          {services.map((service, index) => {
            return (
              <div className="outline_btn capitalize" key={index}>
                {service}
              </div>
            );
          })}
        </div>
      </section>

      <section className="flex flex-col justify-center md:h-screen md:mt-0 -mt-20 h-[25rem]">
        <h1 className="md:w-1/2 mx-auto w-full ">
          Our designers previously worked for
        </h1>

        <div className="grid md:grid-cols-5 grid-cols-2 mt-20">
          <div className="relative min-w-full h-20">
            <Image
              src="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678437581/almondd/brands/Cartoon_Network_logo_icrgr2.webp"
              blurDataURL="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678437581/almondd/brands/Cartoon_Network_logo_icrgr2.webp"
              placeholder="blur"
              alt="cartoon network"
              objectFit="contain"
              layout="fill"
            />
          </div>
          <div className="relative min-w-full h-24 grid place-items-center">
            <Image
              src="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678437555/almondd/brands/pogo-11_tyavil.png"
              blurDataURL="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678437555/almondd/brands/pogo-11_tyavil.png"
              placeholder="blur"
              objectFit="contain"
              layout="fill"
              alt="pogo"
            />
          </div>
          <div className="relative min-w-full h-20">
            <Image
              src="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678437593/almondd/brands/logo_2_t6nyfu.png"
              blurDataURL="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678437593/almondd/brands/logo_2_t6nyfu.png"
              placeholder="blur"
              objectFit="contain"
              layout="fill"
              alt="cartoon network"
            />
          </div>
          <div className="relative min-w-full h-32 md:grid place-items-center  hidden">
            <Image
              src="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678437701/almondd/brands/park_fudpgt.png"
              blurDataURL="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678437701/almondd/brands/park_fudpgt.png"
              placeholder="blur"
              objectFit="cover"
              layout="fill"
              alt="cartoon network"
            />
          </div>
          <div className="relative min-w-full h-24">
            <Image
              src="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678437555/almondd/brands/tata_tep8ys.png"
              blurDataURL="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678437555/almondd/brands/tata_tep8ys.png"
              placeholder="blur"
              objectFit="contain"
              layout="fill"
              alt="cartoon network"
            />
          </div>
        </div>
      </section>

      <section className="mt-20 md:mt-0 md:h-screen h-full flex flex-col justify-center ">
        <h1>Our Recent Work</h1>
        <div className="grid md:grid-cols-4 grid-cols-1 px-3 gap-3 mt-20">
          <div className="relative min-w-full h-60">
            <Image
              src="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678432116/almondd/brands/Copy_of_logo_presentation_iv3jcc.png"
              layout="fill"
              objectFit="contain"
              alt="image"
            />
          </div>
          <div className="relative min-w-full h-60">
            <Image
              src="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678432170/almondd/brands/34_f3yxtl.png"
              layout="fill"
              objectFit="contain"
              alt="image"
            />
          </div>
          <div className="relative min-w-full grid md:place-items-center ">
            <video
              src="https://res.cloudinary.com/dzwx9lrsh/video/upload/v1678448179/almondd/brands/Untitled_design_26_ytvfp4.mp4"
              autoPlay
              muted
              controls
              loop
            ></video>
          </div>

          <div className="relative min-w-full h-60  grid md:place-items-center">
            <video
              src="https://res.cloudinary.com/dzwx9lrsh/video/upload/v1678448153/almondd/brands/Untitled_design_25_t5fa33.mp4"
              autoPlay
              muted
              controls
              loop
            ></video>
          </div>
        </div>
      </section>
      <section className="mt-10 h-screen flex flex-col justify-center ">
        <h1 className="px-3">Brands We’ve Worked With</h1>
        <div className="grid md:grid-cols-6 grid-cols-2 gap-3 mt-20">
          <div className="relative min-w-full h-32">
            <Image
              src="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678437555/almondd/brands/hyphen_qslvuk.png"
              blurDataURL="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678437555/almondd/brands/hyphen_qslvuk.png"
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              alt="image"
            />
          </div>
          <div className="relative min-w-full h-32">
            <Image
              src="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678437555/almondd/brands/emrald-logo_zfmvc1.png"
              blurDataURL="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678437555/almondd/brands/emrald-logo_zfmvc1.png"
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              alt="image"
            />
          </div>
          <div className="relative min-w-full h-32">
            <Image
              src="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678437555/almondd/brands/duty-white-logo_h8llwn.png"
              blurDataURL="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678437555/almondd/brands/duty-white-logo_h8llwn.png"
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              alt="image"
            />
          </div>
          <div className="relative min-w-full h-32">
            <Image
              src="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678448922/almondd/brands/etos_tde0qu.png"
              blurDataURL="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678448922/almondd/brands/etos_tde0qu.png"
              placeholder="blur"
              layout="fill"
              objectFit="contain"
              alt="image"
            />
          </div>
          <div className="relative min-w-full h-32">
            <Image
              src="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678449056/almondd/brands/madhuri.basant007_gmail.com_1_dz0yok.png"
              blurDataURL="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678449056/almondd/brands/madhuri.basant007_gmail.com_1_dz0yok.png"
              placeholder="blur"
              layout="fill"
              objectFit="contain"
              alt="image"
            />
          </div>
          <div className="relative min-w-full h-32">
            <Image
              src="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678459270/almondd/brands/indian-pizzirialogo-160x80-2-_1_bnmhod.png"
              blurDataURL="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678459270/almondd/brands/indian-pizzirialogo-160x80-2-_1_bnmhod.png"
              placeholder="blur"
              layout="fill"
              objectFit="contain"
              alt="image"
            />
          </div>
        </div>
      </section>

      <footer className="p-4 flex justify-end items-center gap-4 bg-black/50 text-white/60 backdrop-blur-xl ">
        <Link href="https://www.facebook.com/almonddagency" target="_blank">
          <BsFacebook fontSize="1.2rem" />
        </Link>
        <Link href="https://instagram.com/almondd_agency?igshid=YmMyMTA2M2Y=" target="_blank">
          <AiFillInstagram fontSize="1.2rem" />
        </Link>
        <Link href="https://www.linkedin.com/company/almondd/">
          <GrLinkedinOption fontSize="1.2rem" />
        </Link>
      </footer>
    </>
  );
}
