import '../styles/Collapse.css'
import { useState } from 'react'
import arrowUp from '../assets/collapse-up.svg'
import arrowDown from '../assets/collapse-down.svg'
import { useLocation } from 'react-router-dom'


const Collapse = (props) => {

    const [bodyDisplay, updateBodyDisplay] = useState(false)

    //check if uselocation contains hebergement or apropos and assign expected fontsize
    const fontSize = useLocation().pathname.includes("hebergement") ? ['rental-heading', 'rental-body'] : ['apropos-heading', 'apropos-body']

    return (
    <article className="collapse">
        <div onClick={()=>updateBodyDisplay(!bodyDisplay)} className={'collapse__heading '+fontSize[0]}>
            <div>{props.heading}</div><img src={bodyDisplay === true ? arrowUp : arrowDown} alt="arrow" />
        </div>
        {bodyDisplay === true &&
        <div className={'collapse__body '+fontSize[1]} dangerouslySetInnerHTML={{__html: props.body}} />}
    </article>
    )
}

export default Collapse