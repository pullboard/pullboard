class Cookies {
  constructor() {
    this.cookies = {}
  }

  get(key) {
    return this.cookies[key] || null
  }

  set(key, value) {
    this.cookies[key] = value.toString()
  }

  remove(key) {
    delete this.cookies[key]
  }
}

export default new Cookies()
