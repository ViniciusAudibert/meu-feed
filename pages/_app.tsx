import { useMemo } from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'
import { Layout } from 'src/components/layout'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { initialState, RootContext } from 'src/configs/context'
import { RouteState } from 'src/configs/routes'
import { theme } from 'src/styles/theme'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const routeState = useMemo(() => RouteState[router.pathname] || initialState, [router.pathname])

  return (
    <>
      <Head>
        <title>{routeState.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RootContext.Provider value={{ routeState }}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>

          <CssBaseline />
        </ThemeProvider>
      </RootContext.Provider>
    </>
  )
}
