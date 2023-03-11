import { HeadComponent } from "@/components/core/Head";

const About = () => {
  return (
    <>
      <HeadComponent title="About" />
      <section className="2xl:h-screen h-full flex flex-col justify-center items-center gap-4 py-6 ">
        <h1 className="capitalize 2xl:mb-20 2xl:-mt-44 font-bold">About us</h1>
        <p className="md:w-1/2 w-full px-4">
          At our creative agency, we specialize in providing a wide range of
          creative services to help businesses and organizations enhance their
          brand identity, engage with their audience, and ultimately achieve
          their goals. Our services include:
        </p>
        <ul className="text-white/60 font-light md:w-1/2 w-full 2xl:mt-5  px-4 2xl:text-lg text-sm text-center list-disc ">
          <li className="py-2 text-justify">
            <strong className="text-white">Branding: &nbsp; </strong> We offer
            comprehensive branding solutions, from developing brand strategies
            to creating logos and visual identities that communicate your
            brands personality and values.
          </li>
          <li className="py-2 text-justify">
            <strong className="text-white">Graphic Design: &nbsp;</strong> Our talented
            designers create stunning visuals for both print and digital media,
            including brochures, business cards, websites, social media
            graphics, and more.
          </li>
          <li className="py-2 text-justify">
            <strong className="text-white">Web Development: &nbsp; </strong> We build
            responsive websites that are visually engaging, user-friendly, and
            optimized for search engines, ensuring that your brand stands out
            online.
          </li>
          <li className="py-2 text-justify">
            <strong className="text-white">Video Production: &nbsp;</strong>
            Our team of experts creates compelling video content, from corporate~
            videos to promotional videos, animated explainer videos, and more.
            Social Media Management: We help businesses connect with their
            audience and build their online presence through effective social
            media marketing, including content creation, social media
            advertising, and community management. Content Marketing: We create
            engaging and informative content that connects with your audience
            and drives results, including blog posts, infographics, whitepapers,
            and more.
          </li>
          <li className="py-2 text-justify">
            <strong className="text-white">Social Media Management: &nbsp;</strong>
            We help businesses connect with their audience and build their online presence through effective social media marketing, including content creation, social media advertising, and community management.
          </li>
          <li className="py-2 text-justify">
            <strong className="text-white">Content Marketing: &nbsp;</strong>
             We create engaging and informative content that connects with your audience and drives results, including blog posts, infographics, whitepapers, and more.
          </li>
        </ul>

  

      </section>
    </>
  );
};

export default About;
