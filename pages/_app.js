import App, { Container } from 'next/app'
import React from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'
import theme from '../src/theme'

injectGlobal({
  body: {
    boxSizing: 'border-box',
    margin: 0,
    fontFamily: theme.fonts.sans,
    backgroundColor: theme.colors.gray[0],
    cursor: 'default',
  },

  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },
})

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}

export default MyApp
