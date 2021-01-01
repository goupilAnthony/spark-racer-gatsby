import React, { useState} from 'react'
import SimpleCategorie from './SimpleCategorie'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

const AccordionCategorie = ({ nom, slug, sousCategories }) => {
    
    let id = `subs-${slug}-mobile`
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
            <div key={slug} className="p-3 pl-5 hover:bg-white hover:bg-opacity-25 w-auto cursor-pointer focus:bg-white focus:bg-opacity-25"
                onClick={handleClick}
                onKeyPress={handleKeyPress}
                role="menuitem"
                tabIndex={0}
            >
                {nom}  {expanded === false ? <ExpandMoreIcon/> : <ExpandLessIcon />}
            </div>
            <div id={id} className="p-3 pl-5 hidden transition-height duration-500 ease-out h-0">
                {sousCategories.map((item) => (
                    item.sousCategories.length === 0 ? <SimpleCategorie item={item} /> : <AccordionCategorie nom={item.nom} slug={item.slug} sousCategories={item.sousCategories} />
                ))}
            </div>
        </div>
    )
}

export default AccordionCategorie