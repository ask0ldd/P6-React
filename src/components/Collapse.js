import '../styles/Collapse.css'
import { useState } from 'react'
import arrowUp from '../assets/collapse-up.svg'
import arrowDown from '../assets/collapse-down.svg'

const Collapse = (props) => {

    const [bodyDisplay, updateBodyDisplay] = useState(false)

    return (
    <article className="collapse">
        <div onClick={()=>updateBodyDisplay(!bodyDisplay)} className="collapse__heading" style={{fontSize:props.fontsize}}>
            <div>{props.heading}</div><img src={bodyDisplay === true ? arrowUp : arrowDown} alt="arrow" />
        </div>
        {bodyDisplay === true &&
        <div className="collapse__body" style={{fontSize:props.fontsize}}>
            {props.body}
        </div>}
    </article>
    )
}

export default Collapse

/* onClick meilleur avec css*/