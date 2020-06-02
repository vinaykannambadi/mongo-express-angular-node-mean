const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://test:test@123@cluster-0-my-first-app-ft1tj.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(uri);

await client.connect();
await listDatabases(client);











//https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database