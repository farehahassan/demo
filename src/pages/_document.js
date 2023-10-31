import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '@/components/navbar'


export default function Document() {
  return (
    <Html lang="en">
      <Head /> 
      <Navbar/>
      <Main/>
     
      <body>
        
        <NextScript />
      </body>
    </Html>
  )
}
