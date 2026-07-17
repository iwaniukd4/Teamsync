import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { themeDark, themeLight } from '../lib/theme';

class MyApp extends App {
  public componentDidMount() {
    // Remove the server-side injected CSS.
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={false ? themeDark : themeLight}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
