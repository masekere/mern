module.exports = (tz) => {
    const time = new Date("2012-05-04 08:00:00").toLocaleString(
        "en-us",
        {
            timeZone: tz,
            timeStyle: "medium",
            hourCycle: "h24",
        },
    )
    return time
}