import getCollection from "./util";

export const findBookByIbsn = async isbn => {
    try {
        const collection = await getCollection("books")
        const book = await collection.findOne({isbn})
        return {
            props: { book: JSON.stringify(book) }
        }
    } catch (e) {
        console.log(e)
        return {
            props: { book: null }
        }
    }
}

