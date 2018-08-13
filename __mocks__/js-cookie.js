class Cookies {
  constructor() {
    this.cookies = {}
  }

  get(key) {
    if (key) {
      return this.cookies[key] || null
    }

    return this.cookies
  }

  set(key, value) {
    this.cookies[key] = value.toString()
  }

  remove(key) {
    delete this.cookies[key]
  }
}

export default new Cookies()
