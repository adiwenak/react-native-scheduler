
declare global {
    interface Date {
        getTimeInMinutes(): number
    }
}

Date.prototype.getTimeInMinutes = function(): number {
    const totalInMinutes = (this.getHours() * 60) + this.getMinutes()
    return totalInMinutes
}

export {}
