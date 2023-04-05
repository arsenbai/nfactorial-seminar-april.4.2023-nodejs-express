const checkDateFormat = (req, res, next) => {
    if (req.headers['format'] === "YYYY.MM.DD") {
        const date = new Date();

        const day = JSON.stringify(date.getDate());
        const month = JSON.stringify(date.getMonth() + 1);
        const year = JSON.stringify(date.getFullYear());

        return res.status(200).send(`Current date: ${year}.${(month.length === 2 ? month : '0' + month)}.${(day.length === 2 ? day : '0' + day)}`)
    }
    return res.status(500).send('Error');
};

module.exports = checkDateFormat;