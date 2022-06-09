const express = require("express");
const router = express.Router();
const client = require('../controllers/client.controller');
const auth =require('../api/middlewares/auth')

router.post('/all', function (req, res) {
    client.list(function (err, clients) {
        if (err) {
            res.status(404);
            res.json({
                error: 'client not found'
            })
        } else {
            res.json(clients)
        }
    })
});

router.post('/add', function (req, res) {
    console.log(req.body);
    client.add(req.body, function (err, client) {
        if (err) {
            res.status(404);
            res.json({
                error: "Client not created"
            })
        } else {
            res.json(client)
        }
    })
});

router.put('/upodate/:id', function (req, res) {
    client.upodate(req.params.id, req.body, function (err, data) {
        if (err) {
            res.status(404);
            res.json({
                error: "client is not found"
            })
        } else {
            res.json(data)
        }
    })
});

router.get('/:id', function (req, res) {
    client.get(req.params.id, function (err, client) {
        if (err) {
            res.status(404);
            res.json({
                error: 'Client not found'
            })
        } else {
            res.json(client)
        }
    })
});

router.delete('/delete/:id',function(req,res){
    client.delete(req.params.id,function(err,data){
        if(err){
            res.status(404);
            res.json({
                error:"Client not found"
            })
        }else{
            res.json(data)
        }
    })
});

module.exports = router;