import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />

        <button className="snipcart-add-item"
            aria-label="add to cart"
            data-item-id="starry-night"
            data-item-price="79.9"
            data-item-url="/"
            data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
            data-item-image="/products-images/starry-night.jpg"
            data-item-name="The Starry Night"
            data-item-custom1-name="Frame color"
            data-item-custom1-options="Black|Brown|Gold">
            Add to cart
      </button>



    </Layout>
)

export default IndexPage
