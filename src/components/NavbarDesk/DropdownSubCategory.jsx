import React, { useState} from 'react'
import SimpleSubCategory from './SimpleSubCategory'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'


const DropdownSubCategories = ({ item }) => {
    let id = `subs-${item.slug}`
    const [expanded, setExpanded] = useState(false)

    const handleClick = (e) => {
        document.querySelector(`#${id}`).classList.toggle("hidden");
        document.querySelector(`#${id}`).classList.toggle("h-0");
        setExpanded(!expanded)
    }

    const handleKeyPress = (e) => {
        console.log(e.target)
        handleClick(e)
    }

    return (
        <div>
            <div className="p-3 hover:bg-white hover:bg-opacity-25 w-auto cursor-pointer"
                onClick={handleClick}
                onKeyPress={handleKeyPress}
                role="menuitem"
                tabIndex={0}
            >
                {item.nom} {expanded === false ? <ExpandMoreIcon/> : <ExpandLessIcon />}
            </div>
            <div id={id} className="pl-5 hidden transition-height duration-500 ease-out h-0" style={{borderLeft:`5px solid yellow`}}>
                {item.sousCategories.map(subCat => (
                        subCat.sousCategories.length === 0 ? <SimpleSubCategory item={subCat} /> : <DropdownSubCategories item={subCat} />
                    )
                )}
            </div>
        </div>
    )
}

export default DropdownSubCategories