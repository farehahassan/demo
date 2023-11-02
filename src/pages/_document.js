import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '@/components/navbar'
import Hearder from '@/components/header'
import { Footer } from '@/components/footer'
import { Container } from 'container'

export default function Document() {
  return (
    <Html lang="en">
      <title>Fareha Hassan</title>
      <Head /> 
      <Navbar/>
      {/* <Hearder/> */}
      <Main/>
     
      <body>
        
        <NextScript />
      </body>
      <Footer/>
    </Html>
  )
}
