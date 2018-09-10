import ReactGA from 'react-ga'

export function initGA() {
  ReactGA.initialize('UA-125044578-1')
}

export function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search })
  ReactGA.pageview(window.location.pathname + window.location.search)
}