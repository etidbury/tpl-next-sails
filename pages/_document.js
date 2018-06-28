import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    
    render() {
        return (
            <html>
            <Head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
                <meta http-equiv="x-ua-compatible" content="IE=edge" />
                <meta name="referrer" content="always" />
                <meta name="robots" content="noindex, nofollow" />

                <link href="/static/humans.txt" type="text/plain" rel="author" />
                <link href="/static/favicon.png" rel="shortcut icon" type="image/png" />
               
                <meta name="keywords" content="" />
                <meta name="description" content="" />
                
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_gb" />

                <meta property="og:url" content="" />
	            <meta property="og:title" content="" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="" />
                <meta property="og:see_also" content="https://www.instagram.com/" />

                
                <title></title>

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </html>
        )
    }
}
