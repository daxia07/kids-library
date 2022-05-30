import styles from '../styles/Home.module.css'
import clientPromise from "../lib/mongodb";

export default function Home( { book }) {
  return (
    <div className={styles.container}>
      {book ? (
          <h2 className="subtitle">You are connected to MongoDB</h2>
      ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
            for instructions.
          </h2>
      )}
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
    // console.log(book)
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

