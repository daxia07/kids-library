import NextDocument, {Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends NextDocument {
    static getInitialProps(ctx) {
        return NextDocument.getInitialProps(ctx)
    }

    render() {
        const meta = {
            title: "Library for kids",
            description: "Easy access to best picture books"
        }
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="robots" content="follow, index" />
                    <meta name="description" content={meta.description} />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}