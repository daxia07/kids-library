import clientPromise from "../lib/mongodb";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../components/Link"

export default function Home( { book }) {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Home page
        </Typography>
        <Link href="/about" color="secondary">
          Go to about page
        </Link>
      </Box>
    </Container>
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

