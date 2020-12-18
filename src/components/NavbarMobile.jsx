import React from 'react'
import { Link } from "gatsby"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const SimpleCategorie = ({ name, slug }) => {
    return (
        <div className="p-3 hover:bg-white hover:bg-opacity-25 w-auto">
            {name}
        </div>
    )
}

const AccordionCategorie = ({ name, slug, subCategories }) => {

    let id = `subs-${slug}`
    return (
        <div>
            <div className="p-3 hover:bg-white hover:bg-opacity-25 w-auto">
                {name}
            </div>
            <div id={id} className="p-3 hover:bg-white hover:bg-opacity-25 w-auto hidden transition-height duration-500 ease-out h-0">
                {subCategories}
            </div>
        </div>
    )
}

const NavbarMobile = ({ categories }) => {
    return (
        <div className="flex flex-col bg-black bg-opacity-90 text-white z-10 lg:hidden hidden transition-height duration-500 ease-out h-0" id="mobile-nav">
                <Link to="/" className="p-3 hover:bg-white hover:bg-opacity-25 w-auto">zefzefq</Link>
                <Link to="/" className="p-3 hover:bg-white hover:bg-opacity-25 w-auto">zefzefq</Link>
                <Link to="/" className="p-3 hover:bg-white hover:bg-opacity-25 w-auto">zefzefq</Link>
                <Link to="/" className="p-3 hover:bg-white hover:bg-opacity-25 w-auto">zefzefq</Link>
            </div>
    )
}

export default NavbarMobile



