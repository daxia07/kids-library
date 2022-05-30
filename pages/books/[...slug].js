import { useRouter } from 'next/router'
import Link from 'next/link'
import clientPromise from "../../lib/mongodb";

const Code = (p) => <code {...p} />

const Books = ({ book }) => {
    const { asPath, route, query } = useRouter()
    return (
        <div>
            <h1>Path: {asPath}</h1>
            <hr/>
            <p>This page is rendered by <Code>{`pages${route}.js`}</Code></p>
            <p>This query <Code>slug</Code> for this page is: {' '}
                <Code>{JSON.stringify(query.slug)}</Code>
            </p>
            <Link href="/">
                <a> Back Home</a>
            </Link>
        </div>
    )
}

export async function getServerSideProps(context) {
    try {
        const client = await clientPromise
        const db = client.db("library")
        const collection = db.collection('books')
        const query = {}
        const book = await collection.findOne(query)
        console.log(book)
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
export default Books
