import React from 'react'
import { Link } from "gatsby"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const SimpleCategorie = ({ nom, slug }) => {
    return (
        <div key={slug} className="p-3 pl-5 hover:bg-white hover:bg-opacity-25 w-auto cursor-pointer">
            <Link href={slug} >{nom}</Link>
        </div>
    )
}

const AccordionCategorie = ({ nom, slug, sousCategories }) => {
    
    let id = `subs-${slug}`

    const handleClick = (e) => {
        document.querySelector(`#${id}`).classList.toggle("hidden");
        document.querySelector(`#${id}`).classList.toggle("h-0");
    }

    return (
        <div>
            <div key={slug} className="p-3 pl-5 hover:bg-white hover:bg-opacity-25 w-auto cursor-pointer" onClick={handleClick}>
                {nom}
            </div>
            <div id={id} className="p-3 pl-5 w-auto hidden transition-height duration-500 ease-out h-0">
                {sousCategories.map((item) => {
                    return constructDropdown(item)
                })}
            </div>
        </div>
    )
}

const constructDropdown = (item) => {
    if (item.sousCategories.length === 0) {
        return SimpleCategorie(item)
    } else if (item.sousCategories.length > 0) {
        return AccordionCategorie(item)
    }
}

const NavbarMobile = ({ categories }) => {
    return (
        <div className="flex flex-col bg-black bg-opacity-90 text-white z-10 lg:hidden hidden transition-height duration-500 ease-out h-0" id="mobile-nav">
            {categories.map((item) => {
                return constructDropdown(item)
            })}
            <div className="p-3 pl-5 hover:bg-white hover:bg-opacity-25 w-auto cursor-pointer">
                <Link href="account">Mon compte</Link>
            </div>
            <div className="p-3 pl-5 hover:bg-white hover:bg-opacity-25 w-auto cursor-pointer">
                <Link href="#/cart">Mon panier</Link>
            </div>
        </div>
    )
}

export default NavbarMobile



