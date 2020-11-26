module.exports = {
    "app": {
        "name": "Big Commerce",
        "host": "127.0.0.1",
        "port": 3000,
        "debug": true,
        "logLevel": "debug",
        "jwtAlgo": "HS512",
        "jwtKey": "node-project",
    },
    "db": {
        "mongo": {
            "dbName": 'db_big_commerce',
            "host": 'localhost',
            "port": 27017,
            "username": 'root',
            "password": 'root',
            "auth": false,
            "mongoose": {
                "useMongoClient": true,
                "autoIndex": true, // Don't build indexes
                "poolSize": 10, // Maintain up to 10 socket connections
                // If not connected, return errors immediately rather than waiting for reconnect
                "bufferMaxEntries": 0
            },
        },
    },
    "pagination": {
        "page": 1,
        "limit": 10
    }
}