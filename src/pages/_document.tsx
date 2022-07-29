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
                    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
                        integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
                        crossOrigin=""
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}