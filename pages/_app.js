import Head from 'next/head';
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import MDXProvider from "../components/MDXProvider";
import '../styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Linkai Wu</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="I'm a high school sophomore from Maryland, and I'm a student, programmer, techie, and gamer."
        />
      </Head>
      <ChakraProvider theme={theme} resetCSS>
        <MDXProvider>
          <Component {...pageProps} />
        </MDXProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;