import NextDocument, {Html, Head, Main, NextScript } from 'next/document'
import createEmotionCache from "../components/createEmotionCache";
import createEmotionServer from '@emotion/server/create-instance';
import theme from "../components/theme";

export default class MyDocument extends NextDocument {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage
        const cache = createEmotionCache()
        const { extractCriticalToChunks } = createEmotionServer(cache)

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) =>
                    function EnhanceApp(props) {
                        return <App emotionCache={cache} {...props} />
                    },
            })
        const initialProps = await NextDocument.getInitialProps(ctx)
        const emotionStyles = extractCriticalToChunks(initialProps.html)
        const emotionStyleTags = emotionStyles.styles.map( style =>
            <style
                data-emotion={`${style.key} ${style.ids.join(' ')}`}
                key={style.key}
                dangerouslySetInnerHTML={{__html: style.css}}
            />
        )

        return {
            ...initialProps,
            emotionStyleTags,
        }
    }

    render() {
        const meta = {
            title: "Library for kids",
            description: "Easy access to best picture books"
        }
        const { emotionStyleTags } = this.props
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="robots" content="follow, index" />
                    <meta name="description" content={meta.description} />
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    { emotionStyleTags }
                </Head>

                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}
