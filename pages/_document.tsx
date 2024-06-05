import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />

        {/*  SEO  */}
        <meta
          name="keyword"
          content={"nestar, nestar.uz, devex mern, mern nestjs fullstack"}
        />
        <meta
          name="description"
          content={
            "Buy and sell properties anywhere anytime in South Korea. | " +
            "Pakupayte i prodavayte nedvijimost v lyuboy tochka v Yujn iy Korea v lyuboy vremya " +
            "In korean words"
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
