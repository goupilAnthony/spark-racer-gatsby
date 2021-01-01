import React from 'react'
import { Link } from "gatsby"


const SimpleCategorie = ({ item }) => {
    return (
        <div key={item.slug} className="p-3 pl-5 hover:bg-white hover:bg-opacity-25 w-auto cursor-pointer"
            role="menuitem"
            tabIndex={0}
        >
            <Link href={item.slug} >{item.nom}</Link>
        </div>
    )
}

export default SimpleCategorie