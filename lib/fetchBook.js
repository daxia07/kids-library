import getCollection from "./util";

export const findBookByIbsn = async ibsn => {
    try {
        const collection = getCollection("books")
        const book = await collection.findOne({ibsn})
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

