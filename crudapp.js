const express = require('express')
const app = express()
const cors = require('cors')
const functions = require('./crudb')
const bodyp = require('body-parser');
app.use(bodyp.json());
app.use(bodyp.urlencoded({ extended: true }));

app.use(cors())

app.get('/create', function (req, res)
{   const con =functions.getconnection();
    functions.createtable(con);
    functions.endconnection(con)
    res.end();

})

app.post('/insert', function (req, res)
{
    const con =functions.getconnection();
    var id = req.body.id;
    var name = req.body.name;
    var email = req.body.email;
    functions.addemployee(con, id, name, email);
    functions.endconnection(con)
    res.end();
})
app.post('/update', function (req, res)
{
    const con =functions.getconnection();
    var id = req.body.id;
    var name = req.body.name;
    var email = req.body.email;
    functions.updateemployee(con, id, name, email);
    functions.endconnection(con)
    res.end();
})
app.post('/delete', function (req, res)
{
    const con =functions.getconnection();
    var id = req.body.id;
    functions.delemployee(con, id);
    functions.endconnection(con)
    res.end();
})
app.get('/all', function (req, res)
{
    const con =functions.getconnection();
    functions.showall(con);
    functions.endconnection(con)
    res.end();
})

app.listen(8080)