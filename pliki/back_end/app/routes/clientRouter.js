const express = require("express");
const router = express.Router();
const client = require('../controllers/client.controller');

router.post('/all', function (req, res) {
    client.list(function (err, clients) {
        if (err) res.send(err)
        res.render('/', { clients })
    })
});

router.get("/add", function (req, res) {
    res.send('nowy klijent')
});
router.post('/add', function (req, res) {
    client.add(req.body, function (err, client) {
        if (err) res.send(err)
        res.send(client)
    })
});

router.get('/upodate/:id', function (req, res) {
    client.get(req.params.id, function (err, client) {
        if (err) res.send(err)
        res.send('Zaktulaizowano', client)
    })
});

router.get('/:id',function(req,res){
    client.get(req.params.id,function(err,client){
        if(err) res.send(err)
        res.send(client)
    })
});

router.get('/delete/:id',function(req,res){
    client.delete(req.params.id,function(err, client){
        res.send('usnieto klijeta')
    })
});




module.exports = router;