import App, { Container } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

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
        <ThemeProvider theme={{ main: 'blue' }}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}

export default MyApp
