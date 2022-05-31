import {useRouter} from 'next/router'
import Link from 'next/link'
import {getBookByIsbn} from "../../lib/fetchBook";

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
    return await getBookByIsbn(isbn);
}
export default Books
