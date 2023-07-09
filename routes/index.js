const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'SportFit',
        message: 'Bienvenido a SportFit'
    });
});


module.exports = router;
