import Router from 'next/router'
import Cookies from 'js-cookie'

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

export function cookies(req) {
  return req ? req.cookies : Cookies.get()
}

export function join(...args) {
  return args.filter(Boolean).join(' ')
}
