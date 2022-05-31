import Link from '../components/Link'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from "@mui/material/Container";
import Copyright from "../components/Copyright";

export default function About() {
    return (
        <Container maxWidth="sm">
            <Box sx={{ my : 4}}>
                <Typography variant="h4" component="h1" gutterBottom>
                    About Page
                </Typography>
                <Button variant="contained" component={Link} noLinkStyle href="/">
                    Back Home
                </Button>
                <Copyright/>
            </Box>
        </Container>
    )
}