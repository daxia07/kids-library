import {MongoClient} from "mongodb";

const uri = process.env.MONGODB_URL

let client
let clientPromise

if (!process.env.MONGODB_URL) {
    throw new Error('Please add your Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
    const {_mongoClientPromise} = global;
    if (!_mongoClientPromise) {
        client = new MongoClient(uri)
        global._mongoClientPromise = client.connect()
    }
    clientPromise = _mongoClientPromise
} else {
    client = new MongoClient(uri)
    clientPromise = client.connect()
}

export default clientPromise