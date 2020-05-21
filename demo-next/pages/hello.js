import Head from 'next/head'

export default function Hello() {
  return (
    <div>
       <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
         Hello <a href="https://en.wikipedia.org/wiki/Hello_World_(film)">World</a>
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem provident soluta, sit explicabo impedit nobis accusantium? Nihil beatae, accusamus modi assumenda, optio omnis aliquid nobis magnam facilis ipsam eum saepe!</p>
      </main>
    </div>
  )
}