import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NewPage = () => (
  <Layout>
    <SEO title="My New Page" />
    <h1>Hello Gatsby</h1>
    <p>This is my first Gatsby Page</p>
    <button>
      <Link to='/'>Home</Link>
    </button>
  </Layout>
)

export default NewPage
