import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {console.log('a-2')}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}