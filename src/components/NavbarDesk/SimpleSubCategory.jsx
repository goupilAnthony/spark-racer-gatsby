import React from 'react'
import { Link } from 'gatsby'

const simpleSubCategory = ({ item }) => {
    return (
        <div className="cursor-pointer hover:bg-white hover:bg-opacity-25 p-3">
            <Link href={item.slug} className="my-auto">{item.nom}</Link>
        </div>
    )
}

export default simpleSubCategory