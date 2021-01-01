import React from 'react'
import SimpleSubCategory from './SimpleSubCategory'
import DropdownSubCategories from './DropdownSubCategory'


const createSubCategories = item => {
    if (item.sousCategories.length === 0) {
        return <SimpleSubCategory item={item} />
    } else if (item.sousCategories.length > 0) {
        return <DropdownSubCategories item={item} />
    }
}

const NavbarDeskTopCategory = ({nom, slug, sousCategories}) => {
    return (
        <div className="relative group block h-full px-2">
            <div className="group-hover:text-yellow-400 cursor-pointer h-full flex text-lg">
                <div className="my-auto">{nom}</div>
            </div>
            <div className="absolute z-10 hidden group-hover:block" >
                
                <div className="bg-gray-800 shadow-2xl">
                    <div className="flex flex-col w-max overflow-y-scroll" style={{maxHeight:`70vh`}}>
                        {sousCategories.map(item => {
                            return createSubCategories(item)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarDeskTopCategory