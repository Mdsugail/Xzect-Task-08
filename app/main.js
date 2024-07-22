import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
          <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
          <script src="custom.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
