// react
import React from "react";

// next
import Head from "next/head";

// material
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// import
import "../styles/globals.scss";
import PropTypes from "prop-types";
import customMuiTheme from "theme/theme";

function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>Blog - Nextjs Static Template</title>
        <meta name="description" content="Nextjs Static Blog Created By ASK" />
        <meta
          name="keywords"
          content="nextjs, material-ui, portfolio, porto, static page"
        />
        <meta name="author" content="ASK" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={customMuiTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
