import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/svg" />
          <meta property="og:title" content="SUBWAY INFORMATION." />
          <meta property="og:image" content="/img_meta.png" />
          <meta
            property="og:description"
            content="🚦 SUBWAY ARRIVAL INFORMATION."
          />
          <meta property="og:url" content="https://subwayinfo.netlify.app" />
          <meta name="description" content="🚦 SUBWAY ARRIVAL INFORMATION." />
          <meta name="keywords" content="SUBWAY ARRIVAL INFORMATION." />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap"
            rel="preload"
            as="style"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <div id="_modal"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
