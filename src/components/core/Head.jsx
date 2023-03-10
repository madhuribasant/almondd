import Head from 'next/head'

export const HeadComponent = ({title ="Home"}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>


    </>
  );
};



