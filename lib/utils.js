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

const MS_PER_MINUTE = 60000
const MS_PER_HOUR = 3600000
const MS_PER_DAY = 86400000
const MS_PER_YEAR = 31536000000

export function formatTimeDifference(date, baseDate = new Date()) {
  const elapsed = Math.abs(baseDate.getTime() - date.getTime())

  if (elapsed < MS_PER_MINUTE) {
    return 'Just now'
  } else if (elapsed < MS_PER_HOUR) {
    return Math.round(elapsed / MS_PER_MINUTE) + 'm'
  } else if (elapsed < MS_PER_DAY) {
    return Math.round(elapsed / MS_PER_HOUR) + 'h'
  } else if (elapsed < MS_PER_YEAR) {
    return Math.round(elapsed / MS_PER_DAY) + 'd'
  } else {
    return Math.round(elapsed / MS_PER_YEAR) + 'y'
  }
}
