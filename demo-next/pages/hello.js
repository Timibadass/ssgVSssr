import Head from 'next/head'

export default function Hello() {
  return (
    <div>
       <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='container'>
        <h1 className='title'>
         Hello <a href="https://en.wikipedia.org/wiki/Hello_World_(film)">World</a>
        </h1>
        <p className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem provident soluta, sit explicabo impedit nobis accusantium? Nihil beatae, accusamus modi assumenda, optio omnis aliquid nobis magnam facilis ipsam eum saepe!</p>
      </main>
      <style jsx> {`
      
      .container {
        margin: 0 auto;
        min-height: 100vh;
        max-width: 800px;
        text-align: center;
      }
      .title {
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
          "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
      }

      .subtitle {
        font-weight: 300;
        font-size: 22px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
      }
      `} </style>
    </div>
  )
}