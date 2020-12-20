import React from 'react'
import { Link } from 'gatsby'

const simpleSubCategorie = (item) => {
    return (
        <div className="cursor-pointer hover:bg-white hover:bg-opacity-25 p-3">
            <Link href={item.slug} className="my-auto">{item.nom}</Link>
        </div>
    )
}

const dropdownSubCategories = (item) => {
    return (
        <div>
            <div className="p-3 cursor-default">
                {item.nom}
            </div>
            <div className="pl-5">
                {item.sousCategories.map(subCategorie => createSubCategories(subCategorie))}
            </div>
        </div>
    )
}

const createSubCategories = item => {
    if (item.sousCategories.length === 0) {
        return simpleSubCategorie(item)
    } else if (item.sousCategories.length > 0) {
        return dropdownSubCategories(item)
    }
}

const NavbarDeskDropdown = ({nom, slug, sousCategories}) => {
    return (
        <div className="relative group block h-full px-2">
            <div className="group-hover:text-yellow-400 cursor-pointer h-full flex text-lg">
                <div className="my-auto">{nom}</div>
            </div>
            <div className="absolute z-10 hidden group-hover:block">
                
                <div className="bg-gray-800 shadow-2xl">
                    <div className="flex flex-col w-max">
                        {sousCategories.map(item => {
                            console.log(item)
                            return createSubCategories(item)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarDeskDropdown