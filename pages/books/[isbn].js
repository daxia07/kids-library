import { useRouter } from 'next/router'
import Link from 'next/link'
import getCollection from "../../lib/util";

const Code = (p) => <code {...p} />

const Books = ({ book }) => {
    const { asPath, route, query } = useRouter()
    return (
        <div>
            <h1>Path: {asPath}</h1>
            <hr/>
            <p>This page is rendered by <Code>{`pages${route}.js`}</Code></p>
            <p>This query <Code>isbn</Code> for this page is: {' '}
                <Code>{JSON.stringify(query.isbn)}</Code>
            </p>
            <Link href="/">
                <a> Back Home</a>
            </Link>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { params: {isbn} } = context
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
export default Books
