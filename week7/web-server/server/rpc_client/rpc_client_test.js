var client = require('./rpc_client');

client.add(21, 2, function(response) {
    console.assert(response == 3);
});