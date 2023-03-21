import Head from 'next/head'

export const HeadComponent = ({title ="Home"}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="almondd,almond,Creative agency,Web development,Branding,UI/UX design,Social media ads,Online marketing,Digital strategy,Graphic design,Content creation,SEO optimization,E-commerce solutions,Mobile app development,Video production,Creative solutions,Innovative design,Marketing campaigns,Visual identity,Brand identity,Brand awareness,Digital branding">
        <meta name="description" content="Almondd is a creative agency that offers a range of services to help businesses build their brand and reach their target audience. Our services include web development, branding, UI/UX design, social media ads, and more. With our expertise and experience, we can help you create a strong online presence that stands out from the competition. Trust Almondd to provide the creative solutions you need to grow your business." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
};



