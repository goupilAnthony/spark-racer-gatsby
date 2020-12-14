import React from 'react'

const NavbarDeskDropdown = () => {
    return (
        <div className="relative group block h-full">
            <div className="group-hover:text-yellow-400 cursor-pointer h-full flex text-lg">
                <div className="my-auto">sfqzefrgfrsgq</div>
            </div>
            <div className="absolute z-10 hidden group-hover:block">
                
                <div className="bg-gray-800 shadow-2xl">
                    <div className="flex flex-col w-max">
                        <div className="cursor-pointer hover:bg-white hover:bg-opacity-25 p-3">item efdthdthdt 1</div>
                        <div className="cursor-pointer hover:bg-white hover:bg-opacity-25 p-3">item 2</div>
                        <div className="cursor-pointer hover:bg-white hover:bg-opacity-25 p-3">item 3</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarDeskDropdown