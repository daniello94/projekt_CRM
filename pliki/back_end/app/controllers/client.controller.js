const Client = require('../modules/Client');


function clientAdd(data, cb) {
    let newClient = new Client(data);

    newClient.save(function (err, client) {
        if (err) {
            cb(err)
        } else {
            cb(null, client)
        }
    })
};

function clientUpodate(id, data, cb) {
    Client.updateOne({ _id: id }, data, function (err, client) {
        if (err) {
            cb(err)
        } else {
            cb(null, client)
        }
    })
};

function clientList(cb) {
    Client.find().lean().exec(function (err, clients) {
        if (err) {
            cb(err)
        } else {
            cb(null, clients)
        }
    })
};
function clientGet(id,cb){
    Client.findById(id).exec(function(err,client){
        if(err){
            cb(err)
        }else{
            cb(null,client)
        }
    })
};

function clientDelate(id,cb){
    Client.deleteOne({_id:id},function(err,client){
        if(err){
            cb(err)
        }else{
            cb(null,client)
        }
    })
}

module.exports = {
    list: clientList,
    get:clientGet,
    add: clientAdd,
    upodate: clientUpodate,
    delete:clientDelate
};