const express = require('express')
const router = express.Router()
const { Pool, Client } = require('pg')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json()

router.get('/', (req, res, next) => {
    const client = new Client({
        user: 'paolo',
        host: 'localhost',
        database: 'mydb',
        password: 'ifyewnt7',
        port: 5432,
    })
    client.connect()
      
    const text = `SELECT * FROM students`
    client.query(text, (error, values) => {
        res.status(200).json(values.rows)
        client.end()
    })
    
})

router.post('/', jsonParser, (req, res, next) => {
    const client = new Client({
        user: 'paolo',
        host: 'localhost',
        database: 'mydb',
        password: 'ifyewnt7',
        port: 5432,
    })
    client.connect()

    const text = `INSERT INTO students(name, surname) values($1, $2) returning *`
    const values = [req.body.name, req.body.surname]
    client.query(text, values, (err, res) => {
        if (err) {
        console.log(err.stack)
        } else {
        console.log(res.rows[0])
        }
    })
    
})

router.get('/:studentID', (req, res, next) => {
    const id = req.params.studentID
    if (id === 'pippo') {
        res.status(200).json({
            message: "Ciao pippo"
        })
    } else {
         res.status(200).json({
             message: "Non sei pippo"
        })
    }
})

router.patch('/:studentID', (req, res, next) => {
    res.status(200).json({
        message: "updated student"
    })
})

router.delete('/:studentID', (req, res, next) => {
    res.status(200).json({
        message: "deleted student"
    })
})

module.exports = router