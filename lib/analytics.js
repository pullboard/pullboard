import ReactGA from 'react-ga'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export function initGA() {
  ReactGA.initialize(publicRuntimeConfig.gaTrackingId)
}

export function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search })
  ReactGA.pageview(window.location.pathname + window.location.search)
}
