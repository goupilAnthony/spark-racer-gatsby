import React from "react"
//import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Slider from "react-slick"

const ProductPage = ({ pageContext }) => {
    console.log(pageContext.data)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    return (
        <Layout>
            <SEO title={pageContext.data.nom} />
            <div className="flex flex-col justify-center w-full">

                <h1 className="font-sans font-black text-3xl text-center mb-8 mt-3">{pageContext.data.nom}</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    <Slider className="mx-3 mb-8" {...settings}>
                        {pageContext.data.images.map((image) => {
                            if (image){
                                return <img src={image.childImageSharp.fluid.src} className="w-full"/>//<Img className="h-full" fluid={image.childImageSharp.fluid} />
                            }
                            return null
                        })}
                    </Slider>
                    <div className="mx-5">
                        <div className="my-5">{pageContext.data.description}</div>
                        {pageContext.data.options.map((option) => {
                            console.log(option)
                            return (
                                <div className="grid auto-rows-auto">
                                    <div>{option.option}</div>
                                    {option.valeur.map( valeur => {
                                        return (
                                            <div>{valeur}</div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                        <div>{pageContext.data.prix}€</div>
                    </div>

                </div>
                
            </div>
            
        </Layout>
    )
}

export default ProductPage