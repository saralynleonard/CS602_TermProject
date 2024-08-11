function formatLongDate(date) {
    const options = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    }
    return new Intl.DateTimeFormat('en-US', options).format(date)
}
module.exports = formatLongDate
