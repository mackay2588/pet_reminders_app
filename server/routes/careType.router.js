const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {

    const queryText = `SELECT * FROM care_type;`;

    pool.query(queryText)
        .then((results) => {
            console.log('got care types', results.rows);
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('error getting care types:', error);
            res.sendStatus(500);
        });

});

module.exports = router;