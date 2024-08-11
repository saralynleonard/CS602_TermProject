function formatLongDate(date) {
    const options = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    }
    return new Intl.DateTimeFormat('en-US', options).format(date)
}
function formatShortDate(date) {
    const year = date.getFullYear()
    const month = padNumber(date.getMonth() +1)
    const day = padNumber(date.getDate())

    return `${year}-${month}-${day}`
}

function padNumber(number) {
    return number.toString().padStart(2, '0')
}

module.exports = {
    formatLongDate,
    formatShortDate
}
