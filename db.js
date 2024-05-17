let mongoose = require('mongoose');
let env = require('dotenv').config()

/* const userName = 'found in .env file
const passWord = found in .env fileE */
const dataBaseName = env.parsed.dbName
const userName = env.parsed.user
const passWord = env.parsed.pass

let key = `mongodb+srv://${userName}:${passWord}@cluster0.zbjm4ng.mongodb.net/${dataBaseName}?retryWrites=true&w=majority&appName=Cluster0`


/* connect */
class Database {
    constructor() {
       
        this._connect();
    }

    _connect() {
        mongoose
            .connect(key)
            .then(() => {
                console.log('Database connection successful');
                
            })
            .catch((err) => {
                console.log(err)
                console.error('Database connection error');
            });
    }
}

module.exports = new Database();