import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Carousel from 'react-bootstrap/Carousel'

const ProductPage = ({ pageContext }) => {
    console.log(pageContext.data)

    return (
        <Layout>
            <SEO title={pageContext.data.nom} />
            <div className="flex flex-col justify-center w-full">

                <h1 className="font-sans font-black text-3xl text-center mb-8 mt-3">{pageContext.data.nom}</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    <Carousel className="mx-3 mb-8" interval={null}>
                        {pageContext.data.images.map((image) => {
                            if (image){
                                return <Carousel.Item><img src={image.childImageSharp.fluid.src} className="w-full"/></Carousel.Item> //<Img className="h-full" fluid={image.childImageSharp.fluid} />
                            }
                            return null
                        })}
                    </Carousel>
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