import * as React from 'react'
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../components/createEmotionCache";
import Head from 'next/head'
import theme from "../components/theme";

const clientSideEmotionCache = createEmotionCache()

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Cool kids' library</title>
        <meta name="viewpoint" content={"initial-scale=1, width=device-width"} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
