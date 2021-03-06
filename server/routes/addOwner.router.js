const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();


//POST route to add new pet owner to database
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('new owner', req.body);

    const firstname = req.body.first_name;
    const lastname = req.body.last_name;
    const phone = req.body.phone;
    const email = req.body.email;
    const address = req.body.address;
    const vetId = req.body.vet_id;

    const queryText = `INSERT INTO pet_owners (first_name, last_name, phone, email, address, vet_id) 
                        VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;`;
    pool.query(queryText, [firstname, lastname, phone, email, address, vetId])
        .then((results) => {
            console.log('new owner id', results.rows);
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('error adding new owner:', error);
            res.sendStatus(500);
        });
});//end post route

module.exports = router;