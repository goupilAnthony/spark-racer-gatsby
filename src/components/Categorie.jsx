import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const CategoriePage = ({ nom, slug }) => (
    <Layout>
        <SEO title={nom} />
        <h1>{nom}</h1>
    </Layout>
)

export default CategoriePage
