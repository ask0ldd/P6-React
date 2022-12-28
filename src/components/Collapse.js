import '../styles/Collapse.css'
import { useState } from 'react'

const Collapse = (props) => {

    const [bodyDisplay, updateBodyDisplay] = useState(false)

    return (
    <article className="collapse">
        <div onClick={()=>updateBodyDisplay(!bodyDisplay)} className="collapse__heading">
            {props.heading}
        </div>
        {bodyDisplay === true &&
        <div className="collapse__body">
            {props.body}
        </div>}
    </article>
    )
}

export default Collapse

/* onClick meilleur avec css*/