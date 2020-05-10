import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default () => (
  <Layout>
    Hello world!
    <Link to="/blog/">Blog Page</Link>
    <div className="container">
      <div className="row">
        <div className="col-4">Hello</div>
        <div className="col-4">Hello</div>
        <div className="col-4">Hello</div>
      </div>
    </div>
  </Layout>
)
