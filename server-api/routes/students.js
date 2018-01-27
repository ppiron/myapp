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
        password: '1234567',
        port: 5432,
    })
    client.connect()
      
    const text = `SELECT * FROM students`
    client.query(text, (error, response) => {
        res.status(200).json(response.rows)
        client.end()
    })
    
})

router.post('/', jsonParser, (req, res, next) => {
    const client = new Client({
        user: 'paolo',
        host: 'localhost',
        database: 'mydb',
        password: '1234567',
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
    const client = new Client({
        user: 'paolo',
        host: 'localhost',
        database: 'mydb',
        password: '1234567',
        port: 5432,
    })
    client.connect()

    const text = `SELECT * FROM students WHERE id = $1`
    const values = [id]
    client.query(text, values, (error, response) => {
        if (error) {
        console.log(error.stack)
        } else {
        res.status(200).json(response.rows[0])
        }
        client.end()
    })
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
