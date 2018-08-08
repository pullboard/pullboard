import Router from 'next/router'

export function redirect(target, res) {
  if (res) {
    // Server-side
    res.writeHead(302, { Location: target })
    res.end()
  } else {
    // Client-side
    Router.replace(target)
  }
}
