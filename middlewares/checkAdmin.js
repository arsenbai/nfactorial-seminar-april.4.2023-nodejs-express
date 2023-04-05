const checkAdmin = (req, res) => {
    // console.log(req.headers);
    if (req.headers['is_dalida'] === 'True') {
        res.status(200).send("Hello, Boss.")
    } else {
        res.status(403).send(`Error 403 - Forbidden`)
    }
}

module.exports = checkAdmin;