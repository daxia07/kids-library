import clientPromise from "./mongodb";

const getCollection = async (collectionName, dbName = "library") => {
    const client = await clientPromise
    const db = client.db(dbName)
    return db.collection(collectionName)
}

export default getCollection

