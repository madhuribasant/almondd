import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678458249/almondd/brands/favicon-1_qz5qgb.png"
          type="image/x-icon"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className=" bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
