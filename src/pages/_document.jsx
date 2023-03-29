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
    
     <script dangerouslySetInnerHTML={{__html: ` (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3428508,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')`}} />
    
      </Head>
      <body className=" bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
