import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default function MyDocument() {
    return (
        <Html lang="ko">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

MyDocument.getInitialProps = async(
    ctx: DocumentContext
): Promise<DocumentInitialProps> => {
    const sheet = new ServerStyleSheet()
    const originialRenderPage = ctx.renderPage

    try {
        ctx.renderPage = () => originialRenderPage({
            enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        })

        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
            )
        }
    } finally {
        sheet.seal();
    }
}