import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <link rel="preconnect" href="https://app.snipcart.com"/>
      <link rel="preconnect" href="https://cdn.snipcart.com"/>
      <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.27/default/snipcart.css" />
      

      <p>seifuhz</p>

      <button className="snipcart-add-item"
        data-item-id="starry-night"
        data-item-price="79.99"
        data-item-url="/"
        data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
        data-item-image="/products-images/starry-night.jpg"
        data-item-name="The Starry Night"
        data-item-custom1-name="Frame color"
        data-item-custom1-options="Black|Brown|Gold">
        Add to cart
      </button>


    <script async src="https://cdn.snipcart.com/themes/v3.0.27/default/snipcart.js"></script>
    <div hidden id="snipcart" data-api-key={`${process.env.SNIPCART_API_KEY}`}></div>
  </Layout>
)

export default IndexPage
