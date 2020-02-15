declare global {
  interface Array<T> {
    lastObject(): T
  }

  interface Date {
    getTimeInMinutes(): number
  }
}

Array.prototype.lastObject = function() {
  return this[this.length - 1]
}

Date.prototype.getTimeInMinutes = function(): number {
  const totalInMinutes = (this.getHours() * 60) + this.getMinutes()
  return totalInMinutes
}

export { }
