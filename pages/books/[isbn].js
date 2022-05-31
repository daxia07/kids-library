import {getBookByIsbn} from "../../lib/fetchBook";
import BookCard from "../../components/BookCard";

const Books = ({ book }) => {
    const bookObj = JSON.parse(book)
    // refine data
    return (
        <BookCard {...bookObj} />
    )
}

export async function getServerSideProps(context) {
    const { params: {isbn} } = context
    return await getBookByIsbn(isbn);
}
export default Books
