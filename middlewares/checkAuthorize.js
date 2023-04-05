const checkAuthorize = (req, res, next) => {

    console.log(req.body)
    
    if (req.body.surname && req.body.name) {
        const { surname, name } = req.body;
        if (surname === 'Wimbledon' && name === 'Dalida') {

            res.set('is_dalida', 'True');
        } else {
            res.set('is_dalida', 'False');
        }
        return res.status(200).send(`${name} ${surname}`)
    } else {
        return res.status(400).send('Error 400 - Bad Request')
    }
};

module.exports = checkAuthorize;