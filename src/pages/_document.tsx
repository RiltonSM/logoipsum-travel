import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render(): JSX.Element {
        return(
            <Html>
                <Head>
                    <link href="http://fonts.cdnfonts.com/css/circular-std" rel="stylesheet"/>
                    <link href="http://fonts.cdnfonts.com/css/circular-book" rel="stylesheet"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}