import React from 'react'
import { Link } from "gatsby"
import SimpleCategorie from './SimpleCategorie'
import AccordionCategorie from './AccordionCategorie'


const NavbarMobile = ({ categories }) => {
    return (
        <div className="flex flex-col bg-black bg-opacity-90 text-white z-10 lg:hidden hidden transition-height duration-500 ease-out h-0 overflow-y-scroll" id="mobile-nav">
            {categories.map((item, index) => (
                item.sousCategories.length === 0 ? <SimpleCategorie item={item} key={index}/> : <AccordionCategorie nom={item.nom} slug={item.slug} sousCategories={item.sousCategories} key={index}/>
            ))}
            <div className="p-3 pl-5 hover:bg-white hover:bg-opacity-25 w-auto cursor-pointer">
                <Link href="account" className="hover:text-white hover:no-underline">Mon compte</Link>
            </div>
            <div className="p-3 pl-5 hover:bg-white hover:bg-opacity-25 w-auto cursor-pointer">
                <Link href="#/cart" className="hover:text-white hover:no-underline">Mon panier</Link>
            </div>
        </div>
    )
}

export default NavbarMobile



